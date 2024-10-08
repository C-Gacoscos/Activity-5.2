function numberGuess() {
    
    const correctNumber = Math.floor(Math.random() * 10) + 1;
    
    let userGuess = prompt("Enter a number between 1 and 10:");
    
    userGuess = Number(userGuess);

    if (userGuess === correctNumber) {
        alert('Congratulations! You guessed the correct number.');
    } else if (userGuess < correctNumber) {
        alert('Too low! Try again.');
        numberGuess(); 
    } else if (userGuess > correctNumber) {
        alert('Too high! Try again.');
        numberGuess(); 
    } else {
        alert('Please enter a valid number.'); 
        numberGuess(); 
    }
}
