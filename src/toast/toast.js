import { render } from '../util';
import tpl from './toast.html'
const toast = (msg = '', options = {}) => {
    options = Object.assign({}, { duration: 2000 }, options);

    const $tpl = render(tpl, { msg });
    console.log($tpl)

    setTimeout(() => {

    }, options.duration);

    render('toast', { msg: 'haha' })
}

export default toast;