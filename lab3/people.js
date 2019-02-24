const PEOPLE_URL = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';
const axios = require('axios');

const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

async function getPeople(){
    const { data } = await axios.get(PEOPLE_URL);
    return data; // this will be the array of people
  }

async function getPersonById(index) {
    if (index === undefined || (typeof index !== 'number')) {
        throw "Index must be defined and of number type.";
    }
    if (index < 0) {
        throw "Index out of bounds";
    }
    const people = await getPeople();
    if (index >= people.length) {
        throw "Index out of bounds"
    }
    const person = people.filter((p) => p.id === index)[0];
    return `${person.firstName} ${person.lastName}`;
}

function compare(p1, p2) {
    return p1.lastName.localeCompare(p2.lastName);
}

async function lexIndex(index) {
    if (index === undefined || (typeof index !== 'number')) {
        throw "Index must be defined and of number type.";
    }
    if (index < 0) {
        throw "Index out of bounds";
    }
    const people = await getPeople();
    if (index >= people.size) {
        throw "Index out of bounds"; 
    }
    const peopleSorted = people.sort(compare);
    const person = peopleSorted[index];
    return `${person.firstName} ${person.lastName}`;
}

function sumVowels(string) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        if (VOWELS.indexOf(string[i]) != -1) {
            sum++;
        }
    }
    return sum;
}

async function firstNameMetrics() {
    const people = await getPeople();
    let sumFirstNames = 0;
    let sumFirstNameVowels = 0;
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let longest = "";
    let shortest = "";
    let sumFirstNameCons;
    people.forEach(person => sumFirstNames += person.firstName.length);
    people.forEach(person => sumFirstNameVowels += sumVowels(person.firstName));
    people.forEach(person => {
        if (person.firstName.length > max) {
            max = person.firstName.length;
            longest = person.firstName;
        }
    });
    people.forEach(person => {
        if (person.firstName.length < min) {
            min = person.firstName.length;
            shortest = person.firstName;
        }
    });
    sumFirstNameCons = sumFirstNames - sumFirstNameVowels;
    return {
        totalLetters: sumFirstNames,
        totalVowels: sumFirstNameVowels,
        totalConsonants: sumFirstNameCons,
        longestName: longest,
        shortestName: shortest
    };
}

// (async () => {
//     console.log(await getPersonById(43));
// })()

module.exports = {
    firstName: "Alex",
    lastName: "Schlumpf",
    studentId: "10414246",
    getPersonById,
    lexIndex,
    firstNameMetrics
};