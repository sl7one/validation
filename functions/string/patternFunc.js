import { errorMessagesServise } from '../../errors/errorMessagesServise.js';

function patternFunc(param, errMessage) {
    if (!param.test(this.val)) {
        this.falsy({
            pattern: errMessage || errorMessagesServise['pattern'],
        });
    } else {
        this.truthy("pattern");
    }
}

export { patternFunc };
