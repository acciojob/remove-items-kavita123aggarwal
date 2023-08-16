var parent = document.quarySelectorAll("#colorSelect")
var input = document.quarySelector("input")
input.AddEventListener("onclick", function(){
	   var elm = parent.firstElementChild.nextElementSibling;
		parent.removeChild(elm);
})
