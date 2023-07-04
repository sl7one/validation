import { maxFunc as maxFuncSTR } from "../functions/string/maxFunc.js";
import { minFunc as minFuncSTR } from "../functions/string/minFunc.js";
import { patternFunc } from "../functions/string/patternFunc.js";


describe("STRING FUNCTIONS",()=>{
    test("maxFunc true", ()=>{
        expect(maxFuncSTR({value: "test value", param: 10})).toBe(true);
    });
    test("maxFunc false", ()=>{
        expect(maxFuncSTR({value: "test value", param: 5})).toBe(false);
    });
    test("minFunc true", ()=>{
        expect(minFuncSTR({value: "test value", param: 10})).toBe(true);
    });
    test("minFunc false", ()=>{
        expect(minFuncSTR({value: "test value", param: 15})).toBe(false);
    });
    test("patternFunc true", ()=>{
        expect(patternFunc({value: "+380110000000", param: /^\+\d{12}$/})).toBe(true);
    });
    test("patternFunc false", ()=>{
        expect(patternFunc({value: "0110000000", param: /^\+\d{12}$/})).toBe(false);
    });
})



// describe("OBJECT FUNCTIONS",()=>{
//     const model = {
//         firtsName: 'Nina',
//         lastName: 'Petrovna',
//         phone: '+380635942909',
//         email: 'example@mail.com',
//         password: 'true',
//         age: 25,
//     };
//     test("isModelFunc", ()=>{
//         expect(isModelFunc({value: 10, param: 15})).toBe(true);
//     });
// })