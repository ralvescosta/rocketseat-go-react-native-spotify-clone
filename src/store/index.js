import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

//Reducers
import rootReducers from "./ducks";

//Sagas
import rootSaga from "./sagas";

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddleware];

const composer = __DEV__
  ? compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer()
    )
  : applyMiddleware(...middlewares);

const store = createStore(rootReducers, composer);

sagaMiddleware.run(rootSaga);

export default store;
