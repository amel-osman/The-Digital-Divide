/*
KEY FEATURE: Personalize it
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you to support the initiative to limit plastic waste. As a student, I have learned the tremendous environmental, economic, and health effects plastic waste can cause. For example, " + learning + ". Please support Green Peace's initiative to save our planet.";
}


//Move these variables to the top
var factList = [
  "Around 75 to 199 million tons of plastic can currently be found in the ocean.", 
  "Only less than 10 percent of the 7 billion tons of plastic waste generated globally so far has been recycled.", 
  "Most plastic simply breaks down further and further and does not disappear. It can enter the human body and accumulate in organs, causing intense health problems.", 
  "The amount of plastic entering aquatic ecosystems could nearly triple to around  23-37 million tons per year by 2040.", 
  "Around 400 million tons of plastic waste is produced every year."
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
