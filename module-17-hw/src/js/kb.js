import renderKeyboard from './keyboard';
import {lang} from './lang';

function kb (e) {
    const buttons = Array.from(document.querySelectorAll(".keyboard__btn"));
    buttons.map((elem, i, arr) => {
        if (buttons[i].textContent === e.key || e.key === lang.en[i]) {
            buttons[i].classList.add('keyboard__btn--active');
        }
        else {
            buttons[i].classList.remove('keyboard__btn--active');
        }
    });
};

export default kb;
