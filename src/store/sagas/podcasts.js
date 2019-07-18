import { call, put } from "redux-saga/effects";

//API
import axios from "../../services/axios";

//Podcasts
import PodcastsActions from "../ducks/podcasts";

export function* load() {
  try {
    const { data } = yield call(axios.get, "/podcasts");
    yield put(PodcastsActions.loadSuccess(data));
  } catch (err) {
    yield put(PodcastsActions.loadFailure());
  }
}
