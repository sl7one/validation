import { isArray } from "../../errors/errorFunc.js";

const argsServise = (args) =>{
    let [param, errMessage] = args;
    if (isArray(param)){
        const [deepParam, deepErrMessage] = param;
        param = deepParam;
        errMessage = deepErrMessage;
    }

    return{
        param,
        errMessage
    }

}

export {argsServise}