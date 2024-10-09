const question = [
  {
    question: "What is the extension of a Python file?",
    options: ["py", "java", "cpp", "exe"],
    answer: "py",
  },
  {
    question: "What is the output of `print(type(5))`?",
    options: ["int", "float", "str", "list"],
    answer: "int",
  },
  {
    question: "What is the purpose of the `range()` function?",
    options: ["Looping", "Sorting", "Searching", "Indexing"],
    answer: "Looping",
  },
  {
    question: "What is the data type of `True` in Python?",
    options: ["int", "bool", "str", "float"],
    answer: "bool",
  },
  {
    question: "What is the use of `self` in Python classes?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Instance"],
    answer: "Instance",
  },
  {
    question: "What is the method to add an element to a list?",
    options: ["append", "extend", "insert", "push"],
    answer: "append",
  },
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("container");
const submitButton = document.getElementById("submit");
const resultDiv = document.getElementById("result");

function showQues() {
  const questions = question[currentQuestion];

  const questionList = document.createElement("div");
  questionList.classList.add("question");
  questionList.innerHTML = `
      <h2>${questions.question}</h2>
      <div class="options">
        ${questions.options.map(
          (option) => `
          <label>
            <input type="radio" name="answer" value="${option}">
            ${option}
          </label>
        `
        )}
      </div>`;

  quizContainer.innerHTML = "";
  quizContainer.appendChild(questionList);
}

function checkAnswers() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');

  if (selectedAnswer) {
    if (selectedAnswer.value === question[currentQuestion].answer) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < question.length) {
      showQues();
    } else {
      showResult();
    }
  } else {
    alert("Please select an answer.");
  }
}

function showResult() {
  submitButton.style.display = "none";
  resultDiv.innerHTML = `
      <h2>Quiz Result</h2>
      <p>score: ${score} out of ${question.length}</p>
    `;
}

showQues();
