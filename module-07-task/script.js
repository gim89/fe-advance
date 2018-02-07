"use strict"


//<<<-----------------------------ЗАДАНИЕ №1--------------------------------->>>

// function createUserCard() {
//
//     const   body      = document.querySelector("body"),
//             cont      = document.createElement("div"),
//             block     = document.createElement("div"),
//             img       = document.createElement("img"),
//             text      = document.createElement("p"),
//             span      = document.createElement("span"),
//             card      = document.createElement("div"),
//             cardOne   = document.createElement("span"),
//             cardTwo   = document.createElement("span"),
//             cardThree = document.createElement("span"),
//             imgOne    = document.createElement("img"),
//             imgTwo    = document.createElement("img"),
//             imgThree  = document.createElement("img"),
//             iOne      = document.createElement("i"),
//             iTwo      = document.createElement("i");
//
//     body.prepend(cont);
//     cont.prepend(block);
//     block.prepend(img);
//     img.after(text);
//     text.after(span);
//     span.after(card);
//     card.prepend(cardOne);
//     cardOne.after(cardTwo);
//     cardTwo.after(cardThree);
//     cardOne.prepend(imgOne);
//     imgOne.after(iOne);
//     cardTwo.prepend(imgTwo);
//     imgTwo.after(iTwo);
//     cardThree.prepend(imgThree);
//
//
//
//     cont.classList.add("container");
//     block.classList.add("block");
//
//     img.classList.add("img");
//     img.setAttribute("src", "img-one.jpg");
//
//     text.textContent = "Claudia Cardenale";
//     text.classList.add("text");
//
//     span.textContent = "23 Philadelphia, PA";
//     span.classList.add("span");
//
//     card.classList.add("card");
//     iOne.textContent = "19";
//     iTwo.textContent = "5";
//     iOne.classList.add("card-i");
//     iTwo.classList.add("card-i");
//
//     cardOne.classList.add("card-span");
//     cardTwo.classList.add("card-span");
//     cardThree.classList.add("card-span");
//
//     imgOne.classList.add("card-img");
//     imgTwo.classList.add("card-img");
//     imgThree.classList.add("card-img");
//     imgThree.classList.add("card-img-three");
//
//     imgOne.setAttribute("src", "strawberry.png");
//     imgTwo.setAttribute("src", "lime.png");
//     imgThree.setAttribute("src", "interface.png");
//
// }
//
// createUserCard();



//<<<-----------------------------ЗАДАНИЕ №2--------------------------------->>>

// function createUserCard() {
//     const post = `
//     <div class="container">
//         <div class="block">
//             <img class="img" src="img-one.jpg">
//             <p class="text">Claudia Cardenale</p>
//             <span class="span">23 Philadelphia, PA</span>
//             <div class="card">
//                 <span class="card-span">
//                     <img class="card-img" src="strawberry.png">
//                     <i class="card-i">19</i>
//                 </span>
//                 <span class="card-span">
//                     <img class="card-img" src="lime.png">
//                     <i class="card-i">5</i>
//                 </span>
//                 <span class="card-span">
//                     <img class="card-img card-img-three" src="interface.png">
//                 </span>
//             </div>
//         </div>
//     </div>
//     `;
//
//     return post;
// }
//
// const post      =  createUserCard();
// const body      = document.querySelector("body");
// body.innerHTML  = post;



//<<<-----------------------------ЗАДАНИЕ №3(1)------------------------------>>>

// const user = {
//     imgOne: 'img-one.jpg',
//     imgTwo: 'img-two.jpg',
//     imgThree: 'img-three.jpg',
//     nameOne: 'Claudia Cardinale',
//     nameTwo: 'Dgenifer Ponola',
//     nameThree: 'Filana Guful',
//     ageOne: 29,
//     ageTwo: 41,
//     ageThree: 23,
//     locationOne: 'Philadelphia, PA',
//     locationTwo: 'California, PA',
//     locationThree: 'California, PA',
//     strawberriesOne: 19,
//     strawberriesTwo: 20,
//     strawberriesThree: 21,
//     lemonsOne: 5,
//     lemonsTwo: 6,
//     lemonsThree: 7,
//     createUserCardOne () {
//         const postOne = `
//             <div class="container">
//                 <div class="block">
//                     <img class="img" src="${this.imgOne}">
//                     <p class="text">${this.nameOne}</p>
//                     <span class="span">${this.ageOne}${this.locationOne}</span>
//                     <div class="card">
//                         <span class="card-span">
//                             <img class="card-img" src="strawberry.png">
//                             <i class="card-i">${this.strawberriesOne}</i>
//                         </span>
//                         <span class="card-span">
//                             <img class="card-img" src="lime.png">
//                             <i class="card-i">${this.lemonsOne}</i>
//                         </span>
//                         <span class="card-span">
//                             <img class="card-img card-img-three" src="interface.png">
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         `;
//
//         return postOne;
//     },
//     createUserCardTwo () {
//         const postTwo = `
//             <div class="container">
//                 <div class="block">
//                     <img class="img" src="${this.imgTwo}">
//                     <p class="text">${this.nameTwo}</p>
//                     <span class="span">${this.ageTwo}${this.locationTwo}</span>
//                     <div class="card">
//                         <span class="card-span">
//                             <img class="card-img" src="strawberry.png">
//                             <i class="card-i">${this.strawberriesTwo}</i>
//                         </span>
//                         <span class="card-span">
//                             <img class="card-img" src="lime.png">
//                             <i class="card-i">${this.lemonsTwo}</i>
//                         </span>
//                         <span class="card-span">
//                             <img class="card-img card-img-three" src="interface.png">
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         `;
//
//         return postTwo;
//     },
//     createUserCardThree () {
//         const postThree = `
//             <div class="container">
//                 <div class="block">
//                     <img class="img" src="${this.imgThree}">
//                     <p class="text">${this.nameThree}</p>
//                     <span class="span">${this.ageThree}${this.locationThree}</span>
//                     <div class="card">
//                         <span class="card-span">
//                             <img class="card-img" src="strawberry.png">
//                             <i class="card-i">${this.strawberriesThree}</i>
//                         </span>
//                         <span class="card-span">
//                             <img class="card-img" src="lime.png">
//                             <i class="card-i">${this.lemonsThree}</i>
//                         </span>
//                         <span class="card-span">
//                             <img class="card-img card-img-three" src="interface.png">
//                         </span>
//                     </div>
//                 </div>
//             </div>
//         `;
//
//         return postThree;
//     }
//
// };
//
//     function go() {
//
//       const postOne      =  user.createUserCardOne();
//       const postTwo      =  user.createUserCardTwo();
//       const postThree    =  user.createUserCardThree();
//
//       const body         =  document.querySelector("body");
//
//       body.insertAdjacentHTML('afterbegin', postOne);
//       body.insertAdjacentHTML('afterbegin', postTwo);
//       body.insertAdjacentHTML('afterbegin', postThree);
//
//     }
//
//     go();

//<<<-----------------------------ЗАДАНИЕ №3(2)------------------------------>>>

// function User (img, name, age, location, strawberries, lemons) {
//     this.img = img;
//     this.name = name;
//     this.age = age;
//     this.location = location;
//     this.strawberries = strawberries;
//     this.lemons = lemons;
// }
//
// const userOne       = new User('img-one.jpg', 'Claudia Cardinale', 29, 'Philadelphia, PA', 19, 5);
// const userTwo       = new User('img-two.jpg', 'Dgenifer Ponola', 29, 'California, PA', 20, 6);
// const userThree     = new User('img-three.jpg', 'Filana Guful', 29, 'California, PA', 21, 7);
// //
// const createUserCard = function () {
//     return `
//                 <div class="container">
//                     <div class="block">
//                         <img class="img" src="${this.img}">
//                         <p class="text">${this.name}</p>
//                         <span class="span">${this.age} ${this.location}</span>
//                         <div class="card">
//                             <span class="card-span">
//                                 <img class="card-img" src="strawberry.png">
//                                 <i class="card-i">${this.strawberries}</i>
//                             </span>
//                             <span class="card-span">
//                                 <img class="card-img" src="lime.png">
//                                 <i class="card-i">${this.lemons}</i>
//                             </span>
//                             <span class="card-span">
//                                 <img class="card-img card-img-three" src="interface.png">
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             `;
// }
//
// const body      = document.querySelector("body");
//
// body.innerHTML  = createUserCard.call(userOne);
// body.innerHTML += createUserCard.call(userTwo);
// body.innerHTML += createUserCard.call(userThree);



//<<<-----------------------------ЗАДАНИЕ №3(3)------------------------------>>>


// const createUserCard = function (img, name, age, location, strawberries, lemons) {
//     return `
//                 <div class="container">
//                     <div class="block">
//                         <img class="img" src="${img}">
//                         <p class="text">${name}</p>
//                         <span class="span">${age} ${location}</span>
//                         <div class="card">
//                             <span class="card-span">
//                                 <img class="card-img" src="strawberry.png">
//                                 <i class="card-i">${strawberries}</i>
//                             </span>
//                             <span class="card-span">
//                                 <img class="card-img" src="lime.png">
//                                 <i class="card-i">${lemons}</i>
//                             </span>
//                             <span class="card-span">
//                                 <img class="card-img card-img-three" src="interface.png">
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             `;
// }
//
// const body      = document.querySelector("body");
//
// body.innerHTML  = createUserCard('img-one.jpg', 'Claudia Cardinale', 29, 'Philadelphia, PA', 19, 5);
// body.innerHTML += createUserCard('img-two.jpg', 'Dgenifer Ponola', 29, 'California, PA', 20, 6);
// body.innerHTML += createUserCard('img-three.jpg', 'Filana Guful', 29, 'California, PA', 21, 7);



//<<<-----------------------------ЗАДАНИЕ №3(4)------------------------------>>>


const userOne = {

    img: 'img-one.jpg',
    name: 'Claudia Cardinale',
    age: 29,
    location: 'Philadelphia, PA',
    strawberries: 19,
    lemons: 5
}

const userTwo = {

    img: 'img-two.jpg',
    name: 'Dgenifer Ponola',
    age: 41,
    location: 'California, PA',
    strawberries: 20,
    lemons: 6
}

const userThree = {

    img: 'img-three.jpg',
    name: 'Filana Guful',
    age: 23,
    location: 'California, PA',
    strawberries: 21,
    lemons: 7
}

const createUserCard = function (user) {
    return `
            <div class="container">
                <div class="block">
                    <img class="img" src="${this.img}">
                    <p class="text">${this.name}</p>
                    <span class="span">${this.age} ${this.location}</span>
                    <div class="card">
                        <span class="card-span">
                            <img class="card-img" src="strawberry.png">
                            <i class="card-i">${this.strawberries}</i>
                        </span>
                        <span class="card-span">
                            <img class="card-img" src="lime.png">
                            <i class="card-i">${this.lemons}</i>
                        </span>
                        <span class="card-span">
                            <img class="card-img card-img-three" src="interface.png">
                        </span>
                    </div>
                </div>
            </div>
        `;
}

const body      = document.querySelector("body");

body.innerHTML  = createUserCard.call(userOne);
body.innerHTML += createUserCard.call(userTwo);
body.innerHTML += createUserCard.call(userThree);
