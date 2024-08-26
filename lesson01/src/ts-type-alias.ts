(() => {

    type stringOrNumber = string | number;
    type userObj = {name: string, uid: stringOrNumber};

    const logDetails = (uid: stringOrNumber, item: string) => {
        console.log(`logDetails ${item} ${uid}`);
    }

    const greetHello = (user: userObj) => {
        console.log(`greetHello ${user.name}`);
    }

    const greetHelloAgain = (user: userObj) => {
        console.log(`greetHelloAgain ${user.name}`);
    }

    logDetails('uid01', 'james');
    greetHello({name: 'james', uid: 11});
    greetHelloAgain({name: 'james', uid: 11});

})();
