const PEOPLE_URL = 'https://gist.githubusercontent.com/robherley/5112d73f5c69a632ef3ae9b7b3073f78/raw/24a7e1453e65a26a8aa12cd0fb266ed9679816aa/people.json';

async function getPeople(){
    const { data } = await axios.get(PEOPLE_URL);
    return data; // this will be the array of people
  }

function getPersonById(index) {
    if (index === undefined || (typeof index !== 'number')) {
        throw "Index must be defined and of number type.";
    }
    if (index < 0) {
        throw "Index out of bounds";
    }
    const people = getPeople();
    if (Array.isArray(people)) {
        console.log("is array");
    }
    // if (index >= people.length) {
    //     throw "Index out of bounds";
    // }

    // return people[index]['firstName'] + ' ' + people[index]['lastName'];
}

console.log(getPersonById(42));

module.exports = {
    firstName: "Alex",
    lastName: "Schlumpf",
    studentId: "10414246",
    getPersonById
};