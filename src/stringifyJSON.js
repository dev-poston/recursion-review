// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'number') {
    return obj.toString();
  }
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'boolean') {
    return obj.toString();
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var arrResult = '[';
    for (var i = 0; i < obj.length; i++) {
      if (obj[i] === obj[obj.length - 1]) {
        arrResult += stringifyJSON(obj[i]);
      } else {
        arrResult += stringifyJSON(obj[i]) + ',';
      }
    }
    return arrResult + ']';
  }
  if (typeof obj === 'object') {
    if (_.isEmpty(obj)) {
      return '{}';
    }
    var objResult = '{';
    for (var key in obj) {
      if (obj[key] === 'function' || obj[key] === undefined) {
        return '{}';
      }
      objResult += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
    var sliced = objResult.slice(0, -1);
    return sliced + '}';
  }
};
