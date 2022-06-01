import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import {catReducer} from "./reducer1";
import {productReducer} from "./reducer2";
import {cartReducer} from "./reducer3";

let reducers = combineReducers({ catReducer,productReducer,cartReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();