const maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


function calculateAkanName(event) {
    event.preventDefault(); 
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    
    const akanName = getAkanName(day, month, year, gender);

    
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <div class="result-box">
            <p>Your Akan Name is: <strong>${akanName}</strong></p>
        </div>
    `;
}

function getAkanName(day, month, year, gender) {
    
    const names = gender === "male" 
        ? ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
        : ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    const dayOfWeek = new Date(`${year}-${month}-${day}`).getDay();
    return names[dayOfWeek];
}




function calculateDayOfWeek(day, month, year) {
    
    const CC = Math.floor(year / 100); 
    const YY = year % 100; 

    
    const dayOfWeek = Math.floor(
        (((CC / 4)+(1) )- (2 * CC) - 1 + (5 * YY / 4) + (26 * (month + 1) / 10) + day) % 7
    );

    
    return (dayOfWeek + 7) % 7; 
}


const day = 15;
const month = 6; 
const year = 1995;

const dayOfWeek = calculateDayOfWeek(day, month, year);
console.log(dayOfWeek);






function getAkanName(day, month, year, gender) {
    const dayOfWeek = calculateDayOfWeek(day, month, year);
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    if (gender === "male") {
        return maleNames[dayOfWeek];
    } else {
        return femaleNames[dayOfWeek];
    }
}


const akanName = getAkanName(15, 6, 1995, "male");
console.log(akanName);



function showResult(message, type) {
    const resultDiv = document,
    getElementById = ( 'result' );
    resultDiv.textContent = message;
    resultDiv.className = 'result ${type}'; 
}