

// Write a program that takes number as input, print the sum of odd digits in the given number
// num=prompt("enter a number:")
// odd_sum=0;
// for(i=0;i<num.length;i++){
//     if(num[i]%2!=0){
//         odd_sum=odd_sum+Number(num[i]);
//     }
// }
// console.log(sum);
// Write a program to print the sum of even digits in the given numbers

// num=prompt("enter a number:")
// even_sum=0;
// for(i=0;i<num.length;i++){
//     if(num[i]%2==0){
//         even_sum+=Number(num[i]);
//     }
// }
// console.log(sum);
// Write a program to print the differnce between even sum and odd sum in the given number.
// num=prompt("enter the number:")
// odd_sum=0
// even_sum=0
// for(i=0;i<num.length;i++)
//     if(num[i]%2==0){
//          even_sum=even_sum+Number(num[i])
//     }
// else{
//         odd_sum=odd_sum+Number(num[i])
//  }
//  console.log(even_sum-odd_sum) //for the difference between even and oddsums

//  Write a program to print the largest sum between odd sum and even sum.

num=prompt("enter the number:")
odd_sum=0
even_sum=0
for(i=0;i<num.length;i++)
    if(num[i]%2==0){
         even_sum=even_sum+Number(num[i])
    }
else{
        odd_sum=odd_sum+Number(num[i])
 }
 if(even_sum>odd_sum){
    console.log(`even sum ${even_sum} is largest`)
 }
 else{
    console.log(`odd sum ${odd_sum} is largest`)
 }