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
//copy array with map
const shuffledStudents = students.map(student=> {

	return student;

})
*/

//Copy array with spread so we don´t destruct the original array
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

//shuffleArray(shuffledStudents);

//console.log(students);
//console.log(shuffledStudents);
const newPerson = (array => {

}) 



// Get a random item in array between 0-array.length
const getRandomItem = (max) => {
	
	return Math.floor( Math.random() * max );
}

// change text on the alternatives from the made array in this case, options
const altText = (array) => {
	alt1.innerText = array[0];
	alt2.innerText = array[1];
	alt3.innerText = array[2];
	alt4.innerText = array[3];
};

/*
const GetNextImg = (levelNbr) => {
	nextBtn.addEventListener('click', e =>{
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
		shuffleArray(options)
		altText(options);
		//correctPerson ++;
		//console.log(correctPerson)

		
	})
	
}	
*/

let number = 0;

let correctGuesses = 0;
let tries = 0;
let wrongGuesses = 0;

// eventlisteners for level buttons
btnLevel1.addEventListener('click', e => {
	shuffleArray(shuffledStudents);
	const level1 = shuffledStudents.slice(0, 10)
	let correctPerson = level1[`${number}`];
	console.log('level', level1);
	//const correctPerson = level1[getRandomItem(level1.length)];
	console.log(level1.length);
	console.log(correctPerson);
	//img.src = level1[correctPerson].image
	img.src = correctPerson.image;
	/*
	alt1.innerText = level1[randomPerson].name
	const randomPerson1 = level1[getRandomItem(level1.length)].name;
	alt2.innerText = level1[randomPerson2].name
	const randomPerson2 = level1[getRandomItem(level1.length)].name;
	alt3.innerText = level1[randomPerson3].name
	const randomPerson3 = level1[getRandomItem(level1.length)].name;
	alt4.innerText = level1[randomPerson4].name;
	*/
	let options = [correctPerson.name];
	
	//push items into the array until 4 items exist
	while (options.length < 4) {
		const randomPerson = level1[getRandomItem(level1.length)].name;
		if (!options.includes(randomPerson)) {
			options.push(randomPerson);
		}
	}
	console.log(options); // before shuffle
	shuffleArray(options); //för att inte alltid få correct person på alternativ 1
	console.log(options); // after shuffle
	
	// alt1.innerText = options[0];
	// alt2.innerText = options[1];
	// alt3.innerText = options[2];
	// alt4.innerText = options[3];
	
	altText(options) // kallar på denna funktion för att ändra text i de olika alternativen
	
	alt.addEventListener('click', e => {
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
		const cheat = document.querySelector('#cheat')
		cheat.innerText = tries
		if (tries === level1.length){
			if (correctGuesses >= 5){
				results.classList.add('alert', 'alert-success')
			} else{
				results.classList.add('alert', 'alert-danger')
			}
		results.classList.remove('hide')
		results.innerText = `You got ${correctGuesses} correct guesses out of ${tries} questions. `
		}
	})

	
	
	//GetNextImg(level1);

	
	nextBtn.addEventListener('click', e =>{
		const allBtnAlt = document.querySelectorAll('#alternatives button');
		console.log(allBtnAlt);
		allBtnAlt.forEach (element => {
			element.classList.add('btn-warning')
			element.classList.remove('btn-danger', 'btn-success');
		})

		number++;
		correctPerson = level1[`${number}`];
		

		img.src = correctPerson.image;

		options = [correctPerson.name];

		while (options.length < 4) {
			const randomPerson = level1[getRandomItem(level1.length)].name;
			if (!options.includes(randomPerson)) {
				options.push(randomPerson);
			}
		}
		
		shuffleArray(options);
		altText(options);
		//correctPerson ++;
		//console.log(correctPerson)

		
	})
	
})

btnLevel2.addEventListener('click', e => {
	shuffleArray(shuffledStudents);
	const level2 = shuffledStudents.slice(0, 20)
	console.log(level2);
	correctPerson = level2[`${number}`];
	console.log(level2.length);
	console.log(correctPerson);

	img.src = correctPerson.image;
	
	let options = [correctPerson.name];
	
	//push items into the array until 4 items exist
	while (options.length < 4) {
		const randomPerson = level2[getRandomItem(level2.length)].name;
		if (!options.includes(randomPerson)) {
			options.push(randomPerson);
		}
	}
	console.log(options); // before shuffle
	shuffleArray(options);
	console.log(options); // after shuffle
	
	
	altText(options) // kallar på denna funktion för att ändra text i de olika alternativen
	
	alt.addEventListener('click', e => {
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
		const cheat = document.querySelector('#cheat')
		cheat.innerText = tries
		if (tries === level2.length){
			if (correctGuesses >= 15){
				results.classList.add('alert', 'alert-success')
			} else{
				results.classList.add('alert', 'alert-danger')
			}
		results.classList.remove('hide')
		results.innerText = `You got ${correctGuesses} correct guesses out of ${tries} questions. `
		}
	})
	
	nextBtn.addEventListener('click', e =>{
		const allBtnAlt = document.querySelectorAll('#alternatives button');
		console.log(allBtnAlt);
		allBtnAlt.forEach (element => {
			element.classList.add('btn-warning')
			element.classList.remove('btn-danger', 'btn-success');
		})

		number++;
		correctPerson = level2[`${number}`];
		

		img.src = correctPerson.image;

		options = [correctPerson.name];

		while (options.length < 4) {
			const randomPerson = level2[getRandomItem(level2.length)].name;
			if (!options.includes(randomPerson)) {
				options.push(randomPerson);
			}
		}
		
		shuffleArray(options);
		altText(options);
		//correctPerson ++;
		//console.log(correctPerson)

		
	})
})

btnLevel3.addEventListener('click', e => {
	shuffleArray(shuffledStudents);
	const level3 = shuffledStudents
	console.log(level3);
	correctPerson = level3[`${number}`]; 
	console.log(level3.length);
	console.log(correctPerson);

	img.src = correctPerson.image;
	
	let options = [correctPerson.name];
	
	//push items into the array until 4 items exist
	while (options.length < 4) {
		const randomPerson = level3[getRandomItem(level3.length)].name;
		if (!options.includes(randomPerson)) {
			options.push(randomPerson);
		}
	}
	console.log(options); // before shuffle
	shuffleArray(options);
	console.log(options); // after shuffle
	
	altText(options) // kallar på denna funktion för att ändra text i de olika alternativen
	
	alt.addEventListener('click', e => {
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
		const cheat = document.querySelector('#cheat')
		cheat.innerText = tries
		if (tries === level3.length){
			if (correctGuesses >= 30){
				results.classList.add('alert', 'alert-success')
			} else{
				results.classList.add('alert', 'alert-danger')
			}
		results.classList.remove('hide')
		results.innerText = `You got ${correctGuesses} correct guesses out of ${tries} questions. `
		}
	})
	
	nextBtn.addEventListener('click', e =>{
		const allBtnAlt = document.querySelectorAll('#alternatives button');
		console.log(allBtnAlt);
		allBtnAlt.forEach (element => {
			element.classList.add('btn-warning')
			element.classList.remove('btn-danger', 'btn-success');
		})

		number++;
		correctPerson = level3[`${number}`];
		

		img.src = correctPerson.image;

		options = [correctPerson.name];

		while (options.length < 4) {
			const randomPerson = level3[getRandomItem(level3.length)].name;
			if (!options.includes(randomPerson)) {
				options.push(randomPerson);
			}
		}
		
		shuffleArray(options);
		altText(options);
		//correctPerson ++;
		//console.log(correctPerson)

		
	})
})










