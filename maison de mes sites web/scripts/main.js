let myImage = document.querySelector("img");

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "image/livre-led.jpg") {
    myImage.setAttribute("src", "image/livre2.jpg");
  } else {
    myImage.setAttribute("src", "image/livre-led.jpg");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "bienvenu à :A ma bibliothèque, " + myName;
  }

  if (!localStorage.getItem("nom")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("nom");
    myHeading.textContent = "Ma bibliothèque, " + storedName;
  }

  myButton.addEventListener("click", function () {
    setUserName();
  });