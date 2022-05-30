import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";

let reducers = combineReducers({ reducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();