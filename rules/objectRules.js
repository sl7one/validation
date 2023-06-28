import { isNotAObject } from "../errors/errorFunc.js";
import { errorHandler } from "../errors/errorHandler.js";
import { errorMessagesServise } from "../errors/errorMessagesServise.js";
import { isModelFunc } from "../functions/object/isModelFunc.js";
import { argsServise } from "../functions/servise/argsServise.js";

class ObjectRules {
    val = null;
    isValid = null;
    log = {};

    constructor(val) {
        if (!Object.keys(val).length) throw new Error(errorMessagesServise['isNotAObject'](val));
        this.val = val;
    }

    isModel = (...args) => {
            const { param } = argsServise(args);
            return errorHandler({
                param,
                toDo: isModelFunc.bind(this),
                errFunc: isNotAObject,
                message: errorMessagesServise['isNotAString'](args),
            });
        };

    
    // options = (...args) => {
    //     const { param } = argsServise(args);
    //     return errorHandler({
    //         param,
    //         toDo: optionsFunc.bind(this),
    //         errFunc: isNotAObject,
    //         message: errorMessagesServise['isNotAString'](args),
    //     });
    // };

    // min = (...args) => {
    //     const { param, errMessage } = argsServise(args);
    //     return errorHandler({
    //         param,
    //         errMessage,
    //         toDo: minFunc.bind(this),
    //         errFunc: isNotANumber,
    //         message: errorMessagesServise['isNotAString'](param),
    //     });
    // };

    // max = (...args) => {
    //     const { param, errMessage } = argsServise(args);
    //     return errorHandler({
    //         param,
    //         errMessage,
    //         toDo: maxFunc.bind(this),
    //         errFunc: isNotANumber,
    //         message: errorMessagesServise['isNotAString'](param),
    //     });
    // };

    // pattern = (...args) => {
    //     const { param, errMessage } = argsServise(args);
    //     return errorHandler({
    //         param,
    //         errMessage,
    //         toDo: patternFunc.bind(this),
    //         errFunc: isNotAString,
    //         message: errorMessagesServise['isNotAString'](param),
    //     });
    // };

    // isEmpty = (...args) => {
    //     const { param, errMessage } = argsServise(args);
    //     return errorHandler({
    //         param,
    //         errMessage,
    //         toDo: isEmpty.bind(this),
    //         errFunc: isNotAString,
    //         message: errorMessagesServise['isNotAString'](param),
    //     });
    // };

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

export { ObjectRules };