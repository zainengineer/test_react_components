import { createStore,combineReducers} from 'redux'
// import {data} from "../../components/data/demodata";
// import { Reducers as gridReducers } from 'react-redux-grid';
import bulkSelectionReducers from '../reducer/bulkSelectionReducers';

// import {SET_DATA} from "react-redux-grid/src/constants/ActionTypes"; how can I get the types?!


const allReducers = combineReducers({
    bulkSelectionReducers,
    bulkSelection: bulkSelectionReducers,
});
// const preloadedState = {
//     bulkSelectionReducers:{data: data},
//     bulkSelection:{data: data},
// };
// const store = createStore(allReducers,preloadedState);
// const store = createStore(allReducers);
const store = createStore(bulkSelectionReducers);

export default store;
