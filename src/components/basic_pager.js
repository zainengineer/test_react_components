import React from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import PropTypes from 'prop-types'

class BasicPager extends React.Component {
    // state = {
    //     current: 3,
    // };
    constructor(props) {
        super(props);
        // this.onChange = this.onChange.bind(this);}
    // onChange = (page) => {
    //     console.log(page);
    //     // this.setState({
    //     //     current: page,
    //     // });
    };
    render() {
        const { current, onChange,total} = this.props;
        console.log('props are ');
        console.log(this.props);
        return (
            <div>
                <Pagination
                    onChange={onChange}
                    current={current}
                    total={total}
                    showLessItems
                    showTitle={false}
                />
            </div>
        );
    }
}

BasicPager.propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};
export default BasicPager;