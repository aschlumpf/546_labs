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
    const person = people[index];
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

function isVowel(char) {
    return char in VOWELS;
}

async function firstNameMetrics() {
    const people = await getPeople();
    let sumFirstNames = 0;
    let sumVowels = 0;
    people.forEach(person => {
        let localsum = 0;
        let localsumVowel = 0;
        person.firstName.split('').forEach(char => {
            const ascii = char.charCodeAt(0);
            localsum += ascii;
            if (isVowel(char)) {
                localsumVowel += ascii;
            }
        });
        sumFirstNames += localsum;
        sumVowels += localsumVowel;
    });
    console.log([sumFirstNames, sumVowels])
}

(async () => {
    console.log(await firstNameMetrics());
})()

module.exports = {
    firstName: "Alex",
    lastName: "Schlumpf",
    studentId: "10414246",
    getPersonById,
    lexIndex
};