function scuberGreetingForFeet(numberOfFeet){
  let greeting;
  if (numberOfFeet <= 400) {
    greeting = "This one is on me!";
  }else if (numberOfFeet >= 2000 && numberOfFeet < 2500) {
    greeting = "I will gladly take your thirty bucks.";
  }else if (numberOfFeet > 2500) {
    greeting = "No can do.";
  }
  return greeting;
}

function ternaryCheckCity(city){
  return (city === "NYC" ? "Ok, sounds good." : "No go.");
}


function switchOnCharmFromTip(tip){
  let response;
  switch(tip) {
    case "generous" :
      response = "Thank you so much.";
      break;
    case "not as generous" :
      response = "Thank you.";
      break;
    default: response = "Bye.";  
  }
  return response;
  
}