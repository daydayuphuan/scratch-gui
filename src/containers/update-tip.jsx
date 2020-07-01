import bindAll from 'lodash.bindall';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import UpdateTipComponent from '../components/update-tip/update-tip.jsx';

import {
    closeFirmwareUpdateModal
} from '../reducers/modals';

class UpdateTip extends React.Component {
    constructor (props) {
        super(props);
        bindAll(this, [
            'handleCancel'
        ]);
    }
    componentWillUnmount () {

    }
    
    handleCancel () {
        this.props.onClose();
    }
    render () {
        return (
            <UpdateTipComponent
                onCancel={this.handleCancel}
            />
        );
    }
}

UpdateTip.propTypes = {
    onClose: PropTypes.func
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    onClose: () => {
        dispatch(closeFirmwareUpdateModal());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateTip);
