"use strict"

// const keyboard = {
//     layout: {
//         "topRow": "qwertyuiop[]",
//         "middleRow": "asdfghjkl;'",
//         "bottomRow": "zxcvbnm,./",
//     },
//     createLayout: function (l) {
//
//         // -------------------topRow: "qwertyuiop[]"---------------------->>>
//
//         const body = document.querySelector("body");
//         let ulTop = document.createElement('ul');
//         ulTop.classList.add('topRow');
//
//         for (let i = 0; i < keyboard.layout.topRow.length; i += 1){
//
//             let li = document.createElement('li');
//             ulTop.prepend(li);
//         }
//         body.prepend(ulTop);
//
//         let topRow = document.querySelectorAll('ul.topRow > li');
//         let arrTop = [...topRow];
//         arrTop.map((elem, i) => elem.textContent = keyboard.layout['topRow'][i]);
//
//         // -------------------middleRow: "asdfghjkl;'"---------------------->>>
//
//         let ulMiddle = document.createElement('ul');
//         ulMiddle.classList.add("middleRow");
//
//         for (let i = 0; i < this.layout.middleRow.length; i += 1){
//
//             let li = document.createElement('li');
//             ulMiddle.prepend(li);
//         }
//         ulTop.after(ulMiddle);
//
//         let middleRow = document.querySelectorAll('ul.middleRow > li');
//         let arrMiddle = [...middleRow];
//         arrMiddle.map((elem, i) => elem.textContent = keyboard.layout['middleRow'][i]);
//
//         // -------------------bottomRow: "zxcvbnm,./"---------------------->>>
//
//         let ulBottom = document.createElement('ul');
//         ulBottom.classList.add("bottomRow");
//
//         for (let i = 0; i < this.layout.bottomRow.length; i += 1){
//
//             let li = document.createElement('li');
//             ulBottom.prepend(li);
//         }
//         ulMiddle.after(ulBottom);
//
//         let bottomRow = document.querySelectorAll('ul.bottomRow > li');
//         let arrBottom = [...bottomRow];
//         arrBottom.map((elem, i) => elem.textContent = keyboard.layout['bottomRow'][i]);
//     }
// };
//
// function run() {
//
//     keyboard.createLayout();
// }
// run();

const keyboard = {
    topRow: "qwertyuiop[]",
    middleRow: "asdfghjkl;'",
    bottomRow: "zxcvbnm,./",
    createLayout: function(kb) {
        const body = document.querySelector("body");
        let ul = document.createElement('ul');
        for (let i = 0; i < kb.length; i += 1) {
            let li = document.createElement('li');
            li.textContent = kb[i]
            ul.appendChild(li);
        }
        body.appendChild(ul);
    }
};

function run() {

    keyboard.createLayout(keyboard.topRow);
    keyboard.createLayout(keyboard.middleRow);
    keyboard.createLayout(keyboard.bottomRow);
};
run();



// const keyboard = {
//     layout: {
//         topRow: "qwertyuiop[]",
//         middleRow: "asdfghjkl;'",
//         bottomRow: "zxcvbnm,./"
//     },
//     createLayout () {
//         return `
//             <ul class="topRow">
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//             </ul>
//             <ul class="middleRow">
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//             </ul>
//             <ul class="bottomRow">
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//                 <li></li>
//             </ul>
//         `
//     },
//     addedLayout (obj) {
//
//         const body = document.querySelector("body");
//         body.innerHTML = obj;
//         let topRow = document.querySelectorAll('ul.topRow > li');
//         let arrTop = [...topRow];
//         arrTop.map((elem, i) => elem.textContent = keyboard.layout['topRow'][i]);
//         let middleRow = document.querySelectorAll('ul.middleRow > li');
//         let arrMiddle = [...middleRow];
//         arrMiddle.map((elem, i) => elem.textContent = keyboard.layout['middleRow'][i]);
//         let bottomRow = document.querySelectorAll('ul.bottomRow > li');
//         let arrBottom = [...bottomRow];
//         arrBottom.map((elem, i) => elem.textContent = keyboard.layout['bottomRow'][i]);
//     }
// };
//
// function run() {
//
//     keyboard.createLayout();
//     keyboard.addedLayout(keyboard.createLayout());
// }
//
// run();
