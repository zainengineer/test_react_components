import { createStore } from 'redux';
import pager from '../reducers/pager';
let initialState = {
    current: 1,
    total: 80
};
const store = createStore(pager,initialState);
initialState.onChange = (page) => {
    store.dispatch({ type: 'SET',payload:{page:page} });
};
export default store;