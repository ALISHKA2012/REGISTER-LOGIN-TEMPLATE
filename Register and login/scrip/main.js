document.addEventListener("DOMContentLoaded" , function () {
  

    document.getElementById("btn").addEventListener("click", function (e) {
e.preventDefault();
    
        let enteredEmail = document.getElementById("emailInput").value;
        let enteredpassw = document.getElementById("passwInput").value;
        let enteredName = document.getElementById("NameInput").value;
        let enteredSurname = document.getElementById("SurnameInput").value;

        let  foundUser = false;
      for (let user of database) {
        if (enteredEmail == user["email"] && enteredpassw == user ["passw"] && enteredName == user["name"] && enteredSurname== user ["surname"]) {
             foundUser = true;
             sessionStorage.setItem("email", user["email"])
             sessionStorage.setItem("name", user["name"])
             sessionStorage.setItem("age", user["age"])
             sessionStorage.setItem("surname", user["surname"])
             sessionStorage.setItem("passw", user["passw"])
             
             break;
        }  
      }

if (foundUser) {
  document.location.href = "regis.html";

}
else{
  alert("Your inputs are wrong!");
}
 
});
});