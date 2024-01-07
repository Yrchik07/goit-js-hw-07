const inputs = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

inputs.addEventListener("input", (event) => {
  const trimmedValue = event.currentTarget.value.trim();
  output.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});
