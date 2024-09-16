  const n = p.length;
  const result = [];

  for (let i = 1; i <= n; i++) {
    // Find the position where P[x] == i (account for 1-based index)
    const x = p.indexOf(i) + 1;
    
    // Now, find the position where P[y] == x (again, 1-based index)
    const y = p.indexOf(x) + 1;
    
    // Store the result for this 'i'
    result.push(y);
  }

  return result;