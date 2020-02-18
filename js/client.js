window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in form
    const sendConfirmation = document.querySelector('.sent-confirm');
    const form = document.querySelector('form');

    // Success and Error functions for after the form is submitted
    function success() {
        form.reset();
        sendConfirmation.style.display = '';
        form.style.display = 'none';
    }

    function error() {
        sendConfirmation.style.display = '';
        form.style.display = 'none';
        sendConfirmation.innerHTML = '⚠️ Dang! Something must\'ve broken. ' +
        'Please <a href="https://twitter.com/samisnotinsane7">Tweet me</a> so I can fix this issue ASAP.';
    }

    // handle the form submission event
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        const data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request
function ajax(method, url, data, success, error) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

function closeHireAlert() {
    const hireAlertCloseBtn = document.querySelector('.closebtn');
    hireAlertCloseBtn.parentElement.style.display = 'none';

}
