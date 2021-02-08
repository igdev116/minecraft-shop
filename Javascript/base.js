const products = [
    {   
        id: 0,
        img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/7652p_262c_1x_e931ecde-ec21-47ef-96eb-8424c3913890_800x.jpg?v=1608318433',
        name: '[KHAI TRƯƠNG 149K-219K] Chuỗi Balo, Túi xách Minecraft được giảm giá đặc biệt nhân ngày mở bán',
        oldPrice: '1.500.000đ',
        curPrice: '1.200.000đ',
        sold: 12,
        brand: 'Minecraft',
        origin: 'American',
        react: 'Yêu thích',
        per: 23,
        label: 'GIẢM',
        link: 'product-info.html',
        liked: '2,1',
        rev: 78, 
        oldPriceInfo: '₫220.000 - ₫396.000',
        curPriceInfo: '₫149.000 - ₫219.000',
        available: 1100,
        owner: 'toykids',
        revTotal: 220,
        resRate: 95,
        join: 6,
        proQnt: 14,
        resTime: 'trong vài phút',
        follower: '2,3',
        material: 'Vải',
        from: 'Quận Hoàng Mai, Hà Nội',
        depot: 1099
    },
    {   
        id: 0,
        img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/9283p_28c_2x_9cc4830c-d6c2-43f8-b3dd-10fb4081fcd2_800x.jpg?v=1607528622',
        name: 'Bộ ghim cừu Minecraft MINECON Earth 2018',
        oldPrice: '2.500.000đ',
        curPrice: '300.000đ',
        sold: 33,
        brand: 'Minecraft',
        origin: 'American',
        react: 'Yêu thích',
        per: 33,
        label: 'GIẢM',
        link: 'product-info.html'
    },
    {   
        id: 0,
        img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/11146p_99c_1x_cd2633cf-fc5d-40b4-8f73-1e7bc1535188_800x.jpg?v=1611763680',
        name: 'Lô gấu bông Minecraft Dungeons Mini',
        oldPrice: '500.000đ',
        curPrice: '250.000đ',
        sold: 11,
        brand: 'Minecraft',
        origin: 'American',
        react: 'Yêu thích',
        per: 12,
        label: 'GIẢM',
        link: 'product-info.html'
    },
    {   
        id: 0,
        img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/8316p_99c_1x_4317c0a9-8c2d-4f38-9a2d-61e03c14001b_800x.jpg?v=1607458896',
        name: 'Trọn bộ Stiker Minecraft Education Edition',
        oldPrice: '300.000đ',
        curPrice: '150.000đ',
        sold: 112,
        brand: 'Minecraft',
        origin: 'American',
        react: 'Yêu thích',
        per: 71,
        label: 'GIẢM',
        link: 'product-info.html'
    },
    {   
        id: 0,
        img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/3942p_21c_1x_3c19c696-c546-4248-814a-042ebdb0df20_800x.jpg?v=1610059305',
        name: 'Áo thun cao cấp tượng Minecraft',
        oldPrice: '690.000đ',
        curPrice: '250.000đ',
        sold: 13,
        brand: 'Minecraft',
        origin: 'American',
        react: 'Yêu thích',
        per: 61,
        label: 'GIẢM',
        link: 'product-info.html'
    },{   
        id: 0,
        img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/7711p_99c_4x_768bb411-b608-4c24-b20a-5bbf6bb9f237_800x.jpg?v=1611172100',
        name: 'Ly gốm sứ Minecraft Zombie',
        oldPrice: '570.000đ',
        curPrice: '350.000đ',
        sold: 13,
        brand: 'Minecraft',
        origin: 'American',
        react: 'Yêu thích',
        per: 11,
        label: 'GIẢM',
        link: 'product-info.html'
    },
    {   
        id: 0,
        img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/10758p_99c_1x_800c358a-9c22-4488-9565-93668c38053e_800x.jpg?v=1610399275',
        name: 'Móc khóa lợn bám bùn Minecraft Earth',
        oldPrice: '30.000đ',
        curPrice: '12.000đ',
        sold: 141,
        brand: 'Minecraft',
        origin: 'American',
        react: 'Yêu thích',
        per: 16,
        label: 'GIẢM',
        link: 'product-info.html'
    },
    {   
        id: 0,
        img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/9489p_28c_2x_847989c3-a873-4f92-9abd-a39503228363_800x.jpg?v=1610059374',
        name: 'Hộp ăn trưa gia đình Miner',
        oldPrice: '950.000đ',
        curPrice: '720.000đ',
        sold: 9,
        brand: 'Minecraft',
        origin: 'American',
        react: 'Yêu thích',
        per: 5,
        label: 'GIẢM',
        link: 'product-info.html'
    },
    {   
        id: 0,
        img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/6627p_13c_1x_93708f07-c3e6-424d-a218-ebb96fc2dc20_800x.jpg?v=1610059296',
        name: 'Thắt lưng Creeper Minecraft',
        oldPrice: '350.000đ',
        curPrice: '129.000đ',
        sold: 2,
        brand: 'Minecraft',
        origin: 'American',
        react: 'Yêu thích',
        per: 65,
        label: 'GIẢM',
        link: 'product-info.html'
    },
    {   
        id: 0,
        img: 'https://cdn.shopify.com/s/files/1/0251/2155/4510/products/10371p_99c_2x_06035991-bd12-4846-a531-fcfe22c50d62_800x.jpg?v=1610399275',
        name: 'Móc khóa Steve trở về từ địa ngục',
        oldPrice: '30.000đ',
        curPrice: '19.000đ',
        sold: 122,
        brand: 'Minecraft',
        origin: 'American',
        react: 'Yêu thích',
        per: 70,
        label: 'GIẢM',
        link: 'product-info.html'
    }
]

// handle and render products
function renderProducts() {
    let productElements = document.querySelector('.home-product .row');
    let productItem = '';

    for (let product of products) {
        productItem += 
        `<div class="col l-2-4 m-4 c-6">
            <a href="product-info.html" id="${product.id}" class="home-product-item">
                <img src=" ${product.img}" class="home-product-item__img">
                <div class="home-product-item__name"> ${product.name} </div>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old"> ${product.oldPrice} </span>
                    <span class="home-product-item__price-current"> ${product.curPrice} </span>
                </div>
                <div class="home-product-item__action">
                    <span class="home-product-item__like home-product-item__like--liked">
                        <i class="home-product-item__like-icon-empty far fa-heart"></i>
                        <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                    </span>
                    <div class="home-product-item__rating">
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="home-product-item__star--gold fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <span class="home-product-item__sold"> ${product.sold + ' đã bán'} </span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand"> ${product.brand} </span>
                    <span class="home-product-item__origin-name"> ${product.origin} </span>
                </div>
                <div class="product-favourite">
                    <i class="fas fa-check"></i>
                    <span> ${product.react} </span>
                </div>
                <div class="product-sale-off">
                    <span class="product-sale-off__percent"> ${product.per}% </span>
                    <span class="product-sale-off__label"> ${product.label} </span>
                </div>
            </a>
        </div>`
    }
    
    if (productElements) {
        productElements.innerHTML = productItem;
    }
}


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
                            <a class="text">Đã thích (${product.liked}k)</a>
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
                            <span class="product__status-reviewing-qnt underscore">${product.rev}</span>
                            <span class="product__status-text pr-text">Đánh Giá</span>
                        </div>
                        <div class="product__status-sold">
                            <span class="product__status-sold-qnt">${product.sold}</span>
                            <span class="product__status-text pr-text">Đã Bán</span>
                        </div>
                    </div>
                    
                    <div class="product__price">
                        <div class="product__price-main">
                            <span class="product__price-old">${product.oldPriceInfo}</span>
                            <div class="product__price-current">
                                <span class="product__price-new">${product.curPriceInfo}</span>
                                <span class="product__price-label bgr-orange">${product.per}% GIẢM</span>
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
                            <div class="product__qnt-note">${product.available} sản phẩm có sẵn</div>
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
                    <div class="product-shop__contact-name">${product.owner}</div>
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
                        <div class="product-shop__side-qnt">${product.revTotal}</div>
                    </div>

                    <a href="#" class="product-shop__side-wrapper">
                        <label class="product-shop__side-label">Sản phẩm</label>
                        <div href="#" class="product-shop__side-qnt product-shop__side-qnt--link">${product.proQnt}</div>
                    </a>
                </div>

                <div class="product-shop__side-container">
                    <div class="product-shop__side-wrapper">
                        <label class="product-shop__side-label">Tỉ Lệ Phản Hồi</label>
                        <div class="product-shop__side-qnt">${product.resRate}%</div>
                    </div>

                    <div class="product-shop__side-wrapper">
                        <label class="product-shop__side-label">Thời Gian Phản Hồi</label>
                        <div class="product-shop__side-qnt">${product.resTime}</div>
                    </div>
                </div>

                <div class="product-shop__side-container">
                    <div class="product-shop__side-wrapper">
                        <label class="product-shop__side-label">Tham gia</label>
                        <div class="product-shop__side-qnt">${product.join} tháng trước</div>
                    </div>

                    <div class="product-shop__side-wrapper">
                        <label class="product-shop__side-label">Người theo dõi</label>
                        <div class="product-shop__side-qnt">${product.follower}k</div>
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
                                <span class="product-detail__label">${product.brand}</span>
                                <a class="product-detail__link" href="/">
                                    <span>No brand</span>
                                </a>
                            </div>

                            <div class="product-detail__wrapper">
                                <span class="product-detail__label">${product.material}</span>
                                <span class="product-detail__text">Vải</span>
                            </div>

                            <div class="product-detail__wrapper">
                                <span class="product-detail__label">${product.origin}</span>
                                <span class="product-detail__text">Mỹ</span>
                            </div>

                            <div class="product-detail__wrapper">
                                <span class="product-detail__label">Kho hàng</span>
                                <span class="product-detail__text">${product.depot}</span>
                            </div>
                            
                            <div class="product-detail__wrapper">
                                <span class="product-detail__label">Gửi từ</span>
                                <span class="product-detail__text">${product.from}</span>
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

// render products
renderProducts();

// sort price
function sortPrice() {
    let firstSelection = document.querySelector('.select-input__list > li:first-child');
    let lastSelection = document.querySelector('.select-input__list > li:last-child');

    // Remove dots and convert to numbers from price
    function fixPrice(num) {
        return Number.parseInt(num.replace(/[\.]/g, ''));
    }

    // Sort from low to high
    if (firstSelection) {
        firstSelection.onclick = () => {
            products.sort((a, b) => {
                a = fixPrice(a.curPrice);
                b = fixPrice(b.curPrice);
                return a - b;
            })
            renderProducts();
        }
    }

    // Sort from high to low
    if (lastSelection) {
        lastSelection.onclick = () => {
            products.sort((a, b) => {
                a = fixPrice(a.curPrice);
                b = fixPrice(b.curPrice);
                return b - a;
            })
            renderProducts();
        }
    }
}

// re-render products after sort price 
sortPrice();

// sort products
function sortProducts() {
    let btnClassList = document.getElementsByClassName('home-filter__btn'); // get button class list
    let cmBtn = btnClassList[0]; // get element of the common button
    let newBtn = btnClassList[1]; // get element of the newest button
    let sellBtn = btnClassList[2]; // get element of best-selling button

    // remove background class of button
    function removeBgrClass() {
        for (let el of btnClassList) {
            el.classList.remove('btn--primary');
        }
    }

    if (cmBtn) {
        cmBtn.onclick = () => {
            removeBgrClass();
            cmBtn.classList.add('btn--primary');
            products.sort((a, b) => {
                return b.sold - a.sold;
            })
            renderProducts();
        }
    }

    if (newBtn) {
        newBtn.onclick = () => {
            location.reload();
        }
    }
    
    if (sellBtn) {
        sellBtn.onclick = () => {
            removeBgrClass();
            sellBtn.classList.add('btn--primary');
            products.sort((a, b) => {
                return b.sold - a.sold;
            })
            renderProducts();
        }
    }
}

// re-render products after sort options
sortProducts();

// handle register and login forms
function handleForms() {
    let regItem = document.getElementById('register-item'); // get element of register item
    let logItem = document.getElementById('login-item'); // get element of register item

    let modalLayer = document.querySelector('.modal'); // get element of modal layer

    let regForm = document.getElementById('register-form'); // get element of register form
    let logForm = document.getElementById('login-form'); // get element of login form

    let regToLogBtn = document.querySelector('#register-form .auth-form__switch-btn'); // get element of login button from register form
    let logToRegBtn = document.querySelector('#login-form .auth-form__switch-btn'); // get element of register button from login form
    
    // change the forms
    function changeForms(showForm, hideForm) {
        modalLayer.style.display = 'flex';
        showForm.style.display = 'block';
        hideForm.style.display = 'none';
    }
    
    // handle register form
    regItem.onclick = () => {
        Validator('#register-form', '.auth-form__group', 3);
        changeForms(regForm, logForm);
    }

    // switch to login form
    regToLogBtn.onclick = () => {
        Validator('#login-form', '.auth-form__group', 3);
        changeForms(logForm, regForm);
    }

    // handle login form
    logItem.onclick = () => {
        Validator('#login-form', '.auth-form__group', 3);
        changeForms(logForm, regForm);
    }
   
    // switch to register form
    logToRegBtn.onclick = () => {
        Validator('#register-form', '.auth-form__group', 3);
        changeForms(regForm, logForm);
    }

    // get element of overlay and remove the modal layer when clicked outside
    document.querySelector('.modal__overlay').onclick = () => {
        Validator('#register-form', '.auth-form__group', 3, ' ');
        Validator('#login-form', '.auth-form__group', 3, ' ');
        modalLayer.style.display = 'none';
    }
}

handleForms();

// let buyInfoBtn = document.querySelector('.product-btn-main__buying'); // get element of the info page buy button 
// buyInfoBtn.classList.add = ('href', 'product-cart.html')
// buyInfoBtn.onclick = () => {
// }