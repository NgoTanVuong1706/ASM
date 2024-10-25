// Import styles cho dự án
import './styles.css';

// Lấy tất cả các liên kết điều hướng
const navLinks = document.querySelectorAll('header nav ul li a');
const sections = document.querySelectorAll('section');

// Di chuyển đến phần tương ứng khi người dùng nhấn vào liên kết
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1);
        const targetSection = document.getElementById(targetId as string);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Xử lý form liên hệ
const contactForm = document.querySelector('.contact-form') as HTMLFormElement;
const nameInput = contactForm.querySelector('input[name="name"]') as HTMLInputElement;
const emailInput = contactForm.querySelector('input[name="email"]') as HTMLInputElement;
const messageInput = contactForm.querySelector('textarea[name="message"]') as HTMLTextAreaElement;

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Thu thập dữ liệu
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name && email && message) {
        // Hiển thị thông báo thành công
        alert(`Cảm ơn ${name}! Yêu cầu của bạn đã được gửi.`);
        
        // Xóa dữ liệu sau khi gửi
        contactForm.reset();
    } else {
        alert('Vui lòng điền đầy đủ thông tin.');
    }
});
