(() => {

    // const addUID = <T>(obj: T) => {
    //     let uid = Math.floor(Math.random() * 100);
    //     return {...obj, uid};
    // }

    // const addUID = <T extends object>(obj: T) => {
    //     let uid = Math.floor(Math.random() * 100);
    //     return {...obj, uid};
    // }

    const addUID = <T extends {name: string}>(obj: T) => {
        let uid = Math.floor(Math.random() * 100);
        return {...obj, uid};
    }

    let docOne = addUID({name: 'james', age: 20});
    console.log(docOne);

    // ----------------------------------------------------------------

    interface Resource<T> {
        uid: number;
        resourceName: string;
        data: T;
    }

    const doc3: Resource<object> = {
        uid: 1,
        resourceName: 'person',
        data: { name: 'james' }
    }

    const doc4: Resource<string[]> = {
        uid: 2,
        resourceName: 'colors',
        data: ['red', 'green', 'blue']
    }

    console.log(doc3);
    console.log(doc4);
   
})();
