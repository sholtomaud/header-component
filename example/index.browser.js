(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"../headerComponent":2,"fastn":20,"fastn/genericComponent":19,"fastn/listComponent":22,"fastn/templaterComponent":26,"fastn/textComponent":27,"mdi-component/mdiComponent":40}],2:[function(require,module,exports){
(function (Buffer){
'use strict'

const crel = require('crel')
const defaultcss = require('defaultcss')

const path = require('path')
const style = Buffer("LyoqCiAqCiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuCiAqCiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSAiTGljZW5zZSIpOwogKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuCiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdAogKgogKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wCiAqCiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUKICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gIkFTIElTIiBCQVNJUywKICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuCiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQKICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuCiAqLwoKKiB7CiAgYm94LXNpemluZzogYm9yZGVyLWJveDsKfQoKaHRtbCwgYm9keSB7CiAgcGFkZGluZzogMDsKICBtYXJnaW46IDA7CiAgYmFja2dyb3VuZDogI0ZBRkFGQTsKICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7Cn0KCi5oZWFkZXIgewogIHdpZHRoOiAxMDAlOwogIGhlaWdodDogNTZweDsKICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjQpOwogIGJhY2tncm91bmQ6ICMzMzM7CiAgY29sb3I6ICNGRkY7CiAgZGlzcGxheTogZmxleDsKICBmbGV4LWRpcmVjdGlvbjogcm93OwogIGFsaWduLWl0ZW1zOiBjZW50ZXI7CiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOwogIHBhZGRpbmc6IDAgMTZweDsKfQoKLmhlYWRlcl9fbWVudS10b2dnbGUgewpiYWNrZ3JvdW5kOiBub25lOwpib3JkZXI6IG5vbmU7CndpZHRoOiAyNHB4OwpoZWlnaHQ6IDI0cHg7CnBhZGRpbmc6IDA7Cm1hcmdpbjogMDsKY29sb3I6ICNGRkY7Cn0KCi50aXRsZXsKICBmb250LXNpemU6IDMwcHg7Cn0K","base64")

module.exports = function (fastn, component, type, settings, children) {
  if (settings.style !== false) defaultcss('header', style)

  component.extend('_generic', settings, children)
  component.setProperty('valid')

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

    return component
  }
  return component
}

module.exports.expectedComponents = ['_generic']

}).call(this,require("buffer").Buffer)
},{"buffer":5,"crel":9,"defaultcss":11,"path":34}],3:[function(require,module,exports){
'use strict'

exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

function init () {
  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i]
    revLookup[code.charCodeAt(i)] = i
  }

  revLookup['-'.charCodeAt(0)] = 62
  revLookup['_'.charCodeAt(0)] = 63
}

init()

function toByteArray (b64) {
  var i, j, l, tmp, placeHolders, arr
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0

  // base64 is 4/3 + up to two characters of the original data
  arr = new Arr(len * 3 / 4 - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0, j = 0; i < l; i += 4, j += 3) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],4:[function(require,module,exports){

},{}],5:[function(require,module,exports){
(function (global){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.foo = function () { return 42 }
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; i++) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  that.write(string, encoding)
  return that
}

function fromArrayLike (that, array) {
  var length = checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; i++) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'binary':
      // Deprecated
      case 'raw':
      case 'raws':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'binary':
        return binarySlice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

function arrayIndexOf (arr, val, byteOffset, encoding) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var foundIndex = -1
  for (var i = 0; byteOffset + i < arrLength; i++) {
    if (read(arr, byteOffset + i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
      if (foundIndex === -1) foundIndex = i
      if (i - foundIndex + 1 === valLength) return (byteOffset + foundIndex) * indexSize
    } else {
      if (foundIndex !== -1) i -= i - foundIndex
      foundIndex = -1
    }
  }
  return -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset >>= 0

  if (this.length === 0) return -1
  if (byteOffset >= this.length) return -1

  // Negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)

  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  if (Buffer.isBuffer(val)) {
    // special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(this, val, byteOffset, encoding)
  }
  if (typeof val === 'number') {
    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
    }
    return arrayIndexOf(this, [ val ], byteOffset, encoding)
  }

  throw new TypeError('val must be string, number or Buffer')
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new Error('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function binaryWrite (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'binary':
        return binaryWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function binarySlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; i--) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; i++) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; i++) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; i++) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; i++) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"base64-js":3,"ieee754":30,"isarray":6}],6:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],7:[function(require,module,exports){
module.exports = function(element){
    var lastClasses = [];

    return function(classes){

        if(!arguments.length){
            return lastClasses.join(' ');
        }

        function cleanClassName(result, className){
            if(typeof className === 'string' && className.match(/\s/)){
                className = className.split(' ');
            }

            if(Array.isArray(className)){
                return result.concat(className.reduce(cleanClassName, []));
            }

            if(className != null && className !== '' && typeof className !== 'boolean'){
                result.push(String(className).trim());
            }

            return result;
        }

        var newClasses = cleanClassName([], classes),
            currentClasses = element.className ? element.className.split(' ') : [];

        lastClasses.map(function(className){
            if(!className){
                return;
            }

            var index = currentClasses.indexOf(className);

            if(~index){
                currentClasses.splice(index, 1);
            }
        });

        currentClasses = currentClasses.concat(newClasses);
        lastClasses = newClasses;

        element.className = currentClasses.join(' ');
    };
};

},{}],8:[function(require,module,exports){
(function (Buffer){
var clone = (function() {
'use strict';

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
*/
function clone(parent, circular, depth, prototype) {
  var filter;
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    filter = circular.filter;
    circular = circular.circular
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth == 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      child = new Buffer(parent.length);
      parent.copy(child);
      return child;
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
};
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
};
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
};
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
};
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
};
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}

}).call(this,require("buffer").Buffer)
},{"buffer":5}],9:[function(require,module,exports){
//Copyright (C) 2012 Kory Nunn

//Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

/*

    This code is not formatted for readability, but rather run-speed and to assist compilers.

    However, the code's intention should be transparent.

    *** IE SUPPORT ***

    If you require this library to work in IE7, add the following after declaring crel.

    var testDiv = document.createElement('div'),
        testLabel = document.createElement('label');

    testDiv.setAttribute('class', 'a');
    testDiv['className'] !== 'a' ? crel.attrMap['class'] = 'className':undefined;
    testDiv.setAttribute('name','a');
    testDiv['name'] !== 'a' ? crel.attrMap['name'] = function(element, value){
        element.id = value;
    }:undefined;


    testLabel.setAttribute('for', 'a');
    testLabel['htmlFor'] !== 'a' ? crel.attrMap['for'] = 'htmlFor':undefined;



*/

(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define(factory);
    } else {
        root.crel = factory();
    }
}(this, function () {
    var fn = 'function',
        obj = 'object',
        nodeType = 'nodeType',
        textContent = 'textContent',
        setAttribute = 'setAttribute',
        attrMapString = 'attrMap',
        isNodeString = 'isNode',
        isElementString = 'isElement',
        d = typeof document === obj ? document : {},
        isType = function(a, type){
            return typeof a === type;
        },
        isNode = typeof Node === fn ? function (object) {
            return object instanceof Node;
        } :
        // in IE <= 8 Node is an object, obviously..
        function(object){
            return object &&
                isType(object, obj) &&
                (nodeType in object) &&
                isType(object.ownerDocument,obj);
        },
        isElement = function (object) {
            return crel[isNodeString](object) && object[nodeType] === 1;
        },
        isArray = function(a){
            return a instanceof Array;
        },
        appendChild = function(element, child) {
          if(!crel[isNodeString](child)){
              child = d.createTextNode(child);
          }
          element.appendChild(child);
        };


    function crel(){
        var args = arguments, //Note: assigned to a variable to assist compilers. Saves about 40 bytes in closure compiler. Has negligable effect on performance.
            element = args[0],
            child,
            settings = args[1],
            childIndex = 2,
            argumentsLength = args.length,
            attributeMap = crel[attrMapString];

        element = crel[isElementString](element) ? element : d.createElement(element);
        // shortcut
        if(argumentsLength === 1){
            return element;
        }

        if(!isType(settings,obj) || crel[isNodeString](settings) || isArray(settings)) {
            --childIndex;
            settings = null;
        }

        // shortcut if there is only one child that is a string
        if((argumentsLength - childIndex) === 1 && isType(args[childIndex], 'string') && element[textContent] !== undefined){
            element[textContent] = args[childIndex];
        }else{
            for(; childIndex < argumentsLength; ++childIndex){
                child = args[childIndex];

                if(child == null){
                    continue;
                }

                if (isArray(child)) {
                  for (var i=0; i < child.length; ++i) {
                    appendChild(element, child[i]);
                  }
                } else {
                  appendChild(element, child);
                }
            }
        }

        for(var key in settings){
            if(!attributeMap[key]){
                element[setAttribute](key, settings[key]);
            }else{
                var attr = attributeMap[key];
                if(typeof attr === fn){
                    attr(element, settings[key]);
                }else{
                    element[setAttribute](attr, settings[key]);
                }
            }
        }

        return element;
    }

    // Used for mapping one kind of attribute to the supported version of that in bad browsers.
    crel[attrMapString] = {};

    crel[isElementString] = isElement;

    crel[isNodeString] = isNode;

    if(typeof Proxy !== 'undefined'){
        return new Proxy(crel, {
            get: function(target, key){
                !(key in crel) && (crel[key] = crel.bind(null, key));
                return crel[key];
            }
        });
    }

    return crel;
}));

},{}],10:[function(require,module,exports){
function compare(a, b, visited){
    var aType = typeof a;

    if(aType !== typeof b){
        return false;
    }

    if(a == null || b == null || !(aType === 'object' || aType === 'function')){
        if(aType === 'number' && isNaN(a) && isNaN(b)){
            return true;
        }

        return a === b;
    }

    if(Array.isArray(a) !== Array.isArray(b)){
        return false;
    }

    var aKeys = Object.keys(a),
        bKeys = Object.keys(b);

    if(aKeys.length !== bKeys.length){
        return false;
    }

    var equal = true;

    if(!visited){
        visited = new Set();
    }

    aKeys.forEach(function(key){
        if(!(key in b)){
            equal = false;
            return;
        }
        if(visited.has(a[key])){
            return;
        }
        visited.add(a[key]);
        if(!compare(a[key], b[key], visited)){
            equal = false;
            return;
        }
    });

    return equal;
};

module.exports = function(a, b){
    return compare(a, b);
}
},{}],11:[function(require,module,exports){
/* jshint node: true */
'use strict';

/**
  # defaultcss

  A very simple module for creating a little bit of defaultcss.  This is
  really useful if you are creating a small JS widget that you want to be
  completely stylable by the application implementer but would also like it
  to look "kind of ok" if someone want to have a quick play.

  ## How it Works

  The provided css text is injected into the HTML document within the document
  `<head>` prior to any other `<link>` or `<style>` tags.  This ensures that
  any definitions that are made within your provided CSS have ample
  opportunity to be overridden by user defined CSS.

  ## Example Usage

  <<< examples/widget.js

  ## Reference

  ### defaultcss

  ```
  defaultcss(label, csstext)
  ```

  Create a new default `style` element and use the provided `label` to
  generate an id for the element "%label%_defaultstyle".  If an existing
  element with that id is found, then do nothing.

  If not, then create the new element and use the provided `csstext` as
  `innerText` for th element.
**/
module.exports = function(label, text) {
  var styleId = label + '_defaultstyle';

  // look for a DOM element with the style id
  var styleEl = document.getElementById(styleId);

  // find the first <link> or <style> tag within the document head
  var firstStyleDef = document.querySelector('link[rel="stylesheet"],style');

  // if we can find a DOM element with that id, then do nothing as a default
  // style has already been applied
  if (styleEl) {
    return styleEl;
  }

  // otherwise, create a style element
  styleEl = document.createElement('style');
  styleEl.innerHTML = text;

  // insert the style element, in order or preference
  // 1. before the first style related element in the page
  if (firstStyleDef) {
    firstStyleDef.parentNode.insertBefore(styleEl, firstStyleDef);
  }
  // 2. to the end of the HEAD
  else if (document.head) {
    document.head.appendChild(styleEl);
  }
  // 3. as the first element in the body
  else if (document.body && document.body.childNodes.length > 0) {
    document.body.insertBefore(styleEl, document.body.childNodes[0]);
  }
  // 4. in the body
  else if (document.body) {
    document.body.appendChild(styleEl);
  }

  return styleEl;
};

},{}],12:[function(require,module,exports){
(function (global){
var EventEmitter = require('events').EventEmitter,
    isInstance = require('is-instance');

function toArray(items){
    return Array.prototype.slice.call(items);
}

var deepRegex = /[|.]/i;

function matchDeep(path){
    return (path + '').match(deepRegex);
}

function isWildcardPath(path){
    var stringPath = (path + '');
    return ~stringPath.indexOf('*');
}

function getTargetKey(path){
    var stringPath = (path + '');
    return stringPath.split('|').shift();
}

var eventSystemVersion = 1,
    globalKey = '_entiEventState' + eventSystemVersion
    globalState = global[globalKey] = global[globalKey] || {
        instances: []
    };

var modifiedEnties = globalState.modifiedEnties = globalState.modifiedEnties || new Set(),
    trackedObjects = globalState.trackedObjects = globalState.trackedObjects || new WeakMap();

function leftAndRest(path){
    var stringPath = (path + '');

    // Special case when you want to filter on self (.)
    if(stringPath.slice(0,2) === '.|'){
        return ['.', stringPath.slice(2)];
    }

    var match = matchDeep(stringPath);
    if(match){
        return [stringPath.slice(0, match.index), stringPath.slice(match.index+1)];
    }
    return stringPath;
}

function isWildcardKey(key){
    return key.charAt(0) === '*';
}

function isFeralcardKey(key){
    return key === '**';
}

function addHandler(object, key, handler){
    var trackedKeys = trackedObjects.get(object);

    if(trackedKeys == null){
        trackedKeys = {};
        trackedObjects.set(object, trackedKeys);
    }

    var handlers = trackedKeys[key];

    if(!handlers){
        handlers = new Set();
        trackedKeys[key] = handlers;
    }

    handlers.add(handler);
}

function removeHandler(object, key, handler){
    var trackedKeys = trackedObjects.get(object);

    if(trackedKeys == null){
        return;
    }

    var handlers = trackedKeys[key];

    if(!handlers){
        return;
    }

    handlers.delete(handler);
}

function trackObjects(eventName, tracked, handler, object, key, path){
    if(!object || typeof object !== 'object'){
        return;
    }

    var target = object[key];

    if(target && typeof target === 'object' && tracked.has(target)){
        return;
    }

    trackObject(eventName, tracked, handler, object, key, path);
}

function trackKeys(eventName, tracked, handler, target, root, rest){
    var keys = Object.keys(target);
    for(var i = 0; i < keys.length; i++){
        if(isFeralcardKey(root)){
            trackObjects(eventName, tracked, handler, target, keys[i], '**' + (rest ? '.' : '') + (rest || ''));
        }else{
            trackObjects(eventName, tracked, handler, target, keys[i], rest);
        }
    }
}

function trackObject(eventName, tracked, handler, object, key, path){
    var eventKey = key === '**' ? '*' : key,
        target = object[key],
        targetIsObject = target && typeof target === 'object';

    var handle = function(value, event, emitKey){
        if(eventKey !== '*' && typeof object[eventKey] === 'object' && object[eventKey] !== target){
            if(targetIsObject){
                tracked.delete(target);
            }
            removeHandler(object, eventKey, handle);
            trackObjects(eventName, tracked, handler, object, key, path);
            return;
        }

        if(eventKey === '*'){
            trackKeys(eventName, tracked, handler, object, key, path);
        }

        if(!tracked.has(object)){
            return;
        }

        if(key !== '**' || !path){
            handler(value, event, emitKey);
        }
    };

    addHandler(object, eventKey, handle);

    if(!targetIsObject){
        return;
    }

    tracked.add(target);

    if(!path){
        return;
    }

    var rootAndRest = leftAndRest(path),
        root,
        rest;

    if(!Array.isArray(rootAndRest)){
        root = rootAndRest;
    }else{
        root = rootAndRest[0];
        rest = rootAndRest[1];

        // If the root is '.', watch for events on *
        if(root === '.'){
            root = '*';
        }
    }

    if(targetIsObject && isWildcardKey(root)){
        trackKeys(eventName, tracked, handler, target, root, rest);
    }

    trackObjects(eventName, tracked, handler, target, root, rest);
}

var trackedEvents = new WeakMap();
function createHandler(enti, trackedObjectPaths, trackedPaths, eventName){
    var oldModel = enti._model;
    return function(event, emitKey){
        trackedPaths.entis.forEach(function(enti){
            if(enti._emittedEvents[eventName] === emitKey){
                return;
            }

            if(enti._model !== oldModel){
                trackedPaths.entis.delete(enti);
                if(trackedPaths.entis.size === 0){
                    delete trackedObjectPaths[eventName];
                    if(!Object.keys(trackedObjectPaths).length){
                        trackedEvents.delete(oldModel);
                    }
                }
                return;
            }

            enti._emittedEvents[eventName] = emitKey;

            var targetKey = getTargetKey(eventName),
                value = isWildcardPath(targetKey) ? undefined : enti.get(targetKey);

            enti.emit(eventName, value, event);
        });
    };
}

function trackPath(enti, eventName){
    var object = enti._model,
        trackedObjectPaths = trackedEvents.get(object);

    if(!trackedObjectPaths){
        trackedObjectPaths = {};
        trackedEvents.set(object, trackedObjectPaths);
    }

    var trackedPaths = trackedObjectPaths[eventName];

    if(!trackedPaths){
        trackedPaths = {
            entis: new Set(),
            trackedObjects: new WeakSet()
        };
        trackedObjectPaths[eventName] = trackedPaths;
    }else if(trackedPaths.entis.has(enti)){
        return;
    }

    trackedPaths.entis.add(enti);

    var handler = createHandler(enti, trackedObjectPaths, trackedPaths, eventName);

    trackObjects(eventName, trackedPaths.trackedObjects, handler, {model:object}, 'model', eventName);
}

function trackPaths(enti){
    if(!enti._events || !enti._model){
        return;
    }

    for(var key in enti._events){
        trackPath(enti, key);
    }
    modifiedEnties.delete(enti);
}

function emitEvent(object, key, value, emitKey){

    modifiedEnties.forEach(trackPaths);

    var trackedKeys = trackedObjects.get(object);

    if(!trackedKeys){
        return;
    }

    var event = {
        value: value,
        key: key,
        object: object
    };

    function emitForKey(handler){
        handler(event, emitKey);
    }

    if(trackedKeys[key]){
        trackedKeys[key].forEach(emitForKey);
    }

    if(trackedKeys['*']){
        trackedKeys['*'].forEach(emitForKey);
    }
}

function emit(events){
    var emitKey = {};
    events.forEach(function(event){
        emitEvent(event[0], event[1], event[2], emitKey);
    });
}

function Enti(model){
    var detached = model === false;

    if(!model || (typeof model !== 'object' && typeof model !== 'function')){
        model = {};
    }

    this._emittedEvents = {};
    if(detached){
        this._model = {};
    }else{
        this.attach(model);
    }

    this.on('newListener', function(){
        modifiedEnties.add(this);
    });
}
Enti.emit = function(model, key, value){
    if(!(typeof model === 'object' || typeof model === 'function')){
        return;
    }

    emit([[model, key, value]]);
};
Enti.get = function(model, key){
    if(!model || typeof model !== 'object'){
        return;
    }

    key = getTargetKey(key);

    if(key === '.'){
        return model;
    }


    var path = leftAndRest(key);
    if(Array.isArray(path)){
        return Enti.get(model[path[0]], path[1]);
    }

    return model[key];
};
Enti.set = function(model, key, value){
    if(!model || typeof model !== 'object'){
        return;
    }

    key = getTargetKey(key);

    var path = leftAndRest(key);
    if(Array.isArray(path)){
        return Enti.set(model[path[0]], path[1], value);
    }

    var original = model[key];

    if(typeof value !== 'object' && value === original){
        return;
    }

    var keysChanged = !(key in model);

    model[key] = value;

    var events = [[model, key, value]];

    if(keysChanged){
        if(Array.isArray(model)){
            events.push([model, 'length', model.length]);
        }
    }

    emit(events);
};
Enti.push = function(model, key, value){
    if(!model || typeof model !== 'object'){
        return;
    }

    var target;
    if(arguments.length < 3){
        value = key;
        key = '.';
        target = model;
    }else{
        var path = leftAndRest(key);
        if(Array.isArray(path)){
            return Enti.push(model[path[0]], path[1], value);
        }

        target = model[key];
    }

    if(!Array.isArray(target)){
        throw 'The target is not an array.';
    }

    target.push(value);

    var events = [
        [target, target.length-1, value],
        [target, 'length', target.length]
    ];

    emit(events);
};
Enti.insert = function(model, key, value, index){
    if(!model || typeof model !== 'object'){
        return;
    }


    var target;
    if(arguments.length < 4){
        index = value;
        value = key;
        key = '.';
        target = model;
    }else{
        var path = leftAndRest(key);
        if(Array.isArray(path)){
            return Enti.insert(model[path[0]], path[1], value, index);
        }

        target = model[key];
    }

    if(!Array.isArray(target)){
        throw 'The target is not an array.';
    }

    target.splice(index, 0, value);

    var events = [
        [target, index, value],
        [target, 'length', target.length]
    ];

    emit(events);
};
Enti.remove = function(model, key, subKey){
    if(!model || typeof model !== 'object'){
        return;
    }

    var path = leftAndRest(key);
    if(Array.isArray(path)){
        return Enti.remove(model[path[0]], path[1], subKey);
    }

    // Remove a key off of an object at 'key'
    if(subKey != null){
        Enti.remove(model[key], subKey);
        return;
    }

    if(key === '.'){
        throw '. (self) is not a valid key to remove';
    }

    var events = [];

    if(Array.isArray(model)){
        model.splice(key, 1);
        events.push([model, 'length', model.length]);
    }else{
        delete model[key];
        events.push([model, key]);
    }

    emit(events);
};
Enti.move = function(model, key, index){
    if(!model || typeof model !== 'object'){
        return;
    }

    var path = leftAndRest(key);
    if(Array.isArray(path)){
        return Enti.move(model[path[0]], path[1], index);
    }

    if(key === index){
        return;
    }

    if(!Array.isArray(model)){
        throw 'The model is not an array.';
    }

    var item = model[key];

    model.splice(key, 1);

    model.splice(index - (index > key ? 0 : 1), 0, item);

    emit([[model, index, item]]);
};
Enti.update = function(model, key, value){
    if(!model || typeof model !== 'object'){
        return;
    }

    var target,
        isArray = Array.isArray(value);

    if(arguments.length < 3){
        value = key;
        key = '.';
        target = model;
    }else{
        var path = leftAndRest(key);
        if(Array.isArray(path)){
            return Enti.update(model[path[0]], path[1], value);
        }

        target = model[key];

        if(target == null){
            model[key] = isArray ? [] : {};
        }
    }

    if(typeof value !== 'object'){
        throw 'The value is not an object.';
    }

    if(typeof target !== 'object'){
        throw 'The target is not an object.';
    }

    var events = [],
        updatedObjects = new WeakSet();

    function updateTarget(target, value){
        for(var key in value){
            var currentValue = target[key];
            if(currentValue instanceof Object && !updatedObjects.has(currentValue) && !(currentValue instanceof Date)){
                updatedObjects.add(currentValue);
                updateTarget(currentValue, value[key]);
                continue;
            }
            target[key] = value[key];
            events.push([target, key, value[key]]);
        }

        if(Array.isArray(target)){
            events.push([target, 'length', target.length]);
        }
    }

    updateTarget(target, value);

    emit(events);
};
Enti.prototype = Object.create(EventEmitter.prototype);
Enti.prototype._maxListeners = 100;
Enti.prototype.constructor = Enti;
Enti.prototype.attach = function(model){
    if(this._model !== model){
        this.detach();
    }

    if(model && !isInstance(model)){
        throw 'Entis may only be attached to an object, or null/undefined';
    }

    modifiedEnties.add(this);
    this._attached = true;
    this._model = model;
    this.emit('attach', model);
};
Enti.prototype.detach = function(){
    modifiedEnties.delete(this);

    this._emittedEvents = {};
    this._model = {};
    this._attached = false;
    this.emit('detach');
};
Enti.prototype.destroy = function(){
    this.detach();
    this._events = null;
    this.emit('destroy');
};
Enti.prototype.get = function(key){
    return Enti.get(this._model, key);
};

Enti.prototype.set = function(key, value){
    return Enti.set(this._model, key, value);
};

Enti.prototype.push = function(key, value){
    return Enti.push.apply(null, [this._model].concat(toArray(arguments)));
};

Enti.prototype.insert = function(key, value, index){
    return Enti.insert.apply(null, [this._model].concat(toArray(arguments)));
};

Enti.prototype.remove = function(key, subKey){
    return Enti.remove.apply(null, [this._model].concat(toArray(arguments)));
};

Enti.prototype.move = function(key, index){
    return Enti.move.apply(null, [this._model].concat(toArray(arguments)));
};

Enti.prototype.update = function(key, index){
    return Enti.update.apply(null, [this._model].concat(toArray(arguments)));
};
Enti.prototype.isAttached = function(){
    return this._attached;
};
Enti.prototype.attachedCount = function(){
    return modifiedEnties.size;
};

Enti.isEnti = function(target){
    return target && !!~globalState.instances.indexOf(target.constructor);
};

Enti.store = function(target, key, value){
    if(arguments.length < 2){
        return Enti.get(target, key);
    }

    Enti.set(target, key, value);
};

globalState.instances.push(Enti);

module.exports = Enti;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"events":13,"is-instance":31}],13:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      }
      throw TypeError('Uncaught, unspecified "error" event.');
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}

},{}],14:[function(require,module,exports){
var is = require('./is'),
    GENERIC = '_generic',
    EventEmitter = require('events').EventEmitter,
    slice = Array.prototype.slice;

function flatten(item){
    return Array.isArray(item) ? item.reduce(function(result, element){
        if(element == null){
            return result;
        }
        return result.concat(flatten(element));
    },[]) : item;
}

function attachProperties(object, firm){
    for(var key in this._properties){
        this._properties[key].attach(object, firm);
    }
}

function onRender(){

    // Ensure all bindings are somewhat attached just before rendering
    this.attach(undefined, 0);

    for(var key in this._properties){
        this._properties[key].update();
    }
}

function detachProperties(firm){
    for(var key in this._properties){
        this._properties[key].detach(firm);
    }
}

function destroyProperties(){
    for(var key in this._properties){
        this._properties[key].destroy();
    }
}

function clone(){
    return this.fastn(this.component._type, this.component._settings, this.component._children.filter(function(child){
            return !child._templated;
        }).map(function(child){
            return child.clone();
        })
    );
}

function getSetBinding(newBinding){
    if(!arguments.length){
        return this.binding;
    }

    if(!is.binding(newBinding)){
        newBinding = this.fastn.binding(newBinding);
    }

    if(this.binding && this.binding !== newBinding){
        this.binding.removeListener('change', this.emitAttach);
        newBinding.attach(this.binding._model, this.binding._firm);
    }

    this.binding = newBinding;

    this.binding.on('change', this.emitAttach);
    this.binding.on('detach', this.emitDetach);

    this.emitAttach();

    return this.component;
};

function emitAttach(){
    var newBound = this.binding();
    if(newBound !== this.lastBound){
        this.lastBound = newBound;
        this.scope.attach(this.lastBound);
        this.component.emit('attach', this.scope, 1);
    }
}

function emitDetach(){
    this.component.emit('detach', 1);
}

function getScope(){
    return this.scope;
}

function destroy(){
    if(this.destroyed){
        return;
    }
    this.destroyed = true;

    this.component
        .removeAllListeners('render')
        .removeAllListeners('attach');

    this.component.emit('destroy');
    this.component.element = null;
    this.scope.destroy();
    this.binding.destroy();

    return this.component;
}

function attachComponent(object, firm){
    this.binding.attach(object, firm);
    return this.component;
}

function detachComponent(firm){
    this.binding.detach(firm);
    return this.component;
}

function isDestroyed(){
    return this.destroyed;
}

function setProperty(key, property){

    // Add a default property or use the one already there
    if(!property){
        property = this.component[key] || this.fastn.property();
    }

    this.component[key] = property;
    this.component._properties[key] = property;

    return this.component;
}

function extendComponent(type, settings, children){

    if(type in this.types){
        return this.component;
    }

    if(!(type in this.fastn.components)){

        if(!(GENERIC in this.fastn.components)){
            throw new Error('No component of type "' + type + '" is loaded');
        }

        this.fastn.components._generic(this.fastn, this.component, type, settings, children);

        this.types._generic = true;
    }else{

        this.fastn.components[type](this.fastn, this.component, type, settings, children);
    }

    this.types[type] = true;

    return this.component;
};

function isType(type){
    return type in this.types;
}

function FastnComponent(fastn, type, settings, children){
    var component = this;

    var componentScope = {
        types: {},
        fastn: fastn,
        component: component,
        binding: fastn.binding('.'),
        destroyed: false,
        scope: new fastn.Model(false),
        lastBound: null
    };

    componentScope.emitAttach = emitAttach.bind(componentScope);
    componentScope.emitDetach = emitDetach.bind(componentScope);
    componentScope.binding._default_binding = true;

    component._type = type;
    component._properties = {};
    component._settings = settings || {};
    component._children = children ? flatten(children) : [];

    component.attach = attachComponent.bind(componentScope);
    component.detach = detachComponent.bind(componentScope);
    component.scope = getScope.bind(componentScope);
    component.destroy = destroy.bind(componentScope);
    component.destroyed = isDestroyed.bind(componentScope);
    component.binding = getSetBinding.bind(componentScope);
    component.setProperty = setProperty.bind(componentScope);
    component.clone = clone.bind(componentScope);
    component.children = slice.bind(component._children);
    component.extend = extendComponent.bind(componentScope);
    component.is = isType.bind(componentScope);

    component.binding(componentScope.binding);

    component.on('attach', attachProperties.bind(this));
    component.on('render', onRender.bind(this));
    component.on('detach', detachProperties.bind(this));
    component.on('destroy', destroyProperties.bind(this));

    if(fastn.debug){
        component.on('render', function(){
            if(component.element && typeof component.element === 'object'){
                component.element._component = component;
            }
        });
    }
}
FastnComponent.prototype = Object.create(EventEmitter.prototype);
FastnComponent.prototype.constructor = FastnComponent;
FastnComponent.prototype._fastn_component = true;

module.exports = FastnComponent;
},{"./is":21,"events":13}],15:[function(require,module,exports){
var is = require('./is'),
    firmer = require('./firmer'),
    functionEmitter = require('function-emitter'),
    setPrototypeOf = require('setprototypeof'),
    same = require('same-value');

function fuseBinding(){
    var fastn = this,
        args = Array.prototype.slice.call(arguments);

    var bindings = args.slice(),
        transform = bindings.pop(),
        updateTransform,
        resultBinding = createBinding.call(fastn, 'result'),
        selfChanging;

    resultBinding._arguments = args;

    if(typeof bindings[bindings.length-1] === 'function' && !is.binding(bindings[bindings.length-1])){
        updateTransform = transform;
        transform = bindings.pop();
    }

    resultBinding._model.removeAllListeners();
    resultBinding._set = function(value){
        if(updateTransform){
            selfChanging = true;
            var newValue = updateTransform(value);
            if(!same(newValue, bindings[0]())){
                bindings[0](newValue);
                resultBinding._change(newValue);
            }
            selfChanging = false;
        }else{
            resultBinding._change(value);
        }
    };

    function change(){
        if(selfChanging){
            return;
        }
        resultBinding(transform.apply(null, bindings.map(function(binding){
            return binding();
        })));
    }

    bindings.forEach(function(binding, index){
        if(!is.binding(binding)){
            binding = createBinding.call(fastn, binding);
            bindings.splice(index,1,binding);
        }
        binding.on('change', change);
        resultBinding.on('detach', binding.detach);
    });

    var lastAttached;
    resultBinding.on('attach', function(object){
        selfChanging = true;
        bindings.forEach(function(binding){
            binding.attach(object, 1);
        });
        selfChanging = false;
        if(lastAttached !== object){
            change();
        }
        lastAttached = object;
    });

    return resultBinding;
}

function createValueBinding(fastn){
    var valueBinding = createBinding.call(fastn, 'value');
    valueBinding.attach = function(){return valueBinding;};
    valueBinding.detach = function(){return valueBinding;};
    return valueBinding;
}

function bindingTemplate(newValue){
    if(!arguments.length){
        return this.value;
    }

    if(this.binding._fastn_binding === '.'){
        return;
    }

    this.binding._set(newValue);
    return this.binding;
}

function createBinding(path, more){
    var fastn = this;

    if(more){ // used instead of arguments.length for performance
        return fuseBinding.apply(fastn, arguments);
    }

    if(path == null){
        return createValueBinding(fastn);
    }

    var bindingScope = {},
        binding = bindingScope.binding = bindingTemplate.bind(bindingScope),
        destroyed;

    setPrototypeOf(binding, functionEmitter);
    binding.setMaxListeners(10000);
    binding._arguments = [path];
    binding._model = new fastn.Model(false);
    binding._fastn_binding = path;
    binding._firm = -Infinity;

    function modelAttachHandler(data){
        binding._model.attach(data);
        binding._change(binding._model.get(path));
        binding.emit('attach', data, 1);
    }

    function modelDetachHandler(){
        binding._model.detach();
    }

    binding.attach = function(object, firm){

        // If the binding is being asked to attach loosly to an object,
        // but it has already been defined as being firmly attached, do not attach.
        if(firmer(binding, firm)){
            return binding;
        }

        binding._firm = firm;

        var isModel = fastn.isModel(object);

        if(isModel && bindingScope.attachedModel === object){
            return binding;
        }

        if(bindingScope.attachedModel){
            bindingScope.attachedModel.removeListener('attach', modelAttachHandler);
            bindingScope.attachedModel.removeListener('detach', modelDetachHandler);
            bindingScope.attachedModel = null;
        }

        if(isModel){
            bindingScope.attachedModel = object;
            bindingScope.attachedModel.on('attach', modelAttachHandler);
            bindingScope.attachedModel.on('detach', modelDetachHandler);
            object = object._model;
        }

        if(!(object instanceof Object)){
            object = {};
        }

        if(binding._model._model === object){
            return binding;
        }

        modelAttachHandler(object);

        return binding;
    };

    binding.detach = function(firm){
        if(firmer(binding, firm)){
            return binding;
        }

        bindingScope.value = undefined;
        if(binding._model.isAttached()){
            binding._model.detach();
        }
        binding.emit('detach', 1);
        return binding;
    };
    binding._set = function(newValue){
        if(same(binding._model.get(path), newValue)){
            return;
        }
        if(!binding._model.isAttached()){
            binding._model.attach(binding._model.get('.'));
        }
        binding._model.set(path, newValue);
    };
    binding._change = function(newValue){
        bindingScope.value = newValue;
        binding.emit('change', binding());
    };
    binding.clone = function(keepAttachment){
        var newBinding = createBinding.apply(fastn, binding._arguments);

        if(keepAttachment){
            newBinding.attach(bindingScope.attachedModel || binding._model._model, binding._firm);
        }

        return newBinding;
    };
    binding.destroy = function(soft){
        if(destroyed){
            return;
        }
        if(soft && binding.listeners('change').length){
            return;
        }
        destroyed = true;
        binding.emit('destroy');
        binding.detach();
        binding._model.destroy();
    };

    binding.destroyed = function(){
        return destroyed;
    };

    if(path !== '.'){
        binding._model.on(path, binding._change);
    }

    return binding;
}

function from(valueOrBinding){
    if(is.binding(valueOrBinding)){
        return valueOrBinding;
    }

    var result = this();
    result(valueOrBinding)

    return result;
}

module.exports = function(fastn){
    var binding = createBinding.bind(fastn);
    binding.from = from.bind(binding);
    return binding;
};
},{"./firmer":18,"./is":21,"function-emitter":29,"same-value":36,"setprototypeof":38}],16:[function(require,module,exports){
function insertChild(fastn, container, child, index){
    if(child == null || child === false){
        return;
    }

    var currentIndex = container._children.indexOf(child),
        newComponent = fastn.toComponent(child);

    if(newComponent !== child && ~currentIndex){
        container._children.splice(currentIndex, 1, newComponent);
    }

    if(!~currentIndex || newComponent !== child){
        newComponent.attach(container.scope(), 1);
    }

    if(currentIndex !== index){
        if(~currentIndex){
            container._children.splice(currentIndex, 1);
        }
        container._children.splice(index, 0, newComponent);
    }

    if(container.element){
        if(!newComponent.element){
            newComponent.render();
        }
        container._insert(newComponent.element, index);
        newComponent.emit('insert', container);
        container.emit('childInsert', newComponent);
    }
}

function getContainerElement(){
    return this.containerElement || this.element;
}

function insert(child, index){
    var childComponent = child,
        container = this.container,
        fastn = this.fastn;

    if(index && typeof index === 'object'){
        childComponent = Array.prototype.slice.call(arguments);
    }

    if(isNaN(index)){
        index = container._children.length;
    }

    if(Array.isArray(childComponent)){
        for (var i = 0; i < childComponent.length; i++) {
            container.insert(childComponent[i], i + index);
        }
    }else{
        insertChild(fastn, container, childComponent, index);
    }

    return container;
}

module.exports = function(fastn, component, type, settings, children){
    component.insert = insert.bind({
        container: component,
        fastn: fastn
    });

    component._insert = function(element, index){
        var containerElement = component.getContainerElement();
        if(!containerElement){
            return;
        }

        if(containerElement.childNodes[index] === element){
            return;
        }

        containerElement.insertBefore(element, containerElement.childNodes[index]);
    };

    component.remove = function(childComponent){
        var index = component._children.indexOf(childComponent);
        if(~index){
            component._children.splice(index,1);
        }

        childComponent.detach(1);

        if(childComponent.element){
            component._remove(childComponent.element);
            childComponent.emit('remove', component);
        }
        component.emit('childRemove', childComponent);
    };

    component._remove = function(element){
        var containerElement = component.getContainerElement();

        if(!element || !containerElement || element.parentNode !== containerElement){
            return;
        }

        containerElement.removeChild(element);
    };

    component.empty = function(){
        while(component._children.length){
            component.remove(component._children.pop());
        }
    };

    component.replaceChild = function(oldChild, newChild){
        var index = component._children.indexOf(oldChild);

        if(!~index){
            return;
        }

        component.remove(oldChild);
        component.insert(newChild, index);
    };

    component.getContainerElement = getContainerElement.bind(component);

    component.on('render', component.insert.bind(null, component._children, 0));

    component.on('attach', function(model, firm){
        for(var i = 0; i < component._children.length; i++){
            if(fastn.isComponent(component._children[i])){
                component._children[i].attach(model, firm);
            }
        }
    });

    component.on('destroy', function(data, firm){
        for(var i = 0; i < component._children.length; i++){
            if(fastn.isComponent(component._children[i])){
                component._children[i].destroy(firm);
            }
        }
    });

    return component;
};
},{}],17:[function(require,module,exports){
var setify = require('setify'),
    classist = require('classist');

function updateTextProperty(generic, element, value){
    if(arguments.length === 2){
        return element.textContent;
    }
    element.textContent = (value == null ? '' : value);
}

module.exports = {
    class: function(generic, element, value){
        if(!generic._classist){
            generic._classist = classist(element);
        }

        if(arguments.length < 3){
            return generic._classist();
        }

        generic._classist(value);
    },
    display: function(generic, element, value){
        if(arguments.length === 2){
            return element.style.display !== 'none';
        }
        element.style.display = value ? null : 'none';
    },
    disabled: function(generic, element, value){
        if(arguments.length === 2){
            return element.hasAttribute('disabled');
        }
        if(value){
            element.setAttribute('disabled', 'disabled');
        }else{
            element.removeAttribute('disabled');
        }
    },
    textContent: updateTextProperty,
    innerText: updateTextProperty,
    innerHTML: function(generic, element, value){
        if(arguments.length === 2){
            return element.innerHTML;
        }
        element.innerHTML = (value == null ? '' : value);
    },
    value: function(generic, element, value){
        var inputType = element.type;

        if(element.nodeName === 'INPUT' && inputType === 'date'){
            if(arguments.length === 2){
                return element.value ? new Date(element.value.replace(/-/g,'/').replace('T',' ')) : null;
            }

            value = value != null ? new Date(value) : null;

            if(!value || isNaN(value)){
                element.value = null;
            }else{
                element.value = [
                    value.getFullYear(),
                    ('0' + (value.getMonth() + 1)).slice(-2),
                    ('0' + value.getDate()).slice(-2)
                ].join('-');
            }
            return;
        }

        if(arguments.length === 2){
            return element.value;
        }
        if(value === undefined){
            value = null;
        }

        if(element.nodeName === 'PROGRESS'){
            value = parseFloat(value) || 0;
        }

        setify(element, value);
    },
    max: function(generic, element, value) {
        if(arguments.length === 2){
            return element.value;
        }

        if(element.nodeName === 'PROGRESS'){
            value = parseFloat(value) || 0;
        }

        element.max = value;
    },
    style: function(generic, element, value){
        if(arguments.length === 2){
            return element.style;
        }

        for(var key in value){
            element.style[key] = value[key];
        }
    },
    type: function(generic, element, value){
        if(arguments.length === 2){
            return element.type;
        }
        element.setAttribute('type', value);
    }
};
},{"classist":7,"setify":37}],18:[function(require,module,exports){
// Is the entity firmer than the new firmness
module.exports = function(entity, firm){
    if(firm != null && (entity._firm === undefined || firm < entity._firm)){
        return true;
    }
};
},{}],19:[function(require,module,exports){
var containerComponent = require('./containerComponent'),
    schedule = require('./schedule'),
    fancyProps = require('./fancyProps'),
    matchDomHandlerName = /^((?:el\.)?)([^. ]+)(?:\.(capture))?$/,
    GENERIC = '_generic';

function createProperties(fastn, component, settings){
    for(var key in settings){
        var setting = settings[key];

        if(typeof setting === 'function' && !fastn.isProperty(setting) && !fastn.isBinding(setting)){
            continue;
        }

        component.addDomProperty(key);
    }
}

function trackKeyEvents(component, element, event){
    if('_lastStates' in component && 'charCode' in event){
        component._lastStates.unshift(element.value);
        component._lastStates.pop();
    }
}

function addDomHandler(component, element, handlerName, eventName, capture){
    var eventParts = handlerName.split('.');

    if(eventParts[0] === 'on'){
        eventParts.shift();
    }

    var handler = function(event){
            trackKeyEvents(component, element, event);
            component.emit(handlerName, event, component.scope());
        };

    element.addEventListener(eventName, handler, capture);

    component.on('destroy', function(){
        element.removeEventListener(eventName, handler, capture);
    });
}

function addDomHandlers(component, element, eventNames){
    var events = eventNames.split(' ');

    for(var i = 0; i < events.length; i++){
        var eventName = events[i],
            match = eventName.match(matchDomHandlerName);

        if(!match){
            continue;
        }

        if(match[1] || 'on' + match[2] in element){
            addDomHandler(component, element, eventNames, match[2], match[3]);
        }
    }
}

function addAutoHandler(component, element, key, settings){
    if(!settings[key]){
        return;
    }

    var autoEvent = settings[key].split(':'),
        eventName = key.slice(2);

    delete settings[key];

    var handler = function(event){
        var fancyProp = fancyProps[autoEvent[1]],
            value = fancyProp ? fancyProp(component, element) : element[autoEvent[1]];

        trackKeyEvents(component, element, event);

        component[autoEvent[0]](value);
    };

    element.addEventListener(eventName, handler);

    component.on('destroy', function(){
        element.removeEventListener(eventName, handler);
    });
}

function addDomProperty(fastn, key, property){
    var component = this,
        timeout;

    property = property || component[key] || fastn.property();
    component.setProperty(key, property);

    function update(){

        var element = component.getPropertyElement(key),
            value = property();

        if(!element || component.destroyed()){
            return;
        }

        if(
            key === 'value' &&
            component._lastStates &&
            ~component._lastStates.indexOf(value)
        ){
            clearTimeout(timeout);
            timeout = setTimeout(update, 50);
            return;
        }

        var isProperty = key in element,
            fancyProp = fancyProps[key],
            previous = fancyProp ? fancyProp(component, element) : isProperty ? element[key] : element.getAttribute(key);

        if(!fancyProp && !isProperty && value == null){
            value = '';
        }

        if(value !== previous){
            if(fancyProp){
                fancyProp(component, element, value);
                return;
            }

            if(isProperty){
                element[key] = value;
                return;
            }

            if(typeof value !== 'function' && typeof value !== 'object'){
                element.setAttribute(key, value);
            }
        }
    }

    property.updater(update);
}

function onRender(){
    var component = this,
        element;

    for(var key in component._settings){
        element = component.getEventElement(key);
        if(key.slice(0,2) === 'on' && key in element){
            addAutoHandler(component, element, key, component._settings);
        }
    }

    for(var eventKey in component._events){
        element = component.getEventElement(key);
        addDomHandlers(component, element, eventKey);
    }
}

function render(){
    this.element = this.createElement(this._settings.tagName || this._tagName);

    if('value' in this.element){
        this._lastStates = new Array(2);
    }

    this.emit('render');

    return this;
};

function genericComponent(fastn, component, type, settings, children){
    if(component.is(type)){
        return component;
    }

    if(type === GENERIC){
        component._tagName = component._tagName || 'div';
    }else{
        component._tagName = type;
    }

    if(component.is(GENERIC)){
        return component;
    }

    component.extend('_container', settings, children);

    component.addDomProperty = addDomProperty.bind(component, fastn);
    component.getEventElement = component.getContainerElement;
    component.getPropertyElement = component.getContainerElement;
    component.updateProperty = genericComponent.updateProperty;
    component.createElement = genericComponent.createElement;

    createProperties(fastn, component, settings);

    component.render = render.bind(component);

    component.on('render', onRender);

    return component;
}

genericComponent.updateProperty = function(component, property, update){
    if(typeof document !== 'undefined' && document.contains(component.element)){
        schedule(property, update);
    }else{
        update();
    }
};

genericComponent.createElement = function(tagName){
    if(tagName instanceof Node){
        return tagName;
    }
    return document.createElement(tagName);
};

module.exports = genericComponent;
},{"./containerComponent":16,"./fancyProps":17,"./schedule":25}],20:[function(require,module,exports){
var createProperty = require('./property'),
    createBinding = require('./binding'),
    BaseComponent = require('./baseComponent'),
    crel = require('crel'),
    Enti = require('enti'),
    objectAssign = require('object-assign'),
    is = require('./is');

function inflateProperties(component, settings){
    for(var key in settings){
        var setting = settings[key],
            property = component[key];

        if(is.property(settings[key])){

            if(is.property(property)){
                property.destroy();
            }

            setting.addTo(component, key);

        }else if(is.property(property)){

            if(is.binding(setting)){
                property.binding(setting);
            }else{
                property(setting);
            }

            property.addTo(component, key);
        }
    }
}

function validateExpectedComponents(components, componentName, expectedComponents){
    expectedComponents = expectedComponents.filter(function(componentName){
        return !(componentName in components);
    });

    if(expectedComponents.length){
        console.warn([
            'fastn("' + componentName + '") uses some components that have not been registered with fastn',
            'Expected conponent constructors: ' + expectedComponents.join(', ')
        ].join('\n\n'));
    }
}

module.exports = function(components, debug){

    if(!components || typeof components !== 'object'){
        throw new Error('fastn must be initialised with a components object');
    }

    components._container = components._container || require('./containerComponent');

    function fastn(type){

        var args = [];
        for(var i = 0; i < arguments.length; i++){
            args[i] = arguments[i];
        }

        var settings = args[1],
            childrenIndex = 2,
            settingsChild = fastn.toComponent(args[1]);

        if(Array.isArray(args[1]) || settingsChild || !args[1]){
            args[1] = settingsChild || args[1];
            childrenIndex--;
            settings = null;
        }

        settings = objectAssign({}, settings || {});

        var types = typeof type === 'string' ? type.split(':') : Array.isArray(type) ? type : [type],
            baseType,
            children = args.slice(childrenIndex),
            component = fastn.base(type, settings, children);

        while(baseType = types.shift()){
            component.extend(baseType, settings, children);
        }

        component._properties = {};

        inflateProperties(component, settings);

        return component;
    }

    fastn.toComponent = function(component){
        if(component == null){
            return;
        }
        if(is.component(component)){
            return component;
        }
        if(typeof component !== 'object' || component instanceof Date){
            return fastn('text', {auto: true}, component);
        }
        if(crel.isElement(component)){
            return fastn(component);
        }
        if(crel.isNode(component)){
            return fastn('text', {auto: true}, component.textContent);
        }
    };

    fastn.debug = debug;
    fastn.property = createProperty.bind(fastn);
    fastn.binding = createBinding(fastn);
    fastn.isComponent = is.component;
    fastn.isBinding = is.binding;
    fastn.isDefaultBinding = is.defaultBinding;
    fastn.isBindingObject = is.bindingObject;
    fastn.isProperty = is.property;
    fastn.components = components;
    fastn.Model = Enti;
    fastn.isModel = Enti.isEnti.bind(Enti);

    fastn.base = function(type, settings, children){
        return new BaseComponent(fastn, type, settings, children);
    };

    for(var key in components){
        var componentConstructor = components[key];

        if(componentConstructor.expectedComponents){
            validateExpectedComponents(components, key, componentConstructor.expectedComponents);
        }
    }

    return fastn;
};
},{"./baseComponent":14,"./binding":15,"./containerComponent":16,"./is":21,"./property":24,"crel":9,"enti":12,"object-assign":23}],21:[function(require,module,exports){
var FUNCTION = 'function',
    OBJECT = 'object',
    FASTNBINDING = '_fastn_binding',
    FASTNPROPERTY = '_fastn_property',
    FASTNCOMPONENT = '_fastn_component',
    DEFAULTBINDING = '_default_binding';

function isComponent(thing){
    return thing && typeof thing === OBJECT && FASTNCOMPONENT in thing;
}

function isBindingObject(thing){
    return thing && typeof thing === OBJECT && FASTNBINDING in thing;
}

function isBinding(thing){
    return typeof thing === FUNCTION && FASTNBINDING in thing;
}

function isProperty(thing){
    return typeof thing === FUNCTION && FASTNPROPERTY in thing;
}

function isDefaultBinding(thing){
    return typeof thing === FUNCTION && FASTNBINDING in thing && DEFAULTBINDING in thing;
}

module.exports = {
    component: isComponent,
    bindingObject: isBindingObject,
    binding: isBinding,
    defaultBinding: isDefaultBinding,
    property: isProperty
};
},{}],22:[function(require,module,exports){
var MultiMap = require('multimap'),
    merge = require('flat-merge');

MultiMap.Map = Map;

function each(value, fn){
    if(!value || typeof value !== 'object'){
        return;
    }

    if(Array.isArray(value)){
        for(var i = 0; i < value.length; i++){
            fn(value[i], i)
        }
    }else{
        for(var key in value){
            fn(value[key], key);
        }
    }
}

function keyFor(object, value){
    if(!object || typeof object !== 'object'){
        return false;
    }

    if(Array.isArray(object)){
        var index = object.indexOf(value);
        return index >=0 ? index : false;
    }

    for(var key in object){
        if(object[key] === value){
            return key;
        }
    }

    return false;
}

module.exports = function(fastn, component, type, settings, children){

    if(fastn.components._generic){
        component.extend('_generic', settings, children);
    }else{
        component.extend('_container', settings, children);
    }

    if(!('template' in settings)){
        console.warn('No "template" function was set for this templater component');
    }

    var itemsMap = new MultiMap(),
        dataMap = new WeakMap(),
        lastTemplate,
        existingItem = {};

    function updateItems(){
        var value = component.items(),
            template = component.template(),
            emptyTemplate = component.emptyTemplate(),
            newTemplate = lastTemplate !== template;

        var currentItems = merge(template ? value : []);

        itemsMap.forEach(function(childComponent, item){
            var currentKey = keyFor(currentItems, item);

            if(!newTemplate && currentKey !== false){
                currentItems[currentKey] = [existingItem, item, childComponent];
            }else{
                removeComponent(childComponent);
                itemsMap.delete(item);
            }
        });

        var index = 0;

        function updateItem(item, key){
            var child,
                existing;

            while(index < component._children.length && !component._children[index]._templated){
                index++;
            }

            if(Array.isArray(item) && item[0] === existingItem){
                existing = true;
                child = item[2];
                item = item[1];
            }

            var childModel;

            if(!existing){
                childModel = new fastn.Model({
                    item: item,
                    key: key
                });

                child = fastn.toComponent(template(childModel, component.scope()));
                if(!child){
                    child = fastn('template');
                }
                child._listItem = item;
                child._templated = true;

                dataMap.set(child, childModel);
                itemsMap.set(item, child);
            }else{
                childModel = dataMap.get(child);
                childModel.set('key', key);
            }

            if(fastn.isComponent(child) && component._settings.attachTemplates !== false){
                child.attach(childModel, 2);
            }

            component.insert(child, index);
            index++;
        }

        each(currentItems, updateItem);

        lastTemplate = template;

        if(index === 0 && emptyTemplate){
            var child = fastn.toComponent(emptyTemplate(component.scope()));
            if(!child){
                child = fastn('template');
            }
            child._templated = true;

            itemsMap.set({}, child);

            component.insert(child);
        }
    }

    function removeComponent(childComponent){
        component.remove(childComponent);
        childComponent.destroy();
    }

    component.setProperty('items',
        fastn.property([], settings.itemChanges || 'type keys shallowStructure')
            .on('change', updateItems)
    );

    component.setProperty('template',
        fastn.property().on('change', updateItems)
    );

    component.setProperty('emptyTemplate',
        fastn.property().on('change', updateItems)
    );

    return component;
};
},{"flat-merge":28,"multimap":32}],23:[function(require,module,exports){
'use strict';
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function ownEnumerableKeys(obj) {
	var keys = Object.getOwnPropertyNames(obj);

	if (Object.getOwnPropertySymbols) {
		keys = keys.concat(Object.getOwnPropertySymbols(obj));
	}

	return keys.filter(function (key) {
		return propIsEnumerable.call(obj, key);
	});
}

module.exports = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = ownEnumerableKeys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

},{}],24:[function(require,module,exports){
var WhatChanged = require('what-changed'),
    same = require('same-value'),
    firmer = require('./firmer'),
    functionEmitter = require('function-emitter'),
    setPrototypeOf = require('setprototypeof');

var propertyProto = Object.create(functionEmitter);

propertyProto._fastn_property = true;
propertyProto._firm = 1;

function propertyTemplate(value){
    if(!arguments.length){
        return this.binding && this.binding() || this.property._value;
    }

    if(!this.destroyed){
        if(this.binding){
            this.binding(value);
            return this.property;
        }

        this.valueUpdate(value);
    }

    return this.property;
}

function changeChecker(current, changes){
    if(changes){
        var changes = new WhatChanged(current, changes);

        return function(value){
            return Object.keys(changes.update(value)).length > 0;
        };
    }else{
        var lastValue = current;
        return function(newValue){
            if(!same(lastValue, newValue)){
                lastValue = newValue;
                return true;
            }
        };
    }
}


function propertyBinding(newBinding){
    if(!arguments.length){
        return this.binding;
    }

    if(!this.fastn.isBinding(newBinding)){
        newBinding = this.fastn.binding(newBinding);
    }

    if(newBinding === this.binding){
        return this.property;
    }

    if(this.binding){
        this.binding.removeListener('change', this.valueUpdate);
    }

    this.binding = newBinding;

    if(this.model){
        this.property.attach(this.model, this.property._firm);
    }

    this.binding.on('change', this.valueUpdate);
    this.valueUpdate(this.binding());

    return this.property;
};

function attachProperty(object, firm){
    if(firmer(this.property, firm)){
        return this.property;
    }

    this.property._firm = firm;

    if(!(object instanceof Object)){
        object = {};
    }

    if(this.binding){
        this.model = object;
        this.binding.attach(object, 1);
    }

    if(this.property._events && 'attach' in this.property._events){
        this.property.emit('attach', object, 1);
    }

    return this.property;
};

function detachProperty(firm){
    if(firmer(this.property, firm)){
        return this.property;
    }

    if(this.binding){
        this.binding.removeListener('change', this.valueUpdate);
        this.binding.detach(1);
        this.model = null;
    }

    if(this.property._events && 'detach' in this.property._events){
        this.property.emit('detach', 1);
    }

    return this.property;
};

function updateProperty(){
    if(!this.destroyed){

        if(this.property._update){
            this.property._update(this.property._value, this.property);
        }

        this.property.emit('update', this.property._value);
    }
    return this.property;
};

function propertyUpdater(fn){
    if(!arguments.length){
        return this.property._update;
    }
    this.property._update = fn;
    return this.property;
};

function destroyProperty(){
    if(!this.destroyed){
        this.destroyed = true;

        this.property
            .removeAllListeners('change')
            .removeAllListeners('update')
            .removeAllListeners('attach');

        this.property.emit('destroy');
        this.property.detach();
        if(this.binding){
            this.binding.destroy(true);
        }
    }
    return this.property;
};

function propertyDestroyed(){
    return this.destroyed;
};

function addPropertyTo(component, key){
    component.setProperty(key, this.property);

    return this.property;
};

function createProperty(currentValue, changes, updater){
    if(typeof changes === 'function'){
        updater = changes;
        changes = null;
    }

    var propertyScope =
        property = propertyTemplate.bind(propertyScope)
        propertyScope = {
            fastn: this,
            hasChanged: changeChecker(currentValue, changes),
            valueUpdate: function(value){
                property._value = value;
                if(!propertyScope.hasChanged(value)){
                    return;
                }
                property.emit('change', property._value);
                property.update();
            }
        };

    var property = propertyScope.property = propertyTemplate.bind(propertyScope);

    property._value = currentValue;
    property._update = updater;

    setPrototypeOf(property, propertyProto);

    property.binding = propertyBinding.bind(propertyScope);
    property.attach = attachProperty.bind(propertyScope);
    property.detach = detachProperty.bind(propertyScope);
    property.update = updateProperty.bind(propertyScope);
    property.updater = propertyUpdater.bind(propertyScope);
    property.destroy = destroyProperty.bind(propertyScope);
    property.destroyed = propertyDestroyed.bind(propertyScope);
    property.addTo = addPropertyTo.bind(propertyScope);

    return property;
};

module.exports = createProperty;
},{"./firmer":18,"function-emitter":29,"same-value":36,"setprototypeof":38,"what-changed":39}],25:[function(require,module,exports){
var todo = [],
    todoKeys = [],
    scheduled,
    updates = 0;

function run(){
    var startTime = Date.now();

    while(todo.length && Date.now() - startTime < 16){
        todoKeys.shift();
        todo.shift()();
    }

    if(todo.length){
        requestAnimationFrame(run);
    }else{
        scheduled = false;
    }
}

function schedule(key, fn){
    if(~todoKeys.indexOf(key)){
        return;
    }

    todo.push(fn);
    todoKeys.push(key);

    if(!scheduled){
        scheduled = true;
        requestAnimationFrame(run);
    }
}

module.exports = schedule;
},{}],26:[function(require,module,exports){
module.exports = function(fastn, component, type, settings, children){
    var itemModel = new fastn.Model({});

    if(!('template' in settings)){
        console.warn('No "template" function was set for this templater component');
    }

    function replaceElement(element){
        if(component.element && component.element.parentNode){
            component.element.parentNode.replaceChild(element, component.element);
        }
        component.element = element;
    }

    function update(){

        var value = component.data(),
            template = component.template();

        itemModel.set('item', value);

        var newComponent;

        if(template){
           newComponent = fastn.toComponent(template(itemModel, component.scope(), component._currentComponent));
        }

        if(component._currentComponent && component._currentComponent !== newComponent){
            if(fastn.isComponent(component._currentComponent)){
                component._currentComponent.destroy();
            }
        }

        component._currentComponent = newComponent;

        if(!newComponent){
            replaceElement(component.emptyElement);
            return;
        }

        if(fastn.isComponent(newComponent)){
            if(component._settings.attachTemplates !== false){
                newComponent.attach(itemModel, 2);
            }else{
                newComponent.attach(component.scope(), 1);
            }

            if(component.element && component.element !== newComponent.element){
                if(newComponent.element == null){
                    newComponent.render();
                }
                replaceElement(component._currentComponent.element);
            }
        }
    }

    component.render = function(){
        var element;
        component.emptyElement = document.createTextNode('');
        if(component._currentComponent){
            component._currentComponent.render();
            element = component._currentComponent.element;
        }
        component.element = element || component.emptyElement;
        component.emit('render');
    };

    component.setProperty('data',
        fastn.property(undefined, settings.dataChanges || 'value structure')
            .on('change', update)
    );

    component.setProperty('template',
        fastn.property(undefined, 'value reference')
            .on('change', update)
    );

    component.on('destroy', function(){
        if(fastn.isComponent(component._currentComponent)){
            component._currentComponent.destroy();
        }
    });

    component.on('attach', function(data){
        if(fastn.isComponent(component._currentComponent)){
            component._currentComponent.attach(component.scope(), 1);
        }
    });

    return component;
};
},{}],27:[function(require,module,exports){
function updateText(){
    if(!this.element){
        return;
    }

    var value = this.text();

    this.element.textContent = (value == null ? '' : value);
}

function autoRender(content){
    this.element = document.createTextNode(content);
}

function autoText(text, fastn, content) {
    text.render = autoRender.bind(text, content);

    return text;
}

function render(){
    this.element = this.createTextNode(this.text());
    this.emit('render');
};

function textComponent(fastn, component, type, settings, children){
    if(settings.auto){
        delete settings.auto;
        if(!fastn.isBinding(children[0])){
            return autoText(component, fastn, children[0]);
        }
        settings.text = children.pop();
    }

    component.createTextNode = textComponent.createTextNode;
    component.render = render.bind(component);

    component.setProperty('text', fastn.property('', updateText.bind(component)));

    return component;
}

textComponent.createTextNode = function(text){
    return document.createTextNode(text);
};

module.exports = textComponent;
},{}],28:[function(require,module,exports){
function flatMerge(a,b){
    if(!b || typeof b !== 'object'){
        b = {};
    }

    if(!a || typeof a !== 'object'){
        a = new b.constructor();
    }

    var result = new a.constructor(),
        aKeys = Object.keys(a),
        bKeys = Object.keys(b);

    for(var i = 0; i < aKeys.length; i++){
        result[aKeys[i]] = a[aKeys[i]];
    }

    for(var i = 0; i < bKeys.length; i++){
        result[bKeys[i]] = b[bKeys[i]];
    }

    return result;
}

module.exports = flatMerge;
},{}],29:[function(require,module,exports){
var EventEmitter = require('events').EventEmitter,
    functionEmitterPrototype = function(){};

for(var key in EventEmitter.prototype){
    functionEmitterPrototype[key] = EventEmitter.prototype[key];
}

module.exports = functionEmitterPrototype;
},{"events":13}],30:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],31:[function(require,module,exports){
module.exports = function(value){
    return value && typeof value === 'object' || typeof value === 'function';
};
},{}],32:[function(require,module,exports){
"use strict";

/* global module, define */

function mapEach(map, operation){
  var keys = map.keys();
  var next;
  while(!(next = keys.next()).done) {
    operation(map.get(next.value), next.value, map);
  }
}

var Multimap = (function() {
  var mapCtor;
  if (typeof Map !== 'undefined') {
    mapCtor = Map;

    if (!Map.prototype.keys) {
      Map.prototype.keys = function() {
        var keys = [];
        this.forEach(function(item, key) {
          keys.push(key);
        });
        return keys;
      };
    }
  }

  function Multimap(iterable) {
    var self = this;

    self._map = mapCtor;

    if (Multimap.Map) {
      self._map = Multimap.Map;
    }

    self._ = self._map ? new self._map() : {};

    if (iterable) {
      iterable.forEach(function(i) {
        self.set(i[0], i[1]);
      });
    }
  }

  /**
   * @param {Object} key
   * @return {Array} An array of values, undefined if no such a key;
   */
  Multimap.prototype.get = function(key) {
    return this._map ? this._.get(key) : this._[key];
  };

  /**
   * @param {Object} key
   * @param {Object} val...
   */
  Multimap.prototype.set = function(key, val) {
    var args = Array.prototype.slice.call(arguments);

    key = args.shift();

    var entry = this.get(key);
    if (!entry) {
      entry = [];
      if (this._map)
        this._.set(key, entry);
      else
        this._[key] = entry;
    }

    Array.prototype.push.apply(entry, args);
    return this;
  };

  /**
   * @param {Object} key
   * @param {Object=} val
   * @return {boolean} true if any thing changed
   */
  Multimap.prototype.delete = function(key, val) {
    if (!this.has(key))
      return false;

    if (arguments.length == 1) {
      this._map ? (this._.delete(key)) : (delete this._[key]);
      return true;
    } else {
      var entry = this.get(key);
      var idx = entry.indexOf(val);
      if (idx != -1) {
        entry.splice(idx, 1);
        return true;
      }
    }

    return false;
  };

  /**
   * @param {Object} key
   * @param {Object=} val
   * @return {boolean} whether the map contains 'key' or 'key=>val' pair
   */
  Multimap.prototype.has = function(key, val) {
    var hasKey = this._map ? this._.has(key) : this._.hasOwnProperty(key);

    if (arguments.length == 1 || !hasKey)
      return hasKey;

    var entry = this.get(key) || [];
    return entry.indexOf(val) != -1;
  };


  /**
   * @return {Array} all the keys in the map
   */
  Multimap.prototype.keys = function() {
    if (this._map)
      return makeIterator(this._.keys());

    return makeIterator(Object.keys(this._));
  };

  /**
   * @return {Array} all the values in the map
   */
  Multimap.prototype.values = function() {
    var vals = [];
    this.forEachEntry(function(entry) {
      Array.prototype.push.apply(vals, entry);
    });

    return makeIterator(vals);
  };

  /**
   *
   */
  Multimap.prototype.forEachEntry = function(iter) {
    mapEach(this, iter);
  };

  Multimap.prototype.forEach = function(iter) {
    var self = this;
    self.forEachEntry(function(entry, key) {
      entry.forEach(function(item) {
        iter(item, key, self);
      });
    });
  };


  Multimap.prototype.clear = function() {
    if (this._map) {
      this._.clear();
    } else {
      this._ = {};
    }
  };

  Object.defineProperty(
    Multimap.prototype,
    "size", {
      configurable: false,
      enumerable: true,
      get: function() {
        var total = 0;

        mapEach(this, function(value){
          total += value.length;
        });

        return total;
      }
    });

  var safariNext;

  try{
    safariNext = new Function('iterator', 'makeIterator', 'var keysArray = []; for(var key of iterator){keysArray.push(key);} return makeIterator(keysArray).next;');
  }catch(error){
    // for of not implemented;
  }

  function makeIterator(iterator){
    if(Array.isArray(iterator)){
      var nextIndex = 0;

      return {
        next: function(){
          return nextIndex < iterator.length ?
            {value: iterator[nextIndex++], done: false} :
          {done: true};
        }
      };
    }

    // Only an issue in safari
    if(!iterator.next && safariNext){
      iterator.next = safariNext(iterator, makeIterator);
    }

    return iterator;
  }

  return Multimap;
})();


if(typeof exports === 'object' && module && module.exports)
  module.exports = Multimap;
else if(typeof define === 'function' && define.amd)
  define(function() { return Multimap; });

},{}],33:[function(require,module,exports){
var supportedTypes = ['text', 'search', 'tel', 'url', 'password'];

module.exports = function(element){
    return !!(element.setSelectionRange && ~supportedTypes.indexOf(element.type));
};

},{}],34:[function(require,module,exports){
(function (process){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

}).call(this,require('_process'))
},{"_process":35}],35:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],36:[function(require,module,exports){
module.exports = function isSame(a, b){
    if(a === b){
        return true;
    }

    if(
        typeof a !== typeof b ||
        typeof a === 'object' &&
        !(a instanceof Date && b instanceof Date)
    ){
        return false;
    }

    return String(a) === String(b);
};
},{}],37:[function(require,module,exports){
var naturalSelection = require('natural-selection');

module.exports = function(element, value){
    var canSet = naturalSelection(element) && element === document.activeElement;

    if (canSet) {
        var start = element.selectionStart,
            end = element.selectionEnd;

        element.value = value;
        element.setSelectionRange(start, end);
    } else {
        element.value = value;
    }
};

},{"natural-selection":33}],38:[function(require,module,exports){
module.exports = Object.setPrototypeOf || ({__proto__:[]} instanceof Array ? setProtoOf : mixinProperties);

function setProtoOf(obj, proto) {
	obj.__proto__ = proto;
}

function mixinProperties(obj, proto) {
	for (var prop in proto) {
		obj[prop] = proto[prop];
	}
}

},{}],39:[function(require,module,exports){
var clone = require('clone'),
    deepEqual = require('cyclic-deep-equal');

function keysAreDifferent(keys1, keys2){
    if(keys1 === keys2){
        return;
    }
    if(!keys1 || !keys2 || keys1.length !== keys2.length){
        return true;
    }
    for(var i = 0; i < keys1.length; i++){
        if(!~keys2.indexOf(keys1[i])){
            return true;
        }
    }
}

function getKeys(value){
    if(!value || typeof value !== 'object'){
        return;
    }

    return Object.keys(value);
}

function WhatChanged(value, changesToTrack){
    this._changesToTrack = {};

    if(changesToTrack == null){
        changesToTrack = 'value type keys structure reference';
    }

    if(typeof changesToTrack !== 'string'){
        throw 'changesToTrack must be of type string';
    }

    changesToTrack = changesToTrack.split(' ');

    for (var i = 0; i < changesToTrack.length; i++) {
        this._changesToTrack[changesToTrack[i]] = true;
    };

    this.update(value);
}
WhatChanged.prototype.update = function(value){
    var result = {},
        changesToTrack = this._changesToTrack,
        newKeys = getKeys(value);

    if('value' in changesToTrack && value+'' !== this._lastReference+''){
        result.value = true;
    }
    if(
        'type' in changesToTrack && typeof value !== typeof this._lastValue ||
        (value === null || this._lastValue === null) && this.value !== this._lastValue // typeof null === 'object'
    ){
        result.type = true;
    }
    if('keys' in changesToTrack && keysAreDifferent(this._lastKeys, getKeys(value))){
        result.keys = true;
    }

    if(value !== null && typeof value === 'object' || typeof value === 'function'){
        var lastValue = this._lastValue;

        if('shallowStructure' in changesToTrack && (!lastValue || typeof lastValue !== 'object' || Object.keys(value).some(function(key, index){
            return value[key] !== lastValue[key];
        }))){
            result.shallowStructure = true;
        }
        if('structure' in changesToTrack && !deepEqual(value, lastValue)){
            result.structure = true;
        }
        if('reference' in changesToTrack && value !== this._lastReference){
            result.reference = true;
        }
    }

    this._lastValue = 'structure' in changesToTrack ? clone(value) : 'shallowStructure' in changesToTrack ? clone(value, true, 1): value;
    this._lastReference = value;
    this._lastKeys = newKeys;

    return result;
};

module.exports = WhatChanged;
},{"clone":8,"cyclic-deep-equal":10}],40:[function(require,module,exports){
(function (process){
'use strict'

const crel = require('crel')
// const defaultcss = require('defaultcss')

const path = require('path')
// const style = fs.readFileSync(path.join(__dirname, '/style.css'))
const finder = require('findit')(process.argv[2] || './node_modules/material-design-icons')

// var createIcon = require('svg-icon-component')({
//
//         // Function to resolve the url location of an icon.
//   resolvePath: function (iconName) {
//
//     return 'foo/bar/baz' + iconName + '.svg'
//
//   }
//
// })

module.exports = function (fastn, component, type, settings, children) {
  // if (settings.style !== false) defaultcss('header', style)

  component.extend('_generic', settings, children)
  component.setProperty('valid')

  console.log('settings', settings)

  let files = settings.icon + '.svg'

  // This sets up the file finder
  finder.find(files)

  finder.on('file', function (file, stat) {
    console.log(file)
  })

  component.setProperty('rightMenu')
  component.rightMenu(settings.rightMenu !== false)

  component.leftMenu = crel('div', {
    class: 'leftMenu'
  }, settings.leftMenu)

  function leftMenu () {
    if (!settings.leftMenu) {
      return
    }
    // return require('svg-icon-component')({
    //
    //         // Function to resolve the url location of an icon.
    //   resolvePath: function (iconName) {
    //     return 'foo/bar/baz' + iconName + '.svg'
    //   }
    // })
  }

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

    return component
  }
  return component
}

module.exports.expectedComponents = ['_generic']

}).call(this,require('_process'))
},{"_process":35,"crel":41,"findit":42,"path":34}],41:[function(require,module,exports){
arguments[4][9][0].apply(exports,arguments)
},{"dup":9}],42:[function(require,module,exports){
var EventEmitter = require('events').EventEmitter;
var rfs = require('fs');
var path = require('path');

module.exports = function walk (dir, opts, emitter, dstat) {
    if (!opts) opts = {};
    var fdir = opts._original || dir;
    opts._original = undefined;
    var fs = opts.fs || rfs;
    
    if (!emitter) {
        emitter = new EventEmitter;
        emitter.stop = function () {
            emitter._stopped = true;
            emitter.emit('stop');
        };
        emitter._pending = 0;
        emitter._seen = {};
    }
    
    if (dstat) {
        var stopped = false;
        emitter.emit('directory', fdir, dstat, function stop () {
            stopped = true;
        });
        emitter.emit('path', fdir, dstat);
        if (!stopped) {
            emitter._pending ++;
            fs.readdir(dir, function (err, files) {
                emitter._pending --;
                onreaddir(dir, err, files);
            });
        }
        else check()
    }
    else {
        emitter._pending ++;
        fs.lstat(dir, function (err, stat) {
            emitter._pending --;
            onlstat(err, stat);
        });
    }
    function onlstat (err, stat) {
        if (emitter._stopped) return;
        
        if (err) {
            if (!err.path) err.path = dir;
            emitter.emit('error', err);
            return check();
        }
        emitter._seen[stat.ino || dir] = true;
        
        if (stat.isSymbolicLink() && opts.followSymlinks) {
            emitter.emit('link', fdir, stat);
            emitter._pending ++;
            fs.readlink(dir, function (err, rfile) {
                if (emitter._stopped) return;
                emitter._pending --;
                if (err) {
                    if (!err.path) err.path = dir;
                    emitter.emit('error', err);
                    return check();
                }
                var file_ = path.resolve(dir, rfile);
                emitter.emit('readlink', fdir, file_);
                emitter._pending ++;
                fs.lstat(file_, function (err, stat) {
                    emitter._pending --;
                    onstat(err, stat);
                });
            });
        }
        else if (stat.isSymbolicLink()) {
            emitter.emit('link', fdir, stat);
            emitter.emit('path', fdir, stat);
            check();
        }
        else if (stat.isDirectory()) {
            var stopped = false;
            emitter.emit('directory', fdir, stat, function stop () {
                stopped = true;
            });
            emitter.emit('path', fdir, stat);
            if (!stopped) {
                emitter._pending ++;
                fs.readdir(dir, function (err, files) {
                    emitter._pending --;
                    onreaddir(dir, err, files);
                });
            }
            else check()
        }
        else {
            emitter.emit('file', fdir, stat);
            emitter.emit('path', fdir, stat);
            check();
        }
    }
    
    return emitter;
    
    function check () {
        if (emitter._pending === 0) finish();
    }
    
    function finish () {
        emitter.emit('end');
        emitter._stopped = true;
    }
    
    function onreaddir (dir, err, files) {
        if (emitter._stopped) return;
        
        if (err) {
            if (!err.path) err.path = dir;
            emitter.emit('error', err);
            return check();
        }
        
        files.forEach(function (rfile) {
            var file = path.join(fdir, rfile);
            
            emitter._pending ++;
            fs.lstat(file, function (err, stat) {
                emitter._pending --;
                
                if (emitter._stopped) return;
                if (err) {
                    if (!err.path) err.path = file;
                    emitter.emit('error', err);
                    check()
                }
                else onstat(file, stat)
            });
        });
       check();
    }
    
    function onstat (file, stat, original) {
        if (emitter._seen[stat.ino || file]) return check();
        emitter._seen[stat.ino || file] = true;
        
        if (stat.isDirectory()) {
            if (original) opts._original = original;
            walk(file, opts, emitter, stat);
            check();
        }
        else if (stat.isSymbolicLink() && opts.followSymlinks) {
            emitter.emit('link', file, stat);
            
            fs.readlink(file, function (err, rfile) {
                if (emitter._stopped) return;
                if (err) {
                    if (!err.path) err.path = file;
                    emitter.emit('error', err);
                    return check();
                }
                var file_ = path.resolve(path.dirname(file), rfile);
                
                emitter.emit('readlink', file, file_);
                emitter._pending ++;
                fs.lstat(file_, function (err, stat_) {
                    emitter._pending --;
                    if (emitter._stopped) return;
                    if (err) {
                        if (!err.path) err.path = file_;
                        emitter.emit('error', err);
                        return check();
                    }
                    
                    onstat(file_, stat_, file);
                    check();
                });
            });
        }
        else if (stat.isSymbolicLink()) {
            emitter.emit('link', file, stat);
            emitter.emit('path', file, stat);
            check();
        }
        else {
            emitter.emit('file', file, stat);
            emitter.emit('path', file, stat);
            check();
        }
    }
};

},{"events":13,"fs":4,"path":34}]},{},[1]);
