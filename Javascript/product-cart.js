// render cart products
function renderCartProducts() {
    const cartProductsInfo = [
        {
            name: 'Balo Creeprer Minecraft siêu gọn nhẹ có nhiều ngăn chứa vô cùng tiện lợi',
            type: 'Hang động',
            oldPrice: 396000,
            curPrice: 259000,
            img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/7652p_262c_1x_e931ecde-ec21-47ef-96eb-8424c3913890_800x.jpg?v=1608318433'
        },
        {
            name: 'Áo khoác cổ thuyền xạ thủ Steve tiêu diệt Skeleton',
            type: 'Áo quần',
            oldPrice: 140000,
            curPrice: 119900,
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/MCJM-SNPR-100000-MF_1800x1800.png?v=1614103586'
        },
        {
            name: 'Cuốc Minecraft được làm bằng xốp',
            type: 'Đồ chơi',
            oldPrice: 110000,
            curPrice: 35000,
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/65685_1800x1800.jpg?v=1611864424'
        }
    ] // save cart products info
    let cartProductsCtn = document.querySelector('.cart-item-container'); // get element of cart products container
    let cartProductsCtnMob = document.querySelector('.cart-item-container-mobile'); // get element of mobile cart products container
    let cartProductEl = ''; // save cart product elements

    if (window.matchMedia("(min-width: 1024px)").matches) {
        for (let cartProductInfo of cartProductsInfo) {
            cartProductEl += 
            `
                <div class="cart-item">
                    <div class="shop-checkbox shop-checkbox-sup">
                        <input class="shop-checkbox__input" type="checkbox">
                        <div class="shop-checkbox__bgc"></div>
                    </div>
        
                    <div class="cart-item__overview">
                        <a href="#" class="cart-item__overview-img-link">
                            <img class="cart-item__overview-img" src="${cartProductInfo.img}">
                        </a>
                        <a href="#" class="cart-item__overview-name">${cartProductInfo.name}</a>
                    </div>
        
                    <div class="cart-item__variations">
                        <div class="cart-item__variation-label">
                            Phân loại hàng:
                            <button class="cart-item__variation-btn-arrow">
                                <i class="cart-item__variation-icon-arrow-down fas fa-sort-down"></i>
                            </button>
                        </div>
                        <div class="cart-item__variation-model">${cartProductInfo.type}</div>
                    </div>
        
                    <div class="cart-item__price">
                        <div class="cart-item__price-old">₫${numberWithCommas(cartProductInfo.oldPrice)}</div>
                        <div class="cart-item__price-current">₫${numberWithCommas(cartProductInfo.curPrice)}</div>
                    </div>
        
                    <div class="shop__qnt-btns">
                        <button class="shop__qnt-btn shop__qnt-btn--dec">
                            <i class="shop__qnt-btn-icon fas fa-minus"></i>
                        </button>
                        <input class="shop__qnt-input" type="text" value="1"></input>
                        <button class="shop__qnt-btn shop__qnt-btn--inc">
                            <i class="shop__qnt-btn-icon fas fa-plus"></i>
                        </button>
                    </div>
        
                    <div class="cart-item__price-total">₫${numberWithCommas(cartProductInfo.curPrice)}</div>
        
                    <div class="cart-item__actions">
                        <button class="cart-item__action-remove">Xóa</button>
                        <button class="cart-item__action-search">
                            <span class="cart-item__action-search-title">Tìm sản phẩm tương tự</span>
                            <i class="cart-item__action-search-icon fas fa-sort-down"></i>
                        </button>
                    </div>
                </div>
            `
        } 
        cartProductsCtn.innerHTML = cartProductEl;
    } else {
        for (let cartProductInfo of cartProductsInfo) {
            cartProductEl += 
            `
                <div class="cart-item cart-item-mobile">
                    <div class="cart-item-col-1">
                        <div class="shop-checkbox shop-checkbox-sup">
                            <input class="shop-checkbox__input" type="checkbox">
                            <div class="shop-checkbox__bgc"></div>
                        </div>
                        
                        <div class="cart-item__overview">
                            <a href="#" class="cart-item__overview-img-link">
                                <img class="cart-item__overview-img" src="${cartProductInfo.img}">
                            </a>
                        </div>
                    </div>
                    
                    <div class="cart-item-col-2">
                        <a href="#" class="cart-item__overview-name">${cartProductInfo.name}</a>
                        <div class="cart-item__variations">
                            <div class="cart-item__variation-label">
                                Phân loại hàng:
                                <button class="cart-item__variation-btn-arrow">
                                    <i class="cart-item__variation-icon-arrow-down fas fa-sort-down"></i>
                                </button>
                            </div>
                            <div class="cart-item__variation-model hide-on-mobile">${cartProductInfo.type}</div>
                        </div>
    
                        <div class="cart-item__price">
                            <div class="cart-item__price-old">₫${numberWithCommas(cartProductInfo.oldPrice)}</div>
                            <div class="cart-item__price-current">₫${numberWithCommas(cartProductInfo.curPrice)}</div>
                        </div>
    
                        <div class="shop__qnt-btns">
                            <button class="shop__qnt-btn shop__qnt-btn--dec">
                                <i class="shop__qnt-btn-icon fas fa-minus"></i>
                            </button>
                            <input class="shop__qnt-input" type="text" value="1"></input>
                            <button class="shop__qnt-btn shop__qnt-btn--inc">
                                <i class="shop__qnt-btn-icon fas fa-plus"></i>
                            </button>
                        </div>
    
                        <div class="cart-item__price-total hide-on-mobile-tablet">₫${numberWithCommas(cartProductInfo.curPrice)}</div>
    
                        <div class="cart-item__actions hide-on-mobile-tablet">
                            <button class="cart-item__action-remove">Xóa</button>
                            <button class="cart-item__action-search">
                                <span class="cart-item__action-search-title">Tìm sản phẩm tương tự</span>
                                <i class="cart-item__action-search-icon fas fa-sort-down"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `
        }
        cartProductsCtn.innerHTML = cartProductEl;
    }
}

renderCartProducts();

// render toast message when voucher save button is clicked
let cartVouSaveBtn = document.querySelectorAll('.cart-voucher__btn-save'); // get element of cart voucher save button
sildeToastMsg(cartVouSaveBtn);

// handle add products quanity
let cartProductsCtn = document.querySelector('.cart-item-container'); // get element of cart items container
let cartEls = cartProductsCtn.querySelectorAll('.cart-item'); // get element of cart items
for (let cartEl of cartEls) {
    cartQntAndPrice(cartEl);
}

// plus product quantity to input
function cartQntAndPrice(el) {
    let inpEl = el.querySelector('.shop__qnt-input'); // get element of input
    let qntValue = Number(inpEl.getAttribute('value')); // get value of input
    let decBtn = el.querySelector('.shop__qnt-btn--dec'); // get element of decrease button
    let incBtn = el.querySelector('.shop__qnt-btn--inc'); // get element of increase button

    // let maxQnt = Number(document.querySelector('.product__qnt-note-num').innerHTML); // get element of max quantity then convert to number
    let maxQnt = 1100;

    let priceTotal = el.querySelector('.cart-item__price-total'); // get element of total price of item
    let cartEls = document.querySelectorAll('.cart-item'); // get element of cart items
    let amountTotal = document.querySelector('.cart-page-footer__summary-total-amount'); // get element of total amount
    let amountTotalNew = 0;

    let itemsQnt = document.querySelector('.cart-page-footer__summary-total-text .qnt'); // get element of current cart items quanity
    let allQntBtn = document.querySelector('.cart-page-footer__select-all'); // get element of cart sellect all quanity button
    let allQnt = allQntBtn.querySelector('.qnt'); // get element of cart sellect all quanity
    
    let cartElsQnt; // save quantity of cart items

    // get quantity of cart items
    let getCardsQnt = () => {
        let cartProductsCtn = document.querySelector('.cart-item-container'); // get element of cart items container
        let cartEls = cartProductsCtn.querySelectorAll('.cart-item'); // get element of cart items
        cartElsQnt = 0;
        
        for (let cartEl of cartEls) {
            cartElsQnt += Number(cartEl.querySelector('.shop__qnt-input').value);
        }
        itemsQnt.innerHTML = cartElsQnt;
        allQnt.innerHTML = cartElsQnt;
    }

    getCardsQnt();

    // handle total price when manipulate with input
    let handlePriceTotal = (btn) => {
        let curPrice = btn.parentElement.previousElementSibling.querySelector('.cart-item__price-current').innerHTML; // get element of current price
        curPrice = Number(curPrice.replace(/₫|\./g, '')); // convert current price to number
        curPrice *= inpEl.value;
        priceTotal.innerHTML = `₫${numberWithCommas(curPrice)}`;
    }
    
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

        handlePriceTotal(inpEl);
        handleAmountTotal(0);
        getCardsQnt(inpEl.value);
    }

    window.onclick = () => {
        let inpEls = document.querySelectorAll('.shop__qnt-input'); // get element of inputs
        for (let inpEl of inpEls) {
            if (inpEl.value === '') {
                let inpPar = inpEl.parentElement; // get element of input's parrent
                let oldPrice = inpPar.previousElementSibling.querySelector('.cart-item__price-current').innerHTML; // get element of old price
                let totalPrice = inpPar.nextElementSibling; // get element of total price
                
                inpEl.setAttribute('value', '1');
                inpEl.value = 1;
                totalPrice.innerHTML = oldPrice;
                handleAmountTotal(0);
            }
        }
    }
    
    incBtn.onclick = () => {
        if (incBtn.previousElementSibling.value === '1') {
            qntValue = 1;
        }

        if (qntValue < maxQnt) {
            inpEl.setAttribute('value', qntValue += 1);
            inpEl.value = qntValue;
            
            handlePriceTotal(incBtn);
            handleAmountTotal(0);
            getCardsQnt(inpEl.value);
        }
    }   

    decBtn.onclick = () => {
        if (qntValue > 1) {
            inpEl.setAttribute('value', qntValue -= 1);
            inpEl.value = qntValue;

            handlePriceTotal(decBtn);
            handleAmountTotal(0);
            getCardsQnt(inpEl.value);
        } 
    }

    // handle amount total
    let handleAmountTotal = (num) => {
        let cartEls = document.querySelectorAll('.cart-item'); // get element of cart items
        if (num === 0) {
            amountTotalNew = num;
        }

        for (let cartEl of cartEls) {
            let cartElPrice = cartEl.querySelector('.cart-item__price-total').innerHTML; 
            cartElPrice = Number(cartElPrice.replace(/₫|\./g, '')); // convert current price to number
            amountTotalNew += cartElPrice;
        }
        amountTotal.innerHTML = `₫${numberWithCommas(amountTotalNew)}`;
    }

    handleAmountTotal();

    // handle actions
    let handleActions = () => {
        let suggest = document.querySelector('.cart-suggestion'); // get element of cart suggestion
        let proHeaderCtn = document.querySelector('.cart-page-product-header'); // get element of cart product header container
        let proBodyCtn = document.querySelector('.cart-page-shop-container'); // get element of cart product body container
        let profooterCtn = document.querySelector('.cart-page-footer'); // get element of cart product footer container
        let empCart = document.querySelector('.empty-cart'); // get element of empty cart

        // remove all parts when cart is empty
        let removeAllParts = () => {
            suggest.remove();
            proHeaderCtn.remove();
            proBodyCtn.remove();
            profooterCtn.remove();
        }

        // check cart items length
        let checkLen = () => {
            return document.querySelectorAll('.cart-item').length; // get element of cart items length
        }

        // delete cart products
        let delCartProduct = () => {
            let cartEls = document.querySelectorAll('.cart-item'); // get element of carts

            for (let cartEl of cartEls) {
                let delBtn = cartEl.querySelector('.cart-item__action-remove'); // get element of cart delete button
                
                delBtn.onclick = () => {
                    cartEl.remove();

                    handleAmountTotal(0);
                    getCardsQnt();

                    if (checkLen() === 0) {
                        removeAllParts();
                        empCart.style.display = 'flex';
                    }
                }
            }
        }

        delCartProduct();

        let allCheck = document.querySelector('#shop-checkbox-all'); // get element of checkbox all input
        let supChecks = document.querySelectorAll('.shop-checkbox-sup'); // get element of sup input checkboxs
        let delBtnMain = document.querySelector('.cart-page-footer__remove'); // get element of delete button
        let checkCl = 'shop-checkbox--checked';
    
        for (let supCheck of supChecks) {
            supCheck.oninput = () => {
                if (supCheck.classList.contains(checkCl)) {
                    supCheck.classList.remove(checkCl);
                    allCheck.classList.remove(checkCl);
                } else {
                    supCheck.classList.add(checkCl);
                }
            }
        }

        // auto checked all checkbox when checkbox all is clicked
        let checkAll = () => {
            if (allCheck.classList.contains(checkCl)) {
                allCheck.classList.remove(checkCl);
            } else {
                allCheck.classList.add(checkCl);
            }

            for (let supCheck of supChecks) {
                if (supCheck.classList.contains(checkCl)) {
                    supCheck.classList.remove(checkCl);
                } 
                if (allCheck.classList.contains(checkCl)) {
                    supCheck.classList.add(checkCl);
                }
            }
        }

        allQntBtn.onclick = () => {
            checkAll();
        }
    
        allCheck.oninput = () => {
            checkAll();
        }
        
        let checkedItemsQnt; // save checked items quantity
        // count checked items quantity
        let countQnt = (el) => {
            checkedItemsQnt = 0;
            for (let cartEl of cartEls) {
                if (cartEl.querySelector('.shop-checkbox').classList.contains(checkCl)) {
                    checkedItemsQnt++;
                }
            }
            console.log(el)
            el.innerHTML = checkedItemsQnt;
        }

        delBtnMain.onclick = () => {
            if (allCheck.classList.contains(checkCl)) {
                removeAllParts();
                empCart.style.display = 'flex';
                confirmCtn.style.display = 'none';
            }

            let confirmCtn = document.querySelector('.confirm-deletion-container'); // get element of deletion confirm container 
            let cfmOverlay = confirmCtn.querySelector('.confirm-deletion-overlay'); // get element of deletion confirm overlay 
            let cfmItemsQnt = confirmCtn.querySelector('.qnt'); // get element of deletion confirm items quantity
            countQnt(cfmItemsQnt);

            for (let cartEl of cartEls) {
                if (cartEl.querySelector('.shop-checkbox').classList.contains(checkCl)) {
                    confirmCtn.style.display = 'flex';

                    let cfmBackBtn = confirmCtn.querySelector('.confirm-deletion__btn--back'); // get element of confirm back button
                    let cfmAgreeBtn = confirmCtn.querySelector('.confirm-deletion__btn--agree'); // get element of confirm back agree

                    cfmBackBtn.onclick = () => {
                        confirmCtn.style.display = 'none';
                    }

                    cfmAgreeBtn.onclick = () => {
                        let cartEls = document.querySelectorAll('.cart-item'); // get element of cart items

                        for (let cartEl of cartEls) {
                            if (cartEl.querySelector('.shop-checkbox').classList.contains(checkCl)) {
                                cartEl.remove();
                            }
                        }

                        if (checkLen() === 0) {
                            removeAllParts();
                            empCart.style.display = 'flex';
                        }

                        getCardsQnt();
                        confirmCtn.style.display = 'none';
                    }

                    cfmOverlay.onclick = () => {
                        confirmCtn.style.display = 'none';
                    }
                }
            }
        }
    }
    
    handleActions();
}

// render cart carousel items
function renderCartCrsItems() {
    const crsItemsInfo = [
        {
            name: 'Trọn bộ Stiker Minecraft Education Edition',
            price: 5900,
            img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/8316p_99c_1x_4317c0a9-8c2d-4f38-9a2d-61e03c14001b_800x.jpg?v=1607458896',
            discount: 32,
            sold: 41
        },
        {
            name: 'Móc khóa lợn bám bùn Minecraft Earth',
            price: 9900,
            img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/10758p_99c_1x_800c358a-9c22-4488-9565-93668c38053e_800x.jpg?v=1610399275',
            discount: 17,
            sold: 44
        },
        {
            name: 'Bộ ghim cừu Minecraft MINECON Earth 2018',
            price: 10000,
            img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/9283p_28c_2x_9cc4830c-d6c2-43f8-b3dd-10fb4081fcd2_800x.jpg?v=1607528622',
            discount: 21,
            sold: 12
        },
        {
            name: 'Áo thun ngắn Steve và Alex khám phá đại dương Minecraft',
            price: 120000,
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/MCIC-SCBA-100016-MF_1800x1800.png?v=1612792091',
            discount: 15,
            sold: 124
        },
        {
            name: 'Hộp ăn trưa gia đình Miner',
            price: 210000,
            img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/9489p_28c_2x_847989c3-a873-4f92-9abd-a39503228363_800x.jpg?v=1610059374',
            discount: 55,
            sold: 351
        },
        {
            name: 'Ly gốm mặt gà Minecraft màu trắng',
            price: 95000,
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/MCIC-DUCKFC-100040-11oz-left-MF_1800x1800.png?v=1614203653',
            discount: 62,
            sold: 1112
        },
        {
            name: 'Túi cỏ xanh có nắp đa chức năng Minecraft',
            price: 310000,
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/886388162130Minecraft-Green-Grass-Storage-Bin-with-Lid-Merch-1-7_1800x1800.jpg?v=1612801808',
            discount: 11,
            sold: 152
        },
        {
            name: 'Áo len thun có mũ Dân làng ác Minecraft',
            price: 110000,
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/MCJM-BDOMN-100002-MF_1800x1800.png?v=1614028381',
            discount: 11,
            sold: 2
        },
        {
            name: 'Set đồ ngủ Minecraft 3 cái',
            price: 255000,
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/32281163907-1_1800x1800.jpg?v=1611683523',
            discount: 12,
            sold: 33
        },
    ] // save carousel cart items info
    let crsCtn = document.querySelector('.cart-page-carousel-container'); // get element of carousel container
    let crsItems = ''; // save carousel items

    for (let crsItemInfo of crsItemsInfo) {
        crsItems += `
        <div class="cart-page-carousel__item-wrapper">
            <a href="#" class="cart-page-carousel__item">
                <div class="cart-page-carousel__item-img-wrapper">
                    <img class="cart-page-carousel__item-img" src="${crsItemInfo.img}">
                </div>

                <div class="product-favourite">Yêu thích</div>

                <div class="product-sale-off">
                    <span class="product-sale-off__percent">${crsItemInfo.discount}%</span>
                    <span class="product-sale-off__label">GIẢM</span>
                </div>

                <div class="cart-page-carousel__item-container">
                    <div class="cart-page-carousel__item-name">${crsItemInfo.name}</div>
                    <div class="cart-page-carousel__item-bottom">
                        <div class="cart-page-carousel__item-price">₫${numberWithCommas(crsItemInfo.price)}</div>
                        <div class="cart-page-carousel__item-sold">${crsItemInfo.sold} đã bán</div>
                    </div>
                </div>
            </a>
        </div>
        `
    }

    crsCtn.innerHTML = crsItems;
}

renderCartCrsItems();

function cartsCarousel() {
    let crsCtn = document.querySelector('.cart-page-carousel-container'); // get element of carousel container
    let prevBtn = document.querySelector('.cart-page-carousel__items-btn--prev'); // get element of previous button
    let nextBtn = document.querySelector('.cart-page-carousel__items-btn--next'); // get element of next button
    let crsItems = document.querySelectorAll('.cart-page-carousel__item-wrapper'); // get element of carousel items
    let crsItemWidth = crsItems[0].offsetWidth;
    let counter = 0;


    // hide or show buttons
    let hideOrShow = {
        hide: (el) => {
            el.style.display = 'none';
        },
        show: (el) => {
            el.style.display = 'block';
        }
    }

    hideOrShow.hide(nextBtn);
    hideOrShow.hide(prevBtn);

    if (crsItems.length > 5) {
        hideOrShow.show(nextBtn);
        
        nextBtn.onclick = () => {
            counter++;
            crsCtn.style.transform = `translateX(${-crsItemWidth * counter}px)`;
            
            hideOrShow.show(prevBtn);
            if (counter === crsItems.length - 6) hideOrShow.hide(nextBtn);
        }
    }

    prevBtn.onclick = () => {
        counter--;
        crsCtn.style.transform = `translateX(${-crsItemWidth * counter}px)`;
        
        if (counter === 0) hideOrShow.hide(prevBtn);
        if (crsItems.length > 5) hideOrShow.show(nextBtn);
    }
}

cartsCarousel();