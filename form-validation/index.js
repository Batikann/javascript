


function showCard2() {
  let inpUsername = document.getElementById("userNamee").value;
  let pointNumber = document.getElementById("pointt").value;
  console.log(inpUsername);
  console.log(pointNumber);
  if (inpUsername == "" && pointNumber == "") {
    alert("Boş Bilgi Bırakmayınız!!");
  } else {
    event.preventDefault();
    document.getElementById("username-text").innerHTML=inpUsername;
    document.getElementById("point-text").innerHTML=pointNumber;
    document.getElementById("test").classList.remove("wrapper1");
  }
}
