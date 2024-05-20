document.getElementById('calculateButton').addEventListener('click', calculateSalary);
        
function calculateSalary() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;
    let dob = document.getElementById('dob').value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let greetingType = document.getElementById('greetingType').value;
    let subjects = Array.from(document.querySelectorAll('input[name="subjects"]:checked')).map(subject => subject.value);
    let working = document.getElementById('workingCheckbox').checked;
    let hours = document.getElementById('hours').value;
    let rate = document.getElementById('rate').value;

    // Validate input fields
    if (!firstName || !lastName || !age || !dob || !gender || !greetingType || subjects.length === 0) {
        document.getElementById('output').innerHTML = "All fields are necessary.";
        return;
    }

    // Check for positive/negative numbers and apply border color
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.style.borderColor = parseFloat(input.value) >= 0 ? 'green' : 'red';
    });

    // Check if the user was born on a leap year
    let dobYear = new Date(dob).getFullYear();
    let isLeapYear = (dobYear % 4 === 0 && dobYear % 100 !== 0) || (dobYear % 400 === 0);
    document.getElementById('dob').style.backgroundColor = isLeapYear ? 'lightgreen' : 'lightcoral';

    // Display output
    let greeting = `Hello Dear ${greetingType} ${firstName} ${lastName},<br>We hope you're doing well; here's your salary after deduction. R......<br>Thank you`;
    document.getElementById('output').innerHTML = greeting;

    // Save data to local storage
    let userData = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        dob: dob,
        gender: gender.value,
        greetingType: greetingType,
        subjects: subjects,
        working: working,
        hours: working ? hours : "",
        rate: working ? rate : ""
    };
    localStorage.setItem('userData', JSON.stringify(userData));
}

// Show/hide working hours div
document.getElementById('workingCheckbox').addEventListener('change', function() {
    document.getElementById('workingHours').style.display = this.checked ? 'block' : 'none';
});