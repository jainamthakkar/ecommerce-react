import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducers";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";



const loggingMiddleware = store => next => action => {
    console.log('Dispatching action:', action.type);
    console.log('Previous state:', store.getState());
    const result = next(action);
    console.log('Next state:', store.getState());
    return result;
  };

const rootReducers = combineReducers({
    auth:authReducer,
    product:customerProductReducer,
    cart:cartReducer,
    order:orderReducer
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk, loggingMiddleware))

  
  export default loggingMiddleware;