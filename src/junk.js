// export function Game() {
//   this.characters = [];
//   this.currentId = 0;
// }

// Game.prototype.addCharacter = function(character) {
//   this.characters.push(character);
//   // character.id = this.assignId();
// }

// Game.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }
// Game.prototype.findCharacter = function(i) {
//   for (let i=0; i< this.characters.length; i++) {
//     if (this.characters[i].playerTurn === true) {
//       return i
    
      
//     }
//   }
// }


// Game.prototype.nextTurn = function() {
//   let i = this.findCharacter();
//   if( i===0 ) {
//     this.characters[0].playerTurn = false
//     this.characters[1].playerTurn = true
//   } else {
//     this.characters[1].playerTurn = false
//     this.characters[0].playerTurn = true
//   }
// }

function Character(name, playerClass, type, booleanParameter) {
  this.name = name;
  this.playerClass = playerClass; 
  this.health = health;
  this.level = 1;
  this.armor = false;
  this.attack = 5;
  this.weapon = false;
  this.inventory = [];
  this.type = type;
  this.playerTurn = booleanParameter;
  this.id;
}
Character.prototype.attackMove = function(attackedPlayer) {
  attackedPlayer.health -= this.attack;
  // attackedPlayer.attack -= this.health;
  return;
}; 
Character.prototype.usePotion = function(potionType) {
  this.health += potionType;
  return;
};
Character.prototype.equipArmor = function(armorType) {
  this.armor = true;
  this.health += armorType;
  return;
};

Character.prototype.equipWeapon = function(weaponType) {
  this.weapon = true;
  this.attack += weaponType;
  return;
};
  
Character.prototype.levelUp = function() {
  this.level += 1;
  this.health += 5;
  this.attack += 1;
  return;
};
  
Character.prototype.heal = function() {
  this.health += 6;
  return;
};
  
  // gameAttack(character) {
  //   let damage;
  //   if (character.type === "player"){
  //     damage = character.attack + Math.floor(Math.random()*(6-1+1)) +1;
  //     this.characters[1].currentHealth -= damage;
  //   } else if (character.type === "enemy") {
  //     damage = character.attack + Math.floor(Math.random()*(3-1+1)) +1;
  //     this.characters[0].currentHealth -= damage; 
  //   }
  //   return damage;
  // }
