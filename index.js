
/**
 * Expose `isError`.
 */

module.exports = isError;

/**
 * Test whether `value` is error object.
 *
 * @param {*} value
 * @returns {boolean}
 */

function isError(value) {
  var tag = Object.prototype.toString.call(value);
  return (
    tag === '[object Error]' ||
    tag === '[object Exception]' ||
    tag === '[object DOMException]' ||
    value instanceof Error
  );
}
