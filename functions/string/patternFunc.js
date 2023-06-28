import { errorMessagesServise } from '../../errors/errorMessagesServise.js';

function patternFunc(param, errMessage) {
    if (!param.test(this.val)) {
        this.isValid = false;
        this.log = {
            ...this.log,
            pattern: errMessage || errorMessagesServise['pattern'],
        };
        return this.result();
    } else {
        this.isValid = true;
        this.log = {
            ...this.log,
            pattern: 'succsess',
        };
        return this.result();
    }
}

export { patternFunc };
