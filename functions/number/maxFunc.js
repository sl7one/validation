import { errorMessagesServise } from "../../errors/errorMessagesServise.js";

function maxFunc(param, errMessage) {
  if (this.val > param) {
    this.isValid = false;
    this.log = {
      ...this.log,
      max: errMessage || errorMessagesServise['maxNmbr'](this.val, param),
    };
    return this.result();
  } else {
    this.isValid = true;
    this.log = {
      ...this.log,
      max: 'succsess',
    };
    return this.result();
  }
}

export {maxFunc}
