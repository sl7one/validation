import { argsServise } from "../servise/argsServise.js";

function optionsFunc(param) {
    const entries = Object.entries(param);
    entries.forEach(([key, ...rest]) => {
        try {
            const { param, errMessage } = argsServise(rest);
            this[key](param, errMessage);
        } catch (error) {
            throw new Error(
                `Option ${key} does not belong to this type NUMBER. ${Object.keys(this)
                    .filter((el) => {
                        if (el === 'isValid' || el === 'log' || el === 'result')
                            return false;
                        return el;
                    })
                    .join(', ')}`
            );
        }
    });
    return this;
}

export { optionsFunc };
