function beautifulDays(i, j, k) {
    // Write your code here
    const beautifulDays = []
    const reversedNum = num => parseFloat(num.toString().split('').reverse().join(''))
for(i; i <= j; i++) {
    if(Number.isInteger((i - reversedNum(i)) / k )) {
        beautifulDays.push(i)
    }
}
return beautifulDays?.length
}