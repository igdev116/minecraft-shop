function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// plus product quantity to input
function addProductQnt(inpCtn) {
    let inpEl = inpCtn.querySelector('.shop__qnt-input'); // get element of input
    let qntValue = Number(inpEl.getAttribute('value')); // get value of input

    let decBtn = inpCtn.querySelector('.shop__qnt-btn--dec'); // get element of decrease button
    let incBtn = inpCtn.querySelector('.shop__qnt-btn--inc'); // get element of increase button

    // let maxQnt = Number(document.querySelector('.product__qnt-note-num').innerHTML); // get element of max quantity then convert to number
    let maxQnt = 1100;

    inpEl.setAttribute('maxlength', (maxQnt.toString()).length);

    inpEl.oninput = () => {
        inpEl.setAttribute('value', inpEl.value);
        qntValue = Number(inpEl.value);

        if (inpEl.value >= maxQnt) {
            inpEl.value = maxQnt;
            inpEl.setAttribute('value', maxQnt);
            qntValue = Number(inpEl.value);
        }

        if (/^\d*$/.test(inpEl.value)) {
            inpEl.oldValue = inpEl.value;
        } else if ('oldValue' in inpEl) {
            inpEl.setAttribute('value', inpEl.oldValue);
            inpEl.value = inpEl.oldValue;
        } else {
            inpEl.value = '';
        }
    }

    window.onclick = () => {
        if (inpEl.value === '') {
            inpEl.setAttribute('value', '1');
            inpEl.value = 1;
        }
    }
    
    incBtn.onclick = () => {
        if (qntValue < maxQnt) {
            inpEl.setAttribute('value', qntValue += 1);
            inpEl.value = qntValue;
        }
    }   

    decBtn.onclick = () => {
        if (qntValue > 1) {
            inpEl.setAttribute('value', qntValue -= 1);
            inpEl.value = qntValue;
        } 
    }
}

// render toast message when voucher save button is clicked
function sildeToastMsg(btns) {
    let toastCtn = document.querySelector('.toast-msg-container'); // get element of toast message container

    for (let saveBtn of btns) {
        saveBtn.onclick = () => {
            let toastMsgEl = document.createElement('div');

            toastMsgEl.classList.add('toast-msg');
            toastMsgEl.innerHTML = `
                <i class="toast-msg__icon fas fa-check-circle"></i>
                <div class="toast-msg__body">
                    <div class="toast-msg__title">Chúc mừng!</div>
                    <div class="toast-msg__content">Bạn đã lưu mã giảm giá của Shop thành công</div>
                </div>
                <i class="toast-msg__close fas fa-times"></i>
            `;
            toastCtn.appendChild(toastMsgEl);

            let toastClose = toastCtn.querySelector('.toast-msg__close');

            let autoRemoveId = setTimeout(() => {
                toastCtn.removeChild(toastMsgEl);
            }, 3000);

            toastMsgEl.onclick = (el) => {
                if (el.target.closest('.toast-msg__close')) {
                    toastCtn.removeChild(toastMsgEl);
                    clearTimeout(autoRemoveId);
                }
            }
        }
    }
}