//let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando.

//prompt es cuando el usuario desea ingresar un valor antes de entrar en una página, o cuando quieres que el usuario ingrese alguna información, como su nombre antes de acceder a otra página.

//IF = SI y ELSE IF = SINO SI.

// aler muestra venta cuando inicia a un páginaalert("Hola, si entras te robo todo.")


//Variable, es un espacio que nosotros guardaos en memoria, guardando datos (pueden ser numeros, letras, etc.)

//recipiente = "papel"; alert(recipiente)

//tipos de datos... aclaración todo lo que va entre comillas son cadena de texto
//String = "cadena de texto"
//Number = 19
//Boolean = false

//casos especiales de Datos = Ubdefined, null, nan;

//var, let () , const (no pueden cambiar su valor)
const quizData = [
    {
      question: "¿Cuál era el instrumento musical que tocaba David?",
      a: "Bateria.",
      b: "Flauta.",
      c: "Guitarra.",
      d: "Arpa.",
      correct: "d",
    },
    {
      question: "Sara, la esposa de Abraham, tuvo un hijo a los...",
      a: "25 años.",
      b: "90 años.",
      c: "40 años.",
      d: "95 años.",
      correct: "b",
    },
    {
      question: "¿Dónde pusieron a Jesús cuando nació?",
      a: "En un pesebre.",
      b: "En una cama.",
      c: "En un árbol.",
      d: "En un burro.",
      correct: "a",
    },
    {
      question: "¿Con cuál semilla comparó Jesús al reino de Dios?",
      a: "Con el grano de maíz.",
      b: "Con el grano de mostaza.",
      c: "Con la semilla de la uva.",
      d: "Ninguna respuesta es correcta.",
      correct: "b",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const answerElements = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitButton = document.getElementById("submit");
  
  let currentQuiz = 0;
  let score = 0;
  
  const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };
  
  const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  };
  
  loadQuiz();
  
  submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === quizData[currentQuiz].correct) score++;
      currentQuiz++;
      if (currentQuiz < quizData.length) loadQuiz();
      else {
        quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">¡Jugar de nuevo!</button>
          ` // location.reload() won't work in CodePen for security reasons;
      }
    }
  });