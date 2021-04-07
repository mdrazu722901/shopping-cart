const plusButton = document.getElementById("plusBtn");
plusButton.addEventListener("click", function() {
    setInputValue(1);


})

const minusButton = document.getElementById("minusBtn");
minusButton.addEventListener("click", function() {
    // setInputValue(-1);
})

function setInputValue(add) {
    const inputValue = document.getElementById("InputValue").value;
    const inputNumber = parseFloat(inputValue);
    const addValue = inputNumber + add;
    document.getElementById("InputValue").value = addValue;

    const mobilePrice = document.getElementById("mobilePrice").innerText;
    const mobilePriceNumber = parseFloat(mobilePrice);
    const totalPrice = mobilePriceNumber * addValue;
    document.getElementById("mobilePrice").innerText = totalPrice;
}