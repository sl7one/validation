import { isNotAObject, isNotAString } from '../errors/errorFunc.js';
import { errorHandler } from '../errors/errorHandler.js';
import { errorMessagesServise } from '../errors/errorMessagesServise.js';
import { isModelFunc } from '../functions/object/isModelFunc.js';
import { validateFields } from '../functions/object/validateFields.js';
import { argsServise } from '../functions/servise/argsServise.js';

class ObjectMethods {
    val = null;
    isValid = null;
    log = {};

    constructor(val, options) {
        return this.options(val, options);
    }

    options = (...args) => {
        const [value, options] = args;

        this.val = value;
        this.isModel(options);
        return this.result(options);
    };

    isModel = (...args) => {
        const { param, userErrorMessage } = argsServise(args);
        return errorHandler({
            param,
            userErrorMessage,
            func: isModelFunc.bind(this),
            validateParamFunc: isNotAObject,
            validateUserErrorMessageFunc: isNotAObject,
            errorMessageParamFunc: errorMessagesServise['isNotAObject'](param),
            errorMessageUserErrorMessage:
                errorMessagesServise['isNotAObject'](userErrorMessage),
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

    result(options) {
        const isValidModel = Object.values(this.log).every((log) => log === 'succsess');
        const isValidFields = Object.values(options).every(({log}) => 
             Object.values(log).every((log)=> log === "succsess")
        );
        if (
            !isValidModel ||
            !isValidFields
        ) {
            this.isValid = false;
            return { isValid: this.isValid, log: { ...this.log, fields: options } };
        } else {
            this.isValid = true;
            return { isValid: this.isValid, log: { ...this.log, fields: options } };
        }
    }
}

export { ObjectMethods };
