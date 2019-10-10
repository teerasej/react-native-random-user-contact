
import { createStore, combineReducers } from 'redux';

import appReducer from "./app.reducer";

export default function configureStore() {
    const store = createStore(
        combineReducers({
            app: appReducer
        })
    );

    return store;
} 