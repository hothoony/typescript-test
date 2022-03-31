(() => {

    // explicit types
    let userName: string;
    let userAge: number;
    let isLogin:boolean;
    userName = 'james';
    userAge = 20;
    isLogin = true;

    // array
    let ary: string[] = [];
    ary.push('aa');

    let ary1: number[] = [];
    let ary2: boolean[] = [];
    let ary3: object[] = [];
    let ary4: {}[] = [];
    let ary5: {name: string, age: number}[] = [];

    // union types
    let mixed3: (string|number|boolean)[] = [];
    mixed3.push('james');
    mixed3.push(20);
    mixed3.push(true);

    let uid: string|number;
    uid = 'aa';
    uid = 123;

    let uid2: (string|number);
    uid2 = 'aa';
    uid2 = 123;

    // objects
    let user1: object;
    user1 = {name: 'james', age: 20, isLogin: false};
    user1 = {name: 22, age: 20, isLogin: true};

    let user2: object = {};
    user2 = {name: 'james', age: 20, isLogin: false};
    user2 = {name: 22, age: 20, isLogin: true};

    let user3: {};
    user3 = {name: 'james', age: 20, isLogin: false};
    user3 = {name: 22, age: 20, isLogin: true};

    let user4: {
        name: string,
        age: number,
        isLogin: boolean
    };
    user4 = {name: 'james', age: 20, isLogin: true};
    // user4 = {name: 22, age: 20, isLogin: true};
    // user4 = {name: 'james', age: 'aa', isLogin: true};
    // user4 = {name: 'james', age: 20, isLogin: true, hobbies: []};

})();
