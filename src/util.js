// import { template } from 'lodash'
import $ from 'balajs';

const render = (tpl, context) => {
    return $(tpl.replace(/{{(.*?)}}/g, (match, key) => context[key.trim()]));
}

const find = function (selector) {
    return this.querySelector(selector);
}

Object.assign($.fn, {
    find,
    append: function ($child) {
        if (!($child instanceof HTMLElement)) {
            $child = $child[0];
        }
        this.forEach(($element) => {
            $element.appendChild($child);
        });
        return this;
    },
    addClass: function (className) {
        this.forEach(($element) => {
            $element.classList.add(className);
        });
        return this;
    },
})

Object.assign($, {
    render,
    noop: function () {

    }
})

export default $;