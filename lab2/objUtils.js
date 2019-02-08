function extend(...args) {
    if (args !== undefined && args.length > 1) {
        let extended = {};
        args.forEach(obj => {
            if (obj === undefined) {
                throw "Objects must be defined."
            }
            else {
                for (item in obj) {
                    if (!(item in extended)) {
                        extended[item] = obj[item];
                    }
                }
            }
        });
        return extended;
    }
    else {
        throw "Must have at least two defined arguments.";
    }
}

function smush(...args) {
    if (args === undefined || args.length > 1) {
        let extended = {};
        args.forEach(obj => {
            if (obj === undefined) {
                throw "Objects must be defined."
            }
            else {
                for (item in obj) {
                    extended[item] = obj[item];
                }
            }
        });
        return extended;
    }
    else {
        throw "Must have at least two defined arguments.";
    }
}

function mapValues(object, fun) {
    if (object === undefined || fun === undefined) {
        throw "Argument(s) must be defined.";
    }
    if (typeof object !== 'object') {
        throw "Argument object must be of type object.";
    }
    if (typeof fun !== 'function') {
        throw "Argument fun must be of type function";
    }
    for (x in object) {
        object[x] = fun(object[x]);
    }
    return object;
}

module.exports = {
    firstName: "Alex",
    lastName: "Schlumpf",
    studentId: "10414246",
    extend,
    smush,
    mapValues,
};