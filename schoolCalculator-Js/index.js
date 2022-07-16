document.querySelector("#button1").addEventListener("click", calculateAvarege);

document.querySelector("#btn2").addEventListener("click", tryAgain);

function calculateAvarege() {
  let valuee = document.querySelector("#textValue").value;
  console.log(valuee);
  if (valuee >= 90 && valuee <= 100) {
    document.querySelector("#body1").classList.add("d-none");
    document.querySelector("#body2").classList.remove("d-none");
    document.querySelector("#gradeNote").innerHTML = "AA";
  }
  else if (valuee >= 85 && valuee <= 89) {
    document.querySelector("#body1").classList.add("d-none");
    document.querySelector("#body2").classList.remove("d-none");
    document.querySelector("#gradeNote").innerHTML = "BA";
  }
  else if (valuee >= 80 && valuee <= 84) {
    document.querySelector("#body1").classList.add("d-none");
    document.querySelector("#body2").classList.remove("d-none");
    document.querySelector("#gradeNote").innerHTML = "BB";
  }
  else if (valuee >= 75 && valuee <= 79) {
    document.querySelector("#body1").classList.add("d-none");
    document.querySelector("#body2").classList.remove("d-none");
    document.querySelector("#gradeNote").innerHTML = "CB";
  }
  else if (valuee >= 70 && valuee <= 74) {
    document.querySelector("#body1").classList.add("d-none");
    document.querySelector("#body2").classList.remove("d-none");
    document.querySelector("#gradeNote").innerHTML = "CC";
  }
  else if (valuee >= 65 && valuee <= 69) {
    document.querySelector("#body1").classList.add("d-none");
    document.querySelector("#body2").classList.remove("d-none");
    document.querySelector("#gradeNote").innerHTML = "DC";
  }
  else if (valuee >= 60 && valuee <= 64) {
    document.querySelector("#body1").classList.add("d-none");
    document.querySelector("#body2").classList.remove("d-none");
    document.querySelector("#gradeNote").innerHTML = "DD";
  }
  else if (valuee >= 50 && valuee <= 59) {
    document.querySelector("#body1").classList.add("d-none");
    document.querySelector("#body2").classList.remove("d-none");
    document.querySelector("#gradeNote").innerHTML = "FD";
  }
  else if (valuee >= 0 && valuee <= 49) {
    document.querySelector("#body1").classList.add("d-none");
    document.querySelector("#body2").classList.remove("d-none");
    document.querySelector("#gradeNote").innerHTML = "FF";
  }
}

function tryAgain() {
  document.querySelector("#body1").classList.remove("d-none");
  document.querySelector("#body2").classList.add("d-none");
  document.querySelector("#textValue").value=0;
}
