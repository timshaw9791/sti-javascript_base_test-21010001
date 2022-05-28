/**
 * 字符计数。阅读第三章函数最后的习题“字符计数”,
 * 你写代码时"也"可以运用后面所学的高阶函数的知识。
 */
function countBs(str){
    return countChar(str, "B");
}

function countChar(str,char){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] == char) {
        count += 1;
      }
    }
    return count;
}


console.log(countBs("BBC"));
 // → 2
 console.log(countChar("kakkerlak", "k"));
 // → 4