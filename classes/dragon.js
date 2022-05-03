class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }
  static getDragons(...dragons){
    return dragons.reduce((arr, dragon) => {
      arr.push(dragon.name)
      return arr
    }, [])

    //comes in as [object1, object2]
    //iterate through the array
    //access the keyvalue pair, to grab the name.

  }
}



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
