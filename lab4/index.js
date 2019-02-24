const animals = require("./data/animals");
const connection = require("./connection/mongoConnection");

async function main() {
    const db = await connection();
    db.dropDatabase();

    const sasha = await animals.create("Sasha", "Dog");
    console.log(sasha);

    const lucy = await animals.create("Lucy", "Dog");


    const allAnimals = await animals.getAllAnimals();
    console.log(allAnimals);

    const duke = await animals.create("Duke", "Walrus");
    console.log(duke);

    const sashita = await animals.rename(sasha._id, "Sashita");
    console.log(sashita);

    await animals.remove(lucy._id);

    console.log(await animals.getAllAnimals());


    await db.serverConfig.close();
    

}

main();