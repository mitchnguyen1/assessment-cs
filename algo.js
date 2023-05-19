
//sum zero

// Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise.

//return boolean
//define hashmap
//for loop through array
    //define comp(number that will add with i to get 0)
    //check for comp inside of hashmap
    //add num[i],i into hashmap
const addToZero = nums => {
    let map = new Map();
    for(let i =0; i<nums.length;i++){
        let comp = -nums[i] 
        if(map.has(comp)){
            return true
        }
        map.set(nums[i],i)
    }
    return false;
}

//runtime: 
//o(n):Quadratic - have to iterate through the array once
//map: .has and .set is o(1) constant

//space complexity:
//o(n) quadratic-we have to create a new set the same size as the array. 

console.log(addToZero([]));
// -> False
console.log(addToZero([1]));
// -> False
console.log(addToZero([1, 2, 3]));
// -> False
console.log(addToZero([1, 2, 3, -2]));
// -> True





//unique characters 

// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

//return boolean
//define hash set
//for loop through string
    //add each char into set
//return string length === set length

const hasUniqueChars = str =>{
    let set = new Set();
    for(let i = 0; i<str.length;i++){
        set.add(str.charAt(i))
    }
    return set.size === str.length
}

//runtime complexity: o(n) quadratic -iterate through the entire string once.
//space complexity: o(n) quadratic -creating a set the same length of string

console.log(hasUniqueChars("Monday"))
// -> True
console.log(hasUniqueChars("Moonday"))
// -> False





//pangram sentence

// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

//return boolean
//define set
//remove white space and punctuation from the string then lowercase it
//for loop
    //add each char into set
//return set.size === 26
const isPangram = str => {
    let set = new Set();
    let letters = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").replace(/\s/g, '').toLowerCase();
    for(let i = 0; i < letters.length;i++){
        set.add(letters.charAt(i))
    }
    return set.size === 26
}


//runtime complexity: o(n) quadratic -for loop through the entire string, replace is ran in o(n)
//space complexity: o(n) since letters variable can be the same size of n

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// -> True
console.log(isPangram("I like cats, but not mice"))
// -> False





//longest word

// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.


//define a counter variable
//for each through the array
    //if count < arr[i].length
        //count = arr[i].length
//return count

const findLongestWord = (arr) => {
    let count = 0;
    arr.forEach(word => {
        if(count < word.length){
            count = word.length
        }
    })
    return count;
}

//runtime complexity: o(n) quadratic - for each loop through the entire array at n length
//space complexity: o(1) constant since we're only making one variable

console.log(findLongestWord(["hi", "hello"]));
console.log(findLongestWord(["hi", "hello","thisislonger"]));
// -> 5