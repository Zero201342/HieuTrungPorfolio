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
