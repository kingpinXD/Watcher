import { SHOW_ADD_WATCHER, REMOVE_ADD_WATCHER } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case SHOW_ADD_WATCHER:
      return false;
    case REMOVE_ADD_WATCHER:
      return true;
    default:
      return state;
  }
}
