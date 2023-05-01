

//* JSON format : 
//{
//  "email":"someemail@hotmail.com",
//  "password":"somepassword"
//}



const form = document.querySelector ("form") // This selects the <form> element in the document

form.addEventListener ("submit", function (e){ 
    e.preventDefault (); // prevent the default form's behaviour (sending POSt data)

		var xhttp = new XMLHttpRequest ();
		var data = new FormData (loginform); // get the data of form

		var email = data.get("email"); // get the value of the <input name="email">
		var password = data.get("password"); // get the value of the <input name="password">

		var user = {  // create the JSON object which will sent as the data in the body
			email,
			password
		}

		xhttp.onreadystatechange = function () { // this funtion will run when the server ("API/Login/.php") respond back
			if (xhttp.readyState == 4 ){
				var res = JSON.parse(xhttp.responseText);
				if (xhttp.status != 200){ // If the response from the server has a response code of:200
					
				}else {
					
				}
			}
		}

		xhttp.open ("POST", "API/Login.php"); // Create a POST request to send for the server
		xhttp.setRequestHeader("content-type", "application/json"); // set the content type to json (like the server wants)
		xhttp.send(JSON.stringify(user), false); // put the JSON object in the body of that request and send that request
});