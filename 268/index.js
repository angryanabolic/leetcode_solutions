/**
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = function(nums) {
    if(nums.length === 1){
        return nums[0] ? 0 : 1;
    }

    let new_arr = [];
    while(nums.length > 0){
        let min_num = getMin(nums);
        new_arr.push(min_num.min);
        nums.splice(min_num.index, 1);
    }

    let max = new_arr[new_arr.length - 1];
    let miss = -1;

    for(let i = 0; i <= max; i++){
        if(i !== new_arr[i]){
            return i;
        }
    }

    return max+1;
};

let getMin = function(arr){
    let min = arr.length ? arr[0] : 0;
    let index = 0;

    for(let i = 1; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
            index = i;
        }
    }

    return {index: index, min: min};
};
