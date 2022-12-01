## settinge image src:
img.src = students[0].image
//img.setAttribute('src', students[0].image);

## shuffle array
const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
}

shuffleArray(students);

## select specifik button
levels.addEventListener('click', e => {
    e.preventDefault();
	if (e.target === btn1) {
		alert('blaaaaaaaa')
	} 
    //alert('hej');

})

## copy to new array

const newArray = students.map(student=> {

	return student;
// hur kopierar jag hel array?
})

console.log(newArray);




## funktionstester

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