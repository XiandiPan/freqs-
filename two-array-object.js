"use strict";

//create output object (arrObj)
//iterate through keys array based on index number
  //use index number to extract value from value array
  //if valuearr[index] === undefined, value = null
  //assign key into arrObj with corresponding extracted value
//return arrObj

/** twoArrayObject takes in two arrays of possibily different lengths and outputs
 *  an object where keys are from first array and values are from second array
 *
 * twoArrayObject(['x', 'y', 'z'], [1, 2]) => {'x': 1, 'y': 2, 'z': null}
 * twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) => {'a': 1, 'b': 2, 'c': 3}
 */
function twoArrayObject(keyArr, valArr) {
  const arrObj = {};

  for (let i=0; i<keyArr.length; i++) {
    let keyAdd = keyArr[i];
    let valAdd = valArr[i];

    if (valAdd === undefined) valAdd = null;

    arrObj[keyAdd] = valAdd;
  }

  return arrObj;
}
