import React from "react";
import { render } from "react-dom";
import { connect } from 'react-redux'
import FunctionalGrid from './basic_grid'
import {hackGridRow} from '../actions'

const mapStateToProps = (state) => ({
    page: state.page
});

const mapDispatchToProps = {
    dummyAction: hackGridRow
};

const GridContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FunctionalGrid);
export default GridContainer;