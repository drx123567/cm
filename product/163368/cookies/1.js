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
