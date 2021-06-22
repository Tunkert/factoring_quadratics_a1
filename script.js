// number problems
function numberProblems() {
  for (let i = 0; i < 6; i++) {
    const problemHeading = document.querySelectorAll("h3")[i];

    problemHeading.innerHTML = `Problem #${i + 1}`;
  }
}

// create problems
function createProblems() {
	for (let i = 0; i < 6; i++) {
  	// create problem statement
		const r = Math.floor(Math.random() * 10) + 1;
		const s = Math.floor(Math.random() * 10) + 1;
		const b = r + s;
		const c = r * s;
		const problemPar = document.querySelectorAll("p")[i + 3];

		problemPar.innerHTML = `Factor x<sup>2</sup> + ${b}x + ${c}.`;
		// create problem solutions
    corSol = `(x + ${r})(x + ${s})`;
    incorSol1 = `(x - ${r})(x - ${s})`;
    incorSol2 = `(${r}x)(${s}x)`;
    incorSol3 = `(x - ${r * s} + ${r + s})`;

    // create solutions array to pass into randomization function
    solutions = [
      corSol,
      incorSol1,
      incorSol2,
      incorSol3,
    ];

    // call randomization function
    randomizeSolutions(solutions, i);
		
	}
}

//create randomization function
function randomizeSolutions(solutions, i) {
  //create solution order variable
  const solOrder = Math.floor(Math.random() * 4);

  //create list items
  sol1 = document.querySelectorAll(".row li")[4 * i];
  sol2 = document.querySelectorAll(".row li")[4 * i + 1];
  sol3 = document.querySelectorAll(".row li")[4 * i + 2];
  sol4 = document.querySelectorAll(".row li")[4 * i + 3];

  //create order of solutions
  if (solOrder === 0) {
    sol1.innerHTML = solutions[0];
    sol1.classList.add("correct");
    sol2.innerHTML = solutions[1];
    sol3.innerHTML = solutions[2];
    sol4.innerHTML = solutions[3];
  } else if (solOrder === 1) {
    sol1.innerHTML = solutions[1];
    sol2.classList.add("correct");
    sol2.innerHTML = solutions[0];
    sol3.innerHTML = solutions[2];
    sol4.innerHTML = solutions[3];
  } else if (solOrder === 2) {
    sol1.innerHTML = solutions[1];
    sol3.classList.add("correct");
    sol2.innerHTML = solutions[2];
    sol3.innerHTML = solutions[0];
    sol4.innerHTML = solutions[3];
  } else {
    sol1.innerHTML = solutions[1];
    sol4.classList.add("correct");
    sol2.innerHTML = solutions[2];
    sol3.innerHTML = solutions[3];
    sol4.innerHTML = solutions[0];
  }
}

// create event listener to see if student is correct or not
function answerListener() {
  for(let i = 0; i < 24; i++) {
    const potentialAnswer = document.querySelectorAll(".row li")[i];
    potentialAnswer.addEventListener("click", function() {

      const potAnsContainer = potentialAnswer.parentElement.parentElement;

      if (potentialAnswer.classList.contains("correct")) {
        if (!potAnsContainer.classList.contains("green")) {
          potAnsContainer.classList.add("green");
          potAnsContainer.classList.add("large-text");
          potAnsContainer.innerHTML = "&check;";
          potAnsContainer.classList.add("text-center");
          let sound = new Audio("correct.mp3");
          sound.play();
        }
      } else {
        potAnsContainer.classList.add("red");
        potAnsContainer.innerHTML = "X";
        potAnsContainer.classList.add("large-text");
        potAnsContainer.classList.add("text-center");
        let wrongSound = new Audio("wrong.mp3");
        wrongSound.play();
      }
    });

  }
}

numberProblems();
createProblems();
answerListener();
