function cart(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
}
cartItems.push(item);
let storage= JSON.parse(localStorage.getItem("cart"));
if(storage==null){
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));    
} else {
    products= JSON.parse(localStorage.getItem("cart"));
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));    
}
products=JSON.parse(localStorage.getItem("cart"));
cart_n.innerHTML=`[${products.length}]`;
document.getElementById(btncart).style.display="none";
animation();
}

function cart2(name,price,url,con,btncart){
    var item={
        name:name,
        price:price,
        url:url
}
cartItems.push(item);
let storage= JSON.parse(localStorage.getItem("cart"));
if(storage==null){
    products.push(item);
    localStorage.setItem("cart",JSON.stringify(products));    
} else {
products= JSON.parse(localStorage.getItem("cart"));
products.push(item);
localStorage.setItem("cart",JSON.stringify(products));    
}
products=JSON.parse(localStorage.getItem("cart"));
cart_n.innerHTML=`[${products.length}]`;
document.getElementById(btncart).style.display="none";
}

(()=>{
    for(let index = 1 ; index <= 6 ; index++) {
        fruitDIV.innerHTML+=`${HTMLfruitProduct(index)}`;
}
for(let index = 1 ; index <= 3 ; index++) {
    juiceDIV.innerHTML+=`${HTMLjuiceProduct(index)}`;
    saladDIV.innerHTML+=`${HTMLsaladProduct(index)}`;
}
if(localStorage.getItem("cart")==null) {

} else {
    products=JSON.parse(localStorage.getItem("cart"));
    cart_n.innerHTML=`[${products.length}]`;
}
})();
function clean(){
    table = document.querySelector('table');
    localStorage.clear();
    for(let index=0 ; index < products.length ; index++){
        table.innerHTML+=tableHTML(index);
        total=total+parseInt(products[index].price);

    }
    total=0;
    table.innerHTML=`
       <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
       </tr>   
    
    `;
}

(()=>{
    for(let index = 0 ; index < products.length ; index++){
        table.innerHTML+=tableHTML(index);
        total=total+parseInt(products[index].price);
    }
    table.innerHTML+=`
        <tr>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col">Total:rs.${total}.00</th>
        </tr>     
        <tr>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col">
            <button id="btnClean" onclick="clean()" class="btn text-white btn-warning">
            Clean Shopping Cart
            </button>
        </th>
        <th scope="col">
            <form id="form1" action="/cart" method="POST"  autocomplete="off">
                <input type="hidden" name="total" value="${total}">
                <input type="hidden" name="_id" value="">
                <button id="submitbtn" class="btn btn-success">Buy</button>
            </form>
        </th>
        </tr>
    `;
    products=JSON.parse(localStorage.getItem('cart'));
    cart_n.innerHTML=`[${products.length}]`;
})();  
var form= document.getElementById('form1');
document.getElementById('submitbtn').addEventListener('click',()=>{
    localStorage.clear();
    setTimeout(()=>{
        sub();
    },5000);
});
function sub(){
    setTimeout(()=>{
        form.submit();
    },5000);
}