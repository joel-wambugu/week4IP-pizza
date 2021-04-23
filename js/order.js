$(document).ready(function(){

	
	
	//pizza objects
	var original_pizza = {
		picture: "../img/original.jpg",
		description: "Tomato sauce, mozzarella and oregano",
		prize: 300
	};
	var salami_pizza = {
		picture: "../img/salami.jpg",
		description: "Tomato sauce, mozzarella and oregano",
		prize: 450
	};
	var chicken_pizza = {
		picture: "../img/chicken.jpg",
		description: "Tomato sauce, mozzarella and oregano",
		prize: 700
	};
	var hawaiian_pizza = {
		picture: "../img/hawaiian.jpg",
		description: "Tomato sauce, mozzarella and oregano",
		prize: 450
	};
	
	function getPizzaType(){
		var my_total = parseInt(document.getElementById("my_total").innerHTML);
	//alert(my_total);
		var myPizza = event.srcElement.name;
		//alert(myPizza);

		//all object of pizza
		var original = "original";
		var salami = "salami";
		var chicken = "chicken";
		var hawaiian = "hawaiian";
		
		if(original === myPizza){
			alert(original);
		}else if (salami === myPizza){
			alert(salami);
		}else if(chicken === myPizza){
			alert(chicken);
		}else if(hawaiian === myPizza){
			alert(hawaiian);
		}else{
			alert("Error !!!");
		}

		//match array to the button clicked

		//load all data of pizza
//		
//		function Pizza(type,size,topping){
//			this.type = type;
//			this.size = size;
//			this.topping = topping;
//		}
//		
	}




	

	
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
});
