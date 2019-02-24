const person = require("./people");
const weather = require("./weather");
const work = require("./work");

async function main(){
    // Test getPersonbyId
    try{
        console.log(`getPersonById 1: ${await person.getPersonById(43)}`)
    }catch(e){
        console.log("getPersonById 1 failed");
    }
    try{
        console.log(await person.getPersonById(-1))
        console.log("getPersonById 2 did not fail");
    }catch(e){
        console.log("getPersonById 2 failed successfully");
    }
    try{
        console.log(await person.getPersonById(1000))
        console.log("getPersonById 3 did not fail");
    }catch(e){
        console.log("getPersonById 3 failed successfully");
    }
    try{
        console.log(await person.getPersonById())
        console.log("getPersonById 4 did not fail");
    }catch(e){
        console.log("getPersonById 4 failed successfully");
    }
    try{
        console.log(`lexIndex 1: ${await person.lexIndex(2)}`)
    }catch(e){
        console.log("lexIndex 1 failed");
    }
    try{
        console.log(await person.lexIndex(-1))
        console.log("lexIndex 2 did not fail");
    }catch(e){
        console.log("lexIndex 2 failed successfully");
    }
    try{
        console.log(await person.lexIndex(1000))
        console.log("lexIndex 3 did not fail");
    }catch(e){
        console.log("lexIndex 3 failed successfully");
    }
    try{
        console.log(await person.getPersonById())
        console.log("lexIndex 4 did not fail");
    }catch(e){
        console.log("lexIndex 4 failed successfully");
    }
    try {
        console.log(await person.firstNameMetrics());
    } catch(e) {
        console.log("firstNameMetrics failed")
    }
    try {
        console.log(`shouldTheyGoOutside 1: ${await weather.shouldTheyGoOutside("Scotty", "Barajaz")}`);
    } catch(e) {
        console.log("shouldTheyGoOutside 1 failed")
    }
    try {
        console.log(`shouldTheyGoOutside 2: ${await weather.shouldTheyGoOutside("Calli", "Ondrasek")}`);
    } catch(e) {
        console.log("shouldTheyGoOutside 2 failed")
    }
    try {
        console.log(`shouldTheyGoOutside 3: ${await weather.shouldTheyGoOutside()}`);
        console.log("shouldTheyGoOutside 3 did not fail")
    } catch(e) {
        console.log("shouldTheyGoOutside 3 failed successfully")
    }
    try {
        console.log(`shouldTheyGoOutside 4: ${await weather.shouldTheyGoOutside("Bob")}`);
        console.log("shouldTheyGoOutside 4 did not fail")
    } catch(e) {
        console.log("shouldTheyGoOutside 4 failed successfully")
    }
    try {
        console.log(`shouldTheyGoOutside 5: ${await weather.shouldTheyGoOutside("Bob", "Smith")}`);
        console.log("shouldTheyGoOutside 5 did not fail")
    } catch(e) {
        console.log("shouldTheyGoOutside 5 failed successfully")
    }
    try {
        console.log(`whereDoTheyWork 1: ${await work.whereDoTheyWork("Demetra", "Durrand")}`)
    } catch(e) {
        console.log("whereDoTheyWork 1 failed")
    }
    try {
        console.log(`whereDoTheyWork 2: ${await work.whereDoTheyWork("Hank", "Tarling")}`)
    } catch(e) {
        console.log("whereDoTheyWork 2 failed")
    }
    try {
        console.log(await work.whereDoTheyWork())
    } catch(e) {
        console.log("whereDoTheyWork 3 failed successfully")
    }
    try {
        console.log(await work.whereDoTheyWork("Bob"))
    } catch(e) {
        console.log("whereDoTheyWork 4 failed successfully")
    }
    try {
        console.log(await work.whereDoTheyWork("Bob", "Smith"))
    } catch(e) {
        console.log("whereDoTheyWork 5 failed successfully")
    }
    try {
        console.log(`findTheHacker 1: ${await work.findTheHacker("79.222.167.180")}`);
    } catch(e) {
        console.log("findTheHacker 1 failed")
    }
    try {
        console.log(await work.findTheHacker("foobar"));
    } catch(e) {
        console.log("findTheHacker 2 failed successfully")
    }
    try {
        console.log(await work.findTheHacker());
    } catch(e) {
        console.log("findTheHacker 3 failed successfully")
    }
}

//call main
main()