// console.log("TESTaaaa");

async function logDog () {
    const response = await fetch("https://dog.ceo/api/breeds/image/random"); 
    const dog = await response.json();
    console.log(dog);
    document.getElementById("demo").innerHTML = "<h1> TEST 12345 </h1>";

}





    