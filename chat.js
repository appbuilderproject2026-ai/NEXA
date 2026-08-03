const params = new URLSearchParams(window.location.search);

const userEmail = params.get("user");

const chatTitle = document.getElementById("chatTitle");

if (userEmail) {
  chatTitle.textContent = userEmail;
}
