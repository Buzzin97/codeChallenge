const mainForm = document.querySelector("#mainForm")
const inputNumber = document.querySelector("#inputNumber");
const outputNumber = document.querySelector("#outputNumber");

function handleInputNumber() {
    const input = inputNumber.value;
    chooseInput.setAttribute("max", input);


function handleSubmit(event) {
    event.preventDefault();
    const input = inputNumber.value;
    const choose = chooseInput.value;
    const random = Math.floor(Math.random() * input * 1);
    paintResult(choose, random)
}   
    mainForm.addEventListener("input", handleInputNumber);
    chooseForm.addEventListener("submit" , handleSubmit);


    if (parseInt(choose > random)) {
        piantRes.innerText =`you chose: ${choose} the machine chose`
    }