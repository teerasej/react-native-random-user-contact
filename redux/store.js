
import { createStore, combineReducers } from 'redux';

import reducer from "./reducer";

export default function configureStore() {
    const store = createStore(
        combineReducers({
            app: appReducer
        })
    );

    return store;
} 