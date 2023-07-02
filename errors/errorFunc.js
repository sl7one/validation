const isNotANumber = (val) => {
    return typeof val !== 'number' ? true : false;
};

const isNotAString = (val) => {
    return typeof val !== 'string' ? true : false;
};

const isNotAObject = (val) => {
    return Object.keys(val).length === 0 ? true : false;
};

const isNotTrue = (val = true) => {
    return val.toString() !== 'true' ? true : false;
};

const isArray = (val) => {
    return Array.isArray(val);
};

const isNotAPattern = (val) => {
    try {
        const regexp = new RegExp(val);
        'test'.test(regexp);
    } catch (error) {
        return new Error();
    }
     
};

export { isNotANumber, isNotAString, isNotTrue, isNotAObject, isNotAPattern, isArray };
