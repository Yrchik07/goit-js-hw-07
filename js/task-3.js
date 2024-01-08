const nameInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  output.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});
