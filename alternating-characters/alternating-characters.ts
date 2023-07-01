function alternatingCharacters(s: string): number {
    const a: string[] = s.split('')
    const n: number = a.length
    let res: number = 0
     
     for(let i = 0; i < n - 1; i++) {
         if(a[i] === a[i + 1]) {
             res++
         }
     }
     
    return res

}