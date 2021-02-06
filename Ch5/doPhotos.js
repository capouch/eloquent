require ('./photos.js')
// console.log(PHOTOS)

// Filter out just png files
//console.log(PHOTOS.filter(photo => photo.format == 'png'))
// Now just print their names
// console.log(PHOTOS.filter(photo => photo.format == 'jpg').map(entry => entry.filename))

// Ok here's some things for us to work on together
// Find any entries with the keyword 'Sunny Crest', print filename & filepath
//console.log(PHOTOS.filter(photo => photo.tags.includes("Sunny Crest")).map(({filename, filepath}) => ({filename, filepath})))
// How many of the photos are in the jpg format?
// console.log(PHOTOS.reduce(acc, currentValue) => { return (currentValue.format == "jpg") ? acc++:acc },0 ))
// Replace source names of 'Brian Capouch' with 'Brian L. Capouch'
const insertMiddle = (name, initial) => {
  // Here's where stuff goes
  console.log("We got the right name!! And it is " + name)
  return "Foo"
}
console.log(PHOTOS.filter(entry => entry.source == "Brian Capouch" ).map(entry => insertMiddle(entry.source, "L")))

// And then some things for you to work on as homework
// 1. Add some entries with different keywords (some same) and filetypes (Shoot for 8)
// 2. Run our "in-class" examples; make sure they work
// 3. Print the names of all the different unique sources
// 4. Count how many images contain a given keyword
