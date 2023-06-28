import { errorHandler } from '../errors/errorHandler.js';
import { isNotANumber, isNotAObject } from '../errors/errorFunc.js';
import { isEqualFunc } from '../functions/number/isEqualFunc.js';
import { maxFunc } from '../functions/number/maxFunc.js';
import { minFunc } from '../functions/number/minFunc.js';
import { optionsFunc } from '../functions/universal/optionsFunc.js';
import { errorMessagesServise } from '../errors/errorMessagesServise.js';
import { argsServise } from '../functions/servise/argsServise.js';

class NumberRules {
    val = null;
    isValid = null;
    log = {};

    constructor(val) {
        if (isNaN(val)) throw new Error(errorMessagesServise['isNaN'](val));
        this.val = val;
    }

    options = (...args) => {
        const { param } = argsServise(args);
        return errorHandler({
            param,
            toDo: optionsFunc.bind(this),
            errFunc: isNotAObject,
            message: errorMessagesServise['isNotANumber'](param),
        });
    };

    min = (...args) => {
        const { param, errMessage } = argsServise(args);
        return errorHandler({
            param,
            errMessage,
            toDo: minFunc.bind(this),
            errFunc: isNotANumber,
            message: errorMessagesServise['isNotANumber'](param),
        });
    };

    max = (...args) => {
        const { param, errMessage } = argsServise(args);
        return errorHandler({
            param,
            errMessage,
            toDo: maxFunc.bind(this),
            errFunc: isNotANumber,
            message: errorMessagesServise['isNotANumber'](param),
        });
    };

    isEqual = (...args) => {
        const { param, errMessage } = argsServise(args);
        return errorHandler({
            param,
            errMessage,
            toDo: isEqualFunc.bind(this),
            errFunc: isNotANumber,
            message: errorMessagesServise['isNotANumber'](param),
        });
    };

    result() {
        if (Object.values(this.log).some((log) => log !== 'succsess')) {
            this.isValid = false;
            return this;
        } else {
            this.isValid = true;
            return this;
        }
    }
}

export { NumberRules };
