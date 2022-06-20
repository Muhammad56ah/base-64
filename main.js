import readlineSync from "readline-sync";
import base64Encoding from "./encoding.js"
//import base64Decoding from "./decoding.js"

function main() {
    console.log("------------------------------")
    console.log("\t\t  :: Menu Options")
    console.log("------------------------------")
    const options = ["exit", "Base 64 Encoding","Base 64 Decoding"]
    options.forEach(function(ele, i){
        console.log(`\tpress ${i} for ${ele}\n`)
    })
    const option = readlineSync.questionInt("Enter your option from the menu :")
    switch(option){
        case 0:
            console.log("ADIOS BYE BYE")
            break
        case 1:
            base64Encoding()
            break
        case 2:
            Console.log("Decoding")
            break
        default:
            console.log("Invalid input")
    }const repeat = readlineSync.question("Do you want to continue ?  Y/N ")
    if(repeat == "yes" || repeat == "y" || repeat =="YES" || repeat == "Yes" ){
        return main()
    }else {
        console.log("Bye Bye")
    }
}

 main()