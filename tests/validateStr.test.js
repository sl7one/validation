import { Validation } from "../validation/validation.js";

const validate = new Validation();

test("VALIDATION STR", ()=>{
    expect(validate.str("hello world", {min:5, max:8})).toHaveProperty("isValid");
    expect(validate.str("hello world", {min:5, max:8})).toHaveProperty("log");
});