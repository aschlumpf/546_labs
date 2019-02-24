const axios = require('axios');
const PEOPLE_URL = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';
const WEATHER_URL = 'https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json';
const WORK_URL = 'https://gist.githubusercontent.com/robherley/61d560338443ba2a01cde3ad0cac6492/raw/8ea1be9d6adebd4bfd6cf4cc6b02ad8c5b1ca751/work.json';

async function getPeople(){
    const { data } = await axios.get(PEOPLE_URL);
    return data; // this will be the array of people
  }

async function getWork(){
    const { data } = await axios.get(WORK_URL);
    return data; // this will be the array of people
  }


async function whereDoTheyWork(firstName, lastName) {
    if (firstName === undefined || lastName === undefined) {
        throw "Both parameters must be defined.";
    }
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
        throw "Both parameters must be of string type.";
    }
    const people = await getPeople();
    const person = people.filter((person) => (person.firstName === firstName) && (person.lastName === lastName))[0];
    if (person === undefined) {
        throw "Person not found.";
    }
    else {
        const work = await getWork();
        const personWork = work.filter((workPlace) => workPlace.ssn === person.ssn)[0];
        return `${firstName} ${lastName} - ${personWork.jobTitle} at ${personWork.company}.` 
            + ` They will${personWork.willBeFired ? ' ' : ' not '}be fired.`;
    }
}

async function findTheHacker(ip) {
    if (ip === undefined) {
        throw 'Argument must be defined';
    }
    if (typeof ip !== 'string') {
        throw 'Argument must be of type string';
    }
    const work = await getWork();
    const personWork = work.filter((workPlace) => workPlace.ip === ip)[0];
    if (personWork === undefined) {
        throw 'Ip does not exist';
    }
    else {
        const people = await getPeople();
        const person = people.filter((p) => p.ssn === personWork.ssn)[0];
        return `${person.firstName} ${person.lastName} is the hacker!`;
    }
}

// (async () => {
//     console.log(await findTheHacker("79.222.167.180"));
// })()

module.exports = {
    firstName : "Alex",
    lastName : "Schlumpf",
    studentId: "10414246",
    whereDoTheyWork,
    findTheHacker
}