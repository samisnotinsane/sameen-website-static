console.log('Hello world!')

const form = document.querySelector('form');
const sendConfirmation = document.querySelector('.sent-confirm');

sendConfirmation.style.display = 'none';

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent page auto-refresh
    const formData = new FormData(form);
    const email = formData.get('email');
    const message = formData.get('message');

    const msg = {
        email,
        message
    };

    form.style.display = 'none';
    sendConfirmation.style.display = '';
    console.log(msg);
});