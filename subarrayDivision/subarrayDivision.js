function birthday(s, d, m) {
  // Write your code here
  console.log(s, d, m)
  let count = 0

  for (let i = 1; i < s.length; i++) {
    s[i] += s[i - 1]
  }

  for (let i = m - 1; i < s.length; i++) {
    if (i === m - 1) {
      if (s[i] === d) count++
    } else {
      if (s[i] - s[i - m] === d) count++
    }
  }
  return count
}
