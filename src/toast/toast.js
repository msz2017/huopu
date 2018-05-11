import $ from '../util'
import tpl from './toast.html'
const toast = (msg = '', { duration = 2000 } = {}) => {
    const $tpl = $.render(tpl, { msg });
    $('body').append($tpl);

    setTimeout(() => {

    }, duration);
}

export default toast;