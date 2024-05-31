let quantity =0;
let item = '';

let showQuantity = document.getElementById("show-quantity");
let AddQuantity = document.getElementById("add-quantity");
let twoQuantityAdded= document.getElementById("two-quantity-added");
let threeQuantityAdded= document.getElementById("three-quantity-added");
let resetQuantity = document.getElementById("reset-quantity");
let message = document.getElementById("message");

showQuantity.addEventListener('click', ()=>{
    quantity < 2 ? item = 'item' : item= 'items'
    message.innerHTML = `The total quantity: ${quantity} ${item}`;
    message.style.display = "inline-block";

    setTimeout(() => {
        message.style.display = "none"; 
    }, 4000);
});

AddQuantity.addEventListener('click', ()=>{
    alert('added one item');
    quantity++;
});

twoQuantityAdded.addEventListener('click', ()=>{
    alert('added 2 items');
    quantity+= 2;
});

threeQuantityAdded.addEventListener('click', ()=>{
    alert('added 3 items');
    quantity+=3;
    
});


resetQuantity.addEventListener('click', ()=>{
    alert('Reset all Quantity');
    quantity = 0;
});