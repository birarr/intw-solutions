function findDigits(n) {
    // Write your code here
    const numbersArray = Array.from(n?.toString())
    let count = 0
    for(let i = 0; i < numbersArray?.length; i++) {
        console.log(n % numbersArray[i])
        if(n % numbersArray[i] === 0) {
            count++
        }
    }

return count
}