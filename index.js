function theBeatlesPlay (musicians, instruments){

  var beatlesArray=[]

  for (var i = 0; i < 4; i++){

    beatlesArray.push (`${musicians[i]} plays ${instruments[i]}`)
  }
      return beatlesArray
}
