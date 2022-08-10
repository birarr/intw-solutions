function migratoryBirds(arr) {
  // Write your code here
  const store = {}
  arr.forEach((num) => (store[num] ? (store[num] += 1) : (store[num] = 1)))
  return Object.keys(store).sort((a, b) => store[b] - store[a])[0]
}
