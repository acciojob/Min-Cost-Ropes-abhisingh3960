function mincost(arr)
{ 
//write your code here
// return the min cost
	let totalCost = 0;
	while (arr.length > 1) {
		arr.sort((a , b) => a-b);
		let largest = arr.shift();
		let seclargest = arr.shift();
		let mincost = largest+seclargest;
		arr.push(mincost);
		totalCost = totalCost+mincost;
		
	}
	return totalCost;
}

module.exports=mincost;
