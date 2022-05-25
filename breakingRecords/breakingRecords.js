function breakingRecords([hl, ...scores]) {
  // Write your code here
  let low = hl
  let high = hl
  let hRes = 0
  let lRes = 0

  scores.forEach((score) => {
    if (score < low) {
      low = score
      lRes++
    } else if (score > high) {
      high = score
      hRes++
    }
  })

  return [hRes, lRes]
}
