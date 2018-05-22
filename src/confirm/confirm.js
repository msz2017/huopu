import $ from '../util'
import tpl from './confirm.html'
const confirm_ = (options = {}) => {
    options = Object.assign(options, {
        title: '执行该操作',
        content: {
            text: '',
            className: ''
        },
        yes: {
            cb: $.noop,
            label: '确定',
            className: ''
        }, no: {
            cb: $.noop,
            label: '取消',
            className: ''
        }
    });

    const $tpl = $.render(tpl, options);
    $('body').append($tpl);
    $tpl.fadein();


    $tpl
        .on('click', '.Asz3IRDWma', handler)
        .on('click', '.FUPasI0OYU', handler.bind($tpl[0], true));

    function handler(evt, yes) {
        handler = $.noop;
        $tpl.fadeout();

        if (yes) {
            options.yes.cb.call();
        }
    }
}

export default confirm_;