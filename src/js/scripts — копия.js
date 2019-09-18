document.addEventListener("DOMContentLoaded", function() {

    const myForm = document.querySelector('#myForm');
    const sendBtn = document.querySelector('#button-send');
    

    let sendform = (e) => {
        e.preventDefault();
        if(chechVal(myForm)) {
            const data = {
                name: myForm.elements.name.value,
                phone: myForm.elements.tel.value,
                comment: myForm.elements.comment.value,
                to: 'klepnev-ea@yandex.ru'
            }
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            xhr.send(JSON.stringify(data));
            xhr.addEventListener('load', () => {
                console.log(xhr.response);
            })
        };
        
    }

    const chechVal = (form) => {
        let valid = true;

        if(!chechValFild(form.elements.name)) {
            valid = false;
        }

        if(!chechValFild(form.elements.tel)) {
            valid = false;
        }

        if(!chechValFild(form.elements.street)) {
            valid = false;
        }

        if(!chechValFild(form.elements.house)) {
            valid = false;
        }

        if(!chechValFild(form.elements.float)) {
            valid = false;
        }

        if(!chechValFild(form.elements.appartament)) {
            valid = false;
        }

        return valid;
    }

    const chechValFild = (field) => {
        field.parentNode.nextElementSibling.textContent = field.validationMessage;
        return field.checkValidity();
    }

    

    sendBtn.addEventListener('click', sendform);

})