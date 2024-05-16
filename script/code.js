function calculateSalary() {
    // Retrieve values from form
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;
    let dob = document.getElementById('dob').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let greetingType = document.getElementById('greetingType').value;
    let subjects = Array.from(document.querySelectorAll('input[name="subjects"]:checked')).map(subject => subject.value);
    let working = document.getElementById('workingCheckbox').checked;
    let hours = document.getElementById('hours').value;
    let rate = document.getElementById('rate').value;

    // Validate all fields are filled
    if (!firstName || !lastName || !age || !dob || !gender || !greetingType || subjects.length === 0) {
        document.getElementById('output').innerHTML = "All fields are necessary.";
        return;
    }

    // Check if working hours are provided
    if (working && (!hours || !rate)) {
        document.getElementById('output').innerHTML = "Please provide working hours and rate.";
        return;
    }

    // Add your logic to calculate salary based on tax rate here

    // Display output
    document.getElementById('output').innerHTML = `Hello Dear ${greetingType} ${firstName} ${lastName}`;
}

// Function to show/hide working hours div
document.getElementById('workingCheckbox').addEventListener('change', function() {
    document.getElementById('workingHours').style.display = this.checked ? 'block' : 'none';
});

// Function to add border color based on positive/negative number
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        this.style.borderColor = parseFloat(this.value) >= 0 ? 'green' : 'red';
    });
});

// Function to check leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

let dobInput = document.getElementById('dob');
dobInput.addEventListener('change', function() {
    let dobYear = new Date(this.value).getFullYear();
    if (isLeapYear(dobYear)) {
        this.style.backgroundColor = 'lightgreen';
    } else {
        this.style.backgroundColor = 'lightcoral';
    }
});

// Save data to local storage
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    let userData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        age: document.getElementById('age').value,
        dob: document.getElementById('dob').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        greetingType: document.getElementById('greetingType').value,
        subjects: Array.from(document.querySelectorAll('input[name="subjects"]:checked')).map(subject => subject.value),
        working: document.getElementById('workingCheckbox').checked,
        hours: document.getElementById('hours').value,
        rate: document.getElementById('rate').value
    };
    // Save to local storage
    localStorage.setItem('userData', JSON.stringify(userData));
    // Reset form
    this.reset();
    // Display success message or perform any other action
});