// 1-.You attack the first alien ship
// 2-.If the ship survives, it attacks you
// 3-.If you survive, you attack the ship again
// 4-.If it survives, it attacks you again ... etc
// 5-.If you destroy the ship, you have the option to attack the next ship or to retreat
// 6-.If you retreat, the game is over, perhaps leaving the game open for further developments or options
// 7-.You win the game if you destroy all of the aliens
// 8-.You lose the game if you are destroyed

// hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed
// firepower is the amount of damage done to the hull of the target with a successful hit
// accuracy is the chance between 0 and 1 that the ship will hit its target


// Constructing a Ship 

class Ship{
    constructor (hull, firepower, accuracy) {
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
    }
    
    displayFeatures(){
      console.log(`Hull: ${this.hull}`)
      console.log(`firepower: ${this.firepower}`)
      console.log(`accuracy: ${this.accuracy}`)
    }
  }
// USSShip

const USSShip = new Ship(20, 5, 0.7);
USSShip.displayFeatures();

// Alien Ship

