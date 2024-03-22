function checkHealth() {
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var cholesterol = parseInt(document.getElementById('cholesterol').value);
    var bloodPressure = parseInt(document.getElementById('bloodPressure').value);
    var smoker = document.querySelector('input[name="smoker"]:checked').value;

    // Calculate risk based on health data
    var risk = 0;
    if (age >= 45 && age <= 64) {
        risk += 1;
    }
    if (gender === "male") {
        risk += 1;
    }
    if (cholesterol >= 200) {
        risk += 1;
    }
    if (bloodPressure >= 130) {
        risk += 1;
    }
    if (smoker === "yes") {
        risk += 1;
    }

    // Display result
    var resultDiv = document.getElementById('result');
    if (risk >= 3) {
        resultDiv.innerHTML = "<p>You have a high risk of heart attack. Please consult a doctor immediately.</p>";
    } else {
        resultDiv.innerHTML = "<p>You have a low to moderate risk of heart attack. Keep monitoring your health regularly.</p>";
    }
}
