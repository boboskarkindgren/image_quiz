const body = document.querySelector('body');
const header = document.querySelector('#header');
const highscore = document.querySelector('#highscore');
const alt = document.querySelector('#alternatives');
const nextBtn = document.querySelector('#next');
const results = document.querySelector('#results');
//level buttons selectors
const levels = document.querySelector('#levels'); // container for level buttons
const btnLevel1 = document.querySelector('#level-1');
const btnLevel2 = document.querySelector('#level-2');
const btnLevel3 = document.querySelector('#level-3');

// images and alternatives buttons selectors
const img = document.querySelector('#images');
const alt1 = document.querySelector('#alt-1');
const alt2 = document.querySelector('#alt-2');
const alt3 = document.querySelector('#alt-3');
const alt4 = document.querySelector('#alt-4');
/*

// Copy array with map
const shuffledStudents = students.map(student=> {

	return student;

})
*/

// Or copy array with spread so we don´t destruct the original array
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

// Get a random item in array between 0-array.length
const getRandomItem = (max) => {
	
	return Math.floor( Math.random() * max ); //max = array length
}

// change text on the alternatives from the made array in this case, options
const altText = (array) => {
	alt1.innerText = array[0];
	alt2.innerText = array[1];
	alt3.innerText = array[2];
	alt4.innerText = array[3];
};

const closeBtn = () => {
	alt1.setAttribute('disabled', 'disabled');
	alt2.setAttribute('disabled', 'disabled');
	alt3.setAttribute('disabled', 'disabled');
	alt4.setAttribute('disabled', 'disabled');
}; 

const openBtn = () => {
	alt1.removeAttribute('disabled', 'disabled');
	alt2.removeAttribute('disabled', 'disabled');
	alt3.removeAttribute('disabled', 'disabled');
	alt4.removeAttribute('disabled', 'disabled');
};

// tillhör funktionen nedan för att fungera
shuffleArray(shuffledStudents);
const level1 = shuffledStudents.slice(0, 10)
const level2 = shuffledStudents.slice(0, 20)
const level3 = shuffledStudents

// Funktion för koden till btnLevel1.addEventListener för level1 button
const btnLevelsCode = (levelNbr) => {
	
	let correctPerson = levelNbr[`${number}`];
	console.log('level', levelNbr);
	console.log(levelNbr.length);
	console.log('correct person',correctPerson);
	img.src = correctPerson.image;
	let options = [correctPerson.name];
	
	//push items into the array until 4 items exist
	while (options.length < 4) {
		const randomPerson = levelNbr[getRandomItem(levelNbr.length)].name;
		if (!options.includes(randomPerson)) {
			options.push(randomPerson);
		}
	}
	
	console.log(options); // before shuffle
	shuffleArray(options); //för att inte alltid få correct person på alternativ 1
	console.log(options); // after shuffle
	
	altText(options) // kallar på denna funktion för att läga till text i de olika alternativen. Se altText funktion
	
} 

// Funktion för koden till alt.addEventListener dvs mina alternativ knappar med svar
const btnAltCode = (levelNbr) => {
	
	const cheat = document.querySelector('#cheat')
	cheat.innerText = tries
	if (tries === levelNbr.length){
		if (correctGuesses >= levelNbr.length/2){
				results.classList.add('alert', 'alert-success')
		} else{
				results.classList.add('alert', 'alert-danger')
			}
		results.classList.remove('hide')
		results.innerText = `You got ${correctGuesses} correct guesses out of ${tries} questions. `
	}

}

// Funktion för koden till min nextBtn.addEventListener, dvs knappen "NEXT"
const nxtBtnCode = (levelNbr) => {
	openBtn()
		const allBtnAlt = document.querySelectorAll('#alternatives button');
		console.log(allBtnAlt);
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
		//correctPerson ++;
		//console.log(correctPerson)
}
 

//Nödvändiga variabler
let number = 0;
let correctGuesses = 0;
let tries = 0;
let wrongGuesses = 0;

// LEVEL 1
btnLevel1.addEventListener('click', e => {
	correctPerson = level1[`${number}`];
	btnLevelsCode(level1);
	

	alt.addEventListener('click', e => {
		if (e.target.tagName === 'BUTTON'){
		closeBtn()
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
			wrongGuesses ++; //
		}
		
		btnAltCode(level1);

		}
		
	})

	
	nextBtn.addEventListener('click', e =>{
		
		nxtBtnCode(level1);
		
	})
	
})

// LEVEL 2
btnLevel2.addEventListener('click', e => {
	correctPerson = level2[`${number}`];
	btnLevelsCode(level2);
	

	alt.addEventListener('click', e => {
		if (e.target.tagName === 'BUTTON'){
		closeBtn()
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
			wrongGuesses ++; //
		}
		
		btnAltCode(level2);

		}
		
	})

	
	nextBtn.addEventListener('click', e =>{
		
		nxtBtnCode(level2);
		
	})
	
})

// LEVEL 3
btnLevel3.addEventListener('click', e => {
	correctPerson = level3[`${number}`];
	btnLevelsCode(level3);
	

	alt.addEventListener('click', e => {
		if (e.target.tagName === 'BUTTON'){
		closeBtn()
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
			wrongGuesses ++; //
		}
		
		btnAltCode(level3);

		}
		
	})
	
	nextBtn.addEventListener('click', e =>{
		
		nxtBtnCode(level3);
		
	})
	
})









