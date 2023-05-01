/* When the user click on the Login button, this page will make a POST request to the page specified by "action" which is "API/Login.php". 
But because this is a POST request, the POST data sent with that request (the POST data sent are the inputs in the form: email and password), are encoded in the body and the content-type header of that request is set to "application/x-www-form-urlencoded"

So this is what inside the request sent to "API/Login.php" when the user clicks on the Login button:

POST /Login HTTP/1.1
Host: foo.example
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

email=somename@hotmail.com&password=somepassword

2-
Now when this request reaches "API/Login.php", this page "API/Login.php" contains a code that first check the content-type of the request which is: application/x-www-form-urlencoded, which tells it that the data sent with that request are in the form of: key1=value1&key2=valu2&... (in this case it is: email=somename@hotmail.com&password=somepassword)
But because this is an API, the person who coded that page most probably only accept or take input data in JSON format which is different from the format: key1=value1&key2=valu2&... 

JSON format : 
{
  "email":"someemail@hotmail.com",
  "password":"somepassword"
}

3-
So we are sending the data to "API/Login.php" in a format which It don't like. We need to send that data in JSON format.
To do that we write the javascript below.

NOW KEEP IN MIND THAT THIS IS ALL ON CLIENT SIDE. BUT THIS IS NOT AUTHENTICATION. THIS IS JUST SIMPLY SENDING JSON DATA TO THE SERVER ("API/Login.php"), AND NOT LETTING THE PAGE SEND IT IN THE DEFAULT FORMAT (key1=value1&key2=value2...)*/



/*When the form is submitted the function below will run, and it will:
1- Stop the default behaviour sending the data in the POOST format (key1=value&key2=value2...)
2- get the values the user typed in the input filed
3- create a JSON object containing these values
4- sending a request to "API/Login.php" with the data being the JSON object.*/


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