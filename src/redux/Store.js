import { legacy_createStore } from "redux";
import { reducer } from "./Reducer";

export const Store = legacy_createStore(reducer);