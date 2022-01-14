const Quiz = {
  QuizName: "JavaScript Quiz",
  QuizTime: 30,
  TotalDegree: 100,
  Questions: [
    {
      Header: "1. What is 2*5 ?",
      Answers: ["2", "5", "10", "15"],
      CorrectAnswer: "10",
      Degree: 10,
    },
    {
      Header: "2. What is 2*3 ?",
      Answers: ["3", "6", "12", "15"],
      CorrectAnswer: "6",
      Degree: 10,
    },
    {
      Header: "3. What is 2+5 ?",
      Answers: ["2", "5", "7", "10"],
      CorrectAnswer: "7",
      Degree: 10,
    },
    {
      Header: "4. What is 5*5 ?",
      Answers: ["25", "20", "10", "15"],
      CorrectAnswer: "25",
      Degree: 10,
    },
    {
      Header: "5. What is 3*5 ?",
      Answers: ["3", "5", "8", "15"],
      CorrectAnswer: "15",
      Degree: 10,
    },
    {
      Header: "6. What is 6*5 ?",
      Answers: ["6", "5", "30", "11"],
      CorrectAnswer: "30",
      Degree: 10,
    },
    {
      Header: "7. What is 3*4 ?",
      Answers: ["3", "4", "7", "12"],
      CorrectAnswer: "12",
      Degree: 10,
    },
    {
      Header: "8. What is 3/3 ?",
      Answers: ["3", "1", "6", "0"],
      CorrectAnswer: "1",
      Degree: 10,
    },
    {
      Header: "9. What is 3-2 ?",
      Answers: ["3", "2", "1", "None of the above"],
      CorrectAnswer: "1",
      Degree: 10,
    },
    {
      Header: "10. What is 3-5 ?",
      Answers: ["3", "5", "2", "-2"],
      CorrectAnswer: "-2",
      Degree: 10,
    },
  ],
};

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("btn");

startBtn.addEventListener("click", ()=>{
    displayQuestion(1);
    startBtn.style.display="none";
    nextBtn.setAttribute("value","1"); 
    nextBtn.style.display="block";
});

nextBtn.addEventListener("click", ()=>{
    let value=nextBtn.getAttribute("value");
    value=parseInt(value);
    // console.log(`value: ${value}`);
    if(value<9){
        //console.log(typeof value);
        nextBtn.setAttribute("value",`${value+1}`);
        displayQuestion(value+1);
       
    }else{
        displayQuestion(10);
        nextBtn.innerHTML="Finish";
        
    }
    
});

const quizQuestions = document.getElementsByClassName("div3")[0];
document.getElementById("qName").innerHTML=Quiz.QuizName;
let question = document.getElementById("question");
let choices = document.getElementById("choices");

function displayQuestion(qNumber) {

    question.innerHTML = `<h3> 
        <label for="q${qNumber}" > ${Quiz.Questions[qNumber-1].Header} </label>
        </h3>`;
    choices.innerHTML = 
        `<input type="radio" name="q${qNumber}" id="q${qNumber},ch0" value="${Quiz.Questions[qNumber-1].Answers[0]}">
        <label for="q${qNumber},ch0" >${Quiz.Questions[qNumber-1].Answers[0]}</label><br>
        <input type="radio" name="q${qNumber}" id="q${qNumber},ch1" value="${Quiz.Questions[qNumber-1].Answers[1]}">
        <label for="q${qNumber},ch1" >${Quiz.Questions[qNumber-1].Answers[1]}</label><br>
        <input type="radio" name="q${qNumber}" id="q${qNumber},ch2" value="${Quiz.Questions[qNumber-1].Answers[2]}">
        <label for="q${qNumber},ch2" >${Quiz.Questions[qNumber-1].Answers[2]}</label><br>
        <input type="radio" name="q${qNumber}" id="q${qNumber},ch3" value="${Quiz.Questions[qNumber-1].Answers[3]}">
        <label for="q${qNumber},ch3" >${Quiz.Questions[qNumber-1].Answers[3]}</label><br>`;  

}

