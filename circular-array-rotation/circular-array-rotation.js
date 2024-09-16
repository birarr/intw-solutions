function circularArrayRotation(a, k, queries) {
    // Write your code here

const arrayLength = a?.length
const rotations = k % arrayLength

return queries?.map(query => {
 
    const newIndex = (query - rotations + arrayLength) % arrayLength

    return a[newIndex]
})

}