function extraLongFactorials(n) {
    // Write your code here

let a = BigInt(n)
let array = []
for(let i = n - 1; i > 0; i--) {
    array?.push(i)
    a = a * BigInt(i)
}

 console.log(a?.toString())
}