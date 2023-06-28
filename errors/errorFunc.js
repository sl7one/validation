 const isNotANumber = (val) => {
  return typeof val !== 'number' ? true : false;
};

const isNotAString = (val) => {
  return typeof val !== 'string' ? true : false;
};

const isNotAObject = (val) => {
  return Object.keys(val).length === 0 ? true : false;
};

const isArray = (val) => {
  return Array.isArray(val);
};

export {isNotANumber, isNotAString, isNotAObject, isArray}
