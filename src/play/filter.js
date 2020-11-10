const myArray = [ 1,2,3,4]


const myFilteredArray = myArray.filter( (item) => {
    return item < 2    
})


console.log('myArray = ' + myArray)
console.log('myFilteredArray = ' + myFilteredArray)


console.log('myIncludesArray = ' + myArray.includes(3,3))

