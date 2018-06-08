import { FETCH_WATCHERS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WATCHERS:
      return action.payload;
    default:
      return state;
  }
}
