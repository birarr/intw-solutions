function jumpingOnClouds(c, k) {
  let energy = 100;
  let n = c.length;
  let i = 0; // starting position

  do {
    // Jump to the next cloud
    i = (i + k) % n;
    console.log( i = (i + k) % n)
    // Decrease energy for the jump
    energy -= 1;
    
    // Decrease additional energy if it's a thundercloud
    if (c[i] === 1) {
      energy -= 2;
    }
  } while (i !== 0); // Stop when we reach the starting point

  return energy;
}