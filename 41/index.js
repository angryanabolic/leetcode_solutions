var firstMissingPositive = function(nums) {

	let arr = [];
	let full_count = nums.length;
	nums = prepareNums(nums);

	if(nums.length === 0){
		return 1;
	}else if(nums[0] === 1 && nums.length === 1){
		return 2;
	}

	for(let i = 0, j = 1; i < full_count; i++, j++){
		if(j !== nums[i]){
			nums.splice(i, 0, j);
			arr.push(j);
		}

		if(nums[i] === nums[j]){
			continue;
		}
	}

	if(arr.length){
		return arr[0];
	}else{
		return nums[nums.length-1]+1;
	}	
};

let prepareNums = (input) => {
	var output = [];
	var inserted;

	for (var i = 0, ii = input.length ; i < ii ; i++){
	  inserted = false;

	  if(input[i] <= 0){
	  	continue;
	  }

	  for (var j = 0, jj = output.length ; j < jj ; j++){
	    if (input[i] < output[j]){
	      inserted = true;
	      output.splice(j, 0, input[i]);
	      break;
	    }
	  }
	  
	  if (!inserted)
	    output.push(input[i])
	}

	for(let i = 0; i < output.length-1; i++){
		if(output[i] === output[i+1]){
			output.splice(i, 1);
			i--;
		}
	}
	return output;
}

console.log(firstMissingPositive([2,1]));