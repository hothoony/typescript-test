"use strict";
(() => {
    // explicit types
    let userName;
    let userAge;
    let isLogin;
    userName = 'james';
    userAge = 20;
    isLogin = true;
    // array
    let ary = [];
    ary.push('aa');
    let ary1 = [];
    let ary2 = [];
    let ary3 = [];
    let ary4 = [];
    let ary5 = [];
    // union types
    let mixed3 = [];
    mixed3.push('james');
    mixed3.push(20);
    mixed3.push(true);
    let uid;
    uid = 'aa';
    uid = 123;
    let uid2;
    uid2 = 'aa';
    uid2 = 123;
    // objects
    let user1;
    user1 = { name: 'james', age: 20, isLogin: false };
    user1 = { name: 22, age: 20, isLogin: true };
    let user2 = {};
    user2 = { name: 'james', age: 20, isLogin: false };
    user2 = { name: 22, age: 20, isLogin: true };
    let user3;
    user3 = { name: 'james', age: 20, isLogin: false };
    user3 = { name: 22, age: 20, isLogin: true };
    let user4;
    user4 = { name: 'james', age: 20, isLogin: true };
    // user4 = {name: 22, age: 20, isLogin: true};
    // user4 = {name: 'james', age: 'aa', isLogin: true};
    // user4 = {name: 'james', age: 20, isLogin: true, hobbies: []};
})();
