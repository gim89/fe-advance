"use strict"

const keyboard = {
    layout: {
        topRow: "qwertyuiop[]",
        middleRow: "asdfghjkl;'",
        bottomRow: "zxcvbnm,./"
    },
    createLayout () {
        return `
        <ul class="topRow">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="middleRow">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ul class="bottomRow">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    `

    },
    addedLayout (obj) {
        
        const body = document.querySelector("body");
        body.innerHTML  = obj;
        let topRow = document.querySelectorAll('ul.topRow > li');
        let arrTop = [...topRow];
        arrTop.map((elem, i) => elem.textContent = keyboard.layout['topRow'][i]);
        let middleRow = document.querySelectorAll('ul.middleRow > li');
        let arrMiddle = [...middleRow];
        arrMiddle.map((elem, i) => elem.textContent = keyboard.layout['middleRow'][i]);
        let bottomRow = document.querySelectorAll('ul.bottomRow > li');
        let arrBottom = [...bottomRow];
        arrBottom.map((elem, i) => elem.textContent = keyboard.layout['bottomRow'][i]);
    }
};

function run() {

    keyboard.createLayout();
    keyboard.addedLayout(keyboard.createLayout());

}

run();
