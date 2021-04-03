function renderProductInfo() {
    let productInfo =
    `<div class="grid wide" style="padding-top: 25px;">
        <!-- Product slide & content -->
        <div class="row sm-gutter product">
            <div class="col l-5">
                <div class="product-slide">
                    <img src="https://cdn.shopify.com/s/files/1/0251/2155/4510/products/7652p_262c_1x_e931ecde-ec21-47ef-96eb-8424c3913890_800x.jpg?v=1608318433" class="product__img">
                    <div class="product__cards">
                        <button class="product__cards-btn product__cards-btn--first">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <div class="product__card-wrapper">
                            <img src="https://cdn.shopify.com/s/files/1/0251/2155/4510/products/7652p_262c_2x_6fd3fe79-79c8-4092-84b3-34ebbce9a769_800x.jpg?v=1608318433" class="product__card">
                        </div>
                        <div class="product__card-wrapper">
                            <img src="https://cdn.shopify.com/s/files/1/0251/2155/4510/products/7652p_262c_3x_30bac2ea-8b48-44df-88af-7c1125246cdc_800x.jpg?v=1608318433" class="product__card">
                        </div>
                        <div class="product__card-wrapper">
                            <img src="https://cdn.shopify.com/s/files/1/0251/2155/4510/products/7652p_28c_1x_e91fa224-a83b-4609-8a69-50a797fe1c09_800x.jpg?v=1608318433" class="product__card">
                        </div>
                        <div class="product__card-wrapper">
                            <img src="https://cdn.shopify.com/s/files/1/0251/2155/4510/products/7652p_28c_2x_aa586525-952b-4fe0-884e-2f1d4ab33dee_800x.jpg?v=1608318433" class="product__card">
                        </div>
                        <div class="product__card-wrapper">
                            <img src="https://cdn.shopify.com/s/files/1/0251/2155/4510/products/7652p_28c_3x_1fb36bcd-e635-49e8-a759-63297aa0cdd1_800x.jpg?v=1608318433" class="product__card">
                        </div>
                        <button class="product__cards-btn product__cards-btn--last">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>

                    <div class="product__actions">
                        <div class="product__sharing-icons">
                            <div class="text">Chia sẻ:</div>
                            <a href="#" class="product__action-icon messenger">
                                <i class="fab fa-facebook-messenger"></i>
                            </a>
                            <a href="#" class="product__action-icon facebook">
                                <i class="fab fa-facebook"></i>
                            </a>
                            <a href="#" class="product__action-icon google">
                                <i class="fab fa-google-plus"></i>
                            </a>
                            <a href="#" class="product__action-icon pinterest">
                                <i class="fab fa-pinterest"></i>
                            </a>
                            <a href="#" class="product__action-icon twitter">
                                <i class="fab fa-twitter-square"></i>
                            </a>
                        </div>
                        <div class="product__liking">
                            <i class="product__action-icon product__action-icon--liking far fa-heart"></i>
                            <a class="text">Đã thích (${pageProduct.liked}k)</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col l-7">
                <div class="product-content">
                    <div class="product__title">
                        <div class="label-loving">
                            Yêu Thích
                        </div>
                        <span>[KHAI TRƯƠNG 149K-219K] Chuỗi Balo, Túi xách Minecraft được giảm giá đặc biệt nhân ngày mở bán</span>
                    </div>

                    <div class="product__status">
                        <div class="product__status-rating">
                            <div class="product__status-rating-point underscore">4.9</div>
                            <div class="product__status-rating-stars">
                                <i class="product__status-rating-star fas fa-star"></i>
                                <i class="product__status-rating-star fas fa-star"></i>
                                <i class="product__status-rating-star fas fa-star"></i>
                                <i class="product__status-rating-star fas fa-star"></i>
                                <i class="product__status-rating-star fas fa-star"></i>
                            </div>
                        </div>
                        <div class="product__status-reviewing">
                            <span class="product__status-reviewing-qnt underscore">${pageProduct.rev}</span>
                            <span class="product__status-text pr-text">Đánh Giá</span>
                        </div>
                        <div class="product__status-sold">
                            <span class="product__status-sold-qnt">${pageProduct.sold}</span>
                            <span class="product__status-text pr-text">Đã Bán</span>
                        </div>
                    </div>
                    
                    <div class="product__price">
                        <div class="product__price-main">
                            <span class="product__price-old">${pageProduct.oldPriceInfo}</span>
                            <div class="product__price-current">
                                <span class="product__price-new">${pageProduct.curPriceInfo}</span>
                                <span class="product__price-label bgr-orange">${pageProduct.per}% GIẢM</span>
                            </div>
                        </div>
                        <div class="product__price-slogan">
                            <i class="product__price-icon-tag fas fa-tags"></i>
                            <span class="product__price-slogan-text">Ở đâu rẻ hơn, Minecraft Shop hoàn tiền</span>
                            <i class="product__price-icon-question far fa-question-circle"></i>
                        </div>
                    </div>

                    <div class="product__info">
                        <div class="product__codes">
                            <label class="product__codes-label width-label">Mã Giảm Giá Của Shop</label>
                            <div class="product__codes-wrapper">
                                <div class="product__code">Giảm ₫3k</div>
                                <div class="product__code">Giảm ₫5k</div>
                                <div class="product__code">Giảm ₫8k</div>
                            </div>
                        </div>

                        <div class="product__combo">
                            <label class="product__combo-label width-label">Combo Khuyến Mãi</label>
                            <div class="product__combo-note">Mua 2 & giảm 5%</div>
                        </div>

                        <div class="product__shipping">
                            <label class="product__shipping-label width-label">Vận Chuyển</label>
                            <div class="product__shipping-wrapper">
                                <div class="product__shipping-free">
                                    <div class="product__shipping-free-icon-wrapper">
                                        <i class="product__shipping-free-icon fas fa-truck-loading"></i>
                                    </div>
                                    <div class="product__shipping-free-wrapper">
                                        <div class="product__shipping-free-title">Miễn Phí Vận Chuyển</div>
                                        <div class="product__shipping-free-note">Miễn Phí Vận Chuyển khi đơn đạt giá trị tối thiểu</div>
                                    </div>
                                </div>

                                <div class="product__shipping-to">
                                    <i class="product__shipping-to-icon-truck fas fa-truck"></i>
                                    <div class="product__shipping-to-wrapper">
                                        <div class="product__shipping-to-destination">
                                            <label class="product__shipping-to-label">Vận Chuyển Tới</label>
                                            <div class="product__shipping-to-cities">
                                                <span class="product__shipping-to-city">Huyện Ba Vì, Hà Nội</span>
                                                <i class="product__shipping-to-icon fas fa-chevron-down"></i>
                                            </div>
                                        </div>

                                        <div class="product__shipping-to-fee">
                                            <label class="product__shipping-to-label">Phí Vận Chuyển</label>
                                            <div class="product__shipping-to-fee-wrapper">
                                                <div class="product__shipping-to-fees">₫10.500</div>
                                                <i class="product__shipping-to-icon fas fa-chevron-down"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="product__options">
                            <label class="product__options-label width-label">Balo Minecraft</label>
                            <div class="product__options-items">
                                <button class="product__options-item">Balo Creeper</button>
                                <button class="product__options-item">Túi chéo</button>
                                <button class="product__options-item">Túi xách tay</button>
                            </div>
                        </div>

                        <div class="product__qnt">
                            <label class="product__qnt-label width-label">Số Lượng</label>
                            <div class="shop__qnt-btns">
                                <button class="shop__qnt-btn shop__qnt-btn--dec">
                                    <i class="shop__qnt-btn-icon fas fa-minus"></i>
                                </button>
                                <input class="shop__qnt-input" type="text" value="1"></input>
                                <button class="shop__qnt-btn shop__qnt-btn--inc">
                                    <i class="shop__qnt-btn-icon fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="product__qnt-note">${pageProduct.available} sản phẩm có sẵn</div>
                        </div>
                        
                        <div class="product-btns-main">
                            <button class="product-btn-main product-btn-main__adding">
                                <i class="product-btn-main__adding-icon fas fa-cart-plus"></i>
                                <span class="product-btn-main__text product-btn-main__adding-text">Thêm Vào Giỏ Hàng</span>
                            </button>
                            <button class="product-btn-main product-btn-main__buying">
                                <span class="product-btn-main__text product-btn-main__buying-text">Mua Ngay</span>
                            </button>
                        </div>
                    </div>
                    
                    <div style="margin-top: 30px; border-top: 1px solid rgba(0, 0, 0, 0.05);">
                        <a href="*" class="product__guarantee">
                            <span><i class="product__guarantee-icon fas fa-clipboard-check"></i></span>
                            <div class="product__guarantee-text">Minecraft Shop Đảm Bảo</div>
                            <span class="product__guarantee-note">3 Ngày Trả Hàng / Hoàn Tiền</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid wide">
        <!-- Product combo cards -->
        <div class="row sm-gutter products-combo">
            <div class="products-combo__title">
                <span class="products-combo__text">Combo khuyến mãi</span>
                <div class="products-combo__note">Mua 2 & giảm 5%</div>
            </div>

            <div class="products-combo__cards">
                <div class="products-combo__card">
                    <a href="/" class="products-combo__card-link">
                        <img class="products-combo__card-img" src="https://cdn.shopify.com/s/files/1/0251/2155/4510/products/9523p_5c_1x_b1f223d0-2a5a-4ffd-8b27-4b771a89e884_800x.jpg?v=1610398986">
                        <span class="products-combo__card-name">[XẢ HÀNG] Balo Minecraft in hình trọn bộ nhân vật siêu xinh dành cho các bé</span>
                        <div class="products-combo__card-price">
                            <span class="products-combo__card-price-old">₫220.000</span>
                            <span class="products-combo__card-price-new">₫149.000</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="grid wide">
        <!-- Product shop -->
        <div class="row sm-gutter product-shop">
            <div class="product-shop__contact">
                <a href="#" class="product-shop__contact-img-link">
                    <div class="product-shop__contact-avatar-wrapper">
                        <img class="product-shop__contact-avatar"src="./Images/shop_manager.png">
                    </div>
                    <span class="label-loving">Yêu thích</span>
                </a>

                <div class="product-shop__contact-container">
                    <div class="product-shop__contact-name">${pageProduct.owner}</div>
                    <div class="product-shop__contact-online-time">Online 28 Phút Trước</div>
                    <div class="product-shop__contact-main">
                        <button class="product-shop__contact-btn product-shop__contact-message-btn">
                            <i class="product-shop__contact-icon far fa-comment-alt"></i>
                            <span class="product-shop__contact-message-text">Chat Ngay</span>
                        </button>

                        <a href="#" class="product-shop__contact-btn product-shop__contact-viewing">
                            <i class="product-shop__contact-icon fas fa-store"></i>
                            <div class="product-shop__contact-viewing-text">Xem Shop</div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="product-shop__side">
                <div class="product-shop__side-container">
                    <div class="product-shop__side-wrapper">
                        <label class="product-shop__side-label">Đánh giá</label>
                        <div class="product-shop__side-qnt">${pageProduct.revTotal}</div>
                    </div>

                    <a href="#" class="product-shop__side-wrapper">
                        <label class="product-shop__side-label">Sản phẩm</label>
                        <div href="#" class="product-shop__side-qnt product-shop__side-qnt--link">${pageProduct.proQnt}</div>
                    </a>
                </div>

                <div class="product-shop__side-container">
                    <div class="product-shop__side-wrapper">
                        <label class="product-shop__side-label">Tỉ Lệ Phản Hồi</label>
                        <div class="product-shop__side-qnt">${pageProduct.resRate}%</div>
                    </div>

                    <div class="product-shop__side-wrapper">
                        <label class="product-shop__side-label">Thời Gian Phản Hồi</label>
                        <div class="product-shop__side-qnt">${pageProduct.resTime}</div>
                    </div>
                </div>

                <div class="product-shop__side-container">
                    <div class="product-shop__side-wrapper">
                        <label class="product-shop__side-label">Tham gia</label>
                        <div class="product-shop__side-qnt">${pageProduct.join} tháng trước</div>
                    </div>

                    <div class="product-shop__side-wrapper">
                        <label class="product-shop__side-label">Người theo dõi</label>
                        <div class="product-shop__side-qnt">${pageProduct.follower}k</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid wide">
        <div class="row sm-gutter product-content__side" style="padding-bottom: 25px;">
            <!-- Product left content -->
            <div class="product-content--left">
                <!-- Product details -->
                <div class="product-details">
                    <div class="product-detail">
                        <div class="product-detail__title">CHI TIẾT SẢN PHẨM</div>
                        <div class="product-detail__-wrapper">
                            <div class="product-detail__wrapper">
                                <span class="product-detail__label">Danh Mục</span>
                                <div class="product-detail__links">
                                    <a class="product-detail__link" href="/">
                                        <span>Minecraft Shop</span>
                                    </a>
                                    <svg class="product-detail__icon" enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon _3kIvpP icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>
                                    <a class="product-detail__link" href="/">
                                        <span>Phụ kiện</span>
                                    </a>
                                    <svg class="product-detail__icon" enable-background="new 0 0 11 11" viewBox="0 0 11 11" x="0" y="0" class="shopee-svg-icon _3kIvpP icon-arrow-right"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>
                                    <a class="product-detail__link" href="/">
                                        <span>Balo</span>
                                    </a>
                                </div>
                            </div>

                            <div class="product-detail__wrapper">
                                <span class="product-detail__label">${pageProduct.brand}</span>
                                <a class="product-detail__link" href="/">
                                    <span>No brand</span>
                                </a>
                            </div>

                            <div class="product-detail__wrapper">
                                <span class="product-detail__label">${pageProduct.material}</span>
                                <span class="product-detail__text">Vải</span>
                            </div>

                            <div class="product-detail__wrapper">
                                <span class="product-detail__label">${pageProduct.origin}</span>
                                <span class="product-detail__text">Mỹ</span>
                            </div>

                            <div class="product-detail__wrapper">
                                <span class="product-detail__label">Kho hàng</span>
                                <span class="product-detail__text">${pageProduct.depot}</span>
                            </div>
                            
                            <div class="product-detail__wrapper">
                                <span class="product-detail__label">Gửi từ</span>
                                <span class="product-detail__text">${pageProduct.from}</span>
                            </div>
                        </div>
                    </div>

                    <div class="product-description">
                        <div class="product-description__title">MÔ TẢ SẢN PHẨM</div>
                        <span class="product-description__content">🎉 Balo Minecraft creeper backpack là mẫu ba lô siêu hot mới ra mắt năm 2017. Chất liệu: 100% polyester 🎉
*** Kích thước: 43x30x14cm ***
🌼 Sản xuất bởi J!NX
🌼 Hàng chính hãng USA
🌼 Ba lô được thiết kế dựa trên hoa văn của creeper, với màu xanh làm chủ đạo, bên ngoài là màu xanh nền cỏ của creeper.
🌼 Ngăn chính gồm các hoa văn in mặt của creeper màu ghi, nhìn xa giống như một hang đá vậy
🌼 Ngăn phụ bên ngoài in hình TNT giống như khối thuốc nổ chứa trong người con creeper ^^
🌼 Phần phía lưng cũng có hình creeper được may vào lớp đệm, mỗi khóa kéo đều là một khuôn mặt của creeper
🌼 Trọng lượng của ba lô rất nhẹ chỉ hơn 300g
                        </span>
                    </div>
                </div>

                <!-- Product reviews -->
                <div class="product-reviews">
                    <div class="product-reviews__header">ĐÁNH GIÁ SẢN PHẨM</div>
                    <div class="product-reviews__container">
                        <div class="product-reviews__rating">
                            <div class="product-reviews__rating-score-wrapper">
                                <span class="product-reviews__rating-score">4.9</span>
                                <span class="product-reviews__rating-score-out-of"> trên 5 </span>
                            </div>

                            <div class="product-reviews__rating-stars">
                                <i class="product-reviews__rating-star fas fa-star"></i>
                                <i class="product-reviews__rating-star fas fa-star"></i>
                                <i class="product-reviews__rating-star fas fa-star"></i>
                                <i class="product-reviews__rating-star fas fa-star"></i>
                                <i class="product-reviews__rating-star fas fa-star"></i>
                            </div>
                        </div>

                        <div class="product-reviews__filters">
                            <div class="product-reviews__filter product-reviews__filter--active">tất cả</div>
                            <div class="product-reviews__filter">5 Sao (0)</div>
                            <div class="product-reviews__filter">4 Sao (0)</div>
                            <div class="product-reviews__filter">3 Sao (0)</div>
                            <div class="product-reviews__filter">2 Sao (0)</div>
                            <div class="product-reviews__filter">1 Sao (0)</div>
                            <div class="product-reviews__filter product-reviews__filter--comment">Có Bình luận (0)</div>
                            <div class="product-reviews__filter product-reviews__filter--photo">Có hình ảnh / video (0)</div>
                        </div>
                    </div>

                    <div class="product-reviews__comments">
                        <div class="product-reviews__comment">Rất tiếc, hiện chưa có bình luận nào</div>
                    </div>
                </div>
            </div>

            <div class="product-content--right">
                <!-- Product vouchers -->
                <div class="product-vouchers">
                    <div class="product-vouchers__header">Mã giảm giá của Shop</div>
                    <div class="product-vouchers__list">
                        <div class="product-vouchers__item">
                            <div class="product-vouchers__item-wrapper">
                                <div class="product-vouchers__item-title">Giảm ₫3k Đơn Tối Thiểu ₫89k</div>
                                <div class="product-vouchers__item-expiry">HSD:31-03-2021</div>
                            </div>
                            <div class="product-vouchers__btn-wrapper">
                                <button class="product-vouchers__btn-save">Lưu</button>
                                <div class="product-vouchers__border-dashed"></div>
                            </div>
                            <div class="product-vouchers__border-circle">
                                <div class="product-vouchers__border-circle-edge"></div>
                            </div>
                        </div>

                        <div class="product-vouchers__item">
                            <div class="product-vouchers__item-wrapper">
                                <div class="product-vouchers__item-title">Giảm ₫3k Đơn Tối Thiểu ₫89k</div>
                                <div class="product-vouchers__item-expiry">HSD:31-03-2021</div>
                            </div>  
                            <div class="product-vouchers__btn-wrapper">
                                <button class="product-vouchers__btn-save">Lưu</button>
                                <div class="product-vouchers__border-dashed"></div>
                            </div>
                            <div class="product-vouchers__border-circle">
                                <div class="product-vouchers__border-circle-edge"></div>
                            </div>
                        </div>

                        <div class="product-vouchers__item">
                            <div class="product-vouchers__item-wrapper">
                                <div class="product-vouchers__item-title">Giảm ₫3k Đơn Tối Thiểu ₫89k</div>
                                <div class="product-vouchers__item-expiry">HSD:31-03-2021</div>
                            </div>
                            <div class="product-vouchers__btn-wrapper">
                                <button class="product-vouchers__btn-save">Lưu</button>
                                <div class="product-vouchers__border-dashed"></div>
                            </div>
                            <div class="product-vouchers__border-circle">
                                <div class="product-vouchers__border-circle-edge"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product hot sales -->
                <div class="product-hot-sales">
                    <div class="product-hot-sales__header">Top Sản Phẩm Bán Chạy</div>
                    <a href="#" class="product-hot-sales__link">
                        <div>
                            <img class="product-hot-sales__item-img" src="https://cdn.shopify.com/s/files/1/0251/2155/4510/products/7652p_262c_1x_e931ecde-ec21-47ef-96eb-8424c3913890_800x.jpg?v=1608318433">
                        </div>
                        <div class="product-hot-sales__item-wrapper">
                            <div class="product-hot-sales__item-name">Balo Creepr nhiều túi vô cùng tiện lợi</div>
                            <div class="product-hot-sales__item-price">₫149.000 - ₫219.000</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>`

    return productInfo;
}

// show products through slide card
function slideInfoCard() {
    let cardsCtn = document.querySelector('.product__cards-container'); // get element of cards container
    let cards = document.querySelectorAll('.product__card-wrapper'); // get element of cards
    let prevBtn = document.querySelector('.product__cards-btn--prev'); // get element of prev button
    let nextBtn = document.querySelector('.product__cards-btn--next'); // get element of next  button

    let counter = 0; // initialize counter increases with number of items from 5 onwards
    let cardSize = cards[0].offsetWidth; // get size of card

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

    // if the total number of products is greater than 5, the next button will appear
    if (cards.length > 5) {
        hideOrShow.show(nextBtn);

        nextBtn.onclick = () => {
            hideOrShow.show(prevBtn);

            counter++;
            cardsCtn.style.transform = `translateX(${-counter * cardSize}px)`;
            if (counter === cards.length - 5) hideOrShow.hide(nextBtn);
        }
    }

    prevBtn.onclick = () => {
        counter--;
        cardsCtn.style.transform = `translateX(${-counter * cardSize}px)`;
        
        if (counter === 0) {
            hideOrShow.hide(prevBtn);
            if (cards.length > 5) hideOrShow.show(nextBtn);
        }
    }
}

slideInfoCard();

// change background image when mouseover
function changeSlideThumb() {
    let thumbCnt = document.querySelector('.product-slide'); // get element of thumbnail container
    let bgrThumb = thumbCnt.querySelector('.product__img'); // get element of slide background thumbnail
    let thumbs = thumbCnt.querySelectorAll('.product__card-img'); // get element of slide thumbnails

    for (let thumb of thumbs) {
        thumb.onmouseover = () => {
            for (let thumb of thumbs) {
                (thumb.parentElement).style.border = '2px solid transparent';
            }
            
            (thumb.parentElement).style.border = '2px solid var(--var-color)';
            bgrThumb.style.opacity = '1';
            bgrThumb.setAttribute('src', thumb.getAttribute('src'));
        }
    }
}   

changeSlideThumb();

// handle add product quanity
let inpCtn = document.querySelector('.shop__qnt-btns'); // get element of input container
addProductQnt(inpCtn);

// render options items info and handle event when add to cart button is clicked
function renderOptionsInfo() {
    const optsInfo = [
        {
            id: 'p-o-1',
            name: 'Creeper',
            img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/7652p_262c_1x_e931ecde-ec21-47ef-96eb-8424c3913890_800x.jpg?v=1608318433',
        },
        {
            id: 'p-o-2',
            name: 'Trong suốt',
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/013244285218-1_1800x1800.jpg?v=1611083347',
        },
        {
            id: 'p-o-3',
            name: 'TNT',
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/013244356772-2_1800x1800.jpg?v=1611078189'
        },
    ] // save options info

    let bgrThumb = document.querySelector('.product__img'); // get element of slide background thumbnail
    let optsCtn = document.querySelector('.product__options'); // get element of options container
    let optsItemCtn = optsCtn.querySelector('.product__options-items'); // get element of options items container
    let errorMsg = optsCtn.querySelector('.product__options-items-error-message'); // get element of options error message
    let optInfoItems = ''; // save option items 
    
    for (let optInfo of optsInfo) {
        optInfoItems += `<button class="product__options-item">${optInfo.name}</button>`
    }

    optsItemCtn.innerHTML = optInfoItems;

    let optEls = document.querySelectorAll('.product__options-item'); // get element of options
    let selectedCl = 'product__options-item-selected'; // get selected class

    for (let optEl of optEls) {
        optEl.onmouseover = () => {
            for (let optInfo of optsInfo) {
                if (optEl.textContent === optInfo.name) {
                    bgrThumb.setAttribute('src', optInfo.img);
                }       
            }
        }

        optEl.onclick = () => {
            for (let optEl of optEls) {
                if (optEl.classList.contains(selectedCl)) {
                    optEl.classList.remove(selectedCl);
                } 
            }
            optEl.classList.add(selectedCl);
            
            if (optsCtn.classList.contains('product__options-error')) {
                optsCtn.classList.remove('product__options-error');
                errorMsg.style.display = 'none';
            }
        }
    }
    
    let addToCartBtn = document.querySelector('.product-btn-main__adding'); // get element of add to cart button
    let toastOverlay = document.querySelector('.action-toast'); // get element of toast overlay
    let toastCtn = document.querySelector('.action-toast > .action-toast-container'); // get element of toast container

    addToCartBtn.onclick = () => {
        for (let optEl of optEls) {
            if (optEl.classList.contains(selectedCl)) {
                toastOverlay.style.display = 'flex';
                setTimeout(() => {
                    toastCtn.classList.add('action-toast-container-show');
                });
                
                setTimeout(() => {
                    toastCtn.classList.remove('action-toast-container-show');
                }, 2000);
                setTimeout(() => {
                    toastOverlay.style.display = 'none';
                }, 2150);
            }
        }

        let isSelected = ([...optEls]).some(optEl => optEl.classList.contains(selectedCl)); // check if an element is selected 

        if (!isSelected) { 
            optsCtn.classList.add('product__options-error');
            errorMsg.style.display = 'block';
        }
    }
}

renderOptionsInfo()

// render combo cards
function renderComboCards() {
    const comboCardsInfo = [
        {
            id: 'c-c-i-1',
            name: 'Áo thun tay ngắn cho người lớn gà Jolly Minecraft',
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/MCJM-CHCKN-100011-MF_1800x1800.png?v=1614028694',
            oldPrice: 250000,
            curPrice: 150000
        },
        {
            id: 'c-c-i-2',
            name: 'Chăn đắp và lót giường Minecraft Dungeon',
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/32281406691-1b_1800x1800.jpg?v=1611683885',
            oldPrice: 140000,
            curPrice: 50000
        },
        {
            id: 'c-c-i-3',
            name: 'Ly gốm sứ bom TNT Minecraft',
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/MCIC-TNT-100040-11oz-mug-Left-MF_1800x1800.png?v=1612793288',
            oldPrice: 329000,
            curPrice: 210000
        },
        {
            id: 'c-c-i-4',
            name: 'Mũ in hình logo Minecraft được thêu bằng vải',
            img: 'https://cdn.shopify.com/s/files/1/0266/4841/2351/products/MCIC-LOGO-100172-Black-MF_1800x1800.png?v=1612462143',
            oldPrice: 50000,
            curPrice: 19000
        },
    ]; // save combo cards elements info
    let comboCardsCtn = document.querySelector('.products-combo__cards'); // get element of combo cards container
    let comboCardsEl = '';  // save combo card elements

    for (let comboCardInfo of comboCardsInfo) {
        comboCardsEl += 
            `<div id="${comboCardInfo.id}" class="products-combo__card">
                <a href="/" class="products-combo__card-link">
                    <div class="products-combo__card-img-wrapper">
                        <img class="products-combo__card-img" src="${comboCardInfo.img}">
                    </div>
                    <span class="products-combo__card-name">${comboCardInfo.name}</span>
                </a>
                <div class="products-combo__card-wrapper">
                    <div class="shop-checkbox">
                        <input class="shop-checkbox__input" type="checkbox">
                        <div class="shop-checkbox__bgc"></div>
                    </div>
                    <div class="products-combo__card-price">
                        <span class="products-combo__card-price-old hide-on-mobile">₫${numberWithCommas(comboCardInfo.oldPrice)}</span>
                        <span class="products-combo__card-price-new">₫${numberWithCommas(comboCardInfo.curPrice)}</span>
                    </div>
                </div>
            </div>`;
    }

    comboCardsCtn.innerHTML = comboCardsEl;

    let comboCardEls = document.querySelectorAll('.products-combo__card'); // get element of combo cards
    let oldTotal = document.querySelector('.products-combo__checkout-total-old'); // get element of old total
    let currentTotal = document.querySelector('.products-combo__checkout-total-current'); // get element of current total
    let saveTotal = document.querySelector('.products-combo__checkout-save-price'); // get element of save total

    let oldTotalNew = 0; 
    let currentTotalNew = 0;

    for (let comboCardEl of comboCardEls) {
        let comboCardInp = comboCardEl.querySelector('.shop-checkbox__input');

        comboCardInp.onclick = () => {
            let comboCardElID = comboCardEl.id; // get id of combo card when clicked

            if (comboCardEl.classList.contains('shop-checkbox--checked')) {
                comboCardEl.classList.remove('shop-checkbox--checked');
            } else {
                comboCardEl.classList.add('shop-checkbox--checked');
            }

            let plusOrMinus = (letter) => {
                for (let comboCardInfo of comboCardsInfo) {
                    if (comboCardElID === comboCardInfo.id) {
                        eval(`oldTotalNew ${letter}= comboCardInfo.oldPrice`);
                        eval(`currentTotalNew ${letter}= comboCardInfo.curPrice`);
                    }
                }

                oldTotal.innerHTML = `₫${numberWithCommas(oldTotalNew)}`;
                currentTotal.innerHTML = `₫${numberWithCommas(currentTotalNew)}`;
            }
            
            if (comboCardEl.classList.contains('selected')) {
                comboCardEl.classList.remove('selected');
            } else {
                comboCardEl.classList.add('selected');
            }

            if (comboCardEl.classList.contains('selected')) {
                plusOrMinus('+');
            } else {
                plusOrMinus('-');
            }

            saveTotal.innerHTML = `₫${numberWithCommas(oldTotalNew - currentTotalNew)}`;
        }
    }
}

renderComboCards();

// render toast message when voucher save button is clicked
let btns = document.querySelectorAll('.product-vouchers__btn-save'); // get element of voucher save buttons
sildeToastMsg(btns);

function showMore() {
    let proDesEl = document.querySelector('.product-description'); // get element of product description
    let dots = proDesEl.querySelector('.dots'); // get element of dots
    let textMore = proDesEl.querySelector('.text-more'); // get element of dots
    let readMoreBtn = proDesEl.querySelector('.read-more-btn'); // get element of read more button
    let readMoreBtnText = proDesEl.querySelector('.read-more-btn__text'); // get element of read more text
    let iconDown = readMoreBtn.querySelector('.read-more-btn__icon--down'); // get element of icon down
    let iconUp = readMoreBtn.querySelector('.read-more-btn__icon--up'); // get element of icon up

    readMoreBtn.onclick = () => {
        dots.classList.toggle('hidden');
        textMore.classList.toggle('hidden');
        iconDown.classList.toggle('hidden');
        iconUp.classList.toggle('hidden');
        readMoreBtnText.classList.toggle('text-show');
        
        
        if (readMoreBtnText.classList.contains('text-show')) {
            readMoreBtnText.innerHTML = 'Ẩn bớt';
        } else {
            readMoreBtnText.innerHTML = 'Xem thêm';
        }
    }
}

showMore();