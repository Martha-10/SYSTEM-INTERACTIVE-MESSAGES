const btnExecute = document.getElementById("btn-execute");

btnExecute.addEventListener('click', function () {
    const name = document.getElementById("name").value;
    const ageInput = document.getElementById("age").value;
    const output = document.getElementById("output");

    // Clean the last output 
    output.textContent = "";
    output.className = "";

    try {
        // check if there is any field empty
        if (name.trim() === "" || ageInput.trim() === "") {
            throw new Error("❌ You must not leave any fields empty");
        }

        const age = parseInt(ageInput);

        // check if age is not a number 
        if (isNaN(age) || age <= 0) {
            throw new Error("❌ remenber the age is a number greater than zero");
        }
        
    // if there isn't any error, show a success message
    let message;
    if (age < 18) {
    message = `👋 Hello ${name}, you are underage. Keep learning and enjoying code!`;
    } else {
    message = `👋 Hello ${name}, you are an adult. Get ready for new opportunities in the programming world!`;
    }

        output.textContent = message;
        output.classList.add("success");

    } catch (error) {
        console.error(error.message); // Show error in console 
        output.textContent = error.message; // Show error to the 
        output.classList.add("error");
    }
});
