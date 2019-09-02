   
         var wins = 0;
         var losses = 0;
         var randomNumber;
         var playerScore;
         var gameStarted = false;

        //  var winText = document.getElementById("#wins");
        //  var lossText = document.getElementById('#losses');
        //  var randonNumText = document.getElementById('#randomNum');
        //  var playerScoreText = document.getElementsByClassName(".card-text");
   
   
   
   $(document).ready(function () {


      

    function selectNewNumber() {
        randomNumber = (Math.floor(Math.random()*120) + 19);
        return randomNumber;
       
    };


    function crystalVal() {
        for (var i = 0; i < 5; i++){
         $("#crystal-"+i).attr("value", (Math.floor(Math.random() *12)+1) );
        }
    };
    
    


    function startGame() {
        gameStarted = true;                     //sets game status to "started"
        selectNewNumber();          //select new random number and display it
        $('#randomNum').text("Random Number:  " + randomNumber);
        crystalVal();                           //reset the crystal values
        playerScore = 0;                        //returns player score to zero for the new game
                                           //clear the player score section
        $('#wins').text("wins: " + wins);              //display the total wins
        $('#losses').text("losses: " + losses);            //display the total losses
        playGame();
    }

    function playGame() {
        $('.btn').on('click', function() {
            var value = $(this).val();
            value = parseInt(value);
            console.log(value);
            var newplayerScore = playerScore += value;
            $('#scoreText').html(newplayerScore);
            if (newplayerScore < randomNumber) {
                return;
            }
            else if (newplayerScore === randomNumber) {
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
            else (newplayerScore > randomNumber); {
                losses++;
                alert("Sorry. You lose!");
                gameStarted = false;
                var playOn = confirm("Select okay to continue or cancel to end");
                if (playOn) {
                    startGame();
                }
                else (playOn = false); {
                    return;
                 }
             }
                  

        });
    }
    
    startGame();
    
    console.log("Random Number:"+randomNumber);
    console.log("Player Score:" +playerScore);
    $('#scoreText').html(playerScore);
 


   
    });
      
   
    
