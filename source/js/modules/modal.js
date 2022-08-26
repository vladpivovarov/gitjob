const modal = () => {

  const modals = document.querySelectorAll(".modal");


  const modalApp = () => {

    for (let index = 0; index < modals.length; index++) {
      const modal = modals[index];
      const modalInner = modal.querySelector(".modal__inner");
      const btnsTrial = document.querySelectorAll(".modal-trial-open-js");
      const btnsMess = document.querySelectorAll(".modal-mess-open-js");
      const btnsLogin = document.querySelectorAll(".modal-login-open-js");
      const modalClose = modal.querySelector(".modal__close");

      // При клике на "крестик" скрываем модальное окно
      modalClose.addEventListener("click", () => {
        modal.classList.remove("modal_active");
      })

      // Определяем по каким кнопкам будет вызываться модальное окно
      let btns;

      if(modal.classList.contains("modal-trial")) {
        btns = btnsTrial;
      } else if(modal.classList.contains("modal-mess")) {
        btns = btnsMess;
      } else if(modal.classList.contains("modal-login")) {
        btns = btnsLogin;
      }

      // При клике на одну из кнопок отображаем модальное окно
      btns.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          modal.classList.add("modal_active");
        });
      })

      // При клике вне модального окна - скрываем его
      modal.addEventListener("click", (event) => {
        const clickedElementsTree = event.composedPath();

        if(clickedElementsTree.includes(modalInner)) {
          return;
        } else {
          modal.classList.remove("modal_active");
        }
      })
    }

  }


  const validateApp = () => {

    for (let index = 0; index < modals.length; index++) {
      const modal = modals[index];
      const phoneReg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
      const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
      const namee = modal.querySelector(".validate-name-js");
      const phone = modal.querySelector(".validate-phone-js");
      const email = modal.querySelector(".validate-email-js");

      modal.addEventListener("submit", (e) => {
        e.preventDefault();

        let nameCheck = namee.value;
        let phoneCheck = phoneReg.test(phone.value);
        let emailCheck = emailReg.test(email.value);

        namee.parentNode.classList.remove("wrong");
        phone.parentNode.classList.remove("wrong");
        email.parentNode.classList.remove("wrong");

        if (nameCheck && phoneCheck && emailCheck) {
          // Отправляем форму
          modal.submit();
        } else if (!nameCheck) {
          namee.parentNode.classList.add("wrong");
        } else if (!phoneCheck) {
          phone.parentNode.classList.add("wrong");
        } else if (!emailCheck) {
          email.parentNode.classList.add("wrong");
        }

      })
    }
  }

  modalApp();
  validateApp();
}

export default modal;