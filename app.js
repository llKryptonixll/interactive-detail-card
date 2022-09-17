const form = document.querySelector(".form");
const cardholderInput = document.querySelector(".cardholder-input");
const cardnumberInput = document.querySelector(".cardnumber-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
const cvcInput = document.querySelector(".cvc-input");


form.addEventListener("submit", (e) => {
    // validate inputs
    e.preventDefault();

    if(
        cardnumberInput.value.match(/[^0-9 ]/) ||
        monthInput.value.match(/^$/) ||
        yearInput.value.match(/^$/) ||
        cvcInput.value.match(/^$/) 
    )
    {
     
    }
    else{
        form.style.display = "none";
        const submitMessage = document.querySelector(".submit-message-container");
        submitMessage.style.display = "grid";   

        const continueButton = document.querySelector(".submit-message-container button");
        continueButton.addEventListener("click", () => {
            location.reload();
        });
    }
});

function eventHandler(inputValue, textContainer){
    const container = document.querySelector(textContainer);
    container.innerText = inputValue;
}

function formVisualFeedback(inputValue, errorText, regex, inputBorder){
    const errorMessage = document.querySelector(errorText);
    if(inputValue.match(regex)){
        errorMessage.style.display = "grid";
        inputBorder.style.borderColor = "hsl(0, 100%, 66%)";
    }
    else{
        errorMessage.style.display = "none";
        inputBorder.style.borderColor = "hsl(270, 3%, 87%)";
    }
}
// if the card fields are empty set placeholders
function checkContainer(field, fieldText, input){
    if(input == ""){
        const fieldParagraph = document.querySelector(field);
        fieldParagraph.innerText = fieldText;
    }
}

cardholderInput.addEventListener("input", () => {
    eventHandler(cardholderInput.value, ".card-name");
    checkContainer(".card-name", "Your Name", cardholderInput.value);
});

cardnumberInput.addEventListener("input", () => {
    eventHandler(cardnumberInput.value, ".card-number");
    formVisualFeedback(cardnumberInput.value, ".error-cardnumber-message", /[^0-9 ]/, cardnumberInput);
    checkContainer(".card-number", "Card Number", cardnumberInput.value);
});
monthInput.addEventListener("input", () => {
    eventHandler((monthInput.value), ".card-month");
    formVisualFeedback(monthInput.value, ".error-message-date", /^$/, monthInput);
    checkContainer(".card-month", "MM", monthInput.value);
});
yearInput.addEventListener("input", () => {
    eventHandler(yearInput.value, ".card-year");
    formVisualFeedback(yearInput.value, ".error-message-date", /^$/, yearInput);
    checkContainer(".card-year", "YY", yearInput.value);
});
cvcInput.addEventListener("input", () => {
    eventHandler(cvcInput.value, ".card-cvc");
    formVisualFeedback(cvcInput.value, ".error-cvc-message", /^$/, cvcInput);
    checkContainer(".card-cvc", "CVC", cvcInput.value);
});