"use strict";
exports.__esModule = true;
// Import styles cho dự án
require("./styles.css");
// Lấy tất cả các liên kết điều hướng
var navLinks = document.querySelectorAll('header nav ul li a');
var sections = document.querySelectorAll('section');
// Di chuyển đến phần tương ứng khi người dùng nhấn vào liên kết
navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        var _a;
        e.preventDefault();
        var targetId = (_a = link.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.substring(1);
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Xử lý form liên hệ
var contactForm = document.querySelector('.contact-form');
var nameInput = contactForm.querySelector('input[name="name"]');
var emailInput = contactForm.querySelector('input[name="email"]');
var messageInput = contactForm.querySelector('textarea[name="message"]');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Thu thập dữ liệu
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var message = messageInput.value.trim();
    if (name && email && message) {
        // Hiển thị thông báo thành công
        alert("C\u1EA3m \u01A1n " + name + "! Y\u00EAu c\u1EA7u c\u1EE7a b\u1EA1n \u0111\u00E3 \u0111\u01B0\u1EE3c g\u1EEDi.");
        // Xóa dữ liệu sau khi gửi
        contactForm.reset();
    }
    else {
        alert('Vui lòng điền đầy đủ thông tin.');
    }
});
