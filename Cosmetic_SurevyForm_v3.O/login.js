function validateLogin()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

   
    if (email === "nishantrajput5115@gmail.com" && password === "2004") {
      
        alert("Login successful!");
    } else {
        
        document.getElementById("errorMessage").innerHTML = "Invalid username or password.";
    }
}