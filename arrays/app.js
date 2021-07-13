/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// ARRAYS ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// static array has a given size.
// dynamic can change in size

// .push('') add element to end of array O(1)
// .pop() removes last element O(1)
// .unshift('') add element to beginning of array O(n)
// .splice(index, delete count, addedElement) O(n)
// .forEach() loops through array
// .sort((a,b) => a-b) sort numbers in array for smalles to largest
// .map = makes new array to assign to a value
// .find((item) => item === 9); finds element in array
// .filter((item) => item !== 2) = filters array without element wanted
// .reverse() = reverses and changes origial value
// .reduce((accum, val) => accum + val, 0) = adds up array
// /slice(3) = cuts array from element value selescted

///////////////// 2 SUM //////////////////////

// create array to store numbers that create targetSum
// loop i through array and compare with other elements
// loop j though array and compare next elements to i
// when you find target sum inside j loop push numbers to results array

var nums = [3, 2, 4];
var target = 6;

var twoSum = function (nums, target) {
	var result = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				result.push(i);
				result.push(j);
			}
		}
	}
	return result;
};

//console.log(twoSum(nums,target))

/////////////////////// VALID SUBSEQUENCE //////////////////
// create indexs for array and sequence
// while loop runs while indexs are less than array lengths
// if array[indexA] = seq[indexS] indexS++
// add 1 to indexA regardless
// return indexS === sequence array length

function ValidSubsequence(array, seq) {
	// starting index
	let arrIdx = 0;
	let seqIdx = 0;
	while (arrIdx < array.length && seqIdx < seq.length) {
		//compare array and sequence
		if (array[arrIdx] === seq[seqIdx]) {
			seqIdx++;
		}
		//regardless of if statement 0 1 move on
		arrIdx++;
	}

	return seqIdx === seq.length;
}

var arr = [1, 1, 1, 1, 1, 1];
var seq = [1, 1, 1, 1];

//console.log(ValidSubsequence(arr, seq));

/////////////////////// 3 SUM ///////////////////////////
// sort array
// create empty array
// loop i through array and compare with other elements
// loop i runs until i < array.length - 2 to avoid overlap
// create left = i + 1;
// create right = array.length - 1;
// while left is less than right
// create currSum to =  array[i] + array[left] + array[right]
// if currSum === targetSum
// push array [numbers] used to create currSum to newArray
// move left variable up and right variable down
// else currSum < targetSum move left up since array is sorted
// else currSum > targetSum move right down since array is sorted

function threeNumberSum(array, targetSum) {
	//sort array smallest to biggest
	array.sort((a, b) => a - b);
	var trip = [];

	// length -2 is so the array never overlaps
	for (var i = 0; i < array.length - 2; i++) {
		//left for left to right of array ->
		let left = i + 1;
		// right goes right to left in array <-
		let right = array.length - 1;
		while (left < right) {
			const currSum = array[i] + array[left] + array[right];
			console.log(`${array[left]} + ${array[i]} + ${array[right]}`);
			// if they match add to triplets array and move var up and down array.
			if (currSum === targetSum) {
				console.log(`MATCH : ${array[left]} + ${array[i]} + ${array[right]}`);
				trip.push([array[i], array[left], array[right]]);
				left++;
				right--;
			} else if (currSum < targetSum) {
				left++;
			} else if (currSum > targetSum) {
				right--;
			}
		}
	}
	return trip;
}
var arr = [12, 3, 1, 2, -6, 5, -8, 6];
var tgt = 0;
//console.log(threeNumberSum(arr, tgt));

////////////////////////////////// smallest difference //////////////////////
// create smallest variable by subracting given elements to begin with and compare
// create empty array
// sort both arrays
// for loop i moves right
// for loop j gets next elements
// compare if absolute value of array1[i]-array2[j] < smallest
// if true; changes smallest value to current, reset created array, push current array1[i] and array2[j]

function smallestDifference(arrayOne, arrayTwo) {
	// Write your code here.
	let smallest = Math.abs(arrayOne[0] - arrayTwo[0]);
	let numbers = [];
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);

	for (let i = 0; i < arrayOne.length; i++) {
		for (let j = 0; j < arrayTwo.length; j++) {
			if (Math.abs(arrayOne[i] - arrayTwo[j]) < smallest) {
				console.log(`${arrayOne[i] - arrayTwo[j]} is less than  ${smallest}`);
				smallest = Math.abs(arrayOne[i] - arrayTwo[j]);
				numbers = [];
				numbers.push(arrayOne[i], arrayTwo[j]);
			}
		}
	}
	return numbers;
}

//////////////////////////////// Move element to end /////////////////////////////
// create count value
// create empty array
// for loop i moves right
// compare if array[i] === toMove
// if it doesnt push to newArr else add 1 to count variable
// for loop to newArr.push(toMove) amount of time number was duplicated

function moveElementToEnd(array, toMove) {
	var count = 0;
	var newArr = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i] != toMove) {
			newArr.push(array[i]);
		} else if (array[i] === toMove) {
			count++;
		}
	}
	for (let j = 0; j < count; j++) {
		newArr.push(toMove);
	}
	return newArr;
}

///////////////////////////////////// monotonic ////////////////////////
//---- find wheather array is increasing or decreasing ----

// create inc and dec variable
// for loop i moves right of array
// if array[i] < array[nextElement] inc++
// if array[i] === array[nextElement] inc++ dec++
// if array[i] > array[nextElement] dec++
//
// if inc or dec count >= array.length return true else false

function isMonotonic(array) {
	// Write your code here.
	var inc = 0;
	var dec = 0;
	for (var i = 0; i < array.length - 1; i++) {
		if (array[i] < array[i + 1]) {
			inc++;
		} else if (array[i] === array[i + 1]) {
			inc++;
			dec++;
		} else if (array[i] > array[i + 1]) {
			dec++;
		}
	}
	if (dec >= array.length - 1 || inc >= array.length - 1) {
		return true;
	} else {
		return false;
	}
}
