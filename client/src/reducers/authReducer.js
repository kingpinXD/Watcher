import { FETCH_USER, CHECK_ADD_WATCHER_SCREEN } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case CHECK_ADD_WATCHER_SCREEN:
      return true;

    default:
      return state;
  }
}
