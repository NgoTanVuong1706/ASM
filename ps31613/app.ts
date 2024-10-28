// Xử lý cuộn mượt mà khi nhấn vào các liên kết điều hướng
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')!.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Xử lý sự kiện gửi form liên hệ
const contactForm = document.querySelector('.contact-form') as HTMLFormElement;
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ với chúng tôi!');
    contactForm.reset();
});
