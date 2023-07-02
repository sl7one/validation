import { errorHandler } from '../errors/errorHandler.js';
import { isNotANumber, isNotAString } from '../errors/errorFunc.js';
import { isEqualFunc } from '../functions/number/isEqualFunc.js';
import { maxFunc } from '../functions/number/maxFunc.js';
import { minFunc } from '../functions/number/minFunc.js';
import { errorMessagesServise } from '../errors/errorMessagesServise.js';
import { argsServise } from '../functions/servise/argsServise.js';

class NumberMethods {
    val = null;
    isValid = null;
    log = {};

    constructor(val, options) {
        return this.options(val, options);
    }


    options = (...args) => {
        const [value, options] = args;
        this.val = value;
        const entries = Object.entries(options);

        entries.forEach(([key, ...rest]) => {
            const [param, errMessage] = rest;
            try {
                this[key](param, errMessage);
            } catch (error) {
                throw new Error(error.message);
            }
        });

        return this.result();
    };

    min = (...args) => {
        const { param, userErrorMessage } = argsServise(args);
        return errorHandler({
            param,
            userErrorMessage,
            func: minFunc.bind(this),
            validateParamFunc: isNotANumber,
            validateUserErrorMessageFunc: isNotAString,
            errorMessageParamFunc: errorMessagesServise['isNotANumber'](param),
            errorMessageUserErrorMessage: errorMessagesServise['isNotAString'](userErrorMessage),
        });
    };

    max = (...args) => {
        const { param, userErrorMessage } = argsServise(args);
        return errorHandler({
            param,
            userErrorMessage,
            func: maxFunc.bind(this),
            validateParamFunc: isNotANumber,
            validateUserErrorMessageFunc: isNotAString,
            errorMessageParamFunc: errorMessagesServise['isNotANumber'](param),
            errorMessageUserErrorMessage: errorMessagesServise['isNotAString'](userErrorMessage),
        });
    };

    isEqual = (...args) => {
        const { param, userErrorMessage } = argsServise(args);
        return errorHandler({
            param,
            userErrorMessage,
            func: isEqualFunc.bind(this),
            validateParamFunc: isNotANumber,
            validateUserErrorMessageFunc: isNotAString,
            errorMessageParamFunc: errorMessagesServise['isNotANumber'](param),
            errorMessageUserErrorMessage: errorMessagesServise['isNotAString'](userErrorMessage),
        });
    };

    truthy(key) {
        this.isValid = true;
        this.log = {
            ...this.log,
            [key]: 'succsess',
        };
    }

    falsy(errorField) {
        this.isValid = false;
        this.log = {
            ...this.log,
            ...errorField,
        };
    }

    result() {
        if (Object.values(this.log).some((log) => log !== 'succsess')) {
            this.isValid = false;
            return { isValid: this.isValid, log: this.log };
        } else {
            this.isValid = true;
            return { isValid: this.isValid, log: this.log };
        }
    }
}

export { NumberMethods };
