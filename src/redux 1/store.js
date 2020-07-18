import {combineReducers, createStore } from "redux";

import reduce from './reduce'
import reduce1 from './reduce1'
var combine=combineReducers({
    reduce,
    reduce1
})
var store=createStore(combine)
export default store;