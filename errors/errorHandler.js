function errorHandler({
    param,
    userErrorMessage,
    validateParamFunc,
    validateUserErrorMessageFunc,
    errorMessageParamFunc,
    errorMessageUserErrorMessage,
}) {
    const isValidParam = validateParamFunc(param);
    if (isValidParam) {
        throw new Error(errorMessageParamFunc);
    }
    
    if (userErrorMessage && validateUserErrorMessageFunc(userErrorMessage)) {
        throw new Error(errorMessageUserErrorMessage);
    }

    

}

export { errorHandler };
