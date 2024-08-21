function mincost(arr)
{ 
//write your code here
// return the min cost
	let heap = new MinPriorityQueue();
    
    for (let length of arr) {
        heap.enqueue(length);
    }

    let totalCost = 0;

    while (heap.size() > 1) {
        
        let first = heap.dequeue().element;
        let second = heap.dequeue().element;

        let cost = first + second;

        totalCost += cost;

        heap.enqueue(cost);
    }

    return totalCost;
  
}

module.exports=mincost;
