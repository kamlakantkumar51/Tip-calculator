document.getElementById("calculateBtn").addEventListener("click", function () {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const serviceRating = parseInt(document.getElementById("serviceRating").value);
    const splitCount = parseInt(document.getElementById("splitCount").value);
    const mealType = document.getElementById("mealType").value;

    
    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Please enter a valid Bill Amount!");
        return;
    }

    if (isNaN(splitCount) || splitCount <= 0) {
        alert("Please enter a valid number of people!");
        return;
    }

    if (!mealType) {
        alert("Please select a Meal Type!");
        return;
    }
    let tipPercentage = 0;
    switch (serviceRating) {
        case 1:
            tipPercentage = 0.05;
            break;
        case 2: 
            tipPercentage = 0.1;
            break;
        case 3:
            tipPercentage = 0.15;
            break;
        case 4: 
            tipPercentage = 0.2;
            break;
        default:
            tipPercentage = 0;
    }

    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;
    const amountPerPerson = totalAmount / splitCount;
    
    document.getElementById("tipAmount").innerText = `Tip Amount: $${tipAmount.toFixed(2)}`;
    document.getElementById("totalAmount").innerText = `Total Amount: $${totalAmount.toFixed(2)}`;
    document.getElementById("amountPerperson").innerText = `Amount Per Person: $${amountPerPerson.toFixed(2)}`;
});
