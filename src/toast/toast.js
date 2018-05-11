import $ from '../util'
import tpl from './toast.html'
const toast = (msg = '', { duration = 2000 } = {}) => {
    const $tpl = $.render(tpl, { msg });
    $('body').append($tpl);

    setTimeout(() => {
        $tpl.remove();
    }, duration);
}

export default toast;