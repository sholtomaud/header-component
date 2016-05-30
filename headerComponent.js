'use strict'

const crel = require('crel')
const doc = require('doc-js')
const defaultcss = require('defaultcss')
const fs = require('fs')
const path = require('path')
const style = fs.readFileSync(path.join(__dirname, '/style.css'))

// module.exports = function (fastn, component, type, settings, children) {
//   var ratingControlModel = new fastn.Model({value: 0})
//
//   component.extend('_generic', settings, children)
//   component.setProperty('ratingControl')
//   component.setProperty('value')
//   component.value(0)
//
//   var ratingTemplate = crel('div', {class: 'item'})
//
//   if (!settings.itemTemplate) {
//     settings.itemTemplate = ratingTemplate
//   }
//
//   var ratingControl = new Rating(settings)
//
//   component.ratingControl = ratingControl
//
//   component.render = function () {
//     component.element = ratingControl.element
//
//     doc(ratingControl.element).addClass('rating-control-component')
//     doc(ratingControl.content).addClass('content')
//
//     component.getContainerElement = function () {
//       return ratingControl.content
//     }
//
//     component.emit('render')
//
//     return component
//   }
//
//   function handleValue () {
//     var val = ratingControl.value()
//     console.log('handleValue()', val)
//
//     if (isNaN(val)) {
//       return
//     }
//
//     component.value(val)
//   }
//
//     // ratingControl.on('value', handleValue);
//
//   component.value.on('change', function (val) {
//     console.log('component.value.on(change', val)
//         // ratingControl.value(val);
//   })
//
//   if (settings.style !== false) defaultcss('card-container', style)
//
//   return component
// }
//
// module.exports.expectedComponents = ['_generic']

module.exports = function (fastn, component, type, settings, children) {
  // var lastShowTime

  component.extend('_generic', settings, children)

  component._type = 'swipeout'
  component._attachChildren = false
  component.render = function () {
    component.element = document.createTextNode('')

    component.swipeoutElement = crel('div', {'class': 'card-container'},
            component.containerElement = component.contentElement = crel('div', {'class': 'card'})
        )

    component.emit('render')

    var handler = function (event) {
      if (
                component.show() &&
                component.closable() &&
                !doc(event.target).closest(component.contentElement)
            ) {
        component.show(false)
      }
    }

    document.addEventListener('click', handler, true)

    component.on('destroy', function () {
      document.removeEventListener('click', handler, true)
      updateShow(false)
    })

    return component
  }
  component._insert = function (element, index) {
    if (!component.contentElement) {
      return
    }

    if (component.contentElement.childNodes[index] === element) {
      return
    }

    component.contentElement.insertBefore(element, component.contentElement.childNodes[index])
  }

  var timeout
  function waitForAnimation (callback) {
    if (timeout) {
      clearTimeout(timeout)
    }

        // Allow hide timeout for animations
    timeout = setTimeout(callback, settings.animationTime || 0)
  }

  var state = 'hidden'
  function setswipeoutState (newState) {
    doc(component.swipeoutElement).removeClass(state).addClass(newState)
    state = newState
    component.emit('state', state)
  }

  var contentChild

  function clearContentChild () {
    if (contentChild) {
      component.remove(contentChild)
      contentChild.destroy()
      contentChild = null
    }
  }

  function updateShow (show) {
    if (!component.element) {
      return
    }

    if (show) {
      lastShowTime = Date.now()

      clearContentChild()

      if (component._settings.content) {
        contentChild = fastn.toComponent(component._settings.content(component.scope()))
        component.insert(contentChild)
      }

      if (!component.swipeoutElement.parentNode) {
        crel(document.body, component.swipeoutElement)
      }

      setSwipeoutState('showing')

      waitForAnimation(function () {
        setSwipeoutState('shown')
      })
    } else {
      setSwipeoutState('hiding')

      waitForAnimation(function () {
        setswipeoutState('hidden')

        if (component.swipeoutElement.parentNode) {
          component.swipeoutElement.parentNode.removeChild(component.swipeoutElement)
        }

        clearContentChild()
      })
    }
  }
  if (settings.style !== false) defaultcss('card-container', style)
    // component.setProperty('show');
    // component.setProperty('closable');
    // component.closable(true);
    // component.show.updater(updateShow);

  return component
}

module.exports.expectedComponents = ['text', '_generic', 'list', 'templater']
