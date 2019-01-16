
/*

const oddOrEven = (num) =>{
    if(num%2 === 0)
        return("Even")
    else    
        return("Odd")
}

const numArray = [24,12,45,33,6,9,10]
var result;

numArray.forEach(c => {console.log(oddOrEven)})

numArray.forEach(element => {
    result = oddOrEven(element)
    console.log(result)
});


for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    if (currentNumber % 2 === 0) {
        console.log(currentNumber) // Only 2, 4, 6 will appear
        if (currentNumber % 5 === 0)
            console.log("Chicken")
        if(currentNumber % 7 === 0)
        {
            console.log("Monkey")
            if(currentNumber % 5 === 0)
                console.log("ChickenMonkey")
        }
    }
}

*/

let bandNumber = 1

const takeNumber = function (bandName) {
    
//    bandNumber++
//    bandName = bandNumber+bandName
//    return(bandName)
    return `S{bandnumber++}. ${bandName}`
}

//Correct way to write
//const takeNumber = bandName => `S{bandnumber++}. ${bandName}`

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

uncookedFood.forEach(grill)
console.log(cookedFood)
