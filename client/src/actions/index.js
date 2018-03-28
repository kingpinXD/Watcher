import axios from "axios";
import {
  FETCH_USER,
  CHECK_ADD_WATCHER_SCREEN,
  DESTROY_ADD_WATCHER_SCREEN
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/getuser");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const navigatetoAddWatcher = () => dispatch => {
  dispatch({ type: CHECK_ADD_WATCHER_SCREEN });
};

export const navigatefromAddWatcher = () => dispatch => {
  dispatch({ type: DESTROY_ADD_WATCHER_SCREEN });
};
