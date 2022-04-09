const translation = require ('./trans')

const trans = translation.translation

const args = process.argv

switch (args[2]) {
    case 'translate':
        const origin = args[3]
        const str     = args[4]
        const transTo = args[5]
        trans(origin,str,transTo)
        break;
    default:
        break;
}