function viralAdvertising(n) {
    // Write your code here
    let likes = 0
    let shared = 5
    let totalLikes = 0
    for(let i = 1; i <= n; i++) {
        likes = Math.floor(shared/2)
        shared = likes * 3
    totalLikes += likes
    }
    return totalLikes
}