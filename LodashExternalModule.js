//So we need to install the external modules in order to use them.

const lodash = require('lodash')

const items = [1,[2,[3,[4]]]]
const newitems = lodash.flattenDeep(items)
console.log(newitems)