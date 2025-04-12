/**
 * Safely gets a nested property from an object.
 *
 * @param {object} obj The object to query.
 * @param {string|array} path The path of the property to get. Can be a dot-separated string or an array of keys.
 * @param {*} [defaultValue=undefined] The value to return if the path is not found.
 * @returns {*} The value at the specified path or the default value.
 */
export function safeGet(obj, path, defaultValue = undefined) {
  const keys = Array.isArray(path) ? path : path.split('.');
  let current = obj;

  for (const key of keys) {
    if (current === null || current === undefined) {
      return defaultValue;
    }
    current = current[key];
  }

  return current === undefined ? defaultValue : current;
}
