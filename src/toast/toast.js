import $ from '../util'
import tpl from './toast.html'
const toast = (msg = '', { duration = 2000 } = {}) => {
    const $tpl = $.render(tpl, { msg });
    $('body').append($tpl);
    $tpl.fadein();
    setTimeout(() => {
        $tpl.css({ opacity: 0 })
    }, duration);

    setTimeout(() => {
        $tpl.remove();
    }, duration + 300);
}

export default toast;