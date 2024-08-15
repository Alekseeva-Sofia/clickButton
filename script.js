let clickCount = 0;

const button = document.getElementById("clickButton");

button.addEventListener("click", function () {
  clickCount++;
  console.log(`Нажатий на кнопку: ${clickCount}`);
});
