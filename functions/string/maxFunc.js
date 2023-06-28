import { errorMessagesServise } from "../../errors/errorMessagesServise.js";

function maxFunc (param, errMessage) {
    if (this.val.length > param) {
        this.isValid = false;
        this.log = {
            ...this.log,
            max: errMessage || errorMessagesServise["maxStr"](this.val, param),
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
};

export {maxFunc}