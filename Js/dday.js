const remainTime = document.querySelector("#remain-time");

function difDay() {
    const chisTime = new Date("2022-12-25");
    const current = new Date();
    const diff = chisTime - current;
    
    const diffDay = Math.floor(diff / (1000*60*60*24));
    const diffHour = String(Math.floor(diff / (1000*60*60) % 24)).padStart(2,"0");
    const diffMin = String(Math.floor(diff / (1000*60) % 60)).padStart(2,"0");
    const diffSec = String(Math.floor(diff / 1000 % 60)).padStart(2,"0");

    remainTime.innerText = `${diffDay}일 ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
}

difDay();
setInterval(difDay, 1000);

