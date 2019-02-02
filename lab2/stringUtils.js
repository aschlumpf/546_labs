function capitalize(string) {
    if (string === undefined) {
        throw "Argument must be defined.";
    }
    if (typeof string !== 'string') {
        throw "Argument must be of type string.";
    }
    if (string === '') {
        return string;
    }
    return string[0].toUpperCase() + string.substring(1).toLowerCase();
}

function repeat(string, num) {
    if (string === undefined || num === undefined) {
        throw "Argument(s) must be defined.";
    }
    if (typeof string !== 'string' || typeof num !== 'number') {
        throw "Argument(s) must be of type string.";
    }
    if (num <= 0) {
        throw "Number must be a positive integer."
    }
    if (string === '') {
        return string;
    }
    return ''.padEnd(num * string.length, string);
}

let str = 'f';
let str2 = 'FOOBAR';
console.log(capitalize(str));
console.log(capitalize(str2));
console.log(repeat('hello', 2))