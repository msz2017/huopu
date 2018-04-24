import { render } from '../util';
const toast = ({ msg = '', duration = 2000 }) => {
    render('toast', { msg: 'haha' })
}

export default toast;