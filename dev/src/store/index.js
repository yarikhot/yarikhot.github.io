import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
import promise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const state = {
    token: "",
    user: [],
    colleagues: [],
    position: [],
    isLoadingUsers: true,
    count: 6
};

export default createStore(
    reducer,
    state,
    composeWithDevTools(applyMiddleware(promise, thunk))
);