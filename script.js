const body = document.querySelector('body');
const header = document.querySelector('#header');
const highscore = document.querySelector('#highscore');
const alt = document.querySelector('#alternatives');

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
// eventlisteners for level buttons
btnLevel1.addEventListener('click', e => {
	shuffleArray(shuffledStudents);
	const level1 = shuffledStudents.slice(0, 10)
	console.log(level1);
	const correctPerson = level1[0];
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
	let optionsLevel1 = [correctPerson.name];
	
	//push items into the array until 4 items exist
	while (optionsLevel1.length < 4) {
		const randomPerson = level1[getRandomItem(level1.length)].name;
		if (!optionsLevel1.includes(randomPerson)) {
			optionsLevel1.push(randomPerson);
		}
	}
	console.log(optionsLevel1); // before shuffle
	shuffleArray(optionsLevel1); //för att inte alltid få correct person på alternativ 1
	console.log(optionsLevel1); // after shuffle
	
	alt1.innerText = optionsLevel1[0];
	alt2.innerText = optionsLevel1[1];
	alt3.innerText = optionsLevel1[2];
	alt4.innerText = optionsLevel1[3];
	
	alt.addEventListener('click', e => {
		console.log(e.target.innerText);
		if (e.target.innerText == correctPerson.name) {
			console.log('correct');
		} else {
			console.log('wrong')
		}
	})
})



btnLevel2.addEventListener('click', e => {
	shuffleArray(shuffledStudents);
	const level2 = shuffledStudents.slice(0, 20)
	console.log(level2);
	const correctPerson = level2[getRandomItem(level2.length)];
	console.log(level2.length);
	console.log(correctPerson);

	img.src = correctPerson.image;
	
	let optionsLevel2 = [correctPerson.name];
	
	//push items into the array until 4 items exist
	while (optionsLevel2.length < 4) {
		const randomPerson = level2[getRandomItem(level2.length)].name;
		if (!optionsLevel2.includes(randomPerson)) {
			optionsLevel2.push(randomPerson);
		}
	}
	console.log(optionsLevel2); // before shuffle
	shuffleArray(optionsLevel2);
	console.log(optionsLevel2); // after shuffle
	
	alt1.innerText = optionsLevel2[0];
	alt2.innerText = optionsLevel2[1];
	alt3.innerText = optionsLevel2[2];
	alt4.innerText = optionsLevel2[3];

	alt.addEventListener('click', e => {
		console.log(e.target.innerText);
		if (e.target.innerText == correctPerson.name) {
			console.log('correct');
		} else {
			console.log('wrong')
		}
	})
	
	
})

btnLevel3.addEventListener('click', e => {
	shuffleArray(shuffledStudents);
	const level3 = shuffledStudents
	console.log(level3);
	const correctPerson = level3[getRandomItem(level3.length)]; 
	console.log(level3.length);
	console.log(correctPerson);

	img.src = correctPerson.image;
	
	let optionsLevel3 = [correctPerson.name];
	
	//push items into the array until 4 items exist
	while (optionsLevel3.length < 4) {
		const randomPerson = level3[getRandomItem(level3.length)].name;
		if (!optionsLevel3.includes(randomPerson)) {
			optionsLevel3.push(randomPerson);
		}
	}
	console.log(optionsLevel3); // before shuffle
	shuffleArray(optionsLevel3);
	console.log(optionsLevel3); // after shuffle
	
	alt1.innerText = optionsLevel3[0];
	alt2.innerText = optionsLevel3[1];
	alt3.innerText = optionsLevel3[2];
	alt4.innerText = optionsLevel3[3];
	
	alt.addEventListener('click', e => {
		console.log(e.target.innerText);
		if (e.target.innerText == correctPerson.name) {
			console.log('correct');
		} else {
			console.log('wrong')
		}
	})
	
})

// Get a random item in array between 0-array.length
const getRandomItem = (max) => {
	
	return Math.floor( Math.random() * max );
} 









