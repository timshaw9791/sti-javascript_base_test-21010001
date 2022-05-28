

/**
 * 深层比较。阅读第四章函数最后的习题“深层比较”,完成函数deepEqual
 * 提示：看看是否需要运用递归。
 */
const deepEqual=function(a, b) {
    if (a === b) {
        return true;
    }
    if (a == null || typeof a != "object" ||b == null || typeof b != "object") {
    return false;
    }
    let keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length != keysB.length) {
        return false;
    }    
    for (let key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])){
        return false;
    }
    return true;
  }
}
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true