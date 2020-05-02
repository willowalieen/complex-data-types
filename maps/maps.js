////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 1 - INITALIZATION
//
//  Map capabilities in javascript are implement using the Object data
//  type. Initialize the 'newObject' variable with one key called "key"
//  that has a value which is a string called "value"
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let newObject

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 2 - ADD NEW KEY VALUE PAIR
//
//  Add a new key value pair to the 'addNewKeyValuePair' object. Give the
//  new key a name of "two" and give it a value of 2, an integer
    let addNewKeyValuePair = {
      one: 1
    }
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 3 - GET VALUE OF KEY
//
//  Get the age of 'getPatientAge' and save the result into 'patientAge'
    let getPatientAge = {
      name: "John Nnamchi",
      age: 23,
      pastConditions: [ "fever", "headache" ]
    }
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let patientAge

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 4 - REMOVE KEY
//
//  Remove the 'hobbies' key from 'removeIrrelevantKey', as hobbies do
//  not belong in a patient's map
    let removeIrrelevantKey = {
      name: "John Nnamchi",
      age: 23,
      pastConditions: [ "fever", "headache" ],
      hobbies: [ "TV", "Frisbee" ]
    }
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 5 - CONTAINS KEY
//
//  Check if 'checkContainsKey1' and 'checkContainsKey2' contain the key
//  'hobbies', and save the result into 'checkContainsKey1ContainsHobbies'
//  and 'checkContainsKey2ContainsHobbies' respectively
    let checkContainsKey1 = {
      name: "John Nnamchi",
      age: 23,
      pastConditions: [ "fever", "headache" ],
    }
    let checkContainsKey2 = {
      name: "John Nnamchi",
      age: 23,
      pastConditions: [ "fever", "headache" ],
      hobbies: [ "TV", "Frisbee" ]
    }
//  NOTE: The code will indeed be the same for both variables
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let checkContainsKey1ContainsHobbies
let checkContainsKey2ContainsHobbies

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 6 - CONTAINS VALUE
//
//  You are the mother of Charles Wallace and see an announcement that a
//  child is being punished, and you want to see if it is your son. However,
//  you do not know which key refers to the student's name and can only look
//  through the values of the 'punishedStudent' object to determine this.
//  Check if 'punishedStudent' contains the value "Charles Wallace" and
//  save the result into 'punishedStudentIsCharlesWallace'
//  NOTE: 'punishedStudentIsCharlesWallace' should hence be a boolean value
//  of true or false
    let punishedStudent = {
      name: "Charles Wallace",
      grade: 4,
      infraction: "Fighting",
      punishment: "Detention"
    }
//  HINT: Get all the values of the object into an array, and use the array
//  function includes(), searching for "Charles Wallace". You can do this
//  all in with two expressions - you may have to look a bit hard for this.
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let punishedStudentIsCharlesWallace

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 7 - NUMBER OF KEYS
//
//  Get the total number of keys in 'getMyNumberOfKeys' and save the result
//  into 'numberOfKeys'
    let getMyNumberOfKeys = {
      name: "John Nnamchi",
      age: 23,
      pastConditions: [ "fever", "headache" ],
      hobbies: [ "TV", "Frisbee" ],
      born: new Date("20/07/1996"),
      isNewPatient: false,
      height: 183,
      weight: 80,
      remarks: "Very calm individual who listens to doctor's advice"
    }
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let numberOfKeys

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 8 - CLEAR OBJECT
//
//  Remove all keys from 'clearMe' so that it no longer has any keys
//  and looks like {}
    let clearMe = {
      name: "John Nnamchi",
      age: 23,
      pastConditions: [ "fever", "headache" ],
      hobbies: [ "TV", "Frisbee" ],
      born: new Date("20/07/1996"),
      isNewPatient: false,
      height: 183,
      weight: 80,
      remarks: "Very calm individual who listens to doctor's advice"
    }
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 9 - CLEAR OBJECT
//
//  Check if the object 'emptyObject' is empty, ie has no keys, and save
//  the result into 'emptyObjectIsEmpty'
    let emptyObject = {}
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let emptyObjectIsEmpty

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 10 - OBJECT VALUES AS CORE DATA TYPES
//
//  Once you get access to an object's value, you can treat is as the data
//  type it is.
//  Get the number of past conditions in 'getMyPastConditions' and save the
//  result into 'numberOfPastConditions'
    let getMyPastConditions = {
      name: "John Nnamchi",
      age: 23,
      pastConditions: [ "fever", "headache" ],
      hobbies: [ "TV", "Frisbee" ]
    }
//  HINT: The number of past conditions is the same as the length of the array
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////

let numberOfPastConditions

////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 11 - EDIT AN OBJECT'S VALUE
//
//  Add a new condition to 'addNewCondition' called "insomnia"
    let addNewCondition = {
      name: "John Nnamchi",
      age: 23,
      pastConditions: [ "fever", "headache" ],
      hobbies: [ "TV", "Frisbee" ]
    }
//  HINT: Just need to add a new value to the end of the 'pastConditions' array
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 12 - EDIT AN OBJECT'S VALUE 2
//
//  The following shows a job applicant, caled 'jobApplicant', coming from
//  the fbi. Edit the organization key's value so that it is in uppercase
//  and becomes "FBI"
    let jobApplicant = {
      name: "John Nnamchi",
      age: 23,
      organization: "fbi",
    }
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 13 - EDIT AN OBJECT'S VALUE 3
//
//  The following shows a sports applicant, caled 'sportsApplicant', with
//  a weight of 80 KG. Edit the weight key's value so that it is converted
//  into pounds - use the 'conversionRate' provided.
    let sportsApplicant = {
      name: "John Nnamchi",
      age: 23,
      organization: "fbi",
      weigth: 80,
    }
    let conversionRate = 2.2
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
//
//  EXERCISE 14 - EDIT AN OBJECT'S VALUE 4
//
//  Add a new remark, provided as 'newRemark':
    let newRemark = "Asks clarifying questions so be sure to explain thoroughly"
//  to the 'addNewRemark' remarks key. You will need to convert this value
//  from a string into an array containing the original remark, and then add
//  the new 'newRemark' to this array
    let addNewRemark = {
      name: "John Nnamchi",
      age: 23,
      pastConditions: [ "fever", "headache" ],
      height: 183,
      weight: 80,
      remarks: "Very calm individual who listens to doctor's advice"
    }
//
////////////////////// YOUR CODE BELOW THIS LINE ///////////////////////



////////////////////////////////////////////////////////////////////////




Object.values(obj).includes('test1')