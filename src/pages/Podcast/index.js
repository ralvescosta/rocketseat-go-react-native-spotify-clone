import React, { Component } from "react";

//Styled Components
import {
  Container,
  EpisodeList,
  PodcastDetails,
  Background,
  BackButton,
  Cover,
  PodcastTitle,
  PlayButtom,
  PlayButtonText,
  Episode,
  Title,
  Author
} from "./styles";

/**
 * REDUX
 */
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//PlayerActions
import PlayerActions from "../../store/ducks/player";

//Icons
import Icon from "react-native-vector-icons/MaterialIcons";

class Podcasts extends Component {
  handleBack = () => {
    const { navigation } = this.props;

    navigation.goBack();
  };

  handlePlay = episodeId => {
    const { setPodcastRequest, navigation } = this.props;

    const podecast = navigation.getParam("podcast");
    setPodcastRequest(podecast, episodeId);
  };

  render() {
    const { navigation, currentEpisode } = this.props;
    const podcast = navigation.getParam("podcast");
    return (
      <Container>
        <EpisodeList
          ListHeaderComponent={() => (
            <PodcastDetails>
              <Background source={{ uri: podcast.cover }} blurRadius={5} />

              <BackButton onPress={this.handleBack}>
                <Icon name="arrow-back" size={24} color="#fff" />
              </BackButton>

              <Cover source={{ uri: podcast.cover }} />
              <PodcastTitle>{podcast.title}</PodcastTitle>

              <PlayButtom onPress={() => this.handlePlay()}>
                <PlayButtonText>REPRODUZIR</PlayButtonText>
              </PlayButtom>
            </PodcastDetails>
          )}
          data={podcast.tracks}
          keyExtractor={episode => String(episode.id)}
          renderItem={({ item: episode }) => (
            <Episode onPress={() => this.handlePlay(episode.id)}>
              <Title
                active={currentEpisode && currentEpisode.id === episode.id}
              >
                {episode.title}
              </Title>
              <Author>{episode.artist}</Author>
            </Episode>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  currentEpisode: state.player.podcast
    ? state.player.podcast.tracks.find(
        episode => episode.id === state.player.current
      )
    : null
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Podcasts);
