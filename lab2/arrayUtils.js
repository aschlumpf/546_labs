function head(array) {
    if (array === undefined) {
        throw "Array must be defined";
    }
    if (!Array.isArray(array)) {
        throw "Argument must be type array.";
    }
    if (array.length === 0) {
        throw "Array cannot be empty";
    }
    return array[0];
}

function last(array) {
    if (array === undefined) {
        throw "Array must be defined";
    }
    if (!Array.isArray(array)) {
        throw "Argument must be type array.";
    }
    if (array.length === 0) {
        throw "Array cannot be empty";
    }
    return array[array.length-1];
}

function remove(array, index) {
    if (array === undefined) {
        throw "Array must be defined";
    }
    if (!Array.isArray(array)) {
        throw "Argument must be type array.";
    }
    if (array.length === 0) {
        throw "Array cannot be empty";
    }
    if (index < 0 || index >= array.length) {
        throw "Index out of bounds";
    }
    array.splice(index, 1);
    return array;
}

function range(end, value) {
    if (end === undefined) {
        throw "Must specify end bound.";
    }
    if (typeof end !== 'number') {
        throw "End must be of type number.";
    }
    if (end <= 0) {
        throw "End must be a positive integer.";
    }
    let arr = new Array(end);
    if (value !== undefined) {
        arr.fill(value, 0, end);
    }
    else {
        for (let i = 0; i < end; i++) {
            arr[i] = i;
        }
    }
    return arr;
}

function countElements(array) {
    if (array === undefined) {
        throw "Array must be defined";
    }
    if (!Array.isArray(array)) {
        throw "Argument must be type array.";
    }
    let count = {}
    array.forEach(x => {
        count[x] === undefined ? count[x] = 1 : count[x]++
    });
    return count;
}

function isEqual(arrayOne, arrayTwo) {
    if (arrayOne === undefined || arrayTwo == undefined) {
        throw "Array(s) must be defined";
    }
    if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
        throw "Argument(s) must be type array.";
    }
    let i = 0;
    for ( ; i < arrayOne.length; i++) {
        if (arrayTwo[i] === undefined || arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }
    return arrayTwo[i] === undefined;
}

module.exports = {
    firstName: "Alex",
    lastName: "Schlumpf",
    studentId: "10414246",
    head,
    last,
    remove,
    range,
    countElements,
    isEqual
};
