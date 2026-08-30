function stay() {
  history.back();
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}