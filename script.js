function productPrice(PhoneIncrease) {

    const inputValue = document.getElementById("InputValue").value;
    const inputNumber = parseInt(inputValue);
    let newInput = inputNumber;
    if (PhoneIncrease == true) {
        newInput = inputNumber + 1;
    }
    if (PhoneIncrease == false && newInput > 0) {
        newInput = inputNumber - 1;
    }
    document.getElementById("InputValue").value = newInput;
    const totalPrice = newInput * 1219;
    document.getElementById("mobilePrice").innerText = totalPrice;
    subtotalAmount();

};
// // ===============================================CasePriceWork=========================================//

function caseInputPrice(addInputNumber) {
    const caseInput = document.getElementById("case-input").value;
    const caseInputNumber = parseInt(caseInput);

    let newCase = caseInputNumber;
    if (addInputNumber == true) {
        newCase = caseInputNumber + 1;
    }
    if (addInputNumber == false && newCase > 0) {
        newCase = caseInputNumber - 1;
    }
    document.getElementById("case-input").value = newCase;

    const newPrice = newCase * 59;

    document.getElementById("casePrice").innerText = newPrice;
    subtotalAmount();
};


function subtotalAmount() {
    const phoneInput = getInputValue("InputValue")
    const caseInput = getInputValue("case-input");

    const subtotal = phoneInput * 1219 + caseInput * 59;
    document.getElementById("subtotalValue").innerText = '$' + subtotal;

}

function getInputValue(product) {
    const productValue = document.getElementById(product).value;
    const productNumber = parseInt(productValue);
    return productNumber;
}