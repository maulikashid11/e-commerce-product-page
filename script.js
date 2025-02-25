const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')
const heroImage = document.querySelector('.hero-image img')
const optionImage = document.querySelector('.option-image')
const addToCartBtn = document.querySelector('.add-to-cart')
const cartIcon = document.querySelector('.icon-cart')
const cart = document.querySelector('.cart')
const quantityOfProduct = document.querySelector('.quantity')
const quantityInCartIcon = document.querySelector('.icon-cart-quantity')
const quantityInCart = document.querySelector('.item-quantity')
const itemQuantity = document.querySelector('.item-quantity')
const totalPrice = document.querySelector('.total-price')


optionImage.addEventListener('click', (e) => {
    heroImage.src = e.target.src.replace('-thumbnail', '')
})

let quantity;
; (function () {
    addToCartBtn.addEventListener('click', () => {
        if (+quantityOfProduct.innerText > 0) {
            quantity = +quantityOfProduct.innerText
            quantityInCartIcon.style.display = 'flex'
            quantityInCartIcon.innerText = quantity

            itemQuantity.innerText = quantity
            totalPrice.innerText = `$${125*quantity}.00`
        }
    })

    cartIcon.addEventListener('click', (e) => {
        e.stopPropagation()
        cart.classList.add('active')
    })
    document.body.addEventListener('click', (e) => {
        if(ul.style.display === 'flex'){
            ul.style.display = 'none'
        }
        if (cart.classList.contains('active')) {
            cart.classList.remove('active')
        }
    }, { capture: true })

})()

function plusMinusFunc() {
    plus.addEventListener('click', () => {
        +quantityOfProduct.innerText++
    })
    minus.addEventListener('click', () => {
        if (+quantityOfProduct.innerText > 0) {
            +quantityOfProduct.innerText--
        }
    })
}
plusMinusFunc()


const hamburgerMenu = document.querySelector('.hamburger-menu')
const ul = document.querySelector('ul')
hamburgerMenu.addEventListener('click',()=>{
    ul.style.display = 'flex';
})