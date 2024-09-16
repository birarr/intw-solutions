function equalizeArray(arr) {
    // Write your code here
    let arrayObj = {}
    let maxCount = 0
    arr?.forEach(el => {
        if(arrayObj[el] === undefined) {
            arrayObj[el] = 1
        } else {
            arrayObj[el]++
        }
    })

    for(let value in arrayObj) {
        if(arrayObj[value] > maxCount) {
            maxCount = arrayObj[value]
        }
    }

        for(let key in arrayObj) {
            console.log(`Element ${key} occurs ${arrayObj[key]} times`)
        }
        
        return (arr?.length - maxCount)
}
