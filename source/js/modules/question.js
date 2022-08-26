// Скрытие - открытие элементов в разделе "вопрос-ответ"
const question = () => {

  const questionList = document.querySelector(".question__list");
  const questions = questionList.querySelectorAll(".question__item");

  if (questionList && questions) {
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const questionTitle = question.querySelector(".question__subtitle");
      const questionBtn = question.querySelector(".question__btn");

      questionTitle.addEventListener("click", (e) => {
        for (let index = 0; index < questions.length; index++) {
          const element = questions[index];
          if (index === i) {
            continue;
          }
          if (element.classList.contains("question__item_active")) {
            element.classList.remove("question__item_active");
          }
        }

        question.classList.toggle("question__item_active");
      })

      questionBtn.addEventListener("click", (e) => {
        for (let index = 0; index < questions.length; index++) {
          const element = questions[index];
          if (index === i) {
            continue;
          }
          if (element.classList.contains("question__item_active")) {
            element.classList.remove("question__item_active");
          }
        }

        question.classList.toggle("question__item_active");
      })
    }
  }


}

export default question;