import { errorMessagesServise } from "../../errors/errorMessagesServise.js";

function maxFunc ( param, errMessage) {
    if (this.val.length > param) {
        this.falsy({
            ['max']: errMessage || errorMessagesServise["maxStr"](this.val, param),
        });
    } else {
        this.truthy("max");
    }
};

export {maxFunc}