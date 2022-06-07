import { combineReducers } from "@reduxjs/toolkit";

import { loginReducer } from "../features/loginSlice";

const rootReducer = combineReducers({
  signin: loginReducer,
});

export default rootReducer;