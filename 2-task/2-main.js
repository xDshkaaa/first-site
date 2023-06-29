const output = document.querySelector(".output");
const containerIncr = document.querySelector(".container-incr");
const containerDecr = document.querySelector(".container-decr");
const containerDel = document.querySelector(".container-del");

const counter = {
  value: 0,
  increaseVal(value) {
    this.value += value;
  },
  decreaseVal(value) {
    this.value -= value;
  },
};

function incrCounter() {
  counter.increaseVal(1);
  output.textContent = counter.value;
}
function decrCounter() {
  counter.decreaseVal(1);
  output.textContent = counter.value;
}
function delCounter() {
  counter.value = 0;
  output.textContent = counter.value;
}
containerIncr.addEventListener("click", incrCounter);
containerDecr.addEventListener("click", decrCounter);
containerDel.addEventListener("click", delCounter);
