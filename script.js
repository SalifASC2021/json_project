function profiles(index) { 
    let newDiv = document.createElement("div");
let text = document.createElement("p");
let newImg = document.createElement("img");


text.innerHTML = "Name: " + randUser.results[index].name.first + " " + randUser.results[index].name.last + "<br>" + "Email: " + randUser.results[0].email;

newImg.src = randUser.results[index].picture.large;


newDiv.appendChild(newImg);
newDiv.appendChild(text);

theProfile.appendChild(newDiv);

 }



console.dir(randUser);

console.dir(randUser.results[0]);
console.dir(randUser.results[0].name.first);


let theProfile = document.querySelector("#profile");



for (let i =0; i<10; i++) {
    
    profiles(i);
}