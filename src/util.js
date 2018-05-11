// import { template } from 'lodash'
import $ from 'balajs';

const render = (tpl, context) => {
    return $(tpl.replace(/{{(.*?)}}/g, (match, key) => context[key.trim()]));
}

const append = function ($child) {
    if (!($child instanceof HTMLElement)) {
        $child = $child[0];
    }
    this.forEach(($element) => {
        $element.appendChild($child);
    });
    return this;
};

const remove = function () {
    this.forEach(($element) => {
        $element.parentNode.removeChild($element);
    });
    return this;
};

const find = function (selector) {
    return $(selector, this);
}

const addClass = function (className) {
    this.forEach(($element) => {
        $element.classList.add(className);
    });
    return this;
};

const removeClass = function (className) {
    this.forEach(($element) => {
        $element.classList.remove(className);
    });
    return this;
};

const css = function (obj) {
    Object.keys(obj).forEach((key) => {
        this.forEach(($element) => {
            $element.style[key] = obj[key];
        });
    });
    return this;
};

Object.assign($.fn, {
    append,
    remove,
    find,
    addClass,
    removeClass,
    css,
})

Object.assign($, {
    render,
    noop: function () {

    }
})

export default $;