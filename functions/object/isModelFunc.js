import { errorMessagesServise } from '../../errors/errorMessagesServise.js';

function isModelFunc(param, errMessage) {
    const val = Object.keys(this.val);
    const model = Object.keys(param);


    if (val.join('') !== model.join('')) {
        if (val.length > model.length) {
            const res = val.filter((el) => !model.includes(el));
            this.falsy({
                isModel:
                    errMessage ||
                    errorMessagesServise['isModel']('value has', res.join(', ')),
            });
        }

        if (val.length < model.length) {
            const res = model.filter((el) => !val.includes(el));
            this.falsy({
                isModel:
                    errMessage ||
                    errorMessagesServise['isModel']('model has', res.join(', ')),
            });
        }

        if (val.length === model.length) {
            const res = model.filter((el) => !val.includes(el));
            this.falsy({
                isModel:
                    errMessage ||
                    errorMessagesServise['isModel'](
                        'value or model has ',
                        res.join(', ')
                    ),
            });
        }
    } else {
        this.truthy('isModel');
    }
}

export { isModelFunc };
