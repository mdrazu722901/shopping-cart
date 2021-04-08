const plusButton = document.getElementById("plusBtn");
plusButton.addEventListener("click", function() {
        productPrice(1);

    })
    // =================================MobilePriceWork==============================================//
const minusButton = document.getElementById("minusBtn");
minusButton.addEventListener("click", function() {

    productPrice(-1);

})

function productPrice(addProduct) {
    const inputValue = document.getElementById("InputValue").value;
    const inputNumber = parseInt(inputValue);

    const addValue = inputNumber + addProduct;
    document.getElementById("InputValue").value = addValue;

    const mobilePrice = document.getElementById("mobilePrice").innerText;
    const mobilePriceNumber = parseFloat(mobilePrice);
    const totalPrice = addValue * 1219;
    document.getElementById("mobilePrice").innerText = totalPrice;

}

// ===============================================CasePriceWork=========================================//