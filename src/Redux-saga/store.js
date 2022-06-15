import { applyMiddleware, legacy_createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./Reducer";
import rootsaga from "./Saga/crudsaga";
const sagaMiddleware = createSagaMiddleware();
const store = legacy_createStore(rootReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootsaga);
export default store;