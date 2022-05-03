const Dragon = require('./dragon')

class FriendlyDragon extends Dragon {
  constructor(name, color, lifeGoals, friend) {
    super(name, color);
    this.lifeGoals = lifeGoals
    this.friend = friend
  }
  hasLifeGoals() {
    this.lifeGoals.forEach(goal => {
      console.log(`${this.name} likes to ${goal}`);
    })
  }

  helpsPeople() {

  }
}


try {
  module.exports = FriendlyDragon;
} catch {
  module.exports = null;
}
