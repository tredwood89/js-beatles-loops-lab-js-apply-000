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
  var sign = " !!!"
  while (i < array.length) {
    factsArray.push (`${array[i]}`+ sign)

    i++
  }
    return factsArray
}
