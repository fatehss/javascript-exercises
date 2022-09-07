const sumAll = function(num1, num2) {

	if (num1 <0 || num2 <0){return "ERROR";}
	if (typeof(num1)!= 'number' || typeof(num2)!= 'number'){return "ERROR"}	
	if (num1%1 != 0 || num2%1 != 0){return "ERROR";}
	let sum = 0;

	for(let i =Math.min(num1,num2); i<=Math.max(num1,num2); ++i)
	{
		sum+= i;
	}

	return sum;

};

// Do not edit below this line
module.exports = sumAll;
