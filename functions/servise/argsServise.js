import { isArray } from '../../errors/errorFunc.js';

const argsServise = (args) => {
    let [param, userErrorMessage] = args;
    if (isArray(param)){
        const [deepParam, deepErrMessage] = param;
        param = deepParam;
        userErrorMessage = deepErrMessage;
    }

    return{
        param,
        userErrorMessage
    }
};

export { argsServise };
