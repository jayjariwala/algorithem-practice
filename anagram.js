function validAnagram(str1, str2) {
  if(str1.length !== str2.length) {
    return false;
  }
  const str1Obj = {};
  const str2Obj = {};
  str1.split("").forEach((char) => {
    str1Obj[char] = ((str1Obj[char] | 0) + 1);
  })
  str2.split("").forEach((char) => {
    str2Obj[char] = ((str2Obj[char] | 0) + 1);
  })
  // check if the str1Obj keys are present in str2Obj
  for(key in str1Obj) {
    if((!str2Obj.hasOwnProperty(key))) {
      return false;
    }
    if( str1Obj[key] !== str2Obj[key]) {
      return false;
    }
  }
  return true;
}

const a = validAnagram(' ', ' ');
const b = validAnagram('aaz', 'zza');
const c = validAnagram('anagram', 'nagaram');
const d = validAnagram('rat', 'car');
const e = validAnagram('awesome', 'awesom');
const f = validAnagram('qwerty', 'qeywrt');
const g = validAnagram('texttwisttime', 'timetwisttext');

console.log("Ansewers >>" , a,b, c,d, e, f, g);
