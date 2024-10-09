import React, { useState } from "react";

const questionsData = [
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

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer === questionsData[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedAnswer("");

    if (currentQuestion + 1 < questionsData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="container">
      {!showResult ? (
        <div className="quiz">
          <h2>{questionsData[currentQuestion].question}</h2>
          <div className="options">
            {questionsData[currentQuestion].options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={handleAnswerChange}
                />
                {option}
              </label>
            ))}
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div className="result">
          <h2>Quiz Result</h2>
          <p>Score: {score} out of {questionsData.length}</p>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
