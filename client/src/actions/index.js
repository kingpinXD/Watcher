import axios from "axios";
import {
  FETCH_USER,
  SHOW_ADD_WATCHER,
  REMOVE_ADD_WATCHER,
  SAVE_WATCHER,
  FETCH_WATCHERS,
  TOGGLE_WATCHER,
  DELETE_WATCHER,
  FETCH_INDEXES
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/getuser");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const navigatetoAddWatcher = () => dispatch => {
  dispatch({ type: REMOVE_ADD_WATCHER });
};

export const navigatefromAddWatcher = () => dispatch => {
  dispatch({ type: SHOW_ADD_WATCHER });
};

export const saveWatcher = (values, history) => async dispatch => {
  const res = await axios.post("/api/addnewwatcher", values);
  dispatch({ type: SAVE_WATCHER, payload: res.data });
  history.push("/watcher_home");
};

export const fetchWatchers = () => async dispatch => {
  const res = await axios.get("/api/getwatchers");
  dispatch({ type: FETCH_WATCHERS, payload: res.data });
};

export const toggleWatchers = (isActive, watchername) => async dispatch => {
  let res = null;

  switch (isActive) {
    case false:
      res = await axios.post("/api/cron/stop", { watchername });
      break;

    case true:
      res = await axios.post("/api/cron/start", { watchername });
      break;
    default:
      console.log("Default");
  }

  dispatch({ type: TOGGLE_WATCHER, payload: res.data });
};

export const deleteWatcher = watchername => async dispatch => {
  const res = await axios.post("/api/deletewatcher", { watchername });
  dispatch({ type: DELETE_WATCHER, payload: res.data });
};

export const fetchIndexes = () => async dispatch => {
  const res = await axios.get("/api/getindexes");
  dispatch({ type: FETCH_INDEXES, payload: res.data });
};
