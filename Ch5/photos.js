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
  },
  {
    filename: "mtHoodBeerFridge.jpg",
    format: "jpg",
    filepath: "/home/brianc/IMAGES/RENSSELAER/mtHoodBeerFridge.jpg",
    description: "Beer fridge at Mt. Hood Pizza",
    tags: "Rensselaer, Restaurant, Beer",
    source: "Craig Davisson",
    note: ""
  },
  {
    filename: "nineIrishPatio.png",
    format: "png",
    filepath: "/home/brianc/IMAGES/LAFAYETTE/nineIrishPatio.png",
    description: "Back patio area of Nine Irish West",
    tags: "Lafayette, Restaurant, Beer, Outdoor Dining",
    source: "Will Orchard",
    note: "taken 6/6/20"
  },
  {
    filename: "starCity2.jpg",
    format: "jpg",
    filepath: "/home/brianc/IMAGES/LAFAYETTE/starCity2.jpg",
    description: "Front view of Star City Coffee from sidewalk",
    tags: "Lafayette, Restaurant, Coffee, Outdoor Dining",
    source: "Will Orchard",
    note: ""
  },
  {
    filename: "prophetVillage.jpg",
    format: "jpg",
    filepath: "/home/brianc/IMAGES/LAFAYETTE/prophetVillage.jpg",
    description: "Native village at P. Town state park, south facing",
    tags: "Lafayette, Park, Hiking",
    source: "Will Orchard",
    note: ""
  },
  {
    filename: "yaquinaHeadLighthouse.png",
    format: "png",
    filepath: "/home/brianc/IMAGES/NEWPORT/yaquinaHeadLighthouse.png",
    description: "Foggy morning image of Yaquina Head lighthouse",
    tags: "Newport, Hiking, Travel",
    source: "Brian Capouch",
    note: ""
  },
  {
    filename: "allisOuiatenon.jpg",
    format: "jpg",
    filepath: "/home/brianc/IMAGES/LAFAYETTE/allisOuiatenon.jpg",
    description: "Vintage Allis WD45 spotted while hiking near Ouiatenon",
    tags: "Hiking, tracor, Lafayette, Park",
    source: "Will Orchard",
    note: "to be edited"
  },
  {
    filename: "stjoeTheater.png",
    format: "png",
    filepath: "/home/brianc/IMAGES/LAFAYETTE/stjoeTheater.png",
    description: "Theater stage as seen from far left audience entrance",
    tags: "",
    source: "Brian Capouch",
    note: "to be tagged"
  }
]

// This makes sure the data is exported in node.js —
// `require('./path/to/scripts.js')` will get you the array.
if (typeof module != "undefined" && module.exports && (typeof window == "undefined" || window.exports != exports))
  module.exports = PHOTOS;
if (typeof global != "undefined" && !global.PHOTOS)
  global.PHOTOS = PHOTOS;
