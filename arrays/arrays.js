////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 1 - INITALIZATION
//
//  Initialize the 'newArray' variable as any kind of non-empty array
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let newArray

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 2 - IS ARRAY
//
//  Check if 'maybeAnArray' is an array and save the result into 'isAnArray'
let maybeAnArray = [ "definately", "an", "array" ]
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let isAnArray

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 3 - ARRAY PUSH
//
//  Add the element "three" to the end of the 'pushMe' array
let pushMe = [ "one", "two" ]
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 4 - ARRAY UNSHIFT
//
//  Add the element "one" to the beginning of the 'unshiftMe' array
let unshiftMe = [ "two", "three" ]
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 5 - ARRAY POP
//
//  Remove the last item of the 'popMe' array
    let popMe = [ 1, 2, 3, 4 ]
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 6 - ARRAY SHIFT
//
//  Remove the first item of the 'shiftMe' array
    let shiftMe = [ "zero", "one", "two", "three" ]
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 7 - ARRAY CONCAT
//
//  Concatenate arrays 'concatMe1' and 'concatMe2' and save the result
//  into 'concatenatedArrays'
    let concatMe1 = [ "Apple", "Banana", "Cherry", "Durian" ]
    let concatMe2 = [ "Elderberry", "Fig", "Guava" ]
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let concatenatedArrays

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 8 - ARRAY LENGTH
//
//  Get the number of elements in 'getMyLength' and save the result into
//  arrayLength
    let getMyLength = [ "How", "many", "elements", "do", "I", "have", "?" ]
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let arrayLength

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 9 - GET Nth ELEMENT
//
//  Get the 4th element of 'getMyFourthElement' and save the result into
//  'arrayFourthElement'
    let getMyFourthElement = [ "How", "many", "elements", "do", "I", "have", "?" ]
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let arrayFourthElement

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 10 - GET LAST ELEMENT
//
//  Get the last element of 'getMyLastElement' and save the result into
//  'arrayLastElement' - WITHOUT modifying the original 'getMyLastElement'
//  i.e. do not use pop()
    let getMyLastElement = [ "How", "many", "elements", "do", "I", "have", "?" ]
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let arrayLastElement

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 11 - ARRAY SLICE
//
//  Choosing the correct start and end indices, get a slice of 'getMySlice'
//  and save the result into 'arraySlice' so that 'arraySlice' becomes:
//  [ "wood", "would", "a", "woodchuck" ]
    let getMySlice = [ "How", "much", "wood", "would", "a", "woodchuck", "chuck", "?" ]
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let arraySlice

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 12 - ARRAY INSERT
//
//  Insert multiple elements into the 'insertIntoMe' so that it looks like:
//  [ "Well", "that", "was", "easy", "!" ]
//  Hint: Function is called splice()
    let insertIntoMe = [ "Well", "easy", "!" ]
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 13 - ARRAY REMOVE
//
//  Delete multiple elements from the 'removeFromMe' array so that it looks like:
//  [ "You", "know", "less", "is", "more" ]
//  Hint: You should use the same function as array insert
    let removeFromMe = [ "You", "know", "what", "they", "say", "sometimes", "less", "is", "more" ]
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 14 - ARRAY INCLUDES
//
//  Check if the 'breakfastList' array includes "bacon" and save the result
//  into 'breakfastIncludesBacon'
    let breakfastList = [ "milk", "eggs", "bacon", "orange juice" ]
//   NOTE: 'breakfastIncludesBacon' should be a boolean value of True or False
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let breakfastIncludesBacon

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 15 - ARRAY SORT
//
//  Sort the following 'sortMe' array in alphabetical order
    let sortMe = [ "Cherry", "Elderberry", "Fig", "Apple", "Durian", "Guava", "Banana" ]
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 16 - ARRAY SORT AND REVERSE
//
//  Sort the following 'sortAndReverseMe', then reverse it, so that the
//  strings are sorted in descending order
    let sortAndReverseMe = [ "Cherry", "Elderberry", "Fig", "Apple", "Durian", "Guava", "Banana" ]
//  NOTE: Remember the dot notation expression1().expression2() turns the output
//  of expression1 into the input of expression2
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 17 - SPLIT STRING INTO AN ARRAY
//
//  Split the following 'splitMeIntoArray' string into an array, using the
//  correct delimiter so that the array only contains the words of the sentence
//  with no spaces, and save the result into 'arrayFromSplitString'
    let splitMeIntoArray = "The quick brown fox jumps over the lazy dog"
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let arrayFromSplitString

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 18 - JOIN ARRAY INTO A STRING
//
//  Join the following 'joinMeIntoString' array into a string, using the
//  correct delimiter so that the string represents a valid IP Address
//  and save the result into 'stringFromJoinedArray'
    let joinMeIntoString = [ 106, 162, 9, 2 ]
//  NOTE: Example of valid IP Address: "10.9.123.9"
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let stringFromJoinedArray

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 19 - ARRAY TIC TAC TOE
//
//  An array can contain an array as its elements, such an array is called
//  a 2-Dimensional array. Make 'ticTacToeArray' be a 2-Dimensional array
//  that reflects the following tic tac toe game state:
//
//  | X | O | O |
//  |---|---|---|
//  |   | X | O |
//  |---|---|---|
//  |   | X | O |
//
//  Use "X" and "O" uppercase for the x's and o's, and "" empty string for
//  no move placed.
//
//  The 2-D Array you end up building, if correct, is EXACTLY how tic tac
//  toe games online are programmed.
//
//  Here is an example of how the top row could look like:
//  let ticTacToeArray = [
//    [ "", "O", "X" ],
//  ]
//  Feel free to skip lines for your clarity, the variable is the same as far
//  as the program is concerned when executed
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let ticTacToeArray

////////////////////////////////////////////////////////////////////////



//////////////////////// END OF ARRAY EXERCISES ////////////////////////



////////////////////////////////////////////////////////////////////////
//
//                               ANSWERS
//
//  DO NOT LOOK AT THIS SECTION UNTIL YOU HAVE FINISHED THE EXERCISES
//
//  The following code tests the variables you need to work on to confirm your work is
//  correct. The if conditions check the variables are correct and the console.log()
//  statements are what make the print outs you see when you run the file. The below
//  is a crude demonstration of what we refer to as code tests. Code testing is a
//  common practice in the software engineer's role, where tests are run to confirm all
//  code runs correctly. Only when all tests pass would we give ourselves the green light
//  to ship code to production and feel confident the system will perform as expected.
//
////////////////////////////////////////////////////////////////////////

// setGreen instructs the shell to set the printed output to green
let setGreen = "\x1b[32m"
// setRed instructs the shell to set the printed output to red
let setRed = "\x1b[31m"
// resetColor instructs the shell to reset the printout color to standard
let resetColor = "\x1b[0m"
// tab adds a tab space for clarity on the array print outs
let tab = "    "

// Set correctMsg and incorrectMsg Messages so I don't need to write it everytimne
let correctMsg = setGreen + "Correct! " + resetColor
let incorrectMsg = setRed + "Incorrect! " + resetColor

// totalTests and passedTests count the final tally of passed tests
let totalTests = 0
let passedTests = 0

// Array Initialization
if (newArray !== undefined && newArray.length > 0 && Array.isArray(newArray)) {
  console.log(correctMsg + "The 'newArray' array you initialized looks like: ")
  console.log(newArray)
  passedTests++
} else {
  console.log(incorrectMsg + "The initialized 'newArray' should be defined and have a length of more than 0, but yours looks like " + newArray)
}
console.log()
totalTests++

// Is Array
let correctIsArray = Array.isArray(maybeAnArray)
if (isAnArray !== undefined && isAnArray === correctIsArray) {
  console.log(correctMsg + "As for the variable 'maybeAnArray' being an array, you found this was " + isAnArray)
  passedTests++
} else {
  console.log(incorrectMsg + "As for the variable 'maybeAnArray' being an array, this should be " + correctIsArray + " but you got " + isAnArray)
}
console.log()
totalTests++

// Array Push
let correctPushArray = [ "one", "two" ] //.push("three")
correctPushArray.push("three")
if (pushMe !== undefined && JSON.stringify(pushMe) === JSON.stringify(correctPushArray)) {
  console.log(correctMsg + "After adding \"three\" to the end of 'pushMe', 'pushMe' is:")
  console.log(pushMe)
  passedTests++
} else {
  console.log(incorrectMsg + "After adding \"three\" to the end of 'pushMe', 'pushMe' should be:")
  console.log(correctPushArray)
  console.log("but you got:")
  console.log(pushMe)
}
console.log()
totalTests++

// Array Unshift
let correctUnshiftArray = [ "two", "three" ]
correctUnshiftArray.unshift("one")
if (unshiftMe !== undefined && JSON.stringify(unshiftMe) === JSON.stringify(correctUnshiftArray)) {
  console.log(correctMsg + "After adding \"one\" to the beginning of 'unshiftMe', 'unshiftMe' is:")
  console.log(unshiftMe)
  passedTests++
} else {
  console.log(incorrectMsg + "After adding \"one\" to beginning of 'unshiftMe', 'unshiftMe' should be:")
  console.log(correctUnshiftArray)
  console.log("but you got:")
  console.log(unshiftMe)
}
console.log()
totalTests++

// Array Pop
let correctPopArray = [ 1, 2, 3, 4 ]
correctPopArray.pop()
if (popMe !== undefined && JSON.stringify(popMe) === JSON.stringify(correctPopArray)) {
  console.log(correctMsg + "After removing the last element from 'popMe', 'popMe' is:")
  console.log(popMe)
  passedTests++
} else {
  console.log(incorrectMsg + "After removing the last element from 'popMe', 'popMe' should be:")
  console.log(correctPopArray)
  console.log("but you got:")
  console.log(popMe)
}
console.log()
totalTests++

// Array Shift
let correctShiftArray = [ "zero", "one", "two", "three" ]
correctShiftArray.shift()
if (shiftMe !== undefined && JSON.stringify(shiftMe) === JSON.stringify(correctShiftArray)) {
  console.log(correctMsg + "After removing the first element from 'shiftMe', 'shiftMe' is:")
  console.log(shiftMe)
  passedTests++
} else {
  console.log(incorrectMsg + "After removing the first element from 'shiftMe', 'shiftMe' should be:")
  console.log(correctShiftArray)
  console.log("but you got:")
  console.log(shiftMe)
}
console.log()
totalTests++

// Array Concat
let correctConcatArray = concatMe1.concat(concatMe2)
if (concatenatedArrays !== undefined && JSON.stringify(concatenatedArrays) === JSON.stringify(correctShiftArray)) {
  console.log(correctMsg + "After concatenating 'concatMe1' and 'concatMe2', 'concatenatedArrays' is:")
  console.log(concatenatedArrays)
  passedTests++
} else {
  console.log(incorrectMsg + "After concatenating 'concatMe1' and 'concatMe2', 'concatenatedArrays' should be:")
  console.log(correctConcatArray)
  console.log("but you got:")
  console.log(concatenatedArrays)
}
console.log()
totalTests++

// Array Length
let correctArrayLength = getMyLength.length
if (arrayLength !== undefined && arrayLength === correctArrayLength) {
  console.log(correctMsg + "The number of elements in the 'getMyLength' array you got was: " + arrayLength)
  passedTests++
} else {
  console.log(incorrectMsg + "The number of elements in the 'getMyLength' array should be " + correctArrayLength + " but you got " + arrayLength)
}
console.log()
totalTests++

// Array Get Nth Element
let correctFourthElement = getMyFourthElement[3]
if (arrayFourthElement !== undefined && arrayFourthElement === correctFourthElement) {
  console.log(correctMsg + "The fourth element in the 'getMyFourthElement' array you got was: '" + arrayFourthElement + "'")
  passedTests++
} else {
  console.log(incorrectMsg + "The fourth element in the 'getMyFourthElement' array should be '" + correctFourthElement + "' but you got '" + arrayFourthElement + "'")
}
console.log()
totalTests++

// Array Get Last Element
let getMyLastElementCopy = [ "How", "many", "elements", "do", "I", "have", "?" ]
let correctLastElement = getMyLastElementCopy[getMyLastElementCopy.length - 1]
if (arrayLastElement !== undefined && arrayLastElement === correctLastElement && JSON.stringify(getMyLastElement) === JSON.stringify(getMyLastElementCopy)) {
  console.log(correctMsg + "The last element in the 'getMyLastElement' array you got was '" + arrayLastElement + "', and you did not modify the original 'getMyLastElement' array")
  console.log(concatenatedArrays)
  passedTests++
} else {
  console.log(incorrectMsg + "The last element in the 'getMyLastElement' array should be '" + correctLastElement + "' but you got '" + arrayLastElement + "'")
  console.log("If these are the same, the test failed because you modified the original 'getMyLastElement' array, it should look like:")
  console.log(getMyLastElement)
  console.log("and it looks like:")
  console.log(getMyLastElementCopy)
}
console.log()
totalTests++

// Array Slice
let correctArraySlice = getMySlice.slice(2, 6)
if (arraySlice !== undefined && JSON.stringify(arraySlice) === JSON.stringify(correctArraySlice)) {
  console.log(correctMsg + "The slice of 'getMySlice' you got was:")
  console.log(arraySlice)
  passedTests++
} else {
  console.log(incorrectMsg + "The slice of 'getMySlice' should be:")
  console.log(correctArraySlice)
  console.log("but you got:")
  console.log(arraySlice)
}
console.log()
totalTests++

// Array Insert
let correctInsertedArray = [ "Well", "easy", "!" ]
correctInsertedArray.splice(1, 0, "that", "was")
if (insertIntoMe !== undefined && JSON.stringify(insertIntoMe) === JSON.stringify(correctInsertedArray)) {
  console.log(correctMsg + "After inserting \"that\" and \"was\" elements into of 'insertIntoMe', 'insertIntoMe' looks like:")
  console.log(insertIntoMe)
  passedTests++
} else {
  console.log(incorrectMsg + "After inserting \"that\" and \"was\" elements into of 'insertIntoMe', 'insertIntoMe' should be:")
  console.log(correctInsertedArray)
  console.log("but you got:")
  console.log(insertIntoMe)
}
console.log()
totalTests++

// Array Remove
let correctRemovedArray = [ "You", "know", "what", "they", "say", "sometimes", "less", "is", "more" ]
correctRemovedArray.splice(2, 3)
if (removeFromMe !== undefined && JSON.stringify(removeFromMe) === JSON.stringify(correctRemovedArray)) {
  console.log(correctMsg + "After deleting elements from 'removeFromMe', 'removeFromMe' looks like:")
  console.log(removeFromMe)
  passedTests++
} else {
  console.log(incorrectMsg + "After deleting elements from 'removeFromMe', 'removeFromMe' should be:")
  console.log(correctRemovedArray)
  console.log("but you got:")
  console.log(removeFromMe)
}
console.log()
totalTests++

// Array Includes
let correctBreakfastIncludesBacon = breakfastList.includes("bacon")
if (breakfastIncludesBacon !== undefined && breakfastIncludesBacon === correctBreakfastIncludesBacon) {
  console.log(correctMsg + "As for the variable 'breakfastList' including \"bacon\", you found this was " + breakfastIncludesBacon)
  passedTests++
} else {
  console.log(incorrectMsg + "As for the variable 'breakfastList' including \"bacon\", this should be " + correctBreakfastIncludesBacon + " but you got " + breakfastIncludesBacon)
}
console.log()
totalTests++

// Array Sort
let sortMeCopy = [ "Cherry", "Elderberry", "Fig", "Apple", "Durian", "Guava", "Banana" ]
sortMeCopy.sort()
if (sortMe !== undefined && JSON.stringify(sortMe) === JSON.stringify(sortMeCopy)) {
  console.log(correctMsg + "After sorting the elements in 'sortMe', 'sortMe' looks like:")
  console.log(sortMe)
  passedTests++
} else {
  console.log(incorrectMsg + "After sorting the elements in 'sortMe', 'sortMe' should be:")
  console.log(sortMeCopy)
  console.log("but you got:")
  console.log(sortMe)
}
console.log()
totalTests++

// Sort And Reverse
let sortAndReverseMeCopy = [ "Cherry", "Elderberry", "Fig", "Apple", "Durian", "Guava", "Banana" ]
sortAndReverseMeCopy.sort().reverse()
if (sortAndReverseMe !== undefined && JSON.stringify(sortAndReverseMe) === JSON.stringify(sortAndReverseMeCopy)) {
  console.log(correctMsg + "After sorting and reversing the elements in 'sortAndReverseMe', 'sortAndReverseMe' looks like:")
  console.log(sortAndReverseMe)
  passedTests++
} else {
  console.log(incorrectMsg + "After sorting and reversing the elements in 'sortAndReverseMe', 'sortAndReverseMe' should be:")
  console.log(sortAndReverseMeCopy)
  console.log("but you got:")
  console.log(sortAndReverseMe)
}
console.log()
totalTests++

// Split String Into Array
let correctArrayFromSplitString = splitMeIntoArray.split(" ")
if (arrayFromSplitString !== undefined && JSON.stringify(arrayFromSplitString) === JSON.stringify(correctArrayFromSplitString)) {
  console.log(correctMsg + "After splitting string 'splitMeIntoArray' into the array 'arrayFromSplitString', 'arrayFromSplitString' looks like:")
  console.log(arrayFromSplitString)
  passedTests++
} else {
  console.log(incorrectMsg + "After splitting string 'splitMeIntoArray' into the array 'arrayFromSplitString', 'arrayFromSplitString' should be:")
  console.log(correctArrayFromSplitString)
  console.log("but you got:")
  console.log(arrayFromSplitString)
}
console.log()
totalTests++

// Join Array Into String
let correctStringFromJoinArray = joinMeIntoString.join(".")
if (stringFromJoinedArray !== undefined && JSON.stringify(stringFromJoinedArray) === JSON.stringify(correctStringFromJoinArray)) {
  console.log(correctMsg + "After joining array 'joinMeIntoString' into the string 'stringFromJoinedArray', 'stringFromJoinedArray' looks like:")
  console.log(stringFromJoinedArray)
  passedTests++
} else {
  console.log(incorrectMsg + "After joining array 'joinMeIntoString' into the string 'stringFromJoinedArray', 'stringFromJoinedArray' should be:")
  console.log(correctStringFromJoinArray)
  console.log("but you got:")
  console.log(stringFromJoinedArray)
}
console.log()
totalTests++

// Array Tic Tac Toc
let correctTicTacToeArray = [
  ["X", "O", "O"],
  ["", "X", "O"],
  ["", "X", "O"]
]
if (ticTacToeArray !== undefined && JSON.stringify(ticTacToeArray) === JSON.stringify(correctTicTacToeArray)) {
  console.log(correctMsg + "The tic tac toe game array you made looks like:")
  console.log(ticTacToeArray)
  passedTests++
} else {
  console.log(incorrectMsg + "The tic tac toe game array you made should look like:")
  console.log(correctTicTacToeArray)
  console.log("but you got:")
  console.log(ticTacToeArray)
}
console.log()
totalTests++

// Final Test Tally Determination
if (passedTests === totalTests) {
  console.log(setGreen + "You passed " + passedTests + " / " + totalTests + " tests. Congratulations!" + resetColor)
} else {
  console.log(setRed + "You passed " + passedTests + " / " + totalTests + " tests. Keep Going!" + resetColor)
}