import { SHOW_MATCHES } from "../actions/types";
const initialState = {
  
};
export default function(state = initialState, action) {
    switch (action.SHOW_MATCHES) {
      case SHOW_MATCHES:
        return {
          ...state,
          matches: action.payload
        };
      default:
        return state;
    }
  }