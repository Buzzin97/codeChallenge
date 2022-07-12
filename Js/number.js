// 변수 선언 html에서 태그 가져오기!
const mainForm = document.querySelector("#mainForm")
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");

function handlemainForm(event) {
    event.preventDefault();
    
    const inputNumber = document.querySelector("#inputNumber");
    const outputNumber = document.querySelector("#outputNumber");
    //입력값
    const inputNum = inputNumber.value;
    const inputNumInt = Number(inputNum);
    //추측값
    const outpuNum = outputNumber.value;    
    const outputNumInt = Number(outpuNum);   
    //랜덤 숫자 송출기 (machine chose)
    const randomNumber = Math.ceil(Math.random()* inputNum);

    if (inputNumInt === randomNumber) {
        win.innerHTML = `You chose : ${inputNumInt}. machine chose : ${randomNumber}. <br> You win !`; 
        lose.innerHTML = " "
    } else if (inputNumInt !== randomNumber) {
        lose.innerHTML = `You chose : ${inputNumInt}. the machine chose : ${randomNumber}.<br> You lose!`;
        win.innerHTML = "";
      } else if (inputNumInt > outputNumInt) {
        alert("Wrong number!");
      }
}

mainForm.addEventListener("submit", handlemainForm);