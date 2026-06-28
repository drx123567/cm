// Block right-click context menu
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

// Block common inspect/view source keyboard shortcuts
document.addEventListener('keydown', function (e) {
    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+U / F12
    if (
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
        (e.ctrlKey && e.key === 'U') ||
        (e.key === 'F12')
    ) {
        e.preventDefault();
    }
});


function logout() {
  localStorage.removeItem("savedLicense"); // correct key name
  document.getElementById("loginOverlay").style.display = "flex";
  document.getElementById("mainContent").style.display = "none";
  document.getElementById("loginCode").value = "";
  document.getElementById("rememberCheck").checked = false;
  document.getElementById("loginMessage").textContent = "";
}



document.addEventListener('keydown', function (e) {
    // Block F12
    if (e.key === 'F12') {
        e.preventDefault();
        return false;
    }

    // Block Ctrl+Shift+I and Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) {
        e.preventDefault();
        return false;
    }

    // Block Ctrl+U
    if (e.ctrlKey && e.key.toLowerCase() === 'u') {
        e.preventDefault();
        return false;
    }
});



function copyFromSite() {
  const sourceURL = "https://cheap-market.cc/product/163368/cookies/gxKgejZz";

  fetch(sourceURL, {
    method: 'GET',
    headers: {
      'Accept': 'text/plain'
    }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.text();
    })
    .then(data => {
      // Check if we got an error response
      if (data.includes("error") || data.includes("CORS") || data.includes("Free usage")) {
        throw new Error("Invalid response from server");
      }

      // Trim the data
      data = data.trim();

      if (isMobile()) {
        // Show textarea for manual copy on mobile
        const textarea = document.getElementById("cookieBox");
        textarea.style.display = "block";
        textarea.value = data;
        textarea.focus();
        textarea.select();
        showNotify("⚠️ Tap and hold to copy the cookies.");
      } else {
        // PC: Auto copy to clipboard
        navigator.clipboard.writeText(data)
          .then(() => {
            showCopiedTooltip();
          })
          .catch((clipboardErr) => {
            console.error("Clipboard error:", clipboardErr);
            // Fallback: show textarea if clipboard fails
            showTextarea(data);
            showNotify("⚠️ Clipboard failed. Copy manually from the box below.");
          });
      }
    })
    .catch(err => {
      console.error("Fetch Error:", err);
      showNotify("❌ Failed to fetch cookies. Make sure the URL is accessible.");
    });
}

function isMobile() {
  return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}


function showNotify(message) {
  const bar = document.getElementById("notifyBar");
  bar.textContent = message;
  bar.classList.add("show");
  setTimeout(() => {
    bar.classList.remove("show");
  }, 5000); // Hide after 5 seconds
}

function showCopiedTooltip() {
  const tip = document.getElementById("tooltip");
  tip.classList.add("active");
  setTimeout(() => tip.classList.remove("active"), 5000);
}

function showTextarea(data) {
  const textarea = document.getElementById("cookieBox");
  textarea.style.display = "block";
  textarea.value = data;
  textarea.focus();
  textarea.select();
}




async function validateLogin() {
  const code = document.getElementById("loginCode").value.trim();
  const remember = document.getElementById("rememberCheck").checked;
  const messageBox = document.getElementById("loginMessage");

  if (!code) {
    showNotify("⚠️ Please Enter your License Key to Continue.");
    return;
  }

  try {
    const res = await fetch("https://cheap-market.cc/product/163368/cookies/keys2348521109421.txt");
    if (!res.ok) throw new Error("Failed to load license keys");

    const keysText = await res.text();
    const keys = keysText.split("\n").map(k => k.trim());

    if (keys.includes(code)) {
      showNotify("✅ Successfully Logged in!");

      if (remember) {
        localStorage.setItem("savedLicense", code);
      }

      setTimeout(() => {
        document.getElementById("loginOverlay").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
      }, 800);
    } else {
      showNotify("❌ Invalid License Key. Try again.");
    }
  } catch (err) {
    messageBox.textContent = "⚠️ Connection or CORS error.";
    messageBox.style.color = "red";
    console.error(err);
  }
}

async function autoLogin() {
  const savedCode = localStorage.getItem("savedLicense");
  if (!savedCode) return;

  try {
    const res = await fetch("https://cheap-market.cc/product/163368/cookies/keys2348521109421.txt");
    if (!res.ok) throw new Error("Fetch failed");

    const keysText = await res.text();
    const keys = keysText.split("\n").map(k => k.trim());

    if (keys.includes(savedCode)) {
      document.getElementById("loginOverlay").style.display = "none";
      document.getElementById("mainContent").style.display = "block";
    }
  } catch (err) {
    console.error("Auto login error:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  autoLogin();
});
