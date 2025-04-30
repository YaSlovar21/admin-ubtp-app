import { combineReducers } from "redux";
import { clientssReducer } from "./clients";

import { modalOrderReducer } from "./modal-order";
import { ordersReducer } from "./orders";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    user: userReducer,
    orders: ordersReducer,
    clients: clientssReducer,
    modalOrder: modalOrderReducer
});