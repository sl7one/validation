import { errorMessagesServise } from '../../errors/errorMessagesServise.js';

function isModelFunc({value, param, userErrorMessage}) {

    // console.log(value, param)
    const val = Object.keys(value);
    const model = Object.keys(param);

    

    if (val.join('') !== model.join('')) {
        if (val.length > model.length) {
            const res = val.filter((el) => !model.includes(el));
            return {
                isModel:
                    userErrorMessage ||
                    errorMessagesServise['isModel']('value has', res.join(', ')),
            };
        }

        if (val.length < model.length) {
            const res = model.filter((el) => !val.includes(el));
            return {
                isModel:
                    userErrorMessage ||
                    errorMessagesServise['isModel']('model has', res.join(', ')),
            };
        }

        if (val.length === model.length) {
            const res = model.filter((el) => !val.includes(el));
            return {
                isModel:
                    userErrorMessage ||
                    errorMessagesServise['isModel'](
                        'value or model has ',
                        res.join(', ')
                    ),
            };
        }
    } else {
        return false;
    }
}

export { isModelFunc };
