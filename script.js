const welcome = document.getElementById("welcome");
const setup = document.getElementById("setup");
const loginBox = document.getElementById("login");
const analysis = document.getElementById("analysis");
const dashboard = document.getElementById("dashboard");
const result = document.getElementById("result");

setTimeout(() => {
  welcome.classList.add("hidden");
  checkSetup();
}, 2600);

function checkSetup() {
  if (!localStorage.getItem("password")) {
    setup.classList.remove("hidden");
  } else {
    loginBox.classList.remove("hidden");
  }
}

function saveSetup() {
  if (setPass.value !== confirmPass.value || !masterKey.value) {
    setupMsg.innerText = "SETUP FAILED";
    return;
  }
  localStorage.setItem("password", setPass.value);
  localStorage.setItem("master", masterKey.value);
  setup.classList.add("hidden");
  loginBox.classList.remove("hidden");
}

function login() {
  loginBox.classList.add("hidden");
  analysis.classList.remove("hidden");

  let i = 0;
  const t = setInterval(() => {
    i++;
    progress.innerText = i + "%";
    if (i === 100) {
      clearInterval(t);
      analysis.classList.add("hidden");
      showResult();
    }
  }, 25);
}

function showResult() {
  result.classList.remove("hidden");
  if (loginPass.value === localStorage.getItem("password")) {
    result.className = "result allow";
    result.innerText = "ACCESS GRANTED";
    setTimeout(() => {
      result.classList.add("hidden");
      dashboard.classList.remove("hidden");
    }, 1500);
  } else {
    result.className = "result deny";
    result.innerText = "ACCESS DENIED";
    setTimeout(() => {
      result.classList.add("hidden");
      loginBox.classList.remove("hidden");
    }, 1500);
  }
}
