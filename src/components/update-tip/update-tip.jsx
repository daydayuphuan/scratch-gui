import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import styles from './update-tip.css';

const messages = defineMessages({
    firmwareUpdateModalTitle: {
        defaultMessage: 'Matata 固件检查提示',
        description: '',
        id: 'gui.matata.firmwareUpdate'
    },
    firmwareUpdateText: {
        defaultMessage: `检测到当前固件版本号为：10.11.12 {br} 版本不匹配，需要升级`,
        description: '',
        id: 'gui.matata.firmwareUpdateText'
    },
    firmwareUpdateButtonText: {
        defaultMessage: '去升级',
        description: '',
        id: 'gui.matata.firmwareUpdateButtonText'
    }
});

const UpdateTip = ({intl, ...props}) => (
    <Modal
        id="matata.firmware.update.modal"
        className={styles.modalContent}
        contentLabel={intl.formatMessage(messages.firmwareUpdateModalTitle)}
        onRequestClose={props.onCancel}
    >
        <Box className={styles.body}>
            <Box className={styles.updateTipContainer}>
                <div
                    className={styles.tipText}
                    style={{whiteSpace: 'pre-line'}}
                >
                    {intl.formatMessage(messages.firmwareUpdateText)}
                </div>

                <p className={styles.linkWrapper}>
                    <a
                        href="https://matatalab.com/"
                        className={styles.mainButton}
                        rel="noreferrer"
                        target="_blank"
                    >
                        {intl.formatMessage(messages.firmwareUpdateButtonText)}
                    </a>
                </p>
            </Box>
        </Box>
    </Modal>
);

UpdateTip.propTypes = {
    intl: intlShape.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default injectIntl(UpdateTip);
