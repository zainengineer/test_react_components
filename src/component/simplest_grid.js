import {
    columns,
    data,
    pageSize,
    events,
    dataSource
} from '../data/demodata';
import { Grid } from 'react-redux-grid';
import React, { PropTypes } from 'react';


const SimplestGrid =  (state) => {
    console.log(data);
    debugger;
    const plugins = {};
    return <Grid columns={columns} stateKey="grid_1" plugins={plugins} data={data} />;
    // return <p> empty store </p>;
};
export default SimplestGrid;