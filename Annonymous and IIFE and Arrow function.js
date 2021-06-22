//using Annonyous and IIFE...................
//1) Print the odd numbers in an array 
var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var odds = [];
var evenNumbers = function(nums) {
    for (var i = 0; i < nums.length; i++) {
          if ((nums[i] % 2) != 0) {
          odds.push(nums[i]);
       }
       }
};
evenNumbers(nums);
alert(odds);
console.log(odds)

//2) Sum of all numbers in an array
let num=[23,56,45,76,34]
sum=0
let x=function(num)
{
  for(i=0;i<num.length;i++)
  {
    sum+=num[i]
  }
}
x(num)
console.log(sum)

//3) Return all the prime numbers in an array

let num=[1,5,34,11,17,24]
let flag
let primenum=[]
let nonprime=[]
let m
var a=function(num)
{for(i=0;i<num.length;i++)
  { m=num[i]/2
    flag=0
    for(j=2;j<=m;j++){
      if(num[i]%j==0){
        flag=1
        break;}}
        if(flag==0){
          primenum.push(num[i])  }
          }
      }
    a(num)
    console.log(primenum)
  
    //4) Return all the palindrome in an arrary

let arr=[151,1245,1441,6556,536]
let temp,sum=0,r
var x=function(){
  for(i=0;i<arr.length;i++)
  {
    temp=a[i]
    while(a[i]>0)
    {
      r=a[i]%10
      sum=(sum*10)+r
      a[i]=a[i]/10
      if(sum==temp)
      {
        return "palindrome"
      }
    }
  }
}
let y=x()
console.log(y)

  


















































