function solve(args) {
    function GetMax(nums) {
        if (nums[0] >= nums[1]) {
            if (nums[0] >= nums[2]) {
                return nums[0];
            } else {
                return nums[2];
            }
        } else if (nums[1] >= nums[2]) {
            return nums[1];
        } else {
            return nums[2];
        }
    }

    console.log(GetMax(args[0].split(' ').map(Number)));
}