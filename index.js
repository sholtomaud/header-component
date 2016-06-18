// 'use strict'
//
// module.exports = function (options) {
//   const fastn = require('fastn')({
//     _generic: require('fastn/genericComponent'),
//     header: require('./headerComponent')
//   })
//
//   return function (settings) {
//     fastn('header', settings).attach().render()
//   }
// }

var fastn = require('fastn')({
  _generic: require('fastn/genericComponent'),
  list: require('fastn/listComponent'),
  templater: require('fastn/templaterComponent'),
  text: require('fastn/textComponent'),
  header: require('./headerComponent')
})

module.exports = function (settings) {
  return fastn('header', settings).attach().render()
}
