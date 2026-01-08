function saveAccess() {
  const name = document.getElementById("masterName").value.trim();
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const msg = document.getElementById("msg");

  if (!name || !pass || !confirm) {
    msg.textContent = "⚠ ALL FIELDS REQUIRED";
    return;
  }

  if (pass !== confirm) {
    msg.textContent = "✖ PASSWORD MISMATCH";
    return;
  }

  localStorage.setItem("masterName", name);
  localStorage.setItem("labPassword", pass);
  localStorage.setItem("initialized", "true");

  msg.textContent = "✔ SYSTEM INITIALIZED";
  msg.style.color = "#00ff9c";

  setTimeout(() => {
    // next interface later
    alert("NEXT INTERFACE WILL LOAD...");
  }, 1200);
}
