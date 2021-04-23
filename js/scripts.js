
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
	}else if (salami === myPizza){
		document.getElementById("placeholder").src = salami_pizza.picture;
		document.getElementById("pizza_type").innerHTML = salami_pizza.description;
	}else if(chicken === myPizza){
		document.getElementById("placeholder").src = chicken_pizza.picture;
		document.getElementById("pizza_type").innerHTML = chicken_pizza.description;
	}else if(hawaiian === myPizza){
		document.getElementById("placeholder").src = hawaiian_pizza.picture;
		document.getElementById("pizza_type").innerHTML = hawaiian_pizza.description;
	}else{
		alert("Error !!!");
	}
	
}

$(document).ready(function(){
	var my_total = parseInt(document.getElementById("my_total").innerHTML);
	var my_quantity = parseInt(document.getElementById("quantity").value);
	
	$("#original").click(function() {
		ert("yess");
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
        alert(slide+ prize);
    }); 
	$("#toppings").change(function(){
        // Get selected option value from dropdown
        var slide = $(this).children("option:selected").text();
        var prize = $(this).children("option:selected").val();
        alert(slide+ prize);
    }); 
	$("#quantity").change(function(){
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




