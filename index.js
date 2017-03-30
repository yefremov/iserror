
/**
 * Expose `isError`.
 */

module.exports = isError;

function isObject(what) {
  return typeof what === 'object' && what !== null;
}

/**
 * Test whether `value` is error object.
 *
 * @param {*} value
 * @returns {boolean}
 */

function isError(value) {
  if !isObject(value) {
    return false;
  }

  switch (Object.prototype.toString.call(value)) {
    case '[object Error]': return true;
    case '[object Exception]': return true;
    case '[object DOMException]': return true;
    default: return value instanceof Error;
  }
}
