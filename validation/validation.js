import { isNotANumber, isNotAObject, isNotAString } from "../errors/errorFunc.js";
import { errorMessagesServise } from "../errors/errorMessagesServise.js";
import { NumberMethods } from "../methods/numberMethods.js";
import { ObjectMethods } from "../methods/objectMethods.js";
import { StringMethods } from "../methods/stringMethods.js";


export class Validation {


  str(val, options){
    if(isNotAString(val)) throw new Error(errorMessagesServise['isNotAString'](val))
    if(isNotAObject(options)) throw new Error(errorMessagesServise['isNotAObject'](options))
    return new StringMethods(val, options);
  }

  nmbr(val, options){
    if (isNaN(val) && typeof val !== "string") throw new Error(errorMessagesServise['isNaN'](val));
    if(isNotANumber(val)) throw new Error(errorMessagesServise['isNotANumber'](val))
    if(isNotAObject(options)) throw new Error(errorMessagesServise['isNotAObject'](options))
    return new NumberMethods(val, options);
  }

  obj(val, options){
    if(isNotAObject(val)) throw new Error(errorMessagesServise['isNotAObject'](val))
    if(isNotAObject(options)) throw new Error(errorMessagesServise['isNotAObject'](options))

    return new ObjectMethods(val, options);
  }

}
