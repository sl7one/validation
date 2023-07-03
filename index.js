import { Validation } from './validation/validation.js';

const validate = new Validation();

const obj = {
    firtsName: 'Nina',
    lastName: 'Petrovna',
    phone: '+380635942909',
    email: 'example@mail.com',
    password: 'true',
    age: 25,
};

const resStr = validate.str(obj.firtsName,{min: 5, max: 8});
console.log(resStr);



// const resNmbrs = validate.nmbr(obj.age, {
//     min: [19, 'jhgjhgjhg'],
//     max: 30,
//     isEqual: [30, "jjhkjh"],
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

const resObj = validate.obj(obj, {
    firtsName: validate.str(obj.firtsName, { min: 1 }),
    lastName: validate.str(obj.lastName, { min: 1 }),
    phone: validate.str(obj.phone, { min: 1, pattern: /^\+\d{12}$/ }),
    email: validate.str(obj.email, { min: 1, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }),
    password: validate.str(obj.password, { min: 4 }),
    age: validate.nmbr(obj.age, { min: 8 , max: 7 }),
});

console.log(resObj);

// const obj = {
//     firtsName: 'Nina',
//     lastName: 'Petrovna',
//     phone: '+380635942909',
//     email: "example.mail.com",
//     password: 'true',
//     age:25
// };
