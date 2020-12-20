"use strict";

let videoBackground = document.querySelector("#video");
videoBackground.load();
videoBackground.muted = true; // contact page

let contactForm = document.querySelector('#contactForm');
contactForm.addEventListener('submit', () => {
    let fullname = document.querySelector('#fullname').value;
    let email = document.querySelector('#email').value;
    let radios = document.querySelectorAll('.subject');
    let subject;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            subject = radios[i].value;
            break;
        }
    }

    let message = document.querySelector('#contactForm #message').value;
    fetch({
        url: '/mail.php',
        type: 'post',
        data: {
            "fullname": fullname,
            "email": email,
            "subject": subject,
            "message": message,
        }
    }).then((response) => {
        let text = response === 1 ? "I'll e-mail to you ;)" : 'Something went wrong!';
        alert(text);
    });
    return false;
});