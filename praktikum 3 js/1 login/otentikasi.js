function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username == "nanaaa" && password == "1707") {
    window.open("./secpage.html")
  } else {
    alert(`Account Not Found`);
  }
}