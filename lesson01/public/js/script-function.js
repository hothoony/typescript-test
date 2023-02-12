"use strict";
(() => {
    let greet = () => {
        console.log('hello function');
    };
    greet();
    const echo0 = (a, b) => {
        console.log('echo0', a, b);
    };
    echo0(1);
    echo0(1, 2);
    echo0(1, '2');
    // optional
    const echo1 = (a, b) => {
        console.log('echo1', a, b);
    };
    echo1(1);
    echo1(1, 2);
    echo0(1, '2');
    // default value
    const echo2 = (a, b = 0) => {
        console.log('echo2', a, b);
    };
    echo2(1);
    echo2(1, 2);
    const add = (a, b) => {
        // const add = (a: number, b:number) => {
        return a + b;
    };
    let result = add(1, 2);
    console.log(result);
})();
//# sourceMappingURL=script-function.js.map