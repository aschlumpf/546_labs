// Alex Schlumpf
// I pledge my honor that I have abided by the Stevens Honor System.
const questionOne = function questionOne(arr) {
    // Implement question 1 here
    return arr.length > 0 ? arr.map(a => a*a).reduce((a, b) => a + b) : 0;
}

function fast_fib(index, current, last) {
    if (index <= 0) {
        return current;
    }
    else {
        return fast_fib(index - 1, current + last, current);
    }
}

const questionTwo = function questionTwo(num) { 
    // Implement question 2 here
    return fast_fib(num, 0, 1);
}

const questionThree = function questionThree(text) {
    // Implement question 3 here
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let lowerText = text.toLowerCase();
    for (let i = 0; i < lowerText.length; i++) {
        if (vowels.includes(lowerText.charAt(i))) {
            count++;
        }
    }
    return count;
}

function fast_fact(num, dict) {
    if (num === 0) {
        return 1;
    }
    else if (dict[num] !== undefined) {
        return dict[num];
    }
    else {
        res = num * fast_fact(num-1, dict);
        dict[num] = res;
        return res;
    }
}

const questionFour = function questionFour(num) {
    // Implement question 4 here
    if (num < 0) {
        return NaN;
    }
    return fast_fact(num, {});
}

module.exports = {
    firstName: "Alex", 
    lastName: "Schlumpf", 
    studentId: "10414246",
    questionOne,
    questionTwo,
    questionThree,
    questionFour
};