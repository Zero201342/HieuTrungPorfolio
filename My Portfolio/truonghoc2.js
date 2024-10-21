document.querySelector('.home-icon').addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = 'test1.html'; 
});

document.querySelector('.content').addEventListener('mouseover', () => {
    document.querySelector('.content').style.boxShadow = '0 0 25px rgba(255, 255, 0, 0.7)';
});

document.querySelector('.content').addEventListener('mouseout', () => {
    document.querySelector('.content').style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
});


// Chặn F12
document.addEventListener('keydown', function (event) {
    if (event.key === 'F12') {
        event.preventDefault();
    }
});

// Chặn Ctrl+U
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
    }
});

// Chặn Ctrl+Shift+I (mở DevTools)
document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
    }
});
