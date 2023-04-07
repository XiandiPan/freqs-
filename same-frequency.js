"use strict";

//create useFrequencyCount function
//create number frequencies calling useFrequencyCount on split numbers-turned-string
//iterate through each key in first number frequency
//check if key is in second num frequency, if not => false
//check if it equals second num frequency, if not => false
//return true

/** input: two integers. output: boolean
*
*sameFrequency(123, 321);   // true
*sameFrequency(34, 14);     // false
*sameFrequency(22, 22);     // true
*sameFrequency(22, 222);    // false


*/
function getFreqCounter(items) {
  const frq = {};

  for (const item of items) {
    const current = frq[item] || 0;
    frq[item] = current + 1;
  }
  return frq;
}

function sameFrequency(num1, num2) {
  const numStr1 = num1.toString();
  const numStr2 = num2.toString();

  if (numStr1.length !== numStr2.length) return false;

  const frq1 = getFreqCounter(numStr1);
  const frq2 = getFreqCounter(numStr2);

  for (let key in frq1){
    if (!(key in frq2)){
      return false;
    }

    if (frq1[key] !== frq2[key]){
      return false;
    }
  }
  return true;

}
