import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import matchesReducer from "./matchesReducers";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  matches: matchesReducer
});
