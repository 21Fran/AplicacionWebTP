function login(e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    // Redirige al home.html
    window.location.href = "pages/home.html";
  } else {
    alert("Completa todos los campos.");
  }
}