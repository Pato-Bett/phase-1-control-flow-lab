function scuberGreetingForFeet(distance){
  if (distance>=0&&distance<=400) {
    return ('This one is on me!');
  } 
  else if(distance>2000&&distance<=2500){
    return ('I will gladly take your thirty bucks.');
  }
  else{
    return ('No can do.'); 
  }
}

function ternaryCheckCity(destination){
  // let response=destination==='NYC'? ('Ok, sounds good.'):('No go.');
  // return response;
  return destination==='NYC'?'Ok, sounds good.':'No go.'
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case ('generous'):
      return response='Thank you so much.';
      break;
    case ('not as generous'):
      return response='Thank you.';
    default:
      return response='Bye.';
      break;
  }
}