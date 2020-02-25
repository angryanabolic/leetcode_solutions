var majorityElement = function(nums) {
    let max = {count: 0, index: 0};

    for(let i = 0; i < nums.length; i++){
    	let temp_max = 0;
    	for(let j = 0; j < nums.length; j++){
    		if(i !== j && nums[i] === nums[j]){
    			temp_max++;
    		}
    	}

    	if(max.count < temp_max){
    		max.count = temp_max;
    		max.index = i;
    	}
    }

    return nums[max.index];
};

console.log(majorityElement([2,2,1,1,1,1,2,2]));