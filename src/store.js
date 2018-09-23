import wassups from './wassups';
import reducer from './reducer';
import { createStore } from 'redux';

let initialState = {
    wassups: wassups,
    newWassups: ''
};

let store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;