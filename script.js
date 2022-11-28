const body = document.querySelector('body');
const header = document.querySelector('#header');
const highscore = document.querySelector('#highscore');
const alt = document.querySelector('#alternatives');

//level buttons
const levels = document.querySelector('#levels'); // container for level buttons
const btnLevel1 = document.querySelector('#level-1');
const btnLevel2 = document.querySelector('#level-2');
const btnLevel3 = document.querySelector('#level-3');

// images and alternatives buttons
const img = document.querySelector('#images');

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

// eventlisteners for level buttons
btnLevel1.addEventListener('click', e => {
	shuffleArray(shuffledStudents);
	const level1 = shuffledStudents.slice(0, 10)
	console.log(level1);
	if 
	
})

btnLevel2.addEventListener('click', e => {
	shuffleArray(shuffledStudents);
	const level2 = shuffledStudents.slice(0, 20)
	console.log(level2);
	
})

btnLevel3.addEventListener('click', e => {
	shuffleArray(shuffledStudents);
	const level3 = shuffledStudents
	console.log(level3);
	
})











