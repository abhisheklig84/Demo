import { createStore, applyMiddleware } from "redux";
import { Orders } from './orderReducer';
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () =>{
    const store = createStore(Orders ,applyMiddleware(thunk, logger));

    return store;
}