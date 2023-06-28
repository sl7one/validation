function errorHandler({ param, errMessage, toDo, errFunc, message }) {
    if (errFunc(param)) throw new Error(message);
    return toDo(param, errMessage);
}

export { errorHandler };
