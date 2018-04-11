var numberOfSquares = 6
var colors = []
var pickedColor;
var squares = document.querySelectorAll('.square');
var displayColor = document.querySelector('#displayColor');
var header = document.querySelector('h1');
var message = document.querySelector('#message');
var resetButton = document.querySelector('#reset')
var gameMode = document.querySelectorAll('.mode');



// init function starts the game with the proper settings
init();

function init(){
    gameModeSetUp();
    squareSetUp();
    reset();
}

function gameModeSetUp() {
    //mode event listeners for game modes
    for(var i = 0; i < gameMode.length; i++){
        gameMode[i].addEventListener('click', function(){
            gameMode[0].classList.remove('selected');
            gameMode[1].classList.remove('selected');
            this.classList.add('selected'); 
            this.textContent === 'Easy' ? numberOfSquares = 3: numberOfSquares = 6;
            reset();
        });
    }
}

function squareSetUp() {
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener('click',function(){
        var clickedColor = this.style.backgroundColor; //saves the color that was clicked

        //determine if the clickedColor is correct
        if(clickedColor === pickedColor){
            message.textContent = 'Correct';
            changeColors(pickedColor);
            header.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again";
        }else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
            }
        });
    }
}

function reset(){

    numberOfSquares;
    colors = generateRandomColors(numberOfSquares);

    //pick a new color
    pickedColor = pickColor();

    //display a new color
    displayColor.textContent = pickedColor;
    resetButton.textContent = 'New Colors';  

    message.textContent = "";

    //change the colors of the squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = 'none';
        }
    }    
    header.style.backgroundColor = "steelblue"; 
}


// resets the whole game
resetButton.addEventListener('click', function(){
    reset();
})


//displays the different colors in the array colors
for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click',function(){
        var clickedColor = this.style.backgroundColor;
        console.log(pickedColor, clickedColor);

//function to determine wether if the picked color is correct
        if(clickedColor === pickedColor){
            message.textContent = 'Correct';
            changeColors(pickedColor);
            header.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again";
        }else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";
        }
    });
}

//when the correct color is picked all the colors change to the correct color.
function changeColors(color) {
    for(var i = 0; i < squares.length; i ++){
        squares[i].style.backgroundColor = color;
    }
}

//chooses a color that needs to be guessed
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

//generates random rgb colors.
function generateRandomColors(number){
    var arr = [];

    for(var i = 0; i < number; i++){
        arr.push(randomColor());
    }
    return arr;
}

// generating a random color from 0 to 255
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"
}   
