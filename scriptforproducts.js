let http = new XMLHttpRequest();

http.open('get','products.json',true);
http.send();

http.onload = function(){
    if(this.readyState == 4 && this.status==200){
        let products = JSON.parse(this.responseText);
        let output ="";
        for(item of products){
            output += `
            <div class="pro">
            <img src="${item.image}" class="pro1">
            <div class="description">
                <span>${item.type}</span>
                <h5>${item.title}/<h5>
                <div class="star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4><strike>${item.strikeprice}/-</strike> ${item.price}/-</h4>
            </div>
            <a href=""><i class="fas fa-shopping-cart cart" ></i></a>
        </div>
            `;
        }
        document.querySelector('.pro-container').innerHTML = output;
    }
}