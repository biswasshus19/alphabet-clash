// function hide korar jonno 
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function addElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet(){
    // get and create alphabet array 
    const alphabetString = 'abcdefghijklmnopqrstwxyz';
    const alphabets = alphabetString.split('');

    // get a random index between 0-25
    const mathRandom = Math.random()*25 // generate 0-25 any random float number
    const index = Math.round(mathRandom); // generate any integer number get from math random
    // console.log(index);

    const alphabet = alphabets[index];
    return alphabet;
    // console.log(index, alphabet);
}

// add background color by random generate value 
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// remove background color by generate value 
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

// life and score get by element text 
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

// inner text set 
function setElementById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getTextElementById(elementId){
    const element = document.getElementById(elementId)
    const text = element.innerText;
    return text;
}