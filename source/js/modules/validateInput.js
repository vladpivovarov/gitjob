
// Валидация формы
const validate = () => {

  const answer = document.querySelector(".answer");
  const phoneReg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const namee = answer.querySelector(".validate-name-js");
  const phone = answer.querySelector(".validate-phone-js");
  const email = answer.querySelector(".validate-email-js");

  answer.addEventListener("submit", (e) => {
    e.preventDefault();

    let nameCheck = namee.value;
    let phoneCheck = phoneReg.test(phone.value);
    let emailCheck = emailReg.test(email.value);

    namee.parentNode.classList.remove("wrong");
    phone.parentNode.classList.remove("wrong");
    email.parentNode.classList.remove("wrong");

    if (nameCheck && phoneCheck && emailCheck) {
      // Отправляем форму
      answer.submit();
    } else if (!nameCheck) {
      namee.parentNode.classList.add("wrong");
    } else if (!phoneCheck) {
      phone.parentNode.classList.add("wrong");
    } else if (!emailCheck) {
      email.parentNode.classList.add("wrong");
    }

  })




}

export default validate;