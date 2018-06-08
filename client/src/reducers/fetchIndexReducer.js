import { FETCH_INDEXES } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_INDEXES:
      return action.payload;
    default:
      return state;
  }
}
