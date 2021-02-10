require ('./photos.js')
// console.log(PHOTOS)

// Filter out just png files
// console.log(PHOTOS.filter(photo => photo.format == 'png'))
// Now just print their names
//console.log(PHOTOS.filter(photo => photo.format == 'jpg').map(entry => entry.filename))

// Ok here's some things for us to work on together
// Find any entries with the keyword 'Sunny Crest', print filename & filepath
// console.log(PHOTOS.filter(photo => photo.tags.includes("Sunny Crest")).map(({filename, filepath}) => ({filename, filepath})))
// How many of the photos are in the jpg format?
// console.log(PHOTOS.reduce((acc, currentValue) => { return currentValue.format == "jpg" ? ++acc : acc  },0 ))
// Replace source names of 'Brian Capouch' with 'Brian L. Capouch'
const insertMiddle = (name, initial) => {
  // Note: only works with 'plain' names, i.e. one first one last
  let names = name.split(" ")
  return names.shift() + " " + initial + ". " + names.pop()
  // console.log("We got the right name!! And it is " + name)
}
// console.log(PHOTOS.filter(entry => entry.source == "Brian Capouch" ).map(entry => insertMiddle(entry.source, "L")))

// And then some things for you to work on as homework
// 1. Add some entries with different keywords (some same) and filetypes (Shoot for 8)
// 2. Run our "in-class" examples; make sure they work
// 3. Print the names of all the different unique sources
const unique = (names) => {
  let nameList = []
  for (name of names) {
    if (nameList.includes(name))
      continue
    nameList.push(name)
  }
  return nameList
}

// I pass the filtered and mapped array to a functionality
// I couldn't think of a way to do it onsie-twosie
console.log(unique(PHOTOS.filter(photo => photo.source).map(entry => entry.source)))

// I got this online, morphed it for readability
// It is very instructional to note how it works
// console.log(PHOTOS.filter(photo => photo.source).map(entry => entry.source).filter((element, index, array) => array.indexOf(element) === index))

// 4. Count how many images contain a given keyword
