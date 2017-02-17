/*
window.onload = function(){

	var xhr = new XMLHttpRequest();
}


function processRequest(e) {

	if (xhr.readyState == 4 && xhr.status == 200) {

        var response = JSON.parse(xhr.responseText);
        console.log(response.msg);

        var container = document.querySelectorAll("holder");
        console.log(container);

				holder.innerHTML = response.msg;
				for(var key in response.menu) {
					console.log(response.menu[key]);
					holder.innerHTML = holder.innerHTML + "<br>" + key + ": " + response.menu[key];
	}
    }
}

function openRequest() {
	xhr.open('GET', "http://demo3354820.mockable.io/menu/sushi", true);
	xhr.send();
}

xhr.addEventListener("readystatechange", processRequest, false);
*/

function openRequest() {
$.get("http://demo3354820.mockable.io/menu/sushi", function(data){
	holder.innerHTML = data.msg;
	for(var key in response.menu) {
		console.log(response.menu[key]);
		holder.innerHTML = holder.innerHTML + "<br>" + key + ": " + response.menu[key];
})
}
