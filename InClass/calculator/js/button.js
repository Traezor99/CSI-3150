var display = "";

document.addEventListener("click", (e) => {
    display = e.innerHTML;
    let pString = document.getElementById("display");
    pString.innerHTML += display;
});
