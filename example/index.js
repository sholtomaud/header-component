const fastn = require('fastn')({
  _generic: require('fastn/genericComponent'),
  templater: require('fastn/templaterComponent'),
  list: require('fastn/listComponent'),
  text: require('fastn/textComponent'),
  header: require('../headerComponent'),
  mdi: require('mdi-component/mdiComponent')
}, true)

const ui = fastn('div',
  fasnt('mid', {icon: 'sommit'}),
  fastn('header', {title: 'Some title', leftMenu: 'hi', rightMenu: 'ho'})
)

window.addEventListener('load', function () {
  ui.attach().render()

  document.body.appendChild(ui.element)
})
