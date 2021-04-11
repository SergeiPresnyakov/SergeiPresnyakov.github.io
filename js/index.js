const buttons = document.querySelectorAll('.pressable');
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Button pressed');
    });
});


function additionBlockActivate(block) {
    let plusButton = block.querySelector('.fa-plus-square');
    let saucePriceField = block.querySelector('.amount');
    let saucePrice = parseInt(saucePriceField.innerHTML);
    let nullifyButton = block.querySelector('.add_nullify');
    let sauceAmountField = block.querySelector('.val');
    let sauceAmountValue = parseInt(sauceAmountField.innerHTML);

    plusButton.addEventListener('click', () => {
        sauceAmountValue++;
        saucePrice += 70;
        sauceAmountField.innerHTML = sauceAmountValue;
        saucePriceField.innerHTML = saucePrice;
    });

    nullifyButton.addEventListener('click', () => {
        sauceAmountValue = 0;
        saucePrice = 0;
        sauceAmountField.innerHTML = sauceAmountValue;
        saucePriceField.innerHTML = saucePrice;
    });
}


function activateProductCard(card) {
    let plusButton = card.querySelector('.fa-plus-circle');
    let minusButton = card.querySelector('.fa-minus-circle');
    let valueField = card.querySelector('span');
    let value = parseInt(valueField.innerHTML);

    plusButton.addEventListener('click', () => {
        value++;
        valueField.innerHTML = value;
    });

    minusButton.addEventListener('click', () => {
        if (value > 1) {
            value--;
        }
        valueField.innerHTML = value;
    })

    const additionBlock = card.querySelector('.addition');
    if (additionBlock !== null) {
        additionBlockActivate(additionBlock);
    }
}

const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card) => {
    activateProductCard(card);
});
