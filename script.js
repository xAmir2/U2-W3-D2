const KEY = "memory";

const inputName = document.getElementById("inputName");
const textarea = document.getElementById("content");

const save = function () {
  const textareaValue = textarea.value;

  localStorage.setItem(KEY, textareaValue);
  inputName.innerText = textareaValue;
};

const remove = function () {
  localStorage.removeItem(KEY);
  textarea.value = "";
  inputName.innerText = "";
};

const savedName = localStorage.getItem(KEY);

if (savedName) {
  inputName.innerText = savedName;
} else {
  inputName.innerText = "Name has yet to be registered";
}

const tKey = "time-key";

const timeText = document.getElementById("counter");

let t = Number(sessionStorage.getItem(tKey)) || 0;

const timer = () => {
  timeText.innerText = t;

  t++;

  sessionStorage.setItem(tKey, t);

  setTimeout(timer, 1000);
};

timer();
