// Xử lý cuộn mượt mà khi nhấn vào các liên kết điều hướng
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
// Xử lý sự kiện gửi form liên hệ
var contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ với chúng tôi!');
    contactForm.reset();
});
