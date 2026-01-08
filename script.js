const welcome = document.getElementById("welcome");
const setup = document.getElementById("setup");
const loginBox = document.getElementById("login");
const terminal = document.getElementById("terminal");
const result = document.getElementById("result");
const dashboard = document.getElementById("dashboard");

/* START */
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

/* SETUP */
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

/* LOGIN */
function startLogin() {
  result.classList.add("hidden");
  terminal.innerHTML = "";
  fakeTerminal(() => checkPassword());
}

/* FAKE TERMINAL */
function fakeTerminal(done) {
  let lines = [
    "Initializing system...",
    "Bypassing firewall...",
    "Decrypting access key...",
    "Verifying credentials..."
  ];
  let i = 0;

  let t = setInterval(() => {
    terminal.innerHTML += lines[i] + "<br>";
    i++;
    if (i === lines.length) {
      clearInterval(t);
      done();
    }
  }, 400);
}

/* CHECK PASSWORD */
function checkPassword() {
  result.classList.remove("hidden");

  if (loginPass.value === localStorage.getItem("password")) {
    result.className = "result allow";
    result.innerText = "ACCESS GRANTED";
    setTimeout(() => {
      loginBox.classList.add("hidden");
      result.classList.add("hidden");
      dashboard.classList.remove("hidden");
    }, 1500);
  } else {
    result.className = "result deny";
    result.innerText = "ACCESS DENIED";
  }
}
