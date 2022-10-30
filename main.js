    let number = Math.floor( 1 + 100*Math.random() );									
    let guessCount = 0;																	
    let guessMessage = "Your guesses so far: ";											
    function guess() {																	
        let userNumber = Number( document.getElementById("guess").value );
        document.getElementById("guess").value = "";
        if ( isNaN(userNumber) || userNumber < 1 || userNumber > 100 ) {
            document.getElementById("question").innerHTML =
               "Bad input!<br>Try again with an integer in the range 1 to 100.";
        }
        else if (userNumber == number) {
            guessCount++;
            document.getElementById("question").innerHTML =
                "You got it in " + guessCount + " guesses. " +
                userNumber + " is correct.<br>" + 
                "I have picked another number.  Make a guess!";
            number = Math.floor( 1 + 100*Math.random() );
            guessCount = 0;
            guessMessage = "Your guesses so far: ";
            document.getElementById("message").innerHTML = "";
        }
        else if (userNumber < number) {
            guessCount++;
            document.getElementById("question").innerHTML =
                userNumber + " is too low.<br>Try again.";
            guessMessage += " " + userNumber;
            document.getElementById("message").innerHTML = guessMessage;
        }
        else {
            guessCount++;
            document.getElementById("question").innerHTML =
                userNumber + " is too high.<br>Try again.";
            guessMessage += " " + userNumber;
            document.getElementById("message").innerHTML = guessMessage;
        }
    }