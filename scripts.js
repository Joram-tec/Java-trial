const maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function calculateAkanName(event) {
    event.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    if (!day || !month || !year || !gender || isNaN(day) || isNaN(month) || isNaN(year)) {
        showResult("Please fill in all fields with valid values.", "error");
        return;
    }


    const akanName = getAkanName(day, month, year, gender);
    showResult(`Your Akan Name is: <strong>${akanName}</strong>`, "success");
}

function calculateDayOfWeek(day, month, year) {
    if (month === 1 || month === 2) {
        month += 12;
        year -= 1;
    }

    const CC = Math.floor(year / 100); 
    const YY = year % 100; 
        const dayOfWeek = Math.floor(
            (day + Math.floor(13 * (month + 1) / 5) + YY + Math.floor(YY / 4) + Math.floor(CC / 4) - 2 * CC) % 7 - 1
        );
    return (dayOfWeek + 7) % 7; 
}

function getAkanName(day, month, year, gender) {
    const dayOfWeek = calculateDayOfWeek(day, month, year);
    if (gender === "male") {
        return maleName[dayOfWeek];
    } else {
        return femaleName[dayOfWeek];
    }
}

function showResult(message, type) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = message;
    resultDiv.className = `result ${type}`; 
}
document.getElementById("akanForm").addEventListener("submit", calculateAkanName);
