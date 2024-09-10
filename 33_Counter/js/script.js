let countElement = document.getElementById("count");
let saveElement = document.getElementById("save");
let incrementButton = document.querySelector(".increment-btn");
let saveButton = document.querySelector(".save-btn");

let count = 0;

incrementButton.addEventListener("click", () => {
  count += 1;
  countElement.textContent = count;
});

saveButton.addEventListener("click", () => {
  let countString = count + " , ";
  saveElement.textContent += countString;
  countElement.textContent = 0;
  count = 0;
});
