import { SAVE_WATCHER } from "../actions/types";

export default function(state = null, action) {
  switch (action) {
    case SAVE_WATCHER:
      return true;
    default:
      return false;
  }
}
