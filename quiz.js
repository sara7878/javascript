const Quiz = {
  QuizName: "JavaScript",
  QuizTime: 30,
  TotalDegree: 100,
  Questions: [
    {
      Header: "What is 2*5 ?",
      Answers: ["2", "5", "10", "15"],
      CorrectAnswer: "10",
      Degree: 10,
    },
    {
      Header: "What is 2*3 ?",
      Answers: ["3", "6", "12", "15"],
      CorrectAnswer: "6",
      Degree: 10,
    },
    {
      Header: "What is 2+5 ?",
      Answers: ["2", "5", "7", "10"],
      CorrectAnswer: "7",
      Degree: 10,
    },
    {
      Header: "What is 5*5 ?",
      Answers: ["25", "20", "10", "15"],
      CorrectAnswer: "25",
      Degree: 10,
    },
    {
      Header: "What is 3*5 ?",
      Answers: ["3", "5", "8", "15"],
      CorrectAnswer: "15",
      Degree: 10,
    },
  ],
};

const quizQuestions = document.getElementsByClassName("div3")[0];
let question = document.getElementById("question");
let choices = document.getElementById("choices");
let j = 0;
function displayQuestion(qNumber) {
    question.innerHTML = `<h3> 
    <label for="q${qNumber}" >${Quiz.Questions[qNumber-1].Header}</label>
     </h3>`;
  choices.innerHTML = `
    <input type="radio" name="q${qNumber}" id="q${qNumber},ch0" value="${Quiz.Questions[qNumber-1].Answers[0]}">
    <label for="q${qNumber},ch0" >${Quiz.Questions[qNumber-1].Answers[0]}</label><br>
    <input type="radio" name="q${qNumber}" id="q${qNumber},ch1" value="${Quiz.Questions[qNumber-1].Answers[1]}">
    <label for="q${qNumber},ch1" >${Quiz.Questions[qNumber-1].Answers[1]}</label><br>
    <input type="radio" name="q${qNumber}" id="q${qNumber},ch2" value="${Quiz.Questions[qNumber-1].Answers[2]}">
    <label for="q${qNumber},ch2" >${Quiz.Questions[qNumber-1].Answers[2]}</label><br>
    <input type="radio" name="q${qNumber}" id="q${qNumber},ch3" value="${Quiz.Questions[qNumber-1].Answers[3]}">
    <label for="q${qNumber},ch3" >${Quiz.Questions[qNumber-1].Answers[3]}</label><br>`;
}
displayQuestion(5);
