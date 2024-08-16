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

// Your spaceship, the USS Assembly should have the following properties:
// hull - 20
// firepower - 5
// accuracy - .7

const USSShip = new Ship(20, 5, 0.7);
USSShip.displayFeatures();



// Allien Ship

// hull - between 3and 6
// firepower - between 2and 4
// accuracy - between .6and .8

function NumRandomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
// for (let i = 0; i < 6; i++) {
function generateAlienShip(){
    const hull = NumRandomRange(3, 6);
    const firepower = NumRandomRange(2, 4);
    const accuracy = NumRandomRange(6, 8) / 10;
    return new Ship(hull, firepower, accuracy);
}
 // }

console.log('------')

let AlienShip = [generateAlienShip(), generateAlienShip(), generateAlienShip(), generateAlienShip(), generateAlienShip(), generateAlienShip()];

// const AlienShip1 = generateAlienShip();
// AlienShip1.displayFeatures();
    
// const AlienShip2 = generateAlienShip();
// AlienShip2.displayFeatures();
    
// // const AlienShip3 = generateAlienShip();
// // AlienShip3.displayFeatures();

// // const AlienShip4 = generateAlienShip();
// // AlienShip4.displayFeatures();

// // const AlienShip5 = generateAlienShip();
// // AlienShip5.displayFeatures();

// // const AlienShip6 = generateAlienShip();
// // AlienShip6.displayFeatures();

console.log('------')
// while(USSShip.hull > 0 && AlienShip1.hull > 0){
  function USSattack(){
    if (Math.random() < USSShip.accuracy) {
      AlienShip.hull -= USSShip.firepower;
      console.log('You hit the alien ship! yor new life is: ' + AlienShip1.hull);

      if (AlienShip1.hull <= 0){
        console.log('You destroyed the alien ship!');
        return;
      }
      else{
        console.log('The alien ship is still alive!')
        
      }
        
    } else {
      console.log('You missed the alien ship!');
    }
  }
// }
    
USSattack();


console.log('------')

function AlienAttack(){
  if (Math.random() < AlienShip2.accuracy) {
    USSShip.hull -= AlienShip2.firepower;
    console.log('You got hit! yor new life is: ' + USSShip.hull);

    if (USSShip.hull <= 0){
      console.log('You got destroyed');
      return;
    }
    else{
      console.log('You are still alive')
        return;
    }
      
  } else {
    console.log('They missed!');
  }
}

AlienAttack();
AlienAttack();
AlienAttack();
