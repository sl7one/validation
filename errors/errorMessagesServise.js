const errorMessagesServise = {
    isNotANumber: (param) => `Validation value "${param}" is not a NUMBER`,
    isNotAString: (param) => `Validation value "${param}" is not a STRING`,
    isNotAObject: (param) => `Validation value "${param}" is not a OBJECT or it is EMPTY OBJECT`,
    isNotBool:  `Validation value is not BOOLEAN. Try this =>.str(true)`,

    isNaN: (val)=> `Your value ${val} => NaN. Set correct value to the val() function`,
    minNmbr: (val, param) => `the number ${val} less then ${param}`,
    maxNmbr: (val, param) => `the number ${val} more then ${param}`,
    isEqual: (val, param) => `the number ${val} is not equal ${param}`,
    minStr: (val, param) => `the string length ${val.length} less then ${param} symbols`,
    maxStr: (val, param) => `the string length ${val.length} more then ${param} symbols`,
    pattern: `invalid pattern validation`,
    isEmpty: `the string is not empty`,
    isModel: (pre, param) => `${pre} "${param}" distinctive field`,

};

export { errorMessagesServise };
