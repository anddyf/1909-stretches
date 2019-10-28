// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
  //YOUR CODE
  constructor(sideDice, totalDice){
    if(sideDice < 1 || sideDice > 6 || totalDice < 1 || totalDice > 6){
      throw ''
    }
    if(typeof sideDice !== 'number' || typeof totalDice !== 'number'){
      throw ''
    }

    this.sidedice = sideDice
    this.total = totalDice
  }
  roll(){
    const allRolls = []
    for( const_ofArray(total)){
      const randomNum = Math.floor(Math.random() * this.sidedice + 1)
      allRolls.push(randomNum)
    } 
  }
 
}

module.exports = { DiceRoller };
