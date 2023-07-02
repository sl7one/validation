import { errorMessagesServise } from '../../errors/errorMessagesServise.js';

function isEqualFunc(param, errMessage) {
    if (this.val !== param) {
        this.falsy({
            isEqual: errMessage || errorMessagesServise['isEqual'](this.val, param),
        });
    } else {
        this.truthy('isEqual');
    }
}

export { isEqualFunc };
