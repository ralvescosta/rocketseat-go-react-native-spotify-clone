import { combineReducers } from "redux";

//Reducers
import { reducer as podcasts } from "./podcasts";
import { reducer as player } from "./player";

export default combineReducers({ podcasts, player });
