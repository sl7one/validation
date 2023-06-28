import { errorMessagesServise } from '../../errors/errorMessagesServise.js';

function isModelFunc(param, errMessage) {
    const val = Object.keys(this.val);
    const model = Object.keys(param);

    if (val.join('') !== model.join('')) {
        if (val.length > model.length) {
            const res = val.filter((el) => !model.includes(el));
            this.isValid = false;
            this.log = {
                ...this.log,
                isModel:
                    errMessage || errorMessagesServise['isModel']('val() has', res.join(', ')),
            };
        }

        if (val.length < model.length) {
            const res = model.filter((el) => !val.includes(el));
            this.isValid = false;
            this.log = {
                ...this.log,
                isModel:
                    errMessage ||
                    errorMessagesServise['isModel']('model() has',  res.join(', ')),
            };
        }

        if (val.length === model.length) {
            const res = model.filter((el) => !val.includes(el));
            this.isValid = false;
            this.log = {
                ...this.log,
                isModel:
                    errMessage ||
                    errorMessagesServise['isModel']('val() or model() has ', res.join(', ')),
            };
        }
    } else {
        this.isValid = true;
        this.log = {
            ...this.log,
            isModel: 'succsess',
        };
    }

    return this.result();
}

export { isModelFunc };
