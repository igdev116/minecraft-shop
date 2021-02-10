
function Validator(form, childForm, min, str) {
    let formEl = document.querySelector(form); // get element of form
    
    let childFormEls = formEl.querySelectorAll(childForm); // get elements of child form
    let inpEls = formEl.querySelectorAll('input[rule]'); // get elements of input whose attribute is rule

    // add span element to child form
    for (let childFormEl of childFormEls) {
        childFormEl.appendChild(document.createElement('span')).setAttribute('class', 'error-message');
    }

    // check rule of each input
    function ruleChecking(inpEl, str) {
        let inpAttr = inpEl.getAttribute('rule'); // get attribute value of input

        if (inpAttr === 'email') {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            return regex.test(inpEl.value) ? undefined : messageAdding(inpEl, str||'Trường này phải là Email', str||'red');
        } else if (inpAttr === 'password') {
            let regex = new RegExp(`^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{${min},}$`);

            return regex.test(inpEl.value) ? undefined : messageAdding(inpEl, str||`Vui lòng nhập tối thiểu ${min} kí tự`, str||'red');
        } else if (inpAttr === 'password_confirmation') {
            let passInp = formEl.querySelector('input[rule=password]');

            return inpEl.value === passInp.value ? undefined : messageAdding(inpEl, str||'Mật khẩu nhập lại không chính xác', str||'red');
        } 
    }

    // check if input has a parent and add error message
    function messageAdding(inpEl, message, color) {
        while (inpEl.parentElement) {
            let inpParent = inpEl.parentElement;

            if (inpParent.matches(childForm)) {
                let inpSpan = inpParent.querySelector('span.error-message');

                inpSpan.innerHTML = message;
                inpSpan.style = 'color: red; font-size: 0.95rem';
                inpEl.style = `border-color: ${color}`;
            }
            inpEl = inpParent;
        }
    }

    // loop through each input
    for (let inpEl of inpEls) {
        // clear form
        if (str) {
            formEl.reset();
            ruleChecking(inpEl, str);
            messageAdding(inpEl, str);
        }

        inpEl.onblur = () => {
            if (inpEl.value) {
                ruleChecking(inpEl);
            } else {
                messageAdding(inpEl, str||'Vui lòng nhập trường này', str||'red');
            }
        }

        inpEl.oninput = () => {
            messageAdding(inpEl, str||'', 'none');
        }
    }

    // handle when submit form
    formEl.onsubmit = (e) => {
        e.preventDefault();

        // check all forms before submitting
        for (let inpEl of inpEls) {
            if (inpEl.value) {
                ruleChecking(inpEl);
            } else {
                messageAdding(inpEl, str||'Vui lòng nhập trường này', str||'red');
            }
        }
    }
}

