function hurdleRaceTS(k: number, height: number[]) {
  const maxHeight = Math.max(...height)

  if (maxHeight < k) {
    return 0
  }

  return maxHeight - k
}
