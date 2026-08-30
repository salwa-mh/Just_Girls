let data = [
  { 'name': 'Ali', 'username': 'ali12', 'password': '1234' },
  { 'name': 'Zainb', 'username': 'zainb12', 'password': 'zozi' },
  { 'name': 'Omar', 'username': 'omar22', 'password': 'pass22' },
  { 'name': 'Sara', 'username': 'sara99', 'password': 'sara123' },
  { 'name': 'Mona', 'username': 'mona55', 'password': 'mona555' },
  { 'name': 'Khaled', 'username': 'khaled77', 'password': 'kh2025' },
  { 'name': 'Laila', 'username': 'laila33', 'password': 'love33' },
  { 'name': 'Tarek', 'username': 'tarek88', 'password': 'tr888' }
];

function checkLogin(e) {
  e.preventDefault();
  let username = document.getElementById("username");
  let password = document.getElementById("password");

  if (username.value === "") {
    alert("Please enter your username!");
    username.focus();
    return;
  }

  if (password.value === "") {
    alert("Please enter your password!");
    password.focus();
    return;
  }

  let adminUser = "admin";
  let adminPass = "12345";

  if (username.value === adminUser && password.value === adminPass) {
    alert("Welcome Admin!");
    window.location.href = "admin.html";
    return;
  }

  let found = data.find(user => user.username === username.value && user.password === password.value);

  if (found) {
    alert("Welcome " + found.name + "!");
    window.location.href = "index.html";
  } else {
    let tryAgain = confirm("Wrong username or password.\nWould you like to try again?");
    if (tryAgain) {
      document.getElementById("loginForm").reset();
      username.focus();
    } else {
      window.location.href = "index.html";
    }
  }
}

document.getElementById("forgotPassword").addEventListener("click", function(e) {
  e.preventDefault();
  alert("Contact support at support@justgirls.com");
});

