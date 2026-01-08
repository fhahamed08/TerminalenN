const welcome = document.getElementById("welcome");
const setup = document.getElementById("setup");
const loginBox = document.getElementById("login");
const analysis = document.getElementById("analysis");
const dashboard = document.getElementById("dashboard");

setTimeout(() => {
  welcome.classList.remove("hidden");

  setTimeout(() => {
    welcome.classList.add("hidden");
    checkSetup();
  }, 3000);
}, 500);

function checkSetup() {
  if (!localStorage.getItem("password")) {
    setup.classList.remove("hidden");
  } else {
    loginBox.classList.remove("hidden");
  }
}

function saveSetup() {
  const p1 = setPass.value;
  const p2 = confirmPass.value;
  const mk = masterKey.value;

  if (!p1 || p1 !== p2 || !mk) {
    setupMsg.innerText = "SETUP FAILED";
    return;
  }

  localStorage.setItem("password", p1);
  localStorage.setItem("master", mk);

  setup.classList.add("hidden");
  loginBox.classList.remove("hidden");
}

function login() {
  if (loginPass.value === localStorage.getItem("password")) {
    loginBox.classList.add("hidden");
    startAnalysis();
  } else {
    loginMsg.innerText = "OPERATION DENIED";
  }
}

function startAnalysis() {
  analysis.classList.remove("hidden");
  let i = 0;
  const timer = setInterval(() => {
    i++;
    progress.innerText = i + "%";
    if (i >= 100) {
      clearInterval(timer);
      analysis.classList.add("hidden");
      dashboard.classList.remove("hidden");
    }
  }, 30);
    }
