const menu = () => {

  const header = document.querySelector(".header");
  const close = header.querySelector(".header__close");
  const linkArray = header.querySelectorAll(".nav__link");

  close.addEventListener("click", (e) => {
    e.preventDefault();
    if(header.classList.contains("header_active")) {
      header.classList.remove("header_active");
    } else {
      header.classList.add("header_active");
    }
  })

  for (let index = 0; index < linkArray.length; index++) {
    const element = linkArray[index];

    element.addEventListener("click", (e) => {
      if(header.classList.contains("header_active")) {
        header.classList.remove("header_active");
      }
    })
  }

}

export default menu