const button = document.getElementById("checkBtn");
const statusText = document.getElementById("status");

if (button && statusText) {
  button.addEventListener("click", () => {
    statusText.textContent = "JavaScript подключён и работает корректно.";
  });
}