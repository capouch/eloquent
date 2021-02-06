/*
  photos.js: Exports PHOTOS array
  For playing around with Ch 5 functionality
  Brian Capouch 4 February 2021
*/


var PHOTOS = [
  {
    filename: "DSCN2325.JPG",
    format: "jpg",
    filepath: "/home/brianc/PICTURES/DSCN2325.JPG",
    description: "1913 Childs Postcard of Medaryville Cemetery",
    tags: "Medaryville, cemetery, Poisel",
    source: "Brian Capouch",
    note: "Not yet tagged"
  },
  {
    filename: "20210118_175700.jpg",
    format: "jpg",
    filepath: "/home/brianc/IMAGES/PORTTEUS/2021/1-18/20210118_175700.jpg",
    description: "Serial ID plate on 5HP Briggs from BP-8 Tractor",
    tags: "Sunny Crest, Briggs, serial",
    source: "Brian Capouch",
    note: ""
  },
  {
    filename: "mfTractor.png",
    format: "png",
    filepath: "/home/brianc/IMAGES/FARM/mfTractor.png",
    description: "Loading up new MF65",
    tags: "Sunny Crest, Massey Ferguson, tractor, MF",
    source: "Mike Tiede",
    note: ""
  }
]

// This makes sure the data is exported in node.js —
// `require('./path/to/scripts.js')` will get you the array.
if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = PHOTOS;
if (typeof global != "undefined" && !global.PHOTOS)
  global.PHOTOS = PHOTOS;
