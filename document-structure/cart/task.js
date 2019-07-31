const quantity_control_inc = document.getElementsByClassName('product__quantity-control product__quantity-control_inc');
const quantity_control_dec = document.getElementsByClassName('product__quantity-control product__quantity-control_dec');
const product_quantit_value = document.getElementsByClassName('product__quantity-value');
const product_add = document.getElementsByClassName('product__add');
const cart_products = document.getElementsByClassName('cart__products')[0];
const product_image = document.getElementsByClassName('product__image');

for (let i = 0; i < quantity_control_inc.length; i++) {
    quantity_control_inc[i].addEventListener('click', (event) =>  {

        const amountGoods = Number.parseInt(product_quantit_value[i].innerText) + 1;
        product_quantit_value[i].innerText = String(amountGoods);
    })
}

for (let i = 0; i < quantity_control_dec.length; i++) {
    quantity_control_dec[i].addEventListener('click', (event) =>  {

        const amountGoods = Number.parseInt(product_quantit_value[i].innerText) - 1;
        if(amountGoods > 0) {
            product_quantit_value[i].innerText = String(amountGoods);
        } else product_quantit_value[i].innerText = 1;
    })
}    
let summa;
let sumId = [];
for (let j = 0; j < product_add.length; j++) {
    product_add[j].addEventListener('click', (event) =>  {
        const product_id = product_add[j].closest('.product').dataset.id;
        const image = product_image[j].getAttribute('src');
        let inputElement = document.createElement('div');
        inputElement.classList.add('cart__product');
        if (sumId[product_id] == undefined) {
            sumId[product_id] = 0;
        }
        summa = 0;
        summa = Number.parseInt(product_quantit_value[j].innerText) + sumId[product_id];
        sumId[product_id] = summa;
        inputElement.innerHTML +=`
            <div class="cart__product" data-id="` + product_id + `">
                <img class="cart__product-image" src="` + image + `">
                <div class="cart__product-count">` + summa + `</div>
            </div>`
        cart_products.appendChild(inputElement);
        
        const deleteElement = inputElement.previousElementSibling.querySelector('.cart__product[data-id="'+product_id+'"]');
        if (deleteElement) {
            deleteElement.remove();
        } else {
            deleteElement.previousElementSibling.remove();
        }
        
    })
}
    
