// Iteration 1: Names and Input
let hacker1 = "javier"
console.log(`The driver´s name is ${hacker1}`)

let hacker2 = "someone"
console.log(`The navigator´s name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`);
  }

// Iteration 3: Loops
//3.1
let driverCapitals = ""

for (let i = 0; i < hacker1.length; i++) {
 driverCapitals += hacker1[i].toLocaleUpperCase() + " "
}
console.log("driverCapitals", driverCapitals)

//3.2
let reverseLetters = ""

for (let i = hacker1.length -1; i>=0; i-=1) {
 reverseLetters += hacker1[i]
}
console.log( reverseLetters)

//3.3
if( hacker1 < hacker2) {
    console.log("The driver's name goes first.")
  } else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.")
  } else if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
  }

//bonus 1
let longText = "Praesent at eleifend orci. Sed sapien est, semper a accumsan eget, rhoncus in mauris. Ut feugiat maximus nunc in pharetra. Quisque porttitor pellentesque egestas. Donec pharetra ullamcorper elit vel luctus. Proin consectetur erat sit amet enim rhoncus, at pharetra dui ultricies. Cras eget elementum tortor. Aenean aliquam tempus dui eu viverra. Etiam ullamcorper nisi lacus, nec sagittis sem aliquam sit amet. Vestibulum ut urna lacinia, efficitur enim mollis, convallis dui. In mi tortor, semper venenatis porta id, molestie vitae lorem. Suspendisse sit amet bibendum nunc, sed lacinia arcu. In et quam pellentesque arcu ultrices ultricies mollis id felis. Aliquam in gravida quam, rutrum bibendum arcu."

let countWords = 0
for (let i = 0; i <= longText.length ; i+=1) {
  
  if (longText[i] === " ") {
     countWords += 1
  }
  
}
console.log(countWords)

//bonus 2
let phraseToCheck = "whatever"
let reversedPhrased = ""

for (let i = phraseToCheck.length - 1; i >= 0; i-=1) {
  reversedPhrased += phraseToCheck[i]
}
if (phraseToCheck === reversedPhrased) {
  console.log("this is a palindrome")
} else {
  console.log("This is not a palindrome")
}