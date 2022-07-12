
const mainNumber = document.querySelector("#mainForm");
const inputNumber = document.querySelector("#inpuNumber");
const outputNumber = document.querySelector("#outputNumber");
const eventNumber = document.querySelector("#eventNumber");

function handlerinputNumber() {
    const input = inputNumber.value;
    outputNumber.setAttribute("max" , input);
}

mainForm.addEventListner("input", handlerinputNumber);