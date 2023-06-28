import { isNotANumber, isNotAString, isNotAObject } from '../errors/errorFunc.js';
import { errorMessagesServise } from '../errors/errorMessagesServise.js';
import { optionsFunc } from '../functions/universal/optionsFunc.js';
import { isEmpty } from '../functions/string/isEmpty.js';
import { maxFunc } from '../functions/string/maxFunc.js';
import { minFunc } from '../functions/string/minFunc.js';
import { patternFunc } from '../functions/string/patternFunc.js';
import { errorHandler } from '../errors/errorHandler.js';
import { argsServise } from '../functions/servise/argsServise.js';

export class StringRules {
    val;
    isValid = null;
    log = {};

    constructor(val) {
        this.val = val;
        if (typeof val !== 'string')
            throw new Error(errorMessagesServise['isNotAString']);
    }

    options = (...args) => {
        const { param } = argsServise(args);
        return errorHandler({
            param,
            toDo: optionsFunc.bind(this),
            errFunc: isNotAObject,
            message: errorMessagesServise['isNotAString'](args),
        });
    };

    min = (...args) => {
        const { param, errMessage } = argsServise(args);
        return errorHandler({
            param,
            errMessage,
            toDo: minFunc.bind(this),
            errFunc: isNotANumber,
            message: errorMessagesServise['isNotAString'](param),
        });
    };

    max = (...args) => {
        const { param, errMessage } = argsServise(args);
        return errorHandler({
            param,
            errMessage,
            toDo: maxFunc.bind(this),
            errFunc: isNotANumber,
            message: errorMessagesServise['isNotAString'](param),
        });
    };

    pattern = (...args) => {
        const { param, errMessage } = argsServise(args);
        return errorHandler({
            param,
            errMessage,
            toDo: patternFunc.bind(this),
            errFunc: isNotAString,
            message: errorMessagesServise['isNotAString'](param),
        });
    };

    isEmpty = (...args) => {
        const { param, errMessage } = argsServise(args);
        return errorHandler({
            param,
            errMessage,
            toDo: isEmpty.bind(this),
            errFunc: isNotAString,
            message: errorMessagesServise['isNotAString'](param),
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
