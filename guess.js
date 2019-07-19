var number = Math.floor(Math.random() * 100) + 1;
var tries= 4;
guesses= [];
var guess;

for(i = 1 ; i <= tries; i++){
do{
    guess = window.parseInt(prompt("Enter a number"));
}
while(isPrevious() || isNaN(guess))

if(guess==number){
    document.write("You win!");
    break;
}
else if(guess<number){
    guesses[i-1] = guess
    alert("Wrong, your guess was to low. You have "+(tries-i)+" attempts left. You have entered " + guesses);
   
}
else{
    guesses[i-1] = guess
    alert("Wrong, your guess was too high. You have "+(tries-i)+" attempts left. You have entered " + guesses);
   
}
}
if(i==5){
    document.write("You lose. The answer was " + number + ". You guessed: " + guesses)
}
function isPrevious(){
    for(i=0; i<=guesses.length;i++){
        if(guesses[i] == guess){
            return true;
        }
    }
    return false
}
