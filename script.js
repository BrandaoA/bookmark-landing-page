//navbar menu on tablet and phone
const menuOpen = document.getElementById("hamburger");
const menuClose = document.getElementById("close-menu");
const subMenu = document.querySelector(".nav-links");
const logo1 = document.querySelector(".logo");
const logo2 = document.querySelector(".logo-white");

menuOpen.addEventListener("click", () => {
  menuOpen.style.display = "none";
  menuClose.style.display = "unset";
  logo1.style.display = "none";
  logo2.style.display = "unset";
  subMenu.classList.add("active");
});

menuClose.addEventListener("click", () => {
  menuOpen.style.display = "unset";
  menuClose.style.display = "none";
  logo1.style.display = "unset";
  logo2.style.display = "none";
  subMenu.classList.remove("active");
});

// for the features section
const tabs = document.querySelectorAll(".btn");
const allContent =document.querySelectorAll(".tab-content");
const line = document.querySelector(".red-line")

tabs.forEach((btn,index) => {
  btn.addEventListener("click", (e) => {
    tabs.forEach(btn => {btn.classList.remove("active")});
    btn.classList.add("active");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";
    allContent.forEach(allContent => {allContent.classList.remove("active")});
    allContent[index].classList.add("active");

    let mq = window.matchMedia( "(max-width: 550px)" );
    if (mq.matches) {
      // line.style.width = e.target.offsetWidth + "px";
      line.style.top = e.target.offsetTop + "px";
    }
  })
})

//faq section 
const questions = document.querySelectorAll(".questions-body");

questions.forEach(questions => {
  questions.addEventListener("click", () => {
    questions.classList.toggle("active");
  });
});

//email verification
const emailInput = document.getElementById("email");
const ContactBtn = document.querySelector(".contact-btn");
const errorMessage = document.querySelector(".error-msg"); 

let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+)[.]([a-z]{2,4})$/;

ContactBtn.addEventListener("click", () => {
  if(regx.test(emailInput.value)){
    emailInput.style.border = "2px solid green";
    emailInput.classList.remove("active");
    errorMessage.classList.remove("active");
    alert("Good Job");
  } else {
    emailInput.classList.add("active");
    errorMessage.classList.add("active");
  }
})

