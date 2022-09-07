const reverseString = function(input) {

	let strArr = input.split('');
	let output = '';
	while (strArr.length >0){
		output += strArr.pop();
	}
	return output;
};

// Do not edit below this line
module.exports = reverseString;
