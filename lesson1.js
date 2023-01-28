const animal = {
    kind: "cat"
}
const cat = Object.create(animal);
cat.color = "brown";
cat.age = 3;

function getAnimalInfo(obj){
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
        console.log(`${key} = ${obj[key]}`);
    }
}

getAnimalInfo(cat)