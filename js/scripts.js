
var myPizza = "";
var original = "original";
var salami = "salami";
var chicken = "chicken";
var hawaiian = "hawaiian";

	
	
//pizza objects
var original_pizza = {
	picture: "./img/original.jpg",
	description: "Tomato sauce, mozzarella and oregano",
	prize: 300
};
var salami_pizza = {
	picture: "./img/salami.jpg",
	description: "salami sauce, mozzarella and oregano",
	prize: 450
};
var chicken_pizza = {
	picture: "./img/chicken.jpg",
	description: "chicken sauce, mozzarella and oregano",
	prize: 700
};
var hawaiian_pizza = {
	picture: "./img/hawaiian.jpg",
	description: "hawaiian sauce, mozzarella and oregano",
	prize: 450
};


function getPizzaType(){
	var myPizza = event.srcElement.name;
	
	if(original !== null && original === myPizza){
		document.getElementById("placeholder").src = original_pizza.picture;
		document.getElementById("pizza_type").innerHTML = original_pizza.description;
		document.getElementById("my_total").innerHTML = original_pizza.prize;
	}else if (salami === myPizza){
		document.getElementById("placeholder").src = salami_pizza.picture;
		document.getElementById("pizza_type").innerHTML = salami_pizza.description;
		document.getElementById("my_total").innerHTML = original_pizza.prize;
	}else if(chicken === myPizza){
		document.getElementById("placeholder").src = chicken_pizza.picture;
		document.getElementById("pizza_type").innerHTML = chicken_pizza.description;
		document.getElementById("my_total").innerHTML = original_pizza.prize;
	}else if(hawaiian === myPizza){
		document.getElementById("placeholder").src = hawaiian_pizza.picture;
		document.getElementById("pizza_type").innerHTML = hawaiian_pizza.description;
		document.getElementById("my_total").innerHTML = original_pizza.prize;
	}else{
		alert("Error !!!");
	}
	
}

$(document).ready(function(){
	var my_total = parseInt(document.getElementById("my_total").innerHTML);
	//var my_quantity = parseInt(document.getElementById("qty").value);
	
  	$(".order_btn").click(function() {
    	$("#form_body").toggle();
  	});

    $("#pizza_size").change(function(){
        // Get selected option value from dropdown
        var slide = $(this).children("option:selected").text();
        var prize = $(this).children("option:selected").val();
        //alert(slide+ prize);
		var aa = my_total + parseInt(prize);
		document.getElementById("my_total").innerHTML = aa;
    }); 
	$("#pizza_crust").change(function(){
        // Get selected option value from dropdown
        var slide = $(this).children("option:selected").text();
        var prize = $(this).children("option:selected").val();
        //alert(slide+ prize);
    }); 
	$("#toppings").change(function(){
        // Get selected option value from dropdown
        var slide = $(this).children("option:selected").text();
        var prize = $(this).children("option:selected").val();
        //alert(slide+ prize);
    }); 
	$("#qty").change(function(){
        // Get selected option value from dropdown
        var quant = $(this).val();
        //alert(prize);
		var aa = my_quantity + parseInt(quant) - 1;
		document.getElementById("pizza_number").innerHTML = aa;
    }); 
	$('#inlineRadio2').click(function() {
	   if($('#inlineRadio2').is(':checked')) {
		   //alert("it's checked"); 
		   $("#delivery_message").toggle();
	   }
	});
});




const frm = document.querySelector('#frm');
const btnViewOrder = document.querySelector("#view-order");
const tot = document.querySelector("#total");
let cart = [];
frm.addEventListener("submit", function(event){
  event.preventDefault();
  const fd = new FormData(frm);
  let order = {};
  for (const key of fd.keys()) {
    if(fd.get(key).toString().length > 0){
      order[key]  = fd.get(key).toString();
    }
  }
  order["total"] = parseInt(order["qty"] * order["price"]);
  cart.push(order);
  if(confirm("This pizza will be added to your cart")){
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});
btnViewOrder.addEventListener('click', function(){
  let cart = JSON.parse(localStorage.getItem("cart"));
  if(cart.length > 0){
    document.querySelector("#our-order").innerHTML = "";
    cart.forEach(element => {
      document.querySelector("#our-order").innerHTML += `<tr>
      <td>${element['Type']}</td>
      <td>${element['size']}</td>
      <td>${element['qty']}</td>
      <td>${element['price']}</td>
      <td>${parseInt(element['price']) * parseInt(element['qty'])}</td>
      </tr>`;
    });
    const total = cart.reduce((sum, item) => sum + (parseInt(item['total'])), 0);
    tot.innerHTML = "Total "+ total.toString();
  }
});