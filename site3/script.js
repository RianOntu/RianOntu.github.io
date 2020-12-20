


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
 

  for(let i=0;i<=2;i++){

  

if(i==0){
    var prom=prompt("Guess a Number between 0 to 10! You have three chances");
    let correct_ans=getRandomInt(11);
    let bigger=prom<correct_ans;
   let smaller=prom>correct_ans;
        if(bigger==true){
            alert('The answer is bigger than your guessed one!');
            break;
        }
        else if(smaller==true){
            alert('The answer is smaller than your guesses one!');
            break;
        }
        else if(correct_ans==prom)
        {
            alert("You win!");
            break;
        }
}
if(i==1){
    var prom=prompt("You have two chances left!");
    let correct_ans=getRandomInt(11);
    let bigger=prom<correct_ans;
   let smaller=prom>correct_ans;
    if(bigger==true){
        alert('The answer is bigger than your guessed one!');
    }
    else if(smaller==true){
        alert('The answer is smaller than your guesses one!');
        break;
    }
    else if(correct_ans==prom)
    {
        alert("You win!");
        break;
    }
}
if(i==2){
    var prom=prompt("Last Chance!");
    let correct_ans=getRandomInt(11);
    let bigger=prom<correct_ans;
   let smaller=prom>correct_ans;
    if(bigger==true){
        alert('You lose!');
        break;
    }
    else if(smaller==true){
        alert('You lose!');
        break;
    }
    else if(correct_ans==prom)
    {
        alert("You win!");
        break;
    }

}
  }

