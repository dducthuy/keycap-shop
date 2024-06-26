// script.js
document.addEventListener('DOMContentLoaded', () => {
    const decreaseButton = document.getElementById('decrease');
    const increaseButton = document.getElementById('increase');
    const quantityInput = document.getElementById('quantity');

    const priceElement = document.querySelector('.price span');
    const priceText = priceElement.textContent;
    const Price = parseFloat(priceText.replace('đ', '').replace(/\./g, '')); // 1000000 
    const totalPriceElement = document.querySelector('.total-price .t-price span');


    const updateTotalPrice = (quantity) => {
        const totalPrice = Price * quantity;
        totalPriceElement.textContent = `${totalPrice.toLocaleString('vi-VN')}đ`;
    };

    decreaseButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
            updateTotalPrice(currentValue - 1);
        }
    });

    increaseButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
        updateTotalPrice(currentValue + 1);
    });


    updateTotalPrice(parseInt(quantityInput.value));



    document.getElementById("btn-login").addEventListener("click", function () {
        const modal = document.getElementById("modal");
        modal.style.display = "block";
    });
    document.getElementById("close").addEventListener("click", function () {
        const modal = document.getElementById("modal");
        modal.style.display = "none";
    });





});



