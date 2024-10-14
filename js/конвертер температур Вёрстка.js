let button = document.getElementById("conv");
let input = document.getElementById("input");
let output = document.getElementById("output");


function conv() {
    let x = Number(input.value);
    output.value = x * 9 / 5 + 32;
}

button.addEventListener("click", conv);