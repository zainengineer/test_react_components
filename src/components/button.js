import React from "react";
import { render } from "react-dom";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {hackGridRow} from '../actions'

// const BasicButton = (state) => {
//
//     const stringify = JSON.stringify(state) ;
//     const keys = JSON.stringify(Object.keys(state));
//     return (
//         <button  type="button" >Click Me, {stringify} keys {keys}</button>
//     );
const BasicButton = ({name,onClick}) => {
            return (
            <button  type="button" onClick={onClick}>Click Me, {name}</button>
        );
};
//it is not being enforce specially for init condition
BasicButton.prototype = {
    name: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    // : PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
    name: state.name
});

const mapDispatchToProps = {
    onClick: hackGridRow
};

const BasicButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BasicButton);
export default BasicButtonContainer;