document.querySelector('.home-icon').addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = 'test1.html'; 
});


document.getElementById('clickMeButton').addEventListener('click', () => {
    const answer = prompt("What is 2 + 2?");
    if (answer === "4") {
        const skillContainer = document.getElementById('skillContainer');
        skillContainer.classList.remove('hidden');
    } else {
        alert("Incorrect answer. Try again!");
    }
});

document.querySelectorAll('.skill-logo').forEach((item) => {
    item.addEventListener('click', () => {
        const infoContainer = document.getElementById('skillInfoContainer');
        const skillInfo = item.parentElement.getAttribute('data-info');

        // Sử dụng thẻ <p> để tạo đoạn văn bản, đảm bảo không che mất phần Trang Chủ
        if (infoContainer.innerHTML.includes(`<p>${skillInfo}</p>`)) {
            infoContainer.innerHTML = infoContainer.innerHTML.replace(`<p>${skillInfo}</p>`, '').trim();
            if (infoContainer.innerHTML === '') {
                infoContainer.style.display = 'none';
            }
        } else {
            infoContainer.style.display = 'block';
            infoContainer.innerHTML += `<p>${skillInfo}</p>`;
        }
    });

    item.addEventListener('mouseover', () => {
        item.style.boxShadow = '0 0 25px rgba(255, 255, 0, 0.7)';
    });

    item.addEventListener('mouseout', () => {
        item.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
    });
});



document.querySelector('.clickMeButton').addEventListener('mouseover', () => {
    document.querySelector('.clickMeButton').style.boxShadow = '0 0 25px rgba(255, 255, 0, 0.7)';
});
document.querySelector('.clickMeButton').addEventListener('mouseout', () => {
    document.querySelector('.clickMeButton').style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
});



document.querySelector('.skillInfoContainer').addEventListener('mouseover', () => {
    document.querySelector('.skillInfoContainer').style.boxShadow = '0 0 25px rgba(255, 255, 0, 0.7)';
});
document.querySelector('.skillInfoContainer').addEventListener('mouseout', () => {
    document.querySelector('.skillInfoContainer').style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
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
