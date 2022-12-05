const highscore = document.querySelector('#highscore');
const alt = document.querySelector('#alternatives');
const nextBtn = document.querySelector('#next');
const results = document.querySelector('#results');
const levels = document.querySelector('#levels'); 
const btnLevel1 = document.querySelector('#level-1');
const btnLevel2 = document.querySelector('#level-2');
const btnLevel3 = document.querySelector('#level-3');
const img = document.querySelector('#images');
const alt1 = document.querySelector('#alt-1');
const alt2 = document.querySelector('#alt-2');
const alt3 = document.querySelector('#alt-3');
const alt4 = document.querySelector('#alt-4');
const startNewGameBtn = document.querySelector('#new-game');

let number = 0;
let correctGuesses = 0;
let tries = 0;
let wrongGuesses = 0;
let fails = [];
const level1 = shuffledStudents.slice(0, 10)
const level2 = shuffledStudents.slice(0, 20)
const level3 = shuffledStudents

const shuffledStudents = [...students];

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

const getRandomItem = (max) => {
	
	return Math.floor( Math.random() * max ); 
}

const altText = (array) => {
	alt1.innerText = array[0];
	alt2.innerText = array[1];
	alt3.innerText = array[2];
	alt4.innerText = array[3];
};

const closeAltBtn = () => {
	alt1.setAttribute('disabled', 'disabled');
	alt2.setAttribute('disabled', 'disabled');
	alt3.setAttribute('disabled', 'disabled');
	alt4.setAttribute('disabled', 'disabled');
}; 

const openAltBtn = () => {
	alt1.removeAttribute('disabled', 'disabled');
	alt2.removeAttribute('disabled', 'disabled');
	alt3.removeAttribute('disabled', 'disabled');
	alt4.removeAttribute('disabled', 'disabled');
};

const closeLevelsBtn = () => {
	btnLevel1.setAttribute('disabled', 'disabled');
	btnLevel2.setAttribute('disabled', 'disabled');
	btnLevel3.setAttribute('disabled', 'disabled');
}; 

const openLevelsBtn = () => {
	btnLevel1.removeAttribute('disabled', 'disabled');
	btnLevel2.removeAttribute('disabled', 'disabled');
	btnLevel3.removeAttribute('disabled', 'disabled');
}; 

const btnLevelsCode = (levelNbr) => {
	alt.classList.remove('hide'); 
	let correctPerson = levelNbr[`${number}`];
	img.src = correctPerson.image;
	let options = [correctPerson.name];
	
	while (options.length < 4) {
		const randomPerson = levelNbr[getRandomItem(levelNbr.length)].name;
		if (!options.includes(randomPerson)) {
			options.push(randomPerson);
		}
	}
	shuffleArray(options);
	altText(options) 
}

const btnResultsCode = (levelNbr) => {
	const cheat = document.querySelector('#cheat')
	cheat.innerText = tries
	if (tries === levelNbr.length){
		
		if (correctGuesses >= levelNbr.length/2){
				results.classList.add('alert', 'alert-success')
		} else{
				results.classList.add('alert', 'alert-danger')
			}
		results.classList.remove('hide')

		fails = fails.map(fail=> {
			return `<figure class="figure">
			<figcaption class="figure-caption">${fail.name}</figcaption>
			<img src="${fail.image}" class="figure-img img-fluid rounded" alt="...">
		  	</figure>`
		})
		results.innerHTML = `<div>You got ${correctGuesses} correct guesses out of ${tries} questions.</div>
		<div>You failed at these:</div><div class="mt-4">${fails.join('')}</div> `
	}
}

const nxtBtnCode = (levelNbr) => {
	openAltBtn()
		const allBtnAlt = document.querySelectorAll('#alternatives button');
		allBtnAlt.forEach (element => {
			element.classList.add('btn-warning')
			element.classList.remove('btn-danger', 'btn-success');
		})

		number++;
		correctPerson = levelNbr[`${number}`];
		img.src = correctPerson.image;
		options = [correctPerson.name];

		while (options.length < 4) {
			const randomPerson = levelNbr[getRandomItem(levelNbr.length)].name;
			if (!options.includes(randomPerson)) {
				options.push(randomPerson);
			}
		}
		shuffleArray(options);
		altText(options);
}

const levelFunc = (arr, nbr) =>{
	closeLevelsBtn()
	shuffleArray(shuffledStudents);
	arr = shuffledStudents.slice(0, nbr)
	correctPerson = arr[`${number}`];
	btnLevelsCode(arr);
	
	alt.addEventListener('click', e => {
		if (e.target.tagName === 'BUTTON'){
		closeAltBtn()
		console.log(e.target.innerText);
		if (e.target.innerText == correctPerson.name) {
			console.log('correct');
			e.target.classList.add('btn-success');
			e.target.classList.remove('btn-warning');
			tries ++;//
			correctGuesses ++;//
			highscore.innerText = `Highscore: ${correctGuesses}`;// 
		} else {
			console.log('wrong');
			e.target.classList.add('btn-danger');
			e.target.classList.remove('btn-warning');
			tries++
			wrongGuesses ++; 
			fails.push(correctPerson);
			console.log(fails);
		}
		btnResultsCode(arr)
		}
	})
	nextBtn.addEventListener('click', e =>{
		nxtBtnCode(arr);	
	})
} 

const startNewGame = () => {
	number = 0;
	correctGuesses = 0;
	tries = 0;
	wrongGuesses = 0;
	cheat.innerText = tries;
	openLevelsBtn()
	openAltBtn()
	img.src ="/assets/images/students/alexander_olsson.jpg"
	alt1.setAttribute('class', 'btn btn-warning');
	alt2.setAttribute('class', 'btn btn-warning');
	alt3.setAttribute('class', 'btn btn-warning');
	alt4.setAttribute('class', 'btn btn-warning');
	alt.classList.add('hide');
	results.classList.add('hide');
	results.classList.remove('d-flex');
}
 
btnLevel1.addEventListener('click', e => {
	levelFunc(level1, 10);
})

btnLevel2.addEventListener('click', e => {
	levelFunc(level2, 20);
})

btnLevel3.addEventListener('click', e => {
	levelFunc(level3)
})

startNewGameBtn.addEventListener('click', e =>{
	startNewGame();
})











