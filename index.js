
/**
 * Expose `isError`.
 */

module.exports = isError;

/**
 * Test whether `V` is error object.
 *
 * @param {*} V
 * @returns {boolean}
 */

function isError(V) {
  var tagName = Object.prototype.toString.call(V);
  return (
    tagName === '[object Error]' ||
    tagName === '[object Exception]' ||
    V instanceof Error
  );
}
