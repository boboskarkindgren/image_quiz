const body = document.querySelector('body');
const header = document.querySelector('#header');
const highscore = document.querySelector('#highscore');
const levels = document.querySelector('#levels');
const img = document.querySelector('#images');
const alt = document.querySelector('#alternatives');

const btn1 = document.querySelector('#btn-1');

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

shuffleArray(shuffledStudents);

console.log(students);
console.log(shuffledStudents);













