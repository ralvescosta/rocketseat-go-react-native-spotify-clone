import React from "react";

//debug
import "./configurations/reactotronConfig";

//StatusBar Config
import "./configurations/StatusBarConfig";

//Redux
import { Provider } from "react-redux";
import store from "./store";

//Routes
import Routes from "./routes";

//Components
import { Player } from "./components";

console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
      <Player />
    </Provider>
  );
};

export default App;
