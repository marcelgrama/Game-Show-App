
const overlay = document.querySelector('.start');
const qwerty = document.querySelector('#qwerty');
const button = qwerty.querySelectorAll('#button');
const phraseID = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
const phraseUL = phraseID.querySelector('ul');
const letter = document.getElementsByClassName('letter');
const scoreboard = document.querySelectorAll('#scoreboard'); 
const title = document.querySelector('.title');
const show = document.getElementsByClassName('show');
let missed = 0;  //number of missed letters ...

const phrases = 	[
						'I longed to live near the sea',
						'A drop in the ocean',
						'A friend in need is a friend indeed',
						'Two heads are better than one',
						'Watch the birdie',
						'Chance would be a fine thing'
						];

//FUNCTIONS//

function getRandomPhraseAsArray(arr){
	const random = arr[Math.floor(Math.random() * arr.length)];
	return random.toUpperCase().split('');
}

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
const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray); 

function checkLetter(buttonClicked){
	const chosenLetter = buttonClicked.textContent.toUpperCase();
	let letterFound = false;
	for (let i = 0; i <= letter.length; i++){
		if(chosenLetter === letter[i].textContent){
			letter[i].classList.add('show');
			letterFound = true;
		}
		
	}
	return null;
}

function checkWin(){
	if(letter.length === show.length){
		overlay.classList.add('win');
		title.textContent="You won buddy";
		startButton.textContent = "Reset";
		}
	if (missed >= 5) {
		overlay.classList.add('lose');
		title.textContent="Sorry , you lose!";
		startButton.textContent = "Reset";

	}

}
//EVENTS//

startButton.addEventListener('click', () =>{
	overlay.style.display = "none";
	if(e.target.textContent === 'Reset'){
		missed = 0;
	}
	for(let i=0; scoreboard.length; i++){
		const reset = scoreboard.getElementsByTagName('img');
		reset.src = 'images/liveHeart.png';
	}
	for (let i = 0; i< button.length ; i++) {
		button[i].classList.remove('chosen');
		button[i].disabled=false;
	}
	overlay.classList.remove('win');
	overlay.classList.remove('lose');
	const phrase = getRandomPhraseAsArray(phrases);
	addPhrasetoDisplay(phrase);

});
window.addEventListener('click', (e) => {
	if(e.target.tagName === 'BUTTON'){
		e.target.className =='chosen';
		e.target.disabled = true;
		const letterFound = checkLetter(e.target);
		}
		if(letterFound === null){
			missed+=1;
		}
		if(missed >=1 && missed <=5){
			const life = scoreboard.length-missed;
			life.getElementsByTagName('img').src = 'images/lostHeart.png';
		}
	checkWin();
});