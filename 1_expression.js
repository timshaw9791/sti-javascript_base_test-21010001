/**
 * 把以下信息改成你的，便于改卷。
 * 如"刘笑锋"，全学号如："2012020045"
 * 
 */
let you={name:'陈建海'
    ,number:'21002020103'};


/**
 *  TODO 1.一行代码完成闰年判断。关键在于一行代码！！
 * 判断任意年份是否为闰年，需要满足以下条件中的任意一个：
 * ① 该年份能被 4 整除同时不能被 100 整除；
 * ② 该年份能被400整除。
 * @param {*} year ，number类型的年份，如2020。
 * 函数必须返回boolean类型的true或者false；
 */

const isLeapYear=function (year){if((year%4==0&&year%100!=0)||(year%400==0)){return true}else{return false}} 

//箭头函数一行搞定润年，关键点：箭头函数！一行！
let isLeapYear2=(year)=>{return ((year%4==0&&year%100!=0)||(year%400==0))};//TODO 


//给变量types设定数组，并给定六个完全不同类型的值作为其元素。
let valueTypes=[1,'1',true,null,undefined,Object,];//TODO 六个完全不同类型的值
