
function destroyBoxes() {
  var boxesContainer = document.getElementById('boxes');
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  }
}

