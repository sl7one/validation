function errorHandler({
    param,
    userErrorMessage,
    func,
    validateParamFunc,
    validateUserErrorMessageFunc,
    errorMessageParamFunc,
    errorMessageUserErrorMessage,
}) {

    if (validateParamFunc(param)) {
        throw new Error(errorMessageParamFunc);
    }

    if (userErrorMessage && validateUserErrorMessageFunc(userErrorMessage)) {
        throw new Error(errorMessageUserErrorMessage);
    }

    return func(param, userErrorMessage);
}

export { errorHandler };
