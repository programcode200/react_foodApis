import { sum } from "../sum";

test("Sum function should calculate the sum of two numbers", ()=>{
    const result = sum(10, 2);

    //assertion
    expect(result).toBe(12);

})