const axios = require("axios");
const PEOPLE_URL = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';

async function getPeople() {
    const { data } = await axios.get(PEOPLE_URL);
    return data; // this will be the array of people
}

async function getPersonById(id) {
    if (!id) {
        throw "Must provide an id";
    }
    if (typeof id !== "number") {
        throw "Id must be of type string";
    }
    const people = await getPeople();
    const person = people.filter(p => p.id === id)[0]
    if (!person) {
        throw "No person with that id."
    }
    return person;
}

async function getPeopleByName(name) {
    if (!name) {
        throw "Must provide a name";
    }
    if (typeof name !== "string") {
        throw "Name must be of type string";
    }
    const people = await getPeople();
    return people.filter(p => 
        p.firstName.includes(name) 
        || p.lastName.includes(name)
        || p.firstName.includes(name.toLowerCase())
        || p.lastName.includes(name.toLowerCase())
    );
}

module.exports = {
    getPeopleByName: getPeopleByName,
    getPersonById: getPersonById
};
