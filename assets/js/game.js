 
 // Global variables
         var wins = 0;
         var losses = 0;
         var randomNumber;
         var playerScore;
         var newplayerScore;
         var gameStarted = false;

 
   
   
   $(document).ready(function () {

    // Global variables to keep track of game state (wins/losses, currentScore, targetScore)
    // Functionalities for: random number generation, starting game, and resetting game.
      

    function selectNewNumber() {
        randomNumber = (Math.floor(Math.random()*120) + 19);
        return randomNumber;
       
    };


    function crystalVal() {
        for (var i = 0; i < 4; i++){
         $("#crystal-"+i).attr("value", (Math.floor(Math.random() *12)+1) );
        }
    };

    
    // crystalVal();
    // console.log('value of crystal 0', $('#crystal-0').attr("value"))
    
    function reset() {
        playerScore = 0;
        crystalVal();
        $('#scoreText').html(playerScore);

    }


    function startGame() {
        gameStarted = true;                                          //sets game status to "started"
        selectNewNumber();                                          //select new random number and display it
        $('#randomNum').text("Random Number:  " + randomNumber);
        crystalVal();                                               //reset the crystal values
        playerScore = 0;                                            //returns player score to zero for the new game
        $('#wins').text("wins: " + wins);                           //display the total wins
        $('#losses').text("losses: " + losses);                     //display the total losses
        
    }


    function checkScore() {
         

             if (playerScore == randomNumber) {
                $('#scoreText').html(playerScore);
                wins++; 
                alert("Winner, Winner!!!");
                gameStarted = false;
                var playOn = confirm("Select okay to continue or cancel to end");
                if (playOn) {
                    startGame();
                }
                else (playOn = false); {
                    return;
                 }
            }
            
            if (playerScore > randomNumber) {
                console.log('playerscore:', playerScore, 'and random number:', randomNumber);
                $('#scoreText').html(playerScore);
                losses++;
                alert("Your score is " + playerScore + " Sorry. You lose!");
                gameStarted = false;
                var playOn = confirm("Select okay to continue or cancel to end");
                if (playOn) {
                   startGame();
                }
                else (playOn = false); {
                    reset();
                    return;
                 }
             }
             
                  

        };
    
    
    // Starter and Click handlers for our crystals (a click handler for each, or one that covers all)

    
    startGame();
    
    $('.btn').on('click', function() {
        var value = $(this).attr('value');
        console.log('clicked gem\'s value:', value);
        value = parseInt(value);
        playerScore += value;
        $('#scoreText').html(playerScore);
        console.log('playerscore:', playerScore, 'and random number:', randomNumber);
        if (playerScore < randomNumber) {
           return;
        }
        else checkScore(playerScore);
    });
    
    console.log("Random Number:"+ randomNumber);
    console.log("Player Score:" + playerScore);
    
    
        $('#scoreText').html(playerScore);
 


   
    });
      
   
    
