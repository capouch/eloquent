/* Linked list in an array example
   As per my conversation with Will
   Brian Capouch 28 January 2021
*/

const traverseList = (list, first) => {
  let thisElement = list[first]
  do {
    console.log(thisElement.name)
    thisElement = list[thisElement.next]
    } while (thisElement != null)
}

let storageArray = [],
 listHead = 0 // This is a "pointer" to the head of the list

// We can enter the elements as they come to us, out of order
storageArray.push({name: "Calvin Klein",next: 1})
storageArray.push({name: "Alan Zolberg",next: 2})
storageArray.push({name: "Billy Bob",next: null})
// IMPORTANT NOTE: We have to remember the starting node OUTSIDE of the array!!
traverseList(storageArray,listHead)

// We won't worry about the sorting alogirthm
// But after it finishes, here's what the array looks like
// Note also the three elements are all right where they were at first
let sortedArray = []

// Note the original people are still right where they were!!
listHead = 2 // Pointer to first entry
sortedArray.push({name: "Calvin Klein",next: 1})
sortedArray.push({name: "Alan Zolberg",next: null})
sortedArray.push({name: "Billy Bob",next: 0})
console.log('\n')
traverseList(sortedArray, listHead)
