function register(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const fecha = document.getElementById("fecha").value;

  if (nombre && apellido && email && password && fecha) {
    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "../index.html"; // Redirige al login
  } else {
    alert("Completa todos los campos.");
  }
}