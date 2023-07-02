import { errorMessagesServise } from '../../errors/errorMessagesServise.js';

function minFunc(param, errMessage) {
    if (this.val.length < param) {
        this.falsy({
            min: errMessage || errorMessagesServise['minStr'](this.val, param),
        });
    } else {
        this.truthy("min");
    }
}

export { minFunc };
