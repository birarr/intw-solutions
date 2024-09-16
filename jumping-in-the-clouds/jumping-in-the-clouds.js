function jumpingOnClouds(c) {
    // Write your code here
    console.log({c})
let jumps = 0

for(let i = 0; i < c?.length; i++) {
    if(c[i] === 0) {
        if(c[i + 1] === 0) {
            jumps++
            i++
        }
    } else {
        jumps++
    }
}
return jumps
}