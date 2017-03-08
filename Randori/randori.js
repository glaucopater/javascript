function attack(technik) {
 

  lastTechnik = document.game.attacks.options[document.game.attacks.selectedIndex].value;
  document.game.gameStatus.value = "tore is attacking with " + lastTechnik;

  document.game.toreStamina.value--;
  document.game.attackButton.disabled = false;

  enableReactions();
  disableAttack();
  controls();

  /*Effect*/
  attackEffect();

  $("UkeBox").setStyle({
    "border": "2px dashed #44ff44"
  });
  $("ToreBox").setStyle({
    "border": "2px dashed transparent"
  });

 
  slider_reset();
  slider_go();


  return lastTechnik;
}

function attackEffect() {

 
  Effect.Shake($('uke'), 20);

}

function enableReactions() {

  document.game.counterButton.disabled = false;
  document.game.resistButton.disabled = false;
  document.game.dodgeButton.disabled = false;
  document.game.fallButton.disabled = false;

  document.game.counters.disabled = false;

}

function disableReactions() {

  document.game.counterButton.disabled = true;
  document.game.resistButton.disabled = true;
  document.game.dodgeButton.disabled = true;
  document.game.fallButton.disabled = true;

  document.game.counters.disabled = true;

}


function disableAttack() {

  document.game.attacks.disabled = true;
  document.game.attackButton.disabled = true;

}

function enableAttack() {
  document.game.attacks.disabled = false;
  document.game.attackButton.disabled = false;

}


function disableAll() {
  disableAttack();
  disableReactions();
}

function reactEffect() {

  Effect.Shake($('tore'), 20);

}


function react(technik) {

  controls();

  reaction = technik;
 

  switch (reaction) {
    case "counter":
      reaction += " " + doCounter();
      break;
    case "dodge":
      dodge();
      break;
    case "resist":
      resist();
      break;
    case "fall":
      fall();
      break;
    default:
      alert("default reaction");
  }

  document.game.gameStatus.value = "uke reacts with: " + reaction;

  enableAttack();
  disableReactions();
  controls();


  /*Effect*/
  $("ToreBox").setStyle({
    "border": "2px dashed #44ff44"
  });
  $("UkeBox").setStyle({
    "border": "2px dashed transparent"
  });
 
  reactEffect();

  slider_stop();

  return reaction;
}

function doCounter() {

  lastCounter = document.game.counters.options[document.game.counters.selectedIndex].value;
  lastTechnik = document.game.attacks.options[document.game.attacks.selectedIndex].value;


  if (lastCounter == getTechnickRenraku(lastTechnik) || true) { 
    document.game.ukeStamina.value--;
    document.game.ukeScore.value++;

  } else { 
    fall();
  }
 

  return lastCounter;

}

function dodge() {
  document.game.ukeStamina.value--;
  document.game.toreScore.value++;
}

function resist() {
  document.game.ukeStamina.value -= 2;
}


function fall() {
  document.game.ukeStamina.value -= 2;
  document.game.toreScore.value = (document.game.toreScore.value * 1) + 2;
}




function updateReaction(element) { 
}



function controls() {
 

  if (document.game.ukeStamina.value < 8) {
    document.game.dodgeButton.disabled = true;
  }

  if (document.game.ukeStamina.value < 5)
    document.game.resistButton.disabled = true;

  if (document.game.toreScore.value >= 4) {
    document.game.toreStatus.value = "Tore won";
    document.game.ukeStatus.value = "Uke lost";
    document.game.gameStatus += "Game over ";

    disableAll();
    alert("Game Over");
  }

  if (document.game.ukeScore.value >= 4) {
    document.game.toreStatus.value = "Tore lost";
    document.game.ukeStatus.value = "Uke won";
    document.game.gameStatus.value += "Game over ";

    disableAll();
    alert("Game Over"); 
  }

  if (document.game.ukeStamina.value < 1)
    document.game.gameStatus.value += "Uke is too tired, game over ";

}
 

var action = "";
var reaction = "";

var toreScore = 0;
var toreStamina = 10;

var ukeScore = 0;
var ukeStamina = 0;


function checkCounter(counter) {
  // if attacks

}

/*
TODO:eval json file with linked techniks
*/

function getComboBox_old(type) {
  if (type == "attacks")
    var tecks = Array("seoi nage", "o soto gari", "de ashi barai", "uki goshi");
  else
  if (type == "counters")
    var tecks = Array("tani otoshi", "o soto gari", "o ouchi gari", "tomoe nage");

  var combobox = "<select name=" + type + " >";
  for (i = 0; i < tecks.length; i++)
    combobox += "<option value='" + tecks[i] + "'>" + tecks[i] + "</option>";
  combobox += "</select>";

  return combobox;
}


/*
type is attack or defence: to delete...
maxlevel is the max known level of techs (max kyo)
bugged...
*/
 
function getComboBox(type, maxlevel) {
  eval(gokyo);

  k = Array("ikkyo", "nikkyo", "sankyo", "yonkyo", "gokyo");
 
  var combobox = "\n<select name=" + type + " >";

  for (index = 0; index < gokyo.kyo.length; index++) {
    combobox += "<optgroup label='" + k[index] + "'>";

    for (i = 0; i < gokyo.kyo[index][k[index]].length; i++) {
     
      val = gokyo.kyo[index][k[index]][i];

      {
        combobox += "\n<option value='" + val + "'>" + val + "</option>";
      }

    }


    combobox += "</optgroup>";


  }
  combobox += "\n</select>";

  return combobox;
}


/*
  Gokyo related
*/
 
function getTechnickRenraku(teck) {

  var kyo = gokyo.kyo[0][k[0]];
 

  for (i = 0; i < kyo.length; i++) { 
    if (kyo[i].name == teck)
      return kyo[i].renraku;
  }

}


/*
	startup  
*/

function startup() {

 
  Element.insert("tatami", "<div id='tore' class='player'></div>");
  Element.insert("tatami", "<div id='uke' class='player'></div>");


 
  Element.insert("attacks", {
    top: getComboBox("attacks")
  });
 
  Element.insert("counters", {
    top: getComboBox("counters")
  });

  disableReactions();
}
 

var f;