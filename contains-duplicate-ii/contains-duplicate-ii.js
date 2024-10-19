/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map()

    // for(let i = 0; i < nums?.length; i++) {
    //     if(i - map.get(nums[i]) <= k) {
    //         return true
    //     }
    //     console.log(nums[i])
    //     map.set(nums[i], i)
    // }
    // return false

    for(let i = 0; i < nums?.length; i++) {
        if(map?.has(nums[i])) {
            const j = map?.get(nums[i])

            if(Math.abs(j - i) <= k) {
                return true
            }
        }
        map?.set(nums[i], i)
    }
    return false

};