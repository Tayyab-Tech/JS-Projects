let totalAmount = 0;
let sr=0;
function Price() {
    let a = document.getElementById("Product-List").value;
    document.getElementById("Price").value = a;
    amount();
}

function amount() {
    let a = document.getElementById("Quantity").value;
    let b = document.getElementById("Price").value;
    document.getElementById("Amount").value = a * b;
}

function AddItems() {
    let productList = document.getElementById("Product-List");
    let selectedProduct = productList.options[productList.selectedIndex].text;
    let quantity = document.getElementById("Quantity").value;
    let price = document.getElementById("Price").value;
    let amount = document.getElementById("Amount").value;
   sr++

    let invoiceBody = document.getElementById("product-detail");
    let row = document.createElement("tr");
    row.innerHTML = ` 
        <td style="text-align: center;">${sr} . </td> 
        <td>${selectedProduct}</td>
        <td class="right">${quantity}</td>
        <td class="right">${price}</td>
        <td class="right">${amount}</td>`;
    invoiceBody.appendChild(row);
    
    totalAmount += parseFloat(amount);
    document.getElementById("Total-Amount").textContent = totalAmount.toFixed(2);

    let discount = 0;
    if (totalAmount > 2000) {
        discount = totalAmount * 0.12;
    }
    let tax = totalAmount * 0.8;
    let finalAmount = totalAmount - discount + tax;

    document.getElementById("Discount").textContent = discount.toFixed(2);
    document.getElementById("Tax").textContent = tax.toFixed(2);
    document.getElementById("Final-Amount").textContent = finalAmount.toFixed(2);

    productList.selectedIndex = 0;
    document.getElementById("Quantity").value = "";
    document.getElementById("Price").value = "";
    document.getElementById("Amount").value = "";

    return false;
}
