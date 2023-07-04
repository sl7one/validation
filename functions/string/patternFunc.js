
function patternFunc({ value, param }) {
    return !param.test(value) ? false : true;
}

export { patternFunc };
