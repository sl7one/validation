import { isModelFunc } from "../functions/object/isModelFunc";

describe("OBJECT FUNCTIONS",()=>{

    test("isModelFunc false", ()=>{
        const model = {
            firtsName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
            age: 0,
        };
    
        const value = {
            firtsName: 'Nina',
            lastName: 'Petrovna',
            phone: '+380635942909',
            email: 'example@mail.com',
            password: 'true',
            age: 25,
        };
        expect(isModelFunc({value: value, param: model})).toBe(false);
    });

    test("isModelFunc true", ()=>{
        const model = {
            firtsName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
            age: 0,
        };
    
        const value = {
            firtsName: 'Nina',
        };
        expect(isModelFunc({value: value, param: model})).toHaveProperty("isModel");
    });
})