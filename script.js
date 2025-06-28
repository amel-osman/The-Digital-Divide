
// variables for script and button
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

// generates script when button is clicked
if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}


// script generator... this will put in values that the user inputted into the form.
function generateScript() {
  // variables that hold user input
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var learning = document.getElementById("learning").value;

  // shows script on the screen
  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am calling to ask you to support the initiative to minimize the digital divide. As a member of your community, I deeply care about the wellbeing of those in both our community and others. The digital divide further perpetuates social and economic disparities, and it's not going anywhere unless we do soemthing. For example, " + learning + ". Please support our community's initiative to minimize the digital divide around our nation.";
}


// creates a fact list that the button will sort through when generating facts
var factList = [
  "\"The consequences of the digital divide include isolation, which can affect mental health, educational barriers as postsecondary education increasingly moves online, and worsening gender discrimination.", 
  "\"The COVID-19 pandemic has exposed the differences in digital coverage in the U.S., such as among children forced to attend school remotely and in less affluent communities where people have struggled to get vaccination appointments.\"", 
  "\"The Access Divide: This is the most visible digital divide. It refers to the socioeconomic differences among people and the impact on their ability to afford the devices necessary to get online. In developing countries, many people have limited access to technology and/or the internet and do not have the skills necessary to use it effectively.\"", 
  "\"The Use Divide: This refers to the difference in the level of skills possessed by individuals. There is a generation gap when it comes to the skills necessary to use the internet. It is also affected by the quality of education that an individual receives. Younger, educated people tend to have more skills than older, less educated people.\"", 
  "\"The Quality-of-Use Gap: This measure refers to the different ways that people use the internet and the fact that some people are far more able to get the information they need from it than others.\""
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

//displays a new fact every time button is clicked
if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

// function that sorts through the fact list and displays one
function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
