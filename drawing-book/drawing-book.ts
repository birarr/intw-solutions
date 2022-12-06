function pageCount(n: number, p: number): number {
  // Write your code here
  console.log(n)
  console.log(p)
  let frontFlip = Math.floor(p / 2)
  let backflip = Math.floor(n / 2 - frontFlip)

  const result = Math.min(frontFlip, backflip)
  return result
}
