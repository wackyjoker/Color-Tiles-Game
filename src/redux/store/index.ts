import {createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(rootReducer,initialState,applyMiddleware(...middleware));

// const store = createStore(()=>[],{} as any,applyMiddleware());

export default store;