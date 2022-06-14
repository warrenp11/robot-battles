// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// Player info
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
// console.log(playerName, playerAttack, playerHealth);

// Enemy info
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// console.log(enemyNames.length);

// for(var i = 0; i < enemyNames.length; i++) {
//   console.log(enemyNames[i]);
//   console.log(i);
//   console.log(enemyNames[i] + " is at " + i + " index");
// }

// Fight function
var fight = function (enemyName) {
  // Alert players they're starting the round
  window.alert("Welcome to Robot Gladiators!");

  // Ask player if they want to fight or skip battle
  var promptFight = window.prompt(
    "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
  );

  // Player decides to fight
  if (promptFight === "fight" || promptFight === "FIGHT") {
    // Player attacks enemy
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName +
        " attacked " +
        enemyNames[i] +
        ". " +
        enemyNames[i] +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // Check enemy's health
    if (enemyHealth <= 0) {
      window.alert(+" has died!");
    } else {
      window.alert(
        enemyNames[i] + " still has " + enemyHealth + " health left."
      );
    }

    // Enemy attacks player
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyNames[i] +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // Check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // Player decides to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    // Confirm player's decision to skip
    var confirmSkip = window.confirm("Are you sure you'd like to skip?");

    //   If yes (true), skip fight
    if (confirmSkip) {
      window.alert(playerName + " has chosen to skip the fight. Goodbye!");
      // Subtract money from player for skipping
      playerMoney = playerMoney - 2;
      console.log(playerMoney);
      //  If no (false), ask question again by running fight() again
    } else {
      fight();
    }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  fight(enemyNames[i]);
}

// fight();
