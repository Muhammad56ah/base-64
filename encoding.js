import readlineSync from "readline-sync";

// function base64Encoding() {
//   let inputStr = readlineSync.question("Enter your input String : ");

//   console.log(`the enterd input String is : ${inputStr}`);
//   let ASCIIchars = inputStr.split("").map((char) => char.charCodeAt());
//   console.log(ASCIIchars);
//   //convert the above decimal to 8 bit binary
//   ASCIIchars = ASCIIchars.map((num) => {
//     num = num.toString(2);
//     while (num.length < 8) {
//       num = "0" + num;
//     }
//     return num;
//   });
//   console.log(ASCIIchars);
//   //merge all the binary into giant binary
//   ASCIIchars=ASCIIchars.join("");
//   console.log(ASCIIchars); //printing the merged string

//   const bin6Bit = [];
//   for (let i = 0; i < ASCIIchars.length; i = i + 6) {
//     bin6Bit.push(ASCIIchars.slice(i, i + 6));
//   }
//   let counter = 0;
//   while (bin6Bit[bin6Bit.length - 1].length < 6) {
//     bin6Bit[bin6Bit.length - 1] = bin6Bit[bin6Bit.length - 1] + "0";
//     counter += 1;
//   }
//   console.log(bin6Bit);

//   const bin6Dec = bin6Bit.map((bin) => parseInt(bin, 2));
//   console.log(bin6Dec);
//   let base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
//   let finalStr = bin6Dec.map((dec) => base64[dec]).join("");
//   if (counter == 2) finalStr += "=";
//   if (counter == 4) finalStr += "==";
//   console.log(`The base 64 encoded string for ${inputStr} is ${finalStr}`);
//}

//export default base64Encoding;

//convert binary to decimal
//map thru the decimals
//                                2nd attempt
function base64Encoding() {
 let inputStr = readlineSync.question("Enter your input string ?")
 console.log(`the inputted string is ${inputStr} `) 

 let ASCIIchars = inputStr.split("").map(ele => ele.charCodeAt())
 console.log(ASCIIchars)

 ASCIIchars= ASCIIchars.map(num => { // remove the variable and test result 
 num = num.toString(2)
 while (num.length < 8){
  num = "0" + num
 }return num
 })
console.log(ASCIIchars)

ASCIIchars=ASCIIchars.join('')
console.log(ASCIIchars)

const bin6Bit = []
for(let i = 0 ; i < ASCIIchars.length ; i =i + 6){
  bin6Bit.push(ASCIIchars.slice(i,i+6))  
}
let counter = 1
while (bin6Bit[bin6Bit.length -1].length < 6){ 
  bin6Bit[bin6Bit.length -1] = bin6Bit[bin6Bit.length -1] + "0"
  counter += 1
}
console.log(bin6Bit)
var bin6Dec = bin6Bit.map(bin => parseInt(bin,2))
console.log(bin6Dec)

let base64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
const finalStr = bin6Dec.map(dec => base64[dec]).join('')
console.log(finalStr)
}
export default base64Encoding;