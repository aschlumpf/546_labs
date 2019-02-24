const mongoCollections = require("../mongoCollections");
const animals = mongoCollections.animals;

async function get(id) {
    if (!id) throw "An id must be provided";
    const animalCollection = await animals();
    const foundAnimal = await animalCollection.findOne({_id : id});
    if (foundAnimal == null) throw "No animal with that id";
    return foundAnimal;
}

async function getAllAnimals() {
    const animalCollection = await animals();
    const allAnimals = await animalCollection.find({}).toArray();
    return allAnimals;
}

async function remove(id) {
    if (!id) throw "Id must be provided";
    const animalCollection = await animals();
    const animalToDelete = await get(id);
    if (!animalToDelete) throw "No animal with that id found";
    const animalDeleteInfo = await animalCollection.removeOne({_id : id});
    return {
        deleted: true,
        animalToDelete
    }
}

async function rename(id, newName) {
    if (!id) throw "Id must be provided";
    if (!newName) throw "A new name must be provided";
    if (typeof newName != 'string')
        throw "newName must be of type string";
    const animalCollection = await animals();
    const currentAnimal = await get(id);
    const updatedAnimal = {
        name : newName,
        animalType : currentAnimal.animalType
    };
    const updatedInfo = await animalCollection.replaceOne({ _id : id}, updatedAnimal);
    if (updatedInfo.modifiedCount === 0) {
        throw "Could not update animal successfully";
    }
    return await get(id);
}

async function create(name, animalType) {
    if (!name) throw "Name must be provided";
    if (!animalType) throw "Animal type must be provided";
    if (typeof name != 'string' || typeof animalType != 'string') {
        throw "Name and animal type must be type string";
    }
    const animalCollection = await animals();
    let newAnimal = {
        name : name,
        animalType : animalType
    };
    const insertAnimal = await animalCollection.insertOne(newAnimal);
    if (insertAnimal.insertCount == 0) throw "New animal could not be inserted";
    const newId = insertAnimal.insertedId;
    const animal = await get(newId);
    return animal;
}

module.exports = {
    create,
    getAllAnimals,
    get,
    remove,
    rename
};