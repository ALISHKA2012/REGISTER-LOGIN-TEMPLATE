let productManager = {
    getAllProducts: function () {
        return products;
    }
};


let DomManager = {
    createProductContainer: function (product) {
       let main_container = document.createElement("section");
       let image_phone = document.createElement("img");


     

       image_phone.src = `./img/${product.photo}`;
       image_phone.width = 2000;
       image_phone.height =500;

       


    

        


       main_container.appendChild(image_phone);


       return main_container;
    }
}

document.addEventListener("DOMContentLoaded",function () {

    let all_products = productManager.getAllProducts();
    let table_products = document.getElementById("phones_list");

    for (let phone of all_products) {

       let phone_container = DomManager.createProductContainer(phone);
        table_products.appendChild(phone_container);
    }
   if (localStorage["count"]){
        document.getElementById("counter").innerHTML = parseInt(localStorage.count); 
   }   
   else{
       localStorage.count = 0;
    }
   document.getElementById("btn-reset").addEventListener("click", function () {
       if (localStorage.count) {
        localStorage.count = 0;
          document.getElementById("counter").innerHTML = 0;
       }
   });

   }   );

