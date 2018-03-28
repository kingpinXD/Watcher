import {
  CHECK_ADD_WATCHER_SCREEN,
  DESTROY_ADD_WATCHER_SCREEN
} from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case CHECK_ADD_WATCHER_SCREEN:
      return true;
    case DESTROY_ADD_WATCHER_SCREEN:
      return false;
    default:
      return false;
  }
}
