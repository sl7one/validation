import { Validation } from '../../validation/validation.js';

function validateFields(param) {
    const entries = Object.entries(param);
    
    entries.forEach(([field, options]) => {
        
        try {
            const validate = new Validation();
            const result = validate.val(this.val[field]).options(options)
            this.log={...this.log, [field]: result}
        } catch (error) {
            throw new Error(error);
        }
    });
    return { isValid: this.isValid, log: this.log };
}

export { validateFields };
