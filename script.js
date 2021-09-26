//Registration data
function register() {
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;
  let account = parseInt(document.getElementById("account").value);
  let money = parseInt(document.getElementById("money").value);
  if (user !==null && password !==null && account !==null && money !==null ) {
	  
  var arr = {
    data: [{ user: user, password: password, account: account, money: money }],
  };
  localStorage.setItem("myarr", JSON.stringify(arr));
  }
  else{ 
  alert("fill all inputs");
  window.location.reload();
  }
}

//login data
function login_page() {
  var myarr = localStorage.getItem("myarr");
  var newArr = JSON.parse(myarr);
  if (
    document.getElementById("user") != null &&
    document.getElementById("pass") != null
  ) {
    var login = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    for (i in newArr.data) {
      if (newArr.data[i].user === login && newArr.data[i].password === pass) {
        alert("Password Matched");
        window.location.href = "./dashboard.html";
      } else {
        alert("Password didn't Matched");
        window.location.reload();
      }
    }
  }
}

function withdraw() {
  var myarr = localStorage.getItem("myarr");
  var newArr = JSON.parse(myarr);
  for (i in newArr.data) {
    if (newArr.data[i].money !== 0) {
      let withdrawAmount = parseInt(
        document.getElementById("Withdraw-money").value
      );
      var value = newArr.data[i].money - withdrawAmount;
      alert("your current balance is :" + value);
      newArr.data[i].money = value;
      localStorage.setItem("newArr", JSON.stringify(newArr));
    } else {
      alert("Balance is below 0");
    }
  }
}
function save() {
  //deposit money
  var myarr = localStorage.getItem("myarr");
  var newArr = JSON.parse(myarr);
  for (i in newArr.data) {
    var amount = parseInt(document.getElementById("value").value);
    var value = amount + newArr.data[i].money;
    alert("your current balance is :" + value);
    newArr.data[i].money = value;
    localStorage.setItem("newArr", JSON.stringify(newArr));
  }
}
function check() {
  var myarr = localStorage.getItem("newArr");
  var newarr = JSON.parse(myarr);
  for (i in newarr.data) {
    alert("your balance is : " + newarr.data[i].money);
  }
}
// function updateData(){

// }

// document.getElementById("withdraw").addEventListener("click",function(){
//     if user
// })
