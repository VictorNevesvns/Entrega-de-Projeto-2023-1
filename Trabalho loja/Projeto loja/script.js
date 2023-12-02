let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;

    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}


// Adicione a seguinte função ao script.js
function checkout() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.");
        return;
    }

    // Aqui você pode adicionar lógica adicional, como processamento de pagamento,
    // envio de e-mail de confirmação, etc.
    alert("Compra realizada com sucesso! Obrigado por comprar conosco.");

    // Limpar o carrinho após a compra
    cart = [];
    total = 0;

    // Atualizar a exibição do carrinho
    updateCart();
}