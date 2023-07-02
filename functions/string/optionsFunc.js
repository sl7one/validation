import { argsServise } from '../servise/argsServise.js';

function optionsFunc(param) {
    const entries = Object.entries(param);
    entries.forEach(([key, ...rest]) => {
        try {
            const { param, errMessage } = argsServise(rest);
            this[key](param, errMessage);
        } catch (error) {
            throw new Error(error.message);
        }
    });
    return { isValid: this.isValid, log: this.log };
}

export { optionsFunc };
