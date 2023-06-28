import { errorMessagesServise } from "../../errors/errorMessagesServise.js";

function isEmpty(_, errMessage) {
    if (this.val.length) {
        this.isValid = false;
        this.log = {
            ...this.log,
            isEmpty: errMessage || errorMessagesServise['isEmpty'],
        };
        return this.result();
    } else {
        this.isValid = true;
        this.log = {
            ...this.log,
            isEmpty: 'succsess',
        };
        return this.result();
    }
};

export {isEmpty}