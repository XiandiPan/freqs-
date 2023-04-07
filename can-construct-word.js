"use strict";

/** input: string. output: object */
// add whatever parameters you deem necessary & write doc comment
//declare frequency counter function, and pass in item as a parameter.
//with in the object literal first declare a a constant variable call frq and assign a empty object
//use a for loop to iterate through the items and adding the key if it doesnt exist in the frq;
//if you does exist then add one to the value;
function getFreqCounter(items){
  const frq = {};

  for (const item of items){
    const current = frq[item] || 0;
    frq[item] = current + 1;
  }
  return frq;
}
/** input: str1, str2, output: boolean */
//using getFreCounter as a callback in the canConstructWord.
//passing in two parameters str1 and str 2
//declare two const variable and pass it into the callback function;
//use for loop, and conditional statement to check it. return either true or false;
function canConstructWord(str1,str2) {
  if (str1.length > str2.length) return false;

  const freqStr1 = getFreqCounter(str1);
  const freqStr2 = getFreqCounter(str2);

  for ( let key in freqStr1){
    if (!(key in freqStr2)){
      return false;
    }

    if ( freqStr1[key] > freqStr2[key]){
      return false;
    }
  }
return true;

}
