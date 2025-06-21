# SYSTEM-INTERACTIVE-MESSAGES

System Interactive Messages that respond dynamically based on user input such as name and age.
This web project aims to provide an interactive experience where users input their name and age, and the system generates a personalized message based on the provided information.

## STRUCTURE OF THE PROJECT:

src: each folder is inside here except index

index.html: Main file containing the HTML structure of the page.

styles.css: Contains the visual styles for the page.

sistema_interactivo.js: JavaScript file located within the javascript folder, which handles the interactive logic to process the user's name and age.

Orientatest-logotipo.webp: Logo of the page, saved in the img folder located inside the src directory. This was done by specifying the path when using the <img> tag in the HTML.


### FEATURES

Data Entry: The user must enter their name and age in the corresponding fields.

Validation: If any of the fields are empty or if the age is not a valid number, an error message is displayed.

Dynamic Message: If the data is valid, the system generates a personalized message that changes depending on whether the age is under or over 18 years old.


#### CODE DESCRIPTION:

The data is entered through HTML, and the programming logic is handled by JavaScript.

Data Collection: When the submit button (btn-execute) is clicked, the values from the name and age fields are retrieved.

Field Validation: If any field is empty or if the age is not a valid number, an error message is displayed.

Message Generation: If the age is valid, a welcome message is generated, which varies depending on whether the user is under or over 18 years old.
The styles are simple and effective, featuring a clean, easy-to-navigate interface.

A soft color scheme is used to enhance the user experience.

There are some transition effects applied to the buttons and messages.


##### HOW TO RUN THE PROJECT:

Clone or download the files to your local machine.

Open the index.html file in your web browser.

Enter your name and age in the respective fields, then click the Submit button.

If the data is valid, you will receive a personalized message based on your age.

###### NOTES:

This project was born as a website dedicated to providing support or serving as a vocational guidance tool for people who are entering the world of programming, generating motivational messages based on the user's age.
