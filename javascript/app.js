
const overlay = document.querySelector('.start');
const qwerty = document.querySelector('#qwerty');
const button = qwerty.querySelectorAll('button');
const phraseID = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
const phraseUL = phraseID.querySelector('ul');
const letter = document.getElementsByClassName('letter');
const scoreboard = document.querySelector('#scoreboard'); 
const scoreboardLI = scoreboard.querySelectorAll('.tries');
const title = document.querySelector('.title');
const show = document.getElementsByClassName('show');
let missed = 0;  //number of missed letters ...
let letterFound = false;

const phrases = 	[
						'I longed to live near the sea',
						'A drop in the ocean',
						'A friend in need is a friend indeed',
						'Two heads are better than one',
						'Watch the birdie',
						'Chance would be a fine thing'
						];

//FUNCTIONS//

//function to get random phrase
function getRandomPhraseAsArray(arr){
	const random = arr[Math.floor(Math.random() * arr.length)];
	return random.toUpperCase().split(''); //split characters
}

//function  to add listitems and display the random phrase
function addPhrasetoDisplay(arr){
   for (let i = 0; i< arr.length; i++){
   	const listItem = document.createElement('li');
   	phraseUL.appendChild(listItem);
   	listItem.textContent = arr[i];
   	if(arr[i] !== ' '){
   		listItem.className = 'letter';
   	}else{
   		listItem.className = 'space';
   	}
   }
}   

//function for validating  letters in white spaces
function checkLetter(buttonClicked){
	const chosenLetter = buttonClicked.textContent.toUpperCase();
	let letterFound = false;
	for (let i = 0; i < letter.length; i++){
		if(chosenLetter === letter[i].textContent){
			letter[i].classList.add('show');
			letterFound = true;
		}	
	}
	return letterFound; //returning true or false depends what the if founds
}

function checkWin(){
	if(letter.length === show.length){
		overlay.classList.add('win');
		overlay.style.display = '';
		title.textContent="You won buddy";
		startButton.textContent = "Reset";
		}
	if (missed >= 5) {
		overlay.classList.add('lose');
		overlay.style.display = '';
		title.textContent="Sorry , you lose!";
		startButton.textContent = "Reset";
	}

}
//EVENTS//

startButton.addEventListener('click', (e) =>{
	overlay.style.display = "none";

	//reset the missed value when user clicks 'Reset' game
	if(e.target.textContent === 'Reset'){
		missed = 0;
	}

	//reset life
	for(let i=0; i<scoreboardLI.length; i++){
		const reset = scoreboardLI[i].getElementsByTagName('img')[0];
		reset.src = 'images/liveHeart.png';
	}
	
	//reset button 
	for (let i = 0; i< button.length ; i++) {
		button[i].classList.remove('chosen');
		button[i].disabled=false;
	}

	//remove list items
	while(phraseUL.children.length>0){
		phraseUL.removeChild(phraseUL.children[0]);
	}

	//reset overlay classes
	overlay.classList.remove('win');
	overlay.classList.remove('lose');

	//new random phrase
	const phrase = getRandomPhraseAsArray(phrases);
	addPhrasetoDisplay(phrase);

});
window.addEventListener('click', (e) => {
	if(e.target.tagName === 'BUTTON'){
		e.target.className =='chosen';
		e.target.disabled = true;
		const letterFound = checkLetter(e.target);
		
		if(letterFound === false){
			missed+=1;
		}
		if(missed >=1 && missed <=5){
			const life = scoreboardLI[scoreboardLI.length-missed];
			life.getElementsByTagName('img')[0].src = 'images/lostHeart.png';
		}
	}
	checkWin();
});
