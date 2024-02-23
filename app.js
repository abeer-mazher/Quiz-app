const questions = [
    {
        question :"What is the largest mammal in the world?",
        options: ["Elephant","Giraffe","Gorilla","Blue Whale"],
        correctAnswer: "Blue Whale",
    },
    {
        question:"In which year did the Titanic sink?",
        options: ["1905","1912","1920","1931"],
        correctAnswer: "1912",
    },
    {
        question:"What is the capital city of Canada?",
        options: ["Toronto","Vancouver","Ottawa","Montreal"],
        correctAnswer: "Ottawa",
    },
    {
        question:"Which planet is known as the 'Blue Planet'?",
        options: ["Earth","Uranus","Mars","Neptune"],
        correctAnswer: "Earth",
    },
    {
        question:"Who was the first woman to win a Nobel Prize?",
        options: ["Marie Curie","Rosalind Franklin","Amelia Earhart","Jane Goodall"],
        correctAnswer: "Marie Curie",
    },
    {
        question:"What is the largest organ in the human body?",
        options: ["Heart","Liver","Skin","Brain"],
        correctAnswer: "Skin",
    },
    {
        question:"Which famous scientist is known for his theory of evolution by natural selection?",
        options: ["Isaac Newton","Charles Darwin","Gregor Mendel","Louis Pasteur"],
        correctAnswer: "Charles Darwin",
    },
];

let questCount = document.getElementById("questCount");
let currenrCnt = document.getElementById("currenrCnt");
let totalCount = document.getElementById("totalCount");
let question = document.getElementById("question");
let opt = document.getElementById("opt");
let nextBtn = document.getElementById("nextBtn");
let againBtn = document.getElementById("againBtn");
let resultContain = document.getElementById("resultContain");



let index = 0;
let score = 0;

function showQuestion(){
    if(index < questions.length){
        currenrCnt.innerHTML = index + 1;
        totalCount.innerHTML = questions.length;
        question.innerHTML = questions[index].question;
        let corrtAns = questions[index].correctAnswer;
        nextBtn.style.display = "inline-block";
        againBtn.style.display = "none";
        questCount.style.display = "block";
        resultContain.style.display = "none";
        resultContain.innerHTML = "";
        question.style.display = "block"
    
        for(let i = 0; i < questions[index].options.length; i++){
        let userAns = questions[index].options[i];
        opt.innerHTML += `
        <div><button onclick="checkQuest('${corrtAns}','${userAns}')" >${questions[index].options[i]}</button></div>
        `
    }
    }else{
        result()
        nextBtn.style.display = "none";
        againBtn.style.display = "inline-block";
        questCount.style.display = "none"
        question.style.display = "none"
    }
    
}
showQuestion();

function checkQuest(correctValue,UserValue){
    if(correctValue == UserValue){
        opt.innerHTML = "";
        index++
        score++;
        showQuestion();
    }else{
        opt.innerHTML = "";
        index++
        score;
        showQuestion();
    }
}

function result(){
    let percentage = Math.round(score * 100 / index);
    let rigthAns = score;
    let tolAns = index;
    resultContain.style.display = "block";
    resultContain.innerHTML = `
    <p>You have got ${percentage}% <br> and ${rigthAns} out of ${tolAns} Anwsers correct.
    `
}

function NextQuest(){
    opt.innerHTML = "";
    index++
    score;
    showQuestion();

}
function starAgain(){
    opt.innerHTML = ""
    index = 0;
    score = 0;
    showQuestion();
}

