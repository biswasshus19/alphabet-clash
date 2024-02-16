// function play(){
//     //hide the home screen

//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     // show the playground 
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }

function handleKeyBoardButtonPress(event){
    const playerPress = event.key;
    console.log(playerPress);

    // stop the game if player pressed ESC 
    if(playerPress==='Escape'){
        gameOver();
    }

    // get the expected to press 
    const currentAlphabetElement = document.getElementById('random-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPress,currentAlphabet);

    // check matched or not 
    if(playerPress === expectedAlphabet){
        console.log("You get a point");
        //updated score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        const currentScore = getElementValueById('current-score');
        const currentNewScore = currentScore + 1;
        setElementById('current-score', currentNewScore);

        // // new score 
        // const currentNewScore = currentScore + 1;
        // currentScoreElement.innerText = currentNewScore;

        
        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log("Oops! You lost a life");
        const currentLife = getElementValueById('current-life');
        const newLife = currentLife - 1;
        setElementById('current-life',newLife);
        if(newLife === 0){
            gameOver();
        }

        // // current life status 
        // const currentLife = document.getElementById('current-life');
        // const currentLifeText = currentLife.innerText;
        // const currentLifeNumber = parseInt(currentLifeText);
        // console.log(currentLifeNumber);

        // //reduce the life 
        // const newLife = currentLifeNumber - 1;

        // //display the update life 
        // currentLife.innerText = newLife;
    }
}
//Capture keyboard keypress
document.addEventListener('keyup', handleKeyBoardButtonPress)

function continueGame(){
    // step-1 generate random alphabet
    const alphabet = getARandomAlphabet();
    console.log(alphabet);

    // set randomly generate alphabet from the screen 
    const currentlyAlphabet = document.getElementById('random-alphabet');
    currentlyAlphabet.innerText = alphabet;

    // set background Color 
    setBackgroundColorById(alphabet);
}
function playTheGame(){
    // hide everything show only the play ground 
    hideElementById('home-screen');
    hideElementById('final-score')
    addElementById('play-ground');

    // reset score and life 
    setElementById('current-life', 5);
    setElementById('current-score',0);
    continueGame();
}

// game Over function 
function gameOver(){
    hideElementById('play-ground');
    addElementById('final-score');

    // set the final score 
    const lastScore = getElementValueById('current-score');
    console.log("Your final score is ",lastScore);
    setElementById('last-score',lastScore);

    // clear the last selected alphabet 
    const currentAlphabet = getTextElementById('random-alphabet');
    removeBackgroundColorById(currentAlphabet);
}