/* .js files add interaction to your website */
var factList = [
  "The average delay between symptom onset and treatment is 11 years",
  "78% of all people who die by suicide are male",
  "Over 1.7 million youth with major depressive episodes did not recieve treatment",
  "1/2 of all mental illnesses show early signs before a person turns 14 years old, and 3/4 of mental illnesses begin before age 24.",
  "Lesbian, gay and biesexual youth are 4 times more likely to attempt suicide and transgender youth are 12 times more likley",
  "People with severe mental disorders die 10 to 20 years earlier than the general population.",
  "35% of teenaged girls have a eating disorder",
  "Almost 800,000 people die by suicide every year; 1 person dies from suicide every 40 seconds.",
  "25% of people who identify as being two or more races have a mental illness. ",
  ];


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

