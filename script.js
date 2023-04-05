const secBtns = document.querySelectorAll(".control");
const container = document.querySelector("#container");
const allSections = document.querySelectorAll(".section");

function pageTransition() {
  for (let i = 0; i < secBtns.length; i++) {
    secBtns[i].addEventListener("click", (e) => {
      const targetingElement = e.currentTarget;
      console.log(e.currentTarget);
      const id = targetingElement.id;
      console.log(id);
      if (id) {
        secBtns.forEach((btn) => {
          btn.classList.remove("active-btn");
        });
        e.currentTarget.classList.add("active-btn");
        allSections.forEach((section) => {
          section.classList.remove("active-section");
        });
        const element = document.getElementById(id);
        element.classList.add("active-section");
      }
    });
  }

  // document.addEventListener("click", (e) => {
  //   const targetingElement = e.target;
  //   console.log(e.target);
  //   const id = targetingElement.id;
  //   console.log(id);
  //   if (id) {
  //     secBtns.forEach((btn) => {
  //       btn.classList.remove("active-btn");
  //     });
  //     e.target.classList.add("active-btn");
  //     allSections.forEach((section) => {
  //       section.classList.remove("active-section");
  //     });
  //     const element = document.getElementById(id);
  //     element.classList.add("active-section");
  //   }
  // });
  // });
}

pageTransition();

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
