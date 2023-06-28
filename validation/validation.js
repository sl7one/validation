import { NumberRules } from "../rules/numberRules.js";
import { ObjectRules } from "../rules/objectRules.js";
import { StringRules } from "../rules/stringRules.js";


export class Validation {
  val(val) {
    // if (val === null) throw new Error('YOUR VALUE IS NULL');
    // if (typeof val === 'undefined') throw new Error('YOUR VALUE IS UNDEFINED');

    // let type = null;

    
    // if (typeof val === 'number') type = 'number';
    // if (val instanceof Object) type = 'object';
    // if (Array.isArray(val)) type = 'array';

    switch (typeof val) {
      case 'string':
        return new StringRules(val);
      case 'number':
        return new NumberRules(val);
      // case 'array':
      //   throw new Error('YOUR VALUE IS ARRAY');
      case 'object':
        return new ObjectRules(val);

      default:
        throw new Error('Error');
    }
  }
}
