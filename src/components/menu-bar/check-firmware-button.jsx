import classNames from 'classnames';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../button/button.jsx';
import styles from './check-firmware-button.css';

import {openFirmwareUpdate} from '../../reducers/modals';

const CheckFirmwareButton = ({className, onClickBtn}) => (
    <Button
        className={classNames(className, styles.checkFirmwareButton)}
        onClick={onClickBtn}
    >
        <FormattedMessage
            defaultMessage="检查固件版本"
            description="Label for firmware update check"
            id="gui.menuBar.checkFirmwareUpdate"
        />
    </Button>
);

CheckFirmwareButton.propTypes = {
    className: PropTypes.string,
    onClickBtn: PropTypes.func
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    onClickBtn: () => {
        dispatch(openFirmwareUpdate());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CheckFirmwareButton);
