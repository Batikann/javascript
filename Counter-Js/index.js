

let total=0;

function decrease() {
    total +=1;
    document.querySelector("#counterValue").innerHTML=total;
}

function reset() {
    total=0;
    document.querySelector("#counterValue").innerHTML=total;
}

function increase() {
    total -=1;
    document.querySelector("#counterValue").innerHTML=total;
    if (total <0) {
        total=0;
        document.querySelector("#counterValue").innerHTML=total;
    }
}
