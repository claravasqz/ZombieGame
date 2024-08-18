class Player {
  constructor(hull, firepower, accuracy) {
      this.hull = hull;
      this.firepower = firepower;
      this.accuracy = accuracy;
  }

  attack(currentPlayer) {
      if (Math.random() < this.accuracy) {
          const damage = this.firepower;
          currentPlayer.hull -= damage;
          console.log(`Hit! ${currentPlayer.constructor.name}'s hull is now ${currentPlayer.hull}`);
          window.alert(`You hit the Zombie! Zombie's live is now ${currentPlayer.hull}`)
          return damage;
      } else {
          console.log(`${this.constructor.name} missed!`);
          return 0; 
      }
  }

  isAlive() {
      return this.hull > 0;
  }

  displayFeatures() {
      console.log(`Hull: ${this.hull}`);
      console.log(`Firepower: ${this.firepower}`);
      console.log(`Accuracy: ${this.accuracy}`);
  }
}


function NumRandomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


let hero, zombies, currentZombieIndex, round;

function initializeGame() {
  hero = new Player(20, 5, 0.7);
  zombies = [];
  for (let i = 0; i < 6; i++) {
      zombies.push(generateZombie());
  }
  currentZombieIndex = 0;
  round = 1;

  document.getElementById('heroHull').textContent = hero.hull;
  document.getElementById('zombieHull').textContent = zombies[currentZombieIndex].hull;
  document.getElementById('roundNumber').textContent = round;
  document.getElementById('heroAttack').disabled = false;
}

function generateZombie() {
  const hull = NumRandomRange(3, 6);
  const firepower = NumRandomRange(2, 4);
  const accuracy = NumRandomRange(6, 8) / 10;
  return new Player(hull, firepower, accuracy);
}

document.getElementById('startGame').addEventListener('click', function() {
  this.style.display = 'none';
  document.getElementById('heroAttack').style.display = 'block';
  document.getElementById('gameStatus').style.display = 'block';
  document.getElementById('restartGame').style.display = 'none';
  initializeGame();
});

document.getElementById('heroAttack').addEventListener('click', function () {
  let currentZombie = zombies[currentZombieIndex];
  
  console.log(`\nRound ${round}:`);
  

  hero.attack(currentZombie);


  document.getElementById('zombieHull').textContent = currentZombie.hull;

  if (!currentZombie.isAlive()) {
      window.alert(`You have defeated zombie ${currentZombieIndex + 1}!`);
      console.log(`You destroyed zombie ${currentZombieIndex + 1}!`);
      currentZombieIndex++;

      if (currentZombieIndex >= zombies.length) {
          console.log('You have destroyed all the zombies! You won the game!');
          window.alert('You have destroyed all the zombies! You won the game!');
          document.getElementById('heroAttack').disabled = true; 
          document.getElementById('restartGame').style.display = 'block'; 
          return; 
      }

      round++;
      currentZombie = zombies[currentZombieIndex];
      document.getElementById('zombieHull').textContent = currentZombie.hull;
      document.getElementById('roundNumber').textContent = round;
      return;
  }


  const damageDealt = currentZombie.attack(hero);


  if (damageDealt > 0) {
      window.alert(`Zombie ${currentZombieIndex + 1} attacked you and dealt ${damageDealt} damage!`);
  } else {
      window.alert(`Zombie ${currentZombieIndex + 1} attacked you but missed!`);
  }


  document.getElementById('heroHull').textContent = hero.hull;

  if (!hero.isAlive()) {
      console.log('Your hero is destroyed! Game over!');
      window.alert('Your hero is destroyed! Game over!');
      document.getElementById('heroAttack').disabled = true; 
      document.getElementById('restartGame').style.display = 'block'; 
      return; 
  }

  console.log('Attack again to continue the battle!');
});

document.getElementById('restartGame').addEventListener('click', function() {
  initializeGame();
  this.style.display = 'none';
  document.getElementById('startGame').style.display = 'block';
  document.getElementById('heroAttack').style.display = 'none';
  document.getElementById('gameStatus').style.display = 'none';
});