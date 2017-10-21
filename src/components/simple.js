import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from 'react-redux-grid';

import {
    columns,
    data,
    pageSize,
    events
} from './data/demodata';

export const Simple = ({ store }) => {

    const simpleData = {
        columns,
        data,
        pageSize,
        plugins: {},
        events,
        store,
        stateKey: 'simple'
    };
    console.log('returning component with simpleData (props):',simpleData,' and state: ', store.getState());
    return (
        <Grid { ...simpleData } />
    );
};

const { object } = PropTypes;

Simple.propTypes = {
    store: object.isRequired
};

Simple.defaultProps = {};

export default Simple;