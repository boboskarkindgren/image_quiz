const body = document.querySelector("body");
const header = document.querySelector("#header");

const highscore = document.querySelector("#highscore");
const alt = document.querySelector("#alternatives");
const nextBtn = document.querySelector("#next");
const results = document.querySelector("#results");
//level buttons selectors
const levels = document.querySelector("#levels"); // container for level buttons
const btnLevel1 = document.querySelector("#level-1");
const btnLevel2 = document.querySelector("#level-2");
const btnLevel3 = document.querySelector("#level-3");

// images and alternatives buttons selectors
const img = document.querySelector("#images");
const alt1 = document.querySelector("#alt-1");
const alt2 = document.querySelector("#alt-2");
const alt3 = document.querySelector("#alt-3");
const alt4 = document.querySelector("#alt-4");

// new game button
const startNewGameBtn = document.querySelector("#new-game");

//Nödvändiga variabler
let number = 0;
let correctGuesses = 0;
let tries = 0;
let wrongGuesses = 0;
let fails = [];

//copy the array
const shuffledStudents = [...students];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

// Get a random item in array between 0-array.length (10 ,20 eller 41)
const getRandomItem = (max) => {
  return Math.floor(Math.random() * max); //max = array length
};

// change text on the alternatives from the made array in this case, options
const altText = (array) => {
  alt1.innerText = array[0];
  alt2.innerText = array[1];
  alt3.innerText = array[2];
  alt4.innerText = array[3];
};

// function to disable alt buttons
const closeAltBtn = () => {
  alt1.setAttribute("disabled", "disabled");
  alt2.setAttribute("disabled", "disabled");
  alt3.setAttribute("disabled", "disabled");
  alt4.setAttribute("disabled", "disabled");
};

//function to enable alt buttons
const openAltBtn = () => {
  alt1.removeAttribute("disabled", "disabled");
  alt2.removeAttribute("disabled", "disabled");
  alt3.removeAttribute("disabled", "disabled");
  alt4.removeAttribute("disabled", "disabled");
};

// function to disable levelBtn
const closeLevelsBtn = () => {
  btnLevel1.setAttribute("disabled", "disabled");
  btnLevel2.setAttribute("disabled", "disabled");
  btnLevel3.setAttribute("disabled", "disabled");
};

// function to enable levelBtn
const openLevelsBtn = () => {
  btnLevel1.removeAttribute("disabled", "disabled");
  btnLevel2.removeAttribute("disabled", "disabled");
  btnLevel3.removeAttribute("disabled", "disabled");
};

const level1 = shuffledStudents.slice(0, 10);
const level2 = shuffledStudents.slice(0, 20);
const level3 = shuffledStudents;

// Funktion för att rendera svarsalternativ och bild
const createAlternatives = (levelNbr) => {
  alt.classList.remove("hide"); // visar alternativen när knappen trycks
  let correctPerson = levelNbr[`${number}`];
  console.log("correct person", correctPerson);
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

  altText(options); // kallar på denna funktion för att läga till text i de olika alternativen. Se altText funktion
};

// Funktion för koden till alt.addEventListener dvs mina alternativ knappar med svar
const renderResult = (levelNbr) => {
  const cheat = document.querySelector("#cheat");
  cheat.innerText = tries;
  if (tries === levelNbr.length) {
    nextBtn.setAttribute("disabled", "disabled"); ////////////////////////////////////////////
    if (correctGuesses >= levelNbr.length / 2) {
      results.classList.add("alert", "alert-success");
    } else {
      results.classList.add("alert", "alert-danger");
    }
    results.classList.remove("hide");

    fails = fails.map((fail) => {
      return `<figure class="figure">
			<figcaption class="figure-caption">${fail.name}</figcaption>
			<img src="${fail.image}" class="figure-img img-fluid rounded" alt="...">
		  	</figure>`;
    });
    results.innerHTML = `<div>You got ${correctGuesses} correct guesses out of ${tries} questions.</div>
		<div><span>You failed at these:</span></div><div class="mt-4">${fails.join(
      ""
    )}</div> `;
  }
};

// Funktion för koden till min nextBtn.addEventListener, dvs knappen "NEXT"
const nxtBtnCode = (levelNbr) => {
  openAltBtn();
  const allBtnAlt = document.querySelectorAll("#alternatives button");
  allBtnAlt.forEach((element) => {
    element.classList.add("btn-warning");
    element.classList.remove("btn-danger", "btn-success");
  });

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
};

// FUNKTION FÖR ALLA LEVELS
const levelFunc = (arr, nbr, levelNbr) => {
  levelNbr.addEventListener("click", () => {
    nextBtn.setAttribute("disabled", "disabled"); ////////////////////////////////////
    closeLevelsBtn();
    shuffleArray(shuffledStudents);
    arr = shuffledStudents.slice(0, nbr);
    correctPerson = arr[`${number}`];
    //shuffleArray(level1); //
    createAlternatives(arr);

    alt.addEventListener("click", (e) => {
      nextBtn.removeAttribute("disabled", "disabled"); //////////////////////////////////
      //checking guess
      if (e.target.tagName === "BUTTON") {
        closeAltBtn();
        console.log(e.target.innerText);
        if (e.target.innerText == correctPerson.name) {
          console.log("correct");
          e.target.classList.add("btn-success");
          e.target.classList.remove("btn-warning");
          tries++; //
          correctGuesses++; //
          highscore.innerText = `Highscore: ${correctGuesses}`; //
        } else {
          console.log("wrong");
          e.target.classList.add("btn-danger");
          e.target.classList.remove("btn-warning");
          tries++;
          wrongGuesses++;
          fails.push(correctPerson);
          console.log(fails);
        }

        renderResult(arr);
      }
    });
  });

  nextBtn.addEventListener("click", (e) => {
    nextBtn.setAttribute("disabled", "disabled");
    nxtBtnCode(arr);
  });
};

// function to start new game
const startNewGame = () => {
  startNewGameBtn.addEventListener("click", () => {
    number = 0;
    correctGuesses = 0;
    tries = 0;
    wrongGuesses = 0;
    cheat.innerText = tries;
    openLevelsBtn();
    openAltBtn();
    img.src = "/assets/images/vem_dar.jpg";
    alt1.setAttribute("class", "btn btn-warning");
    alt2.setAttribute("class", "btn btn-warning");
    alt3.setAttribute("class", "btn btn-warning");
    alt4.setAttribute("class", "btn btn-warning");
    alt.classList.add("hide");
    results.classList.add("hide");
    results.classList.remove("d-flex");
  });
};

startNewGame();

// LEVEL 1
levelFunc(level1, 10, btnLevel1);

// LEVEL 2
levelFunc(level2, 20, btnLevel2);

// LEVEL 3

levelFunc(level3, 41, btnLevel3);
