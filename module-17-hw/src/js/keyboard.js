import {kbLang} from './lang';
import {html, parent} from './element';
import dash from '../../node_modules/lodash';

renderKeyboard(html, kbLang, parent);

function renderKeyboard(html, kbLang, parent) {
    const compiled = _.template(html);
    let htmlString = compiled({kbLang});
    parent.innerHTML = htmlString;
}

export default renderKeyboard;
