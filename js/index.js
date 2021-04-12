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
        sauceAmountField.innerHTML = '+' + sauceAmountValue;
        saucePriceField.innerHTML = saucePrice;
    });

    nullifyButton.addEventListener('click', () => {
        sauceAmountValue = 0;
        saucePrice = 0;
        sauceAmountField.innerHTML = '+' + sauceAmountValue;
        saucePriceField.innerHTML = saucePrice;
    });
}


function intoThree(num) {
    if (num < 10) {
        return '00' + num;
    } else if (num < 100) {
        return '0' + num;
    }
    return num;
}


function activateProductCard(card) {
    let plusButton = card.querySelector('.btn_plus_block');
    let minusButton = card.querySelector('.btn_minus_block');
    let valueField = card.querySelector('span');
    let productPriceBlock = card.querySelector('.price-block > .amount');
    let productPrice = parseInt(productPriceBlock.innerHTML.replace(' ', ''));
    const basePrice = productPrice;
    let value = parseInt(valueField.innerHTML);

    plusButton.addEventListener('click', () => {
        value++;
        productPrice += basePrice;

        if (productPrice > 999) {
            productPriceBlock.innerHTML = Math.floor(productPrice / 1000) + ' ' + intoThree(productPrice % 1000);
        } else {
            productPriceBlock.innerHTML = productPrice;
        }
        
        valueField.innerHTML = value;
    });

    minusButton.addEventListener('click', () => {
        if (value > 1) {
            productPrice -= basePrice;
            value--;
        }

        if (productPrice > 999) {
            productPriceBlock.innerHTML = Math.floor(productPrice / 1000) + ' ' + intoThree(productPrice % 1000);
        } else {
            productPriceBlock.innerHTML = productPrice;
        }

        valueField.innerHTML = value;
    });

    const additionBlock = card.querySelector('.addition');
    if (additionBlock !== null) {
        additionBlockActivate(additionBlock);
    }
}

const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card) => {
    activateProductCard(card);
});
