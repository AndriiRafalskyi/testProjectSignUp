import {reducer as formReducer} from 'redux-form';
import { combineReducers } from 'redux';
import { compose, createStore } from 'redux';

let rootReducer = combineReducers({
    form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;