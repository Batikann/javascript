const form = document.getElementById("form-group");
let inputDOM = document.getElementById("inputt");
let buttonDOM = document.querySelector("#liveToastBtn");
let successAlertDOM = document.querySelector("#successToast");
let dangerAlertDOM = document.querySelector("#dangerToast");

let todoListDOM = document.querySelector(".list-group");
let todoListDOMItem = document.querySelector(".list-group-item");

buttonDOM.addEventListener("click", addNewElement);
todoListDOM.addEventListener("click", Check);
//todoListitemDOM.addEventListener("click",Checked);

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function addNewElement() {
  if (!inputDOM.value.trim()) {
    ToastAlertDanger();
  } else {
    ToastAlertSuccess();
    let ulDOM = document.querySelector(".list-group");
    let liDOM = document.createElement("li");
    liDOM.innerHTML = inputDOM.value;
    let btnDOM = document.createElement("button");
    btnDOM.classList.add("btn-close");
    liDOM.classList.add("list-group-item");
    ulDOM.append(liDOM);
    liDOM.append(btnDOM);
    inputDOM.value = "";
  }
}

function Check(e) {
  const item = e.target;
  //? If click remove button -> remove li element
  if (item.classList[0] == "btn-close") {
    const el = item.parentElement;
    //DeleteLocalStorage(el.innerText) //* Fonksiyona silmek istediğimiz li elemanının text değerini gönderdik.
    el.classList.add("animation");
    el.classList.remove("list-group-item");
    el.addEventListener("transitionend", function () {
      el.remove();
    });
  }
  //? If click li element -> toggle checked class -- toggle ile belirttiğimiz class elementte varsa siler, eğer yoksa ekler --
  else {
    item.classList.toggle("checked");
  }
}

function clearAll() {
  let listItems = document.querySelectorAll(".list-group-item");
  listItems.forEach((p) => {
    p.classList.add("animation");
  });
}

function markAll() {
  let listItems = document.querySelectorAll(".list-group-item");
  listItems.forEach((p) => {
    p.classList.add("checked");
  });
}

function checked() {
  todoListitemDOM.classList.add("checked");
  if (todoListDOM.classList.includes("checked")) {
    todoListDOM.classList.toggle("checked");
  }
}

function ToastAlertSuccess() {
  let successToast = new bootstrap.Toast(successAlertDOM, alertOptions);
  successToast.show();
}

//* Danger Alerts
function ToastAlertDanger() {
  let dangerToast = new bootstrap.Toast(dangerAlertDOM, alertOptions);
  dangerToast.show();
}

let alertOptions = {
  animation: true,
  delay: 1000,
};
