const solution = (numbers) => {
  // Type your solution here
  if (numbers.lenght === 0) {
    return 0
  }
  const maxNumber = Math.max(...numbers)

  return maxNumber
}
