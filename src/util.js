import { template, merge } from 'lodash'
import $ from 'balajs';

const render = (tpl, context) => {
    return $(template(tpl)(context))
    // return $(tpl.replace(/{{(.*?)}}/g, (match, key) => context[key.trim()]));
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

const on = function (eventType, selector, handler) {
    const isDelegate = typeof selector === 'string' && typeof handler === 'function';
    if (!isDelegate) {
        handler = selector;
    }
    this.forEach(($element) => {
        $element.addEventListener(eventType, function (evt) {
            if (isDelegate) {
                // http://caniuse.com/#search=closest
                if (this.contains(evt.target.closest(selector))) {
                    handler.call(evt.target, evt);
                }
            }
            else {
                handler.call(this, evt);
            }
        });
    });
    return this;
};

const hide = function () {
    this.forEach(($element) => {
        $element.style.display = 'block';
    });
    return this;
};

const fadein = function () {
    this[0].style.display = 'block';
    setTimeout(() => {
        this[0].style.opacity = '1';
    }, 10);

    return this;
};

const fadeout = function () {
    this[0].style.opacity = '0';
    setTimeout(() => {
        this[0].style.display = 'none';
    }, 300);

    return this;
};

Object.assign($.fn, {
    append,
    remove,
    find,
    addClass,
    removeClass,
    css,
    on,
    fadein,
    fadeout
})

Object.assign($, {
    render,
    noop: function () {

    },
    merge
})

export default $;