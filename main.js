import readlineSync from "readline-sync";

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
            console.log("implement encoding logic")
            break
        case 2:
            console.log("implement decoding logic")
            break
        default:
            console.log("Invalid input")
    }
}

var output = main()
console.log(output)