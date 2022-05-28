
/**棋盘。阅读第二章最后的习题“棋盘”。并完成如下函数，根据参数height和width，返回棋盘的字符串。
 * 注意,最左上角的永远是一个空格，向左向下均为#,#和空格在横竖两个方向上相间排列。
 * @param {*} height  - 棋盘的高度
 * @param {*} width  - 棋盘的宽度
 * @returns 返回字符串
 * 注意，回车换行使用'\r\n'
 */
 function chessBoard(height,width){
     let a ="";
     let b ="";
     let c ="";
     for(let i=0;i<=width-1;i++){
        if(i%2==0){
            b=b+" ";
            c=c+"#"
        }else{
            b=b+"#"
            c=c+" "
        }
     }
     if(height>1){
         if(height%2==0){
             for(let i =0;i<height-1;i++){
                 if(i%2==0){
                     a=a+b+`\n`
                 }else{
                     a=a+c+`\n`
                 }
             }
             a=a+c
         }else{
            for(let i =0;i<height-1;i++){
                if(i%2==0){
                    a=a+b+`\n`
                }else{
                    a=a+c+`\n`
                }
            }
            a=a+b
         }
     }else{
         a=" "
     }
     return a; 
}

console.log(chessBoard(2,2));//返回的是如下棋盘字符串
/**
 #
# 
*/
console.log(chessBoard(4,5));
