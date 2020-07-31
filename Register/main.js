document.addEventListener("DOMContentLoaded" , function () {
  

    document.getElementById("btn").addEventListener("click", function (e) {
e.preventDefault();
    
        let enteredEmail = document.getElementById("emailInput").value;
        let enteredpassw = document.getElementById("passwInput").value;

        let  foundUser = false;
      for (let user of database) {
        if (enteredEmail == user["email"] && enteredpassw == user ["passw"]) {
             foundUser = true;
             sessionStorage.setItem("email", user["email"])
             sessionStorage.setItem("name", user["name"])
             sessionStorage.setItem("age", user["age"])
             sessionStorage.setItem("passw", user["passw"])
             
             break;
        }  
      }

if (foundUser) {
  document.location.href = "web.html";

}
else{
  alert("Your inputs are wrong!");
}
 
});
});