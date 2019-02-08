const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const objUtils = require("./objUtils");

// Head test cases
try {
    arrayUtils.head([1,2,3,4]);
    console.log('head passed successfully');
} catch(e) {
    console.log(e);
    console.log('head failed test case');
}

try {
    arrayUtils.head([1]);
    console.log('head passed successfully');
} catch(e) {
    console.log(e);
    console.log('head failed test case');
}

try {
    arrayUtils.head();
    console.log('head did not error');
} catch(e) {
    console.log('head failed successfully');
}

try {
    arrayUtils.head("banana");
    console.log('head did not error');
} catch(e) {
    console.log('head failed successfully');
}

try {
    arrayUtils.head([]);
    console.log('head did not error');
} catch(e) {
    console.log('head failed successfully');
}

// Last test cases
try {
    arrayUtils.last([1,2,3,4]);
    console.log('last passed successfully');
} catch(e) {
    console.log(e);
    console.log('last failed test case');
}

try {
    arrayUtils.last([1]);
    console.log('last passed successfully');
} catch(e) {
    console.log(e);
    console.log('last failed test case');
}

try {
    arrayUtils.last();
    console.log('last did not error');
} catch(e) {
    console.log('last failed successfully');
}

try {
    arrayUtils.last("banana");
    console.log('last did not error');
} catch(e) {
    console.log('last failed successfully');
}

try {
    arrayUtils.last([]);
    console.log('last did not error');
} catch(e) {
    console.log('last failed successfully');
}

// Remove test cases

try {
    arrayUtils.remove([1,2,3,4], 1);
    console.log('remove passed successfully');
} catch(e) {
    console.log('remove failed');
}

try {
    arrayUtils.remove([]);
    console.log('remove did not error');
} catch(e) {
    console.log('remove failed successfully');
}

try {
    arrayUtils.remove(10);
    console.log('remove did not error');
} catch(e) {
    console.log('remove failed successfully');
}

// Range test cases
try {
    arrayUtils.range(10);
    console.log('range passed successfully');
} catch (e) {
    console.log('remove failed');
}

try {
    arrayUtils.range(10, 10);
    console.log('range passed successfully');
} catch (e) {
    console.log('remove failed');
}

// countElements test cases
try {
    arrayUtils.countElements([1,2,3]);
    console.log('countElements passed successfully');
} catch (e) {
    console.log('countElements failed');
}

try {
    arrayUtils.countElements([]);
    console.log('countElements passed successfully');
} catch (e) {
    console.log('countElements failed');
}

try {
    arrayUtils.countElements();
    console.log('countElements did not error');
} catch (e) {
    console.log('countElements failed successfully');
}

try {
    arrayUtils.countElements(10);
    console.log('countElements did not error');
} catch (e) {
    console.log('countElements failed successfully');
}

// isEqual test cases
try {
    arrayUtils.isEqual([], []);
    console.log('countElements passed successfully');
} catch (e) {
    console.log('countElements failed');
}

try {
    arrayUtils.isEqual([1,2,3], [1,2,3]);
    console.log('countElements passed successfully');
} catch (e) {
    console.log('countElements failed');
}

try {
    arrayUtils.isEqual();
    console.log('countElements did not fail');
} catch (e) {
    console.log('countElements failed successfully');
}

try {
    arrayUtils.isEqual([]);
    console.log('countElements did not fail');
} catch (e) {
    console.log('countElements failed successfully');
}

try {
    arrayUtils.isEqual(1, []);
    console.log('countElements did not fail');
} catch (e) {
    console.log('countElements failed successfully');
}

try {
    arrayUtils.isEqual([], 1);
    console.log('countElements did not fail');
} catch (e) {
    console.log('countElements failed successfully');
}

// Extend test cases

try {
    objUtils.extend({one : 1, two: 2, three: 3}, {four : 4, five: 5}, {six : 6});
    console.log('extend passed successfully');
} catch(e) {
    console.log('extend failed')
}

try {
    objUtils.extend({one : 1, two: 2, three: 3});
    console.log('extend did not fail');
} catch(e) {
    console.log('extend failed successfully')
}

try {
    objUtils.extend();
    console.log('extend did not fail');
} catch(e) {
    console.log('extend failed successfully')
}

try {
    objUtils.extend(10);
    console.log('extend did not fail');
} catch(e) {
    console.log('extend failed successfully')
}

try {
    stringUtils.repeat('hello', 5);
    console.log('repeat passed successfully')
} catch(e) {
    console.log('repeat failed')
}

try {
    stringUtils.repeat('', 5);
    console.log('repeat passed successfully')
} catch(e) {
    console.log('repeat failed')
}


try {
    stringUtils.repeat('');
    console.log('repeat did not fail')
} catch(e) {
    console.log('repeat failed successfully')
}

try {
    stringUtils.capitalize('TEST');
    console.log('capitalize passed successfully');
} catch(e) {
    console.log('capitalize failed');
}

try {
    stringUtils.capitalize();
    console.log('capitalize did not fail');
} catch(e) {
    console.log('capitalize failed successfully');
}

try {
    stringUtils.countChars('Hello, the pie is in the oven');
    console.log('countChars passed successfully');
} catch(e) {
    console.log('countChars failed');
}

try {
    stringUtils.countChars(10);
    console.log('countChars did not fail')
}catch(e) {
    console.log('countChars failed successfully');
}

try {
    stringUtils.countChars();
    console.log('countChars did not fail')
}catch(e) {
    console.log('countChars failed successfully');
}