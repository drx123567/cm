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
