(function() {
    "use strict";
    var sequenceArray = [];
    var counter = 1;
    var userArray = [];

    
    //This funtion adds a new random number to Simoné's Sequence each round.
    function addToSequence(){
        var num = (Math.floor(Math.random()* 4)+1);
        sequenceArray.push(num);
        userArray = [];
        $("#subtitle").html("Round " + (parseInt(sequenceArray.length)));
    }
    

    //animateGame times the animations when called.
    function animateGame(){
        var i = 0;
        var intervalId = setInterval(function() {
            if(i >= sequenceArray.length) {
                clearInterval(intervalId);
            }
            animate(i);
            i++;
        }, 800);
    }

    
    //The animate function determines which square blinks and how. 
    function animate(i){
    
        if(sequenceArray[i] == 1){
            $("#box-red").animate({
                opacity: .3
            }, 400, function(){
                $("#box-red").animate({opacity: 1}, 400);
            })
        }else if(sequenceArray[i] == 2){
            $("#box-yellow").animate({
                opacity: .3
            }, 400, function(){
                $("#box-yellow").animate({opacity: 1}, 400);
            })
        }else if(sequenceArray[i] == 3){
            $("#box-green").animate({
                opacity: .3
            }, 400, function(){
                $("#box-green").animate({opacity: 1}, 400);
            })
        }else if(sequenceArray[i] == 4){
            $("#box-blue").animate({
                opacity: .3
            }, 400, function(){
                $("#box-blue").animate({opacity: 1}, 400);
            })
        }
    }

    
    //checkUser mathes the user's input to Simoné's sequence. If they match, a new number is added to simoné's squence. If thet do not; gameOver is called, ending the game.
    function checkUser(button){ 
        if(userArray[counter] == sequenceArray[counter]) {
            if(counter == sequenceArray.length -1 ){
                counter = 0;
                 $("#subtitle").html("WOO!");
                addToSequence();
                animateGame();
            }else{
                counter++;
            }
        }else{
            gameOver(); 
        }
    }
    

    //playerMove records which quares the user clicks and adds them into an array.
    function playerMove(){
        $('.box').click(function(){
            userArray.push($(this).text());
            checkUser($(this));
        }); 
    }
    

    //The start function is called when the "start" buntton is clicked, this clears all arrays and the counter. It also calls Simoné to start the sequence, animate the squares, and record the player's input. 
    function start(){
        $("#start").click(function(){
            sequenceArray = [];
            userArray = [];
            counter = 0;
            addToSequence();
            animateGame();
            playerMove();
            $("#over").html("");
            
        });
    }
    

    //gameOver is called when the arrays do not match, clearing the arrays and displaying a "game over" messgae. 
    function gameOver(){
        sequenceArray = [];
        userArray = [];
        counter = 0;
        $("#subtitle").html("Click Start to play Again!");
        $("#over").html("GAME OVER");
    }

    start();

    })();