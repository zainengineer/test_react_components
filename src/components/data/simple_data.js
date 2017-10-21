import {
    columns,
    data,
    pageSize,
    events
} from './demodata';

import store from '../../redux/store/grid_data'

const simpleData = {
    columns,
    data,
    pageSize,
    plugins: {},
    events,
    store,
    stateKey: 'simple'
};

export default simpleData;