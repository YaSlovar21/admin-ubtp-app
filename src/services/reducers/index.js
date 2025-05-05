import { combineReducers } from "redux";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    user: userReducer,
    //orders: ordersReducer,
    //clients: clientssReducer,
    //modalOrder: modalOrderReducer
});