function pangrams(s) {
  // Write your code here
  const alpha = Array.from(Array(26)).map((e, i) => i + 65)
  const alphabet = alpha.map((x) => String.fromCharCode(x))

  var alphabeticChars = s
    .toLowerCase()
    .replace(/[^a-z]/gi, '')
    .split('')
  var uniqueLetters = [...new Set(alphabeticChars)]
  if (uniqueLetters.length == 26) {
    return 'pangram'
  }
  return 'not pangram'
}
