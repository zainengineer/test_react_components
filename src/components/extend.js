import React from 'react';
import { dummyAction } from '../actions'
import { connect } from 'react-redux'
import { Simple } from './simple.js'

const filterData = (data, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return data;
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = (state) => ({
    data: filterData(state.data, 'SHOW_ALL')
});

const mapDispatchToProps = {
    dummySomething: dummyAction
};

const ExtendGrid = connect(
    mapStateToProps,
    mapDispatchToProps
)(Simple);
export default ExtendGrid;