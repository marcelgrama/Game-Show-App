
const qwerty = document.querySelector('#qwerty');
const phraseID = document.querySelector('#phrase');
const startButton = document.querySelector('.btn__reset');
const phraseUL = phraseID.querySelector('ul');
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
	return random.toUpperCase();
}

function addPhrasetoDisplay(arr){
   for (let i = 0; i<= arr.length; i++){
   	const listItem = document.createElement('li');
   	phraseUL.appendChild(listItem);
   	if(arr[i] === ' '){
   		listItem.className = 'letter';
   	}else{
   		listItem.className = 'space';
   	}
   }
}   
const phraseArray = getRandomPhraseAsArray(phrases);
addPhrasetoDisplay(phraseArray); 

function checkLetter(buttonClicked){
	const chosenLetter = buttonClicked.textContent;
	for (let i = 0; i <= letter.length; i++){
		if(chosenLetter === letter[i].textContent){
			letter[i].classList.add('show');
		}else{
			return false;
		}
	}

}
//EVENTS//

startButton.addEventListener('click', () =>{
	overlay.style.display = "none";

});