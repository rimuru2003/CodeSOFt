const display = document.querySelector(".b");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let ans = "";

const calculate = (butvalue) => {
  display.focus();
  if (butvalue === "=" && ans !== "") {
    ans = eval(ans.replace("%", "/100"));
  } else if (butvalue === "AC") {
    ans = "";
  } else if (butvalue === "DEL") {
    ans = ans.toString().slice(0, -1);
  } else {
    if (ans === "" && specialChars.includes(butvalue)) return;
    ans += butvalue;
  }
  display.value = ans;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
}); 