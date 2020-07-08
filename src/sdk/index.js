import {openFirmwareUpdateModal, closeFirmwareUpdateModal} from '../reducers/modals';

class Matata {
    constructor () {
        this.version = 'xxx';
    }

    showFirmwareModal () {
        window.matataStore.dispatch(openFirmwareUpdateModal());
    }

    hideFirmwareModal () {
        window.matataStore.dispatch(closeFirmwareUpdateModal());
    }
}

const matata = new Matata();
window.matata = matata;

export default matata;
