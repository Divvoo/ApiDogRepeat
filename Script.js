console.log("TESTaaaa");

async function logDog () {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");    
    const dog = await response.json();
console.log(dog);
}
