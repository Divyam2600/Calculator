const text_area = document.getElementById("text_area");
let cal = 0;

function clearAll() {
    text_area.value = "";
}

function display(value) {
  if (text_area.value === "Error" || cal === 1 || text_area.value === "0") {
    text_area.value = value;
    cal = 0;
  } else {
    text_area.value += value;
  }
}

function del() {
  text_area.value = text_area.value.slice(0, -1);
}

function calculate() {
  try {
    text_area.value = eval(text_area.value);
    cal = 1;
  } catch (error) {
    text_area.value = "Error";
  }
}
