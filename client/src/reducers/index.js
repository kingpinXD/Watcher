import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import checkAddWatcherReducer from "./checkAddWatcherReducer";
import saveWatcherReducer from "./saveWatcherReducer";
import getWatchersReducer from "./getWatchersReducer";
import fetchindexReducer from "./fetchIndexReducer";

export default combineReducers({
  auth: authReducer,
  addwatcherpage: checkAddWatcherReducer,
  form: formReducer,
  save: saveWatcherReducer,
  watchersList: getWatchersReducer,
  indexlist: fetchindexReducer
});
