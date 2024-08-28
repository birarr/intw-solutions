function angryProfessor(k, a) {
    // Write your code here
    console.log({k, a})
    const studentsOnTime = a?.filter(item => item < 1)
    console.log(studentsOnTime?.length)
    if(studentsOnTime?.length >= k) {
        return 'NO'
    } else {
        return "YES"
    }

}