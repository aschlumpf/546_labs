const axios = require('axios');
const PEOPLE_URL = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';
const WEATHER_URL = 'https://gist.githubusercontent.com/robherley/1b950dc4fbe9d5209de4a0be7d503801/raw/eee79bf85970b8b2b80771a66182aa488f1d7f29/weather.json';

async function getPeople(){
    const { data } = await axios.get(PEOPLE_URL);
    return data; // this will be the array of people
  }

async function getWeather(){
    const { data } = await axios.get(WEATHER_URL);
    return data; // this will be the array of people
  }


async function shouldTheyGoOutside(firstName, lastName) {
    if (firstName === undefined || lastName === undefined) {
        throw "Both parameters must be defined.";
    }
    if (typeof firstName !== 'string' || typeof lastName !== 'string') {
        throw "Both parameters must be of string type.";
    }
    const people = await getPeople();
    const weather = await getWeather();
    const person = people.filter((person) => (person.firstName === firstName) && (person.lastName === lastName))[0];
    if (person === undefined) {
        throw "Person not found."
    }
    else {
        const weatherAtZip = weather.filter((loc) => loc.zip == person.zip)[0].temp;
        const shouldGoOut = weatherAtZip >= 34.0;
        return `${shouldGoOut ? "Yes," : "No,"} ${firstName} ${shouldGoOut ? "should" : "should not"} go outside.`
    }

}

(async () => {
    console.log(await shouldTheyGoOutside("Calli", "Ondrasek"));
})()

module.exports = {
    firstName : "Alex",
    lastName : "Schlumpf",
    studentId: "10414246",
    shouldTheyGoOutside
}