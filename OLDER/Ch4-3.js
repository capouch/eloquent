// Linked list problem from Chapter 4 Eleoquent

// Helper functions

// Prepend 'element' to 'list'
function prepend(element, list) {

  // Create array which will be built each time function is called
  let temp = {}

  // Add a "value" element to the front of the list
  temp.value = element
  // Hang the old list onto it at the end
  temp.rest = list

  // Must remember to return newly created list
  return temp
}

// Convert array of numeric value to a "linked list"
function arrayToList(anArray) {
  let list = {}

  // We put together the list last-to-first
  // "Initialize" final element of list, with successor as null
  list.value = anArray[anArray.length-1]
  list.rest = null

  // Iterate backwards through the array, extracting the values
  for (let i = anArray.length-2; i >= 0; i--) {
    list = prepend(anArray[i], list)
  }
  return list
}

// Test prepend as in text
console.log(prepend(10, prepend(20, null)))

// Test arrayToList
console.log(arrayToList([10, 20, 30]));
