import { errorMessagesServise } from '../../errors/errorMessagesServise.js';

function isEqualFunc(param, errMessage) {
    if (this.val !== param) {
        this.isValid = false;
        this.log = {
            ...this.log,
            isEqual: errMessage || errorMessagesServise['isEqual'](this.val, param),
        };
        return this.result();
    } else {
        this.isValid = true;
        this.log = {
            ...this.log,
            isEqual: `succsess`,
        };
        return this.result();
    }
}

export { isEqualFunc };
