"use strict";
(() => {
    let ResourceType;
    (function (ResourceType) {
        ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
        ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
        ResourceType[ResourceType["FILM"] = 2] = "FILM";
        ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    })(ResourceType || (ResourceType = {}));
    console.log('ResourceType.BOOK', ResourceType.BOOK);
    console.log('ResourceType.AUTHOR', ResourceType.AUTHOR);
    console.log('ResourceType.FILM', ResourceType.FILM);
    console.log('ResourceType.DIRECTOR', ResourceType.DIRECTOR);
})();
