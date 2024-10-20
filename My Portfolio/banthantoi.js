document.querySelector('.home-icon').addEventListener('click', (event) => {
    event.preventDefault(); 
    window.location.href = 'test1.html'; 
});


document.addEventListener('DOMContentLoaded', function() {
    const contentSections = document.querySelectorAll('.content-box h2, .content-box p, .content-box blockquote');
    

    contentSections.forEach(section => {
        section.classList.add('fade-in');
    });


    window.addEventListener('scroll', function() {
        contentSections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (sectionPosition < screenPosition) {
                section.classList.add('fade-in');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const profileLogo = document.querySelector('.profile-logo');
    profileLogo.addEventListener('mouseenter', () => {
        profileLogo.classList.add('hover-effect');
    });
    profileLogo.addEventListener('mouseleave', () => {
        profileLogo.classList.remove('hover-effect');
    });
});

document.querySelector('.content-box').addEventListener('mouseover', () => {
    document.querySelector('.content-box').style.boxShadow = '0 0 25px rgba(255, 255, 0, 0.7)';
});

document.querySelector('.content-box').addEventListener('mouseout', () => {
    document.querySelector('.content-box').style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
});

 
document.querySelector('.profile-logo').addEventListener('mouseover', () => {
    document.querySelector('.profile-logo').style.boxShadow = '0 0 25px rgba(255, 255, 0, 0.7)';
});

document.querySelector('.profile-logo').addEventListener('mouseout', () => {
    document.querySelector('.profile-logo').style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
});