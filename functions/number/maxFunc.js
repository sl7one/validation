import { errorMessagesServise } from "../../errors/errorMessagesServise.js";

function maxFunc(param, errMessage) {
  if (this.val > param) {
    this.falsy({
      ['max']: errMessage || errorMessagesServise["maxNmbr"](this.val, param),
  });
return this.result();
  } else {
    this.truthy("max");
  }
}

export {maxFunc}
