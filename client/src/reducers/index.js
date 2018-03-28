import { combineReducers } from "redux";
import authReducer from "./authReducer";
import checkAddWatcherReducer from "./checkAddWatcherReducer";

export default combineReducers({
  auth: authReducer,
  addwatcherpage: checkAddWatcherReducer
});
