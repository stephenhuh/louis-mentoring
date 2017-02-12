##Callback exercises

1. Use _.each to loop through an array and console.log() all the values. Now use it to console.log() the indices. How would this be different if you were looping through an object?

var arr = [1,2,3];

var func = function(v,i,l){
	console.log[v];
	console.log[v];
}

_.each(arr, func()});


2. Write a function called checkValue that searches an array for a value. It takes an array and a value and returns true if the value exists in the array, otherwise it returns false.

var checkValue = function(arr, value){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === value){
			return true;
		});
		return false;			
	}
}

var array = [1,2,3]
checkValue(array, 2); //true


		var helloArr = ['bonjour', 'hello', 'hola'];

		var checkValue = function(arr, val) {
		  //checks if the val is in arr
		}

3. Rewrite checkValue using _.each. Make sure that you have underscore.js included where you are running your code.


var checkValue = function(arr, value){
	_.each(arr, function(v,i,l){
		if (arr[i] === value){
			var result = true;
				else{
					var result = false;
				}
	});
	return result;		
}


4. Write a loop that pushes all the values in an object to an array.

		input: {two: 2, four: 4, three: 3, twelve: 12}
		output: [2, 4, 3, 12]


input: {two: 2, four: 4, three: 3, twelve: 12}
var output = [];

	for (x in input){
			output.push(input[x]);
}



5. Use _.map to mimic the previous behavior.

		input: {two: 2, four: 4, three: 3, twelve: 12}
		output: [2, 4, 3, 12]


var output = _.map(input, function(x, property, l){
	return val;
	};);





6. Use _.filter to return all the even numbers in an array.



		input: [9,8,7,6,5,2]
		output: [8,6,2]

_.filter(input, function(num){
	if (num%2 === 0){
		return val;
	}
