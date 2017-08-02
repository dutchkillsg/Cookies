$(document).ready(function(){
	if(Cookies.get('name')===undefined){
		$('form').submit(function(){
	 var name = $('input').val()
	 Cookies.set('name', name)
	 Cookies.set('visited', 1)
	})
	
	}else{
		$('form').css('display', 'none')
		$('#greeting').append('Welcome ' + Cookies.get('name') + '!')
	}

})


if(Cookies.get('visited')===undefined){
		$('#greeting').text('Welcome!')
	}else{
		$('#greeting').text(' Lets Count! ')
	}
var chocolateBtn = document.getElementById("chocolatebtn");
var lemonBtn = document.getElementById("lemonbtn");
var sugarBtn = document.getElementById("sugarbtn");
var resetBtn = document.getElementById("resetBtn1");
var allText = document.getElementById("buttons")
var sugar = 0;
var lemon = 0;
var chocolate = 0;
var lemoninput = document.getElementById("lemon");
var sugarinput = document.getElementById("sugar");
var chocolateinput = document.getElementById("chocolate");


sugarBtn.addEventListener("click",function(){
  sugar = sugar +1
  document.getElementById("sugar").value = sugar;
  Cookies.set("Sugar", sugar);
});

lemonBtn.addEventListener("click",function(){
  lemon = lemon +1
  document.getElementById("lemon").value = lemon;
  Cookies.set("Lemon", lemon);
});

chocolateBtn.addEventListener("click",function(){
  chocolate = chocolate +1
  document.getElementById("chocolate").value = chocolate;
  Cookies.set("Chocolate", chocolate);
});

resetBtn1.addEventListener("click", function(){
  document.getElementById("lemon").value = 0;
  document.getElementById("sugar").value = 0;
  document.getElementById("chocolate").value = 0;
});

window.onload = function(event){
  lemoninput.value = Cookies.get("Lemon");
  sugarinput.value = Cookies.get("Sugar");
  chocolateinput.value = Cookies.get("Chocolate");

};


