var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray (array, element) {
<<<<<<< HEAD
//replaces first element  
//  array[0] = element
//  return array
//adds element to front, returns the number of items in the array
//  return array.unshift(element)
//adds element to front, returns the array
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element ]
}

function accessElementInArray(array, index) {
    return array[index]
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var sArray = array.slice(1)
  return sArray
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  var pArray = array.slice (0, array.length -1)
  return pArray
}
=======
//  array[0] = element
//  return array
  return array.unshift(element)
}

function 
>>>>>>> 3ec05b45b66e41c6e3dad0865e75829ad9faddf6
