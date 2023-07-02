import { errorMessagesServise } from '../../errors/errorMessagesServise.js';

function minFunc(param, errMessage) {
    if (this.val < param) {
        this.falsy({
            min: errMessage || errorMessagesServise['minNmbr'](this.val, param),
        });
    } else {
        this.truthy("min");
    }
}

export { minFunc };
