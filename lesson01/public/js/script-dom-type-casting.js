"use strict";
(() => {
    // const anchor1 = document.querySelector('a');
    // console.log(anchor1);
    // console.log(anchor1.href);
    // const anchor2 = document.querySelector('a');
    // if (anchor2) {
    //     console.log(anchor2);
    //     console.log(anchor2.href);
    // }
    // const anchor3 = document.querySelector('a')!;
    // console.log(anchor3);
    // console.log(anchor3.href);
    // const form = document.querySelector('form')!;
    // const form = document.querySelector('.new-item-form');
    const form = document.querySelector('.new-item-form');
    const type = document.querySelector('#type');
    const tofrom = document.querySelector('#tofrom');
    const details = document.querySelector('#details');
    const amount = document.querySelector('#amount');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    });
})();
//# sourceMappingURL=script-dom-type-casting.js.map