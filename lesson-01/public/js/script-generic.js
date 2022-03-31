"use strict";
(() => {
    // const addUID = <T>(obj: T) => {
    //     let uid = Math.floor(Math.random() * 100);
    //     return {...obj, uid};
    // }
    // const addUID = <T extends object>(obj: T) => {
    //     let uid = Math.floor(Math.random() * 100);
    //     return {...obj, uid};
    // }
    const addUID = (obj) => {
        let uid = Math.floor(Math.random() * 100);
        return Object.assign(Object.assign({}, obj), { uid });
    };
    let docOne = addUID({ name: 'james', age: 20 });
    console.log(docOne);
    const doc3 = {
        uid: 1,
        resourceName: 'person',
        data: { name: 'james' }
    };
    const doc4 = {
        uid: 2,
        resourceName: 'colors',
        data: ['red', 'green', 'blue']
    };
    console.log(doc3);
    console.log(doc4);
})();
