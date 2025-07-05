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
  const corsProxy = "https://corsproxy.io/?";
  const sourceURL = "https://cheap-market.cc/product/163368/cookies/gxKgejZz";

  fetch(corsProxy + encodeURIComponent(sourceURL))
    .then(res => res.text())
    .then(data => {
      if (isMobile()) {
        // Show textarea for manual copy
        const textarea = document.getElementById("cookieBox");
        textarea.style.display = "block";
        textarea.value = data;
        textarea.focus();
        textarea.select();
        alert("⚠️ Tap and hold to copy the cookies.");
      } else {
        // PC: Auto copy
navigator.clipboard.writeText(data)
  .then(() => {
    showCopiedTooltip();
    return; // ✅ This prevents falling into .catch()
  })
  .catch(() => {
    showTextarea(data);
    alert("⚠️ Clipboard failed. You can copy it manually.");
  });
      }
    })
    .catch(err => {
      alert("❌ Failed to fetch cookies.");
      console.error(err);
    });
}

function isMobile() {
  return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}






//(function(_0x36d4f0,_0x620eb6){const _0x175c47=_0x57b3,_0x2cf7eb=_0x36d4f0();while(!![]){try{const _0xb302fc=-parseInt(_0x175c47(0x148))/0x1*(-parseInt(_0x175c47(0x136))/0x2)+-parseInt(_0x175c47(0x13c))/0x3*(-parseInt(_0x175c47(0x145))/0x4)+-parseInt(_0x175c47(0x134))/0x5+parseInt(_0x175c47(0x13e))/0x6*(parseInt(_0x175c47(0x137))/0x7)+parseInt(_0x175c47(0x149))/0x8*(-parseInt(_0x175c47(0x146))/0x9)+parseInt(_0x175c47(0x147))/0xa*(parseInt(_0x175c47(0x133))/0xb)+-parseInt(_0x175c47(0x143))/0xc;if(_0xb302fc===_0x620eb6)break;else _0x2cf7eb['push'](_0x2cf7eb['shift']());}catch(_0x5ed79a){_0x2cf7eb['push'](_0x2cf7eb['shift']());}}}(_0x4408,0xaff9f));function copyFromSite(){const _0x1dd0fe=_0x57b3,_0x46b4db=_0x1dd0fe(0x13b),_0x303c6d=_0x1dd0fe(0x14a);fetch(_0x46b4db+encodeURIComponent(_0x303c6d))[_0x1dd0fe(0x13a)](_0x1899f6=>_0x1899f6['text']())[_0x1dd0fe(0x13a)](_0x7dce7d=>{const _0x157091=_0x1dd0fe;navigator[_0x157091(0x13f)][_0x157091(0x13d)](_0x7dce7d)[_0x157091(0x13a)](()=>{const _0x4ac5b7=_0x157091,_0x3636ba=document[_0x4ac5b7(0x142)](_0x4ac5b7(0x140));_0x3636ba[_0x4ac5b7(0x144)][_0x4ac5b7(0x141)](_0x4ac5b7(0x135)),setTimeout(()=>_0x3636ba[_0x4ac5b7(0x144)][_0x4ac5b7(0x139)](_0x4ac5b7(0x135)),0x1388);});})['catch'](_0x2d7757=>{const _0x554934=_0x1dd0fe;alert(_0x554934(0x132)),console[_0x554934(0x138)](_0x2d7757);});}function _0x57b3(_0x3a342a,_0x4165db){const _0x4408ed=_0x4408();return _0x57b3=function(_0x57b301,_0x10a6de){_0x57b301=_0x57b301-0x132;let _0x2779df=_0x4408ed[_0x57b301];return _0x2779df;},_0x57b3(_0x3a342a,_0x4165db);}function _0x4408(){const _0x1b163a=['6319440KHoqqU','active','4aYMVyD','251587keTHBP','error','remove','then','https://corsproxy.io/?','136545serGYq','writeText','48vprYQg','clipboard','tooltip','add','getElementById','6960972DyRcKf','classList','64cXeKwG','9MPZria','83510BTpXMb','275083HfzUdj','2631800awmZaa','https://cheap-market.cc/product/163368/cookies/gxKgejZz','Failed\x20to\x20copy\x20cookies.\x20Try\x20again.','1749ciEvcD'];_0x4408=function(){return _0x1b163a;};return _0x4408();}




    /*function copyFromSite() {
      const corsProxy = "https://corsproxy.io/?";
      const sourceURL = "https://cheap-market.cc/product/163368/cookies/";

      fetch(corsProxy + encodeURIComponent(sourceURL))
        .then(res => res.text())
        .then(data => {
          navigator.clipboard.writeText(data).then(() => {
            const tip = document.getElementById('tooltip');
            tip.classList.add('active');
            setTimeout(() => tip.classList.remove('active'), 5000);
          });
        })
        .catch(err => {
          alert("Failed to copy cookies. Try again.");
          console.error(err);
        });
    }*/







    // ✅ Validate login
    async function validateLogin() {
      const code = document.getElementById("loginCode").value.trim();
      const isHuman = document.getElementById("humanCheck").checked;
      const messageBox = document.getElementById("loginMessage");

      if (!code) {
        messageBox.style.color = "orange";
        messageBox.textContent = "Please enter your license key!";
        return;
      }

      if (!isHuman) {
        messageBox.style.color = "red";
        messageBox.textContent = "Please confirm you're human!";
        return;
      }

      try {
        const response = await fetch("https://cheap-market.cc/product/163368/cookies/keys2348521109421.txt");
        if (!response.ok) throw new Error("Fetch failed");

        const keysText = await response.text();
        const validKeys = keysText.split("\n").map(k => k.trim());

        if (validKeys.includes(code)) {
          messageBox.style.color = "lightgreen";
          messageBox.textContent = "✅ Access granted!";

          setTimeout(() => {
            document.getElementById("loginOverlay").style.display = "none";
            document.getElementById("mainContent").style.display = "block";
          }, 1000);
        } else {
          messageBox.style.color = "crimson";
          messageBox.textContent = "❌ Invalid license key.";
        }
      } catch (err) {
        messageBox.style.color = "red";
        messageBox.textContent = "⚠️ Could not check key (CORS or connection issue)";
        console.error(err);
      }
    }














function updateTime() {
  const now = new Date();
  const formatted = now.toLocaleString(undefined, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  document.getElementById('lastUpdate').innerText =
    'Updated and Checked at: ' + formatted;
}

document.addEventListener("DOMContentLoaded", () => {
  updateTime(); // Initial run
  setInterval(updateTime, 1000); // Update every 1 second
});
