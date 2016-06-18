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

  component.render = function () {
    component.element = crel('div', {class: 'header'})
  }
  return component
}

module.exports.expectedComponents = ['_generic']
