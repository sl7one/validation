import { isArray, isNotANumber, isNotAObject, isNotAString } from "../errors/errorFunc";

describe("ERROR FUNCTIONS",()=>{
    test("isNotANumber true", ()=>{
        expect(isNotANumber('5')).toBe(true);
    });
    test("isNotANumber fasle", ()=>{
        expect(isNotANumber(5)).toBe(false);
    });
    test("isNotAString true", ()=>{
        expect(isNotAString(5)).toBe(true);
    });
    test("isNotAString false", ()=>{
        expect(isNotAString('5')).toBe(false);
    });
    test("isNotAObject true", ()=>{
        expect(isNotAObject(5)).toBe(true);
    });
    test("isNotAObject false", ()=>{
        expect(isNotAObject({name: "name"})).toBe(false);
    });
    test("isArray true", ()=>{
        expect(isArray([])).toBe(true);
    });
    test("isArray false", ()=>{
        expect(isArray(5)).toBe(false);
    });
})