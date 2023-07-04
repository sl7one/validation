import { isEqualFunc } from "../functions/number/isEqualFunc.js";
import { maxFunc as maxFuncNMBR } from "../functions/number/maxFunc.js";
import { minFunc as minFuncNMBR} from "../functions/number/minFunc.js";


describe("NUMBER FUNCTIONS",()=>{
    test("maxFunc true", ()=>{
        expect(maxFuncNMBR({value: 10, param: 15})).toBe(true);
    });
    test("maxFunc false", ()=>{
        expect(maxFuncNMBR({value: 10, param: 5})).toBe(false);
    });
    test("minFunc true", ()=>{
        expect(minFuncNMBR({value: 10, param: 5})).toBe(true);
    });
    test("minFunc false", ()=>{
        expect(minFuncNMBR({value: 10, param: 15})).toBe(false);
    });
    test("isEqualFunc true", ()=>{
        expect(isEqualFunc({value: 20, param: 20})).toBe(true);
    });
    test("isEqualFunc false", ()=>{
        expect(isEqualFunc({value: 20, param: 30})).toBe(false);
    });
})