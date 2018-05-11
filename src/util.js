// import { template } from 'lodash'

export const render = (tpl, context) => {
    return tpl.replace(/{{(.*?)}}/g, (match, key) => context[key.trim()]);
}