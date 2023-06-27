import { NumberRules } from './numberRules.js';
import { StringRules } from './stringRules.js';

export class Validation {
  val(val) {
    if (val === null) throw new Error('YOUR VALUE IS NULL');
    if (typeof val === 'undefined') throw new Error('YOUR VALUE IS UNDEFINED');

    let type = null;

    if (typeof val === 'string') type = 'string';
    if (typeof val === 'number') type = 'number';
    if (val instanceof Object) type = 'object';
    if (Array.isArray(val)) type = 'array';

    switch (type) {
      case 'string':
        return new StringRules(val);
      case 'number':
        return new NumberRules(val);
      case 'array':
        throw new Error('YOUR VALUE IS ARRAY');
      case 'object':
        throw new Error('YOUR VALUE IS OBJECT');

      default:
        throw new Error('Error');
    }
  }
}
