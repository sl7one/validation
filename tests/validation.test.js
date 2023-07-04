import { Validation } from '../validation/validation';

describe('VALIDATION', () => {
    const validate = new Validation();
    const value = {
        firtsName: 'Nina',
        lastName: 'Petrovna',
        phone: '+380635942909',
        email: 'example@mail.com',
        password: 'true',
        age: 25,
    };
    const params = {
        firtsName: validate.str(value.firtsName, { min: 1, max: 15 }),
        lastName: validate.str(value.lastName, { min: 1, max: 15 }),
        phone: validate.str(value.phone, { min: 1, pattern: /^\+\d{12}$/ }),
        email: validate.str(value.email, { min: 1, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }),
        password: validate.str(value.password, { min: [4, "PASSWORD INVALID"] }),
        age: validate.nmbr(value.age, { min: 20 , max: 30 }),
    };

    test('VALIDATION STRING MIN true', () => {
        expect(validate.str(value.firtsName, { min: 4 })).toMatchObject({
            isValid: true,
            log: { min: 'succsess' },
        });
        expect(validate.str(value.firtsName, { min: [4, "Value is not valid"] })).toMatchObject({
            isValid: true,
            log: { min: 'succsess' },
        });
    });

    test('VALIDATION STRING MIN false', () => {
        expect(validate.str(value.firtsName, { min: 10 })).toMatchObject({
            isValid: false,
            log: { min: 'the string length 4 less then 10 symbols' },
        });
        expect(validate.str(value.firtsName, { min: [10, "Value is not valid"] })).toMatchObject({
            isValid: false,
            log: { min: "Value is not valid" },
        });
    });

    test('VALIDATION STRING MAX true', () => {
        expect(validate.str(value.firtsName, { max: 10 })).toMatchObject({
            isValid: true,
            log: { max: 'succsess' },
        });
        expect(validate.str(value.firtsName, { max: [10, "Value is not valid"] })).toMatchObject({
            isValid: true,
            log: { max: 'succsess' },
        });
    });

    test('VALIDATION STRING MAX false', () => {
        expect(validate.str(value.firtsName, { max: 2 })).toMatchObject({
            isValid: false,
            log: { max: 'the string length 4 more then 2 symbols' },
        });
        expect(validate.str(value.firtsName, { max: [2, "Value is not valid"] })).toMatchObject({
            isValid: false,
            log: { max: 'Value is not valid' },
        });
    });

    test('VALIDATION STRING PATTERN true', () => {
        expect(validate.str("example@mail.com", { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })).toMatchObject({
            isValid: true,
            log: { pattern: 'succsess' },
        });
        expect(validate.str("example@mail.com", { pattern: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Value is not valid"] })).toMatchObject({
            isValid: true,
            log: { pattern: 'succsess' },
        });
    });

    test('VALIDATION STRING PATTERN false', () => {
        expect(validate.str("examplemailcom", { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })).toMatchObject({
            isValid: false,
            log: { pattern: 'invalid pattern validation' },
        });
        expect(validate.str("examplemailcom", { pattern: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Value is not valid"] })).toMatchObject({
            isValid: false,
            log: { pattern: 'Value is not valid' },
        });
    });

    test('VALIDATION NUMBER MIN true', () => {
        expect(validate.nmbr(20, { min: 4 })).toMatchObject({
            isValid: true,
            log: { min: 'succsess' },
        });
        expect(validate.nmbr(20, { min: [4, "Value is not valid"] })).toMatchObject({
            isValid: true,
            log: { min: 'succsess' },
        });
    });

    test('VALIDATION NUMBER MIN false', () => {
        expect(validate.nmbr(20, { min: 30 })).toMatchObject({
            isValid: false,
            log: { min: 'the number 20 less then 30' },
        });
        expect(validate.nmbr(20, { min: [30, "Value is not valid"] })).toMatchObject({
            isValid: false,
            log: { min: "Value is not valid" },
        });
    });

    test('VALIDATION NUMBER MAX true', () => {
        expect(validate.nmbr(20, { max: 30 })).toMatchObject({
            isValid: true,
            log: { max: 'succsess' },
        });
        expect(validate.nmbr(20, { max: [30, "Value is not valid"] })).toMatchObject({
            isValid: true,
            log: { max: 'succsess' },
        });
    });

    test('VALIDATION NUMBER MAX false', () => {
        expect(validate.nmbr(20, { max: 10 })).toMatchObject({
            isValid: false,
            log: { max: 'the number 20 more then 10' },
        });
        expect(validate.nmbr(20, { max: [10, "Value is not valid"] })).toMatchObject({
            isValid: false,
            log: { max: "Value is not valid" },
        });
    });

    test('VALIDATION NUMBER ISEQUAL true', () => {
        expect(validate.nmbr(20, { isEqual: 20 })).toMatchObject({
            isValid: true,
            log: { isEqual: 'succsess' },
        });
        expect(validate.nmbr(20, { isEqual: [20, "Value is not valid"] })).toMatchObject({
            isValid: true,
            log: { isEqual: 'succsess' },
        });
    });

    test('VALIDATION NUMBER ISEQUAL false', () => {
        expect(validate.nmbr(20, { isEqual: 10 })).toMatchObject({
            isValid: false,
            log: { isEqual: 'the number 20 is not equal 10' },
        });
        expect(validate.nmbr(20, { isEqual: [10, "Value is not valid"] })).toMatchObject({
            isValid: false,
            log: { isEqual: "Value is not valid" },
        });
    });
    test('VALIDATION OBJECT  true', () => {
        expect(validate.obj(value, params)).toMatchObject({
            isValid: true,
            log: { isEqual: 'succsess' },
        });
        expect(validate.obj(value, params)).toMatchObject({
            isValid: true,
            log: { isEqual: 'succsess' },
        });
    });

    // test('VALIDATION OBJECT false', () => {
    //     expect(validate.obj(value, params)).toMatchObject({
    //         isValid: false,
    //         log: { isEqual: 'the number 20 is not equal 10' },
    //     });
    //     expect(validate.obj(value, params)).toMatchObject({
    //         isValid: false,
    //         log: { isEqual: "Value is not valid" },
    //     });
    // });
});
