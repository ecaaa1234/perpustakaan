// Validasi Login
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "admin" && password === "1234") {
        window.location.href = "dashboard.html";
      } else {
        alert("Username atau Password salah!");
      }
    });
  }
});

// Navigasi Konten di Dashboard
function showContent(id) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}
