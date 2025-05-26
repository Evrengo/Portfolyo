const quizData = [
  {
    question: "JavaScript'te değişken tanımlamak için kullanılan anahtar kelime hangisidir?",
    options: ["var", "let", "const", "hepsi"],
    correct: 3
  },
  {
    question: "Aşağıdakilerden hangisi JavaScript yorum satırı değildir?",
    options: ["// yorum", "/* yorum */", "# yorum", "<!-- yorum -->"],
    correct: 2
  },
  {
    question: "JavaScript'te bir fonksiyon nasıl tanımlanır?",
    options: [
      "function myFunc() {}",
      "func myFunc() {}",
      "define myFunc() {}",
      "function: myFunc() {}"
    ],
    correct: 0
  },
  {
    question: "Aşağıdaki döngülerden hangisi öncelikle koşulu kontrol eder?",
    options: ["for", "while", "do...while", "hepsi"],
    correct: 1
  },
  {
    question: "JavaScript'te 'null' değeri neyi temsil eder?",
    options: [
      "Tanımsız değişken",
      "Boş nesne referansı",
      "Sıfır",
      "Hata durumu"
    ],
    correct: 1
  }
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

let currentIndex = 0;
let selectedOption = null;
let score = 0;

function loadQuestion() {
  const currentQuestion = quizData[currentIndex];
  questionEl.textContent = currentQuestion.question;

  optionsEl.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.dataset.index = index;
    li.addEventListener("click", () => selectOption(li));
    optionsEl.appendChild(li);
  });

  nextBtn.disabled = true;
  selectedOption = null;
}

function selectOption(li) {
  if(selectedOption) {
    selectedOption.classList.remove("selected");
  }
  selectedOption = li;
  selectedOption.classList.add("selected");
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  if(selectedOption) {
    const answer = Number(selectedOption.dataset.index);
    if(answer === quizData[currentIndex].correct) {
      score++;
    }
    currentIndex++;
    if(currentIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
});

function showResult() {
  quizContainer = document.getElementById("quiz-container");
  quizContainer.style.display = "none";
  resultEl.classList.remove("hidden");
  resultEl.textContent = `Test tamamlandı! Doğru sayınız: ${score} / ${quizData.length}`;
}

loadQuestion();