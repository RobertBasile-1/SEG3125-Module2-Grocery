var nextBtn = document.getElementById("next-btn");
var checkedItems = document.getElementsByClassName("form-check-input");
/*Credited: https://www.w3schools.com*/
function openTab(groceryTab, animName) {
  var i;
  var x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(groceryTab).style.display = "block";
}

function validateUserInformation(){
  var items = [];
  for (var i = 0; i < 3; i++){
    if (document.querySelector("#"+ checkedItems[i].id+ ":checked") !== null){
        items.push(checkedItems[i].id);
    }
  }
  return items;
}


nextBtn.addEventListener("click", function () {
  document.getElementById("welcomeMsg").innerHTML =
    "Hello" + " " + document.getElementById("firstNameInput").value;
});


