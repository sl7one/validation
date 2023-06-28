import { errorMessagesServise } from "../../errors/errorMessagesServise.js";

function minFunc (param, errMessage) {
    if (this.val.length < param) {
      this.isValid = false;
      this.log = {
        ...this.log,
        min: errMessage || errorMessagesServise['minStr'](this.val, param),
      };
      return this.result();
    } else {
      this.isValid = true;
      this.log = {
        ...this.log,
        min: 'succsess',
      };
      return this.result();
    }
  };

  export {minFunc}