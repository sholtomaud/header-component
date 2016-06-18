'use strict'

const crel = require('crel')
const defaultcss = require('defaultcss')
const fs = require('fs')
const path = require('path')
const style = fs.readFileSync(path.join(__dirname, '/style.css'))

module.exports = function (fastn, component, type, settings, children) {
  if (settings.style !== false) defaultcss('header', style)

  component.extend('_generic', settings, children)
  component.setProperty('valid')

  // console.log('settings', settings)

  component.setProperty('leftMenu')
  component.leftMenu(settings.leftMenu !== false)

  component.setProperty('title')
  component.title(settings.title !== false)
  // component.title.value = settings.title

  component.setProperty('rightMenu')
  component.rightMenu(settings.rightMenu !== false)

  component.leftMenu = crel('div', {
    class: 'leftMenu'
  }, settings.leftMenu)

  function leftMenu () {
    if (!settings.leftMenu) {

    }

  }

  const leftIcon = require('svg-icon-component')({

          // Function to resolve the url location of an icon.
    resolvePath: function (iconName) {

      return 'foo/bar/baz' + iconName + '.svg'

    }

  })



  component.title = crel('div', {
    class: 'title'
  }, settings.title)

  component.rightMenu = crel('div', {
    class: 'rightMenu'
  }, settings.rightMenu)

  component.render = function () {
    component.element = crel('div', {class: 'header'},
      component.leftMenu || '',
      component.title || '',
      component.rightMenu || ''
    )
    component.emit('render')

  }
  return component
}

module.exports.expectedComponents = ['_generic']
