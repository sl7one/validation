import { Validation } from './validation/validation.js';

const validate = new Validation();

const obj = {
    firtsName: 'Nina',
    lastName: 'Petrovna',
    phone: '+380635942909',
    email: 'example@mail.com',
    password: 'true',
    age: 20,
};

// const resStr = validate.str(obj.firtsName, { min: 10});
// console.log(resStr);

// const resNmbrs = validate.nmbr(obj.age, {
//     min: 30,
// });
// console.log(resNmbrs);

// const test = {
//     firtsName: validate.str(obj.firtsName, { min: 1 }),
//     lastName: validate.str(obj.lastName, { min: 1 }),
//     phone: validate.str(obj.phone, { min: 1, pattern: /^\+\d{11}$/ }),
//     email: validate.str(obj.email, { min: 1, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }),
//     password: validate.str(obj.password, { min: 5 }),
//     age: validate.nmbr(obj.age, { min: 8 }),
// };

// console.log(test);
const value = {
    firtsName: 'Nina',
    lastName: 'Petrovna',
    phone: '+380635942909',
    email: 'example@mail.com',
    password: 'true',
    age: 25,
};

const resObj = validate.obj(value, {
    firtsName: validate.str(value.firtsName, { min: 1, max: 15 }),
    lastName: validate.str(value.lastName, { min: 1, max: 15 }),
    phone: validate.str(value.phone, { min: 1, pattern: /^\+\d{12}$/ }),
    email: validate.str(value.email, { min: 1, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }),
    password: validate.str(value.password, { min: [4, "PASSWORD INVALID"] }),
    // age: validate.nmbr(value.age, { min: 20 , max: 30 }),
});

console.log(resObj);

