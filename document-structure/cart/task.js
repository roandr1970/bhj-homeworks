const quantity_control_inc = document.getElementsByClassName('product__quantity-control product__quantity-control_inc');
const quantity_control_dec = document.getElementsByClassName('product__quantity-control product__quantity-control_dec');
const product_quantit_value = document.getElementsByClassName('product__quantity-value');
const product_add = document.getElementsByClassName('product__add');
const cart_products = document.getElementsByClassName('cart__products')[0];
const product_image = document.getElementsByClassName('product__image');

for (let i = 0; i < quantity_control_inc.length; i++) {
    quantity_control_inc[i].addEventListener('click', (event) =>  {

        //const product = quantity_control_inc[i].closest('.product').dataset.id;
        const amountGoods = Number.parseInt(product_quantit_value[i].innerText) + 1;

        product_quantit_value[i].innerText = String(amountGoods);
    })
}

for (let i = 0; i < quantity_control_dec.length; i++) {
    quantity_control_dec[i].addEventListener('click', (event) =>  {

        //const product = quantity_control_inc[i].closest('.product').dataset.id;
        const amountGoods = Number.parseInt(product_quantit_value[i].innerText) - 1;

        if(amountGoods > 0) {
            product_quantit_value[i].innerText = String(amountGoods);
        } else product_quantit_value[i].innerText = 1;
    })
}    
let summa;
let a = 0;
let b = 0;
let arrId1 = [];
let arrId2 = [];
for (let j = 0; j < product_add.length; j++) {
    product_add[j].addEventListener('click', (event) =>  {
        const product_id = product_add[j].closest('.product').dataset.id;
        const image = product_image[j].getAttribute('src');
        let inputElement = document.createElement('div');
        inputElement.classList.add('cart__product');
        summa = Number.parseInt(product_quantit_value[j].innerText);
        if (product_id == 1) {
            summa = Number.parseInt(product_quantit_value[j].innerText) + a;
            a = summa;
        } else {
            summa = Number.parseInt(product_quantit_value[j].innerText) + b;
            b = summa;
        }
        inputElement.innerHTML +=`
            <div class="cart__product" data-id="` + product_id + `">
                <img class="cart__product-image" src="` + image + `">
                <div class="cart__product-count">` + summa + `</div>
            </div>`
        cart_products.appendChild(inputElement);
        
        if (product_id == 1) {
            arrId1.push(inputElement);
            if (arrId1.length > 1 ) { 
                arrId1[1].previousElementSibling.remove();
                arrId1.shift();       
            }
        } else {
            arrId2.push(inputElement);
            if (arrId2.length > 1 ) {
                arrId2[1].previousElementSibling.remove();
                arrId2.shift();   
            }
        }
        
    })
}
    
