import { isArray, isNotANumber, isNotAString } from '../errors/errorFunc.js';
import { errorMessagesServise } from '../errors/errorMessagesServise.js';
import { maxFunc } from '../functions/string/maxFunc.js';
import { minFunc } from '../functions/string/minFunc.js';
import { patternFunc } from '../functions/string/patternFunc.js';
import { errorHandler } from '../errors/errorHandler.js';
import { argsServise } from '../functions/servise/argsServise.js';

class StringMethods {
    val;
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
        errorHandler({
            param,
            userErrorMessage,
            validateParamFunc: isNotANumber,
            validateUserErrorMessageFunc: isNotAString,
            errorMessageParamFunc: errorMessagesServise['isNotANumber'](param),
            errorMessageUserErrorMessage:
                errorMessagesServise['isNotAString'](userErrorMessage),
        });

        const res = minFunc({ value: this.val, param });

        res
            ? this.truthy('min')
            : this.falsy({
                  min:
                      userErrorMessage || errorMessagesServise['minStr'](this.val, param),
              });
    };

    max = (...args) => {
        const { param, userErrorMessage } = argsServise(args);
        errorHandler({
            param,
            userErrorMessage,
            validateParamFunc: isNotANumber,
            validateUserErrorMessageFunc: isNotAString,
            errorMessageParamFunc: errorMessagesServise['isNotANumber'](param),
            errorMessageUserErrorMessage:
                errorMessagesServise['isNotAString'](userErrorMessage),
        });

        const res = maxFunc({ value: this.val, param });

        res
            ? this.truthy('max')
            : this.falsy({
                  ['max']:
                      userErrorMessage || errorMessagesServise['maxStr'](this.val, param),
              });
    };

    pattern = (...args) => {
        const { param, userErrorMessage } = argsServise(args);
        errorHandler({
            param,
            userErrorMessage,
            validateParamFunc: () => false,
            validateUserErrorMessageFunc: isNotAString,
            errorMessageParamFunc: errorMessagesServise['isNotANumber'](param),
            errorMessageUserErrorMessage:
                errorMessagesServise['isNotAString'](userErrorMessage),
        });

        const res = patternFunc({ value: this.val, param });

        res
            ? this.truthy('pattern')
            : this.falsy({
                  pattern: userErrorMessage || errorMessagesServise['pattern'],
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

export { StringMethods };
