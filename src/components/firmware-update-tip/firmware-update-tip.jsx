import PropTypes from 'prop-types';
import React from 'react';
import {defineMessages, injectIntl, intlShape} from 'react-intl';
import Box from '../box/box.jsx';
import Modal from '../../containers/modal.jsx';
import styles from './firmware-update-tip.css';

const messages = defineMessages({
    firmwareUpdateModalTitle: {
        defaultMessage: 'Matata 固件检查提示',
        description: '',
        id: 'gui.matata.firmwareUpdate'
    },
    firmwareUpdatePreLable: {
        defaultMessage: '检测到当前固件版本号为：',
        description: '',
        id: 'gui.matata.firmwareUpdatePreLable'
    },
    firmwareUpdatePostLable: {
        defaultMessage: '版本不匹配，需要升级',
        description: '',
        id: 'gui.matata.firmwareUpdatePostLable'
    },
    firmwareUpdateButtonText: {
        defaultMessage: '去升级',
        description: '',
        id: 'gui.matata.firmwareUpdateButtonText'
    }
});

const FirmareUpdateTip = ({intl, ...props}) => {
    // 去升级固件的链接地址
    const updateLink = 'https://matatalab.com/';
    // 弹窗中的文字内容
    const content =
        `${intl.formatMessage(messages.firmwareUpdatePreLable) +
            props.deviceVersion} (${props.deviceType}) \n\n 
            ${intl.formatMessage(messages.firmwareUpdatePostLable)}`;

    return (
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
                        {content}
                    </div>

                    <p className={styles.linkWrapper}>
                        <a
                            href={updateLink}
                            className={styles.mainButton}
                            rel="noreferrer"
                            target="_blank"
                        >
                            {intl.formatMessage(
                                messages.firmwareUpdateButtonText
                            )}
                        </a>
                    </p>
                </Box>
            </Box>
        </Modal>
    );
};

FirmareUpdateTip.propTypes = {
    intl: intlShape.isRequired,
    deviceVersion: PropTypes.string.isRequired,
    deviceType: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired
};

export default injectIntl(FirmareUpdateTip);
