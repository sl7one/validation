import { Validation } from './validation/validation.js';

const validate = new Validation();

const model = { x: '', y: '', a:"" };
const obj = { x: '',  };
const { isValid, log } = validate.val(obj).isModel(model);
//   .options({
//     min: [8, 'jhgjhghj']
//   })
console.log('OBJ', isValid, log);

// const nmb = 5;
// const { isValid, log } = validate
//   .val(nmb)
//   .options({
//     min: [8, 'jhgjhghj']
//   })
// console.log('nmb', isValid, log);

// const string = "Helooo ooooooooo";
// const { isValid: isValidString, log: logString } = validate
//   .val(string).options({min: [100, 'juguhguhg'], max: [9]})

// console.log('STRING', isValidString, logString);
