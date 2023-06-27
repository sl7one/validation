import { Validation } from './validation.js';

const validate = new Validation();

const number = 8;
const { isValid: isValidNumber, log: logNumber } = validate
  .val(number)
  .options({ min: 5, max: 10, isEqual: 7 });
console.log('NUMBER', isValidNumber, logNumber);

const string = 'Hello world';
const { isValid: isValidString, log: logString } = validate
  .val(string)
  .options({ min: 5, max: 10, isEqual: 8 });
console.log('STRING', isValidString, logString);
