import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducers/rootReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga)
export default store;