getId = (id) => document.getElementById(`${id}`);

const pressAnyKey = getId("press");
const keyCodes = getId("key-codes");
const textKey = getId("key");
const textKeyCode = getId("key-code");
const textCode = getId("code");

const anyKey = (e) => {
  e.preventDefault();
  pressAnyKey.style.display = "none";
  keyCodes.style.display = "flex";
  textKey.innerHTML = e.key;
  textKeyCode.innerHTML = e.keyCode;
  textCode.innerHTML = e.code;
};

window.addEventListener("keydown", anyKey);
