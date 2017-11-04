function theBeatlesPlay (musicians, instruments){

  var beatlesArray=[]

  for (var i = 0; i < 4; i++){

    beatlesArray.push (`${musicians[i]} plays ${instruments[i]}`)
  }
      return beatlesArray
}

function johnLennonFacts(array) {

  var factsArray = []
  var i = 0
  while (i < array.length) {
    factsArray.push (`${array[i]}!!!`)

    i++
  }
    return factsArray
}

function iLoveTheBeatles(n){
  var array = []
    do {
      array.push ("I love the Beatles");
    }
      while ( n = 0; n<15; n++);

      return array
}
