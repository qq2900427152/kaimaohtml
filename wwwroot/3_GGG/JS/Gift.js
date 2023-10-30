function doFirst() {
    //sec2特價四樣商品圖
    const sec2 = document.querySelector(".sec2");
    let html = '';
    let disPro = {
        proBrand: ["AMADANA", "BEATS", "DIOR", "DYSON"],
        proName: ["廚餘處理機", "EP 頭戴式耳罩", "SAUVAGE曠野之心香氛", "SUPERSONIC 吹風機"],
        originalPrice: ["20000", "12000", "15000", "25000"],
        specialPrice: ["18000", "10000", "12000", "22000"]
    };

    for (let i = 0; i < 4; i++) {
        html += `<div class="discountProduct">
        <div class="discountFake">
        <a href="#">
            <div class="productImg">
                <img src="./images/Products/Discount/${disPro.proBrand[i]} ${disPro.proName[i]}.png" alt="" class="productPic">
            </div>
            <div class="overlay2">
                <span class="overlay4">Special Offer</span>
                <span class="overlay3">${disPro.specialPrice[i]}</span>
            </div>

            <div class="discountProductA1">
                <h4 class="picBrand">${disPro.proBrand[i]}</h4>
                <h2 class="picName">${disPro.proName[i]}</h2>
                <h4 class="picDes1">Point：${disPro.originalPrice[i]}</h4>
            </div>
        </a>
    </div>
    </div>`;
    }
    sec2.innerHTML = html;

    //積分兌換全部商品圖
    GiftAll();
}
//全部商品顯示
function GiftAll() {
    // http://localhost/api/first
    // http://127.0.0.1:5500/normalProducts.json
    const contentAll = document.querySelector("#contentAll");
    fetch('http://localhost/api/Gift')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            let html = '';
            html = `<div id="contentProduct" class="contentProAll">`;
            myJson.forEach(element => {
                html += `<div class="contentProduct">
                            <div class="myCard">
                                <div class="img-wrap">
                                    <img src="./images/Products/Normal/${element.giftName}.jpg" alt="${element.giftName}">
                                </div> 
                                <span class="productBrand">${element.giftBrand}</span>
                                <span class="productName">${element.giftName}</span>
                                <span class="productDes">${element.giftDescribe}</span>
                                <span class="productPoint">Point：${element.giftPoint}</span>
                                <div class="overlay" onclick="addToCart(${element.giftId})">
                                    <span class="overlay1">加入購物車
                                    <br>
                                    <img src="./images/icons-shopping-bag-white.png" class="shoppingCartWhite"></span>
                                </div>  
                            </div> 
                        </div>`;
            });
            html += `</div>`;
            contentAll.innerHTML = html;
        });
}
function discountGiftAll() {
    // <img src="./images/Products/Normal/${element.giftName}.jpg" alt="${element.giftName}"></img>
    const contentAll = document.querySelector("#contentAll");
    fetch('http://127.0.0.1:5500/3_積分/JSON/discountProducts.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            let html = '';
            console.log(myJson[0].giftName);
            html = `<div id="contentProduct" class="contentProAll">`;
            myJson.forEach(element => {
                html += `<div class="contentProduct">
                            <div class="myCard">
                                <div class="img-wrap">
                                    <img src="${element.img}" alt="${element.giftName}">
                                </div> 
                                <span class="productBrand">${element.giftBrand}</span>
                                <span class="productName">${element.giftName}</span>
                                <span class="productDes">${element.giftDescribe}</span>
                                <span class="productPoint">Point：${element.giftPoint}</span>
                                <div class="overlay" onclick="addToCart(${element.giftId})">
                                    <span class="overlay1">加入購物車
                                    <br>
                                    <img src="./images/icons-shopping-bag-white.png" class="shoppingCartWhite"></span>
                                </div>  
                            </div> 
                        </div>`;
            });
            html += `</div>`;
            contentAll.innerHTML = html;
        });
}
window.addEventListener("load", doFirst)


//購物車顯示
document.querySelector(".shoppingCart").addEventListener("mouseover", function () {
    document.querySelector(".shoppingList").classList.add("active");
});
document.querySelector(".shoppingList").addEventListener("mouseleave", function () {
    document.querySelector("#shoppingList").classList.remove("active");
});
document.querySelector(".ListcloseBtn").addEventListener("click", function () {
    document.querySelector("#shoppingList").classList.remove("active");
});

//購物車裡的內容
let cart = [];
// let cart = JSON.parse(localStorage.getItem("CART")) || [];
// updateCart();
const shoppingAllList = document.querySelector(".shoppingAllList");
const subtotal = document.querySelector(".subtotal");
const shoppingCartListCount = document.querySelector(".shoppingCartListCount");
const shoppingCartCount = document.querySelector(".shoppingCartCount");
const checkoutOrderListTotal = document.querySelector(".checkoutOrderListTotal");
const checkoutOrderList1 = document.querySelector("#checkoutOrderList1");
function addToCart(id) {

    if (cart.some((item) => item.giftId === id)) {
        changeNumberOfUnits("Add", id);
    }
    else {
        fetch('http://localhost/api/Gift')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                const item = myJson.find((element) => element.giftId === id);
                cart.push({

                    ...item,
                    numberOfUnits: 1
                });
                updateCart();
            })
    }
    Swal.fire({
        position: 'center',
        icon: 'success',
        iconColor: 'white',
        title: '已加入購物車',
        showConfirmButton: false,
        timer: 1000,
        width: '300px',
        background: '#d85755',
        color: 'white',
    })
};

function updateCart() {
    renderCartItems();
    renderSubtotal();

    // localStorage.setItem("CART",JSON.stringify(cart));
};
let ToPoint = 0, ToItem = 0;
function renderSubtotal() {
    let totalPoint = 0, totalItems = 0;
    cart.forEach((item) => {
        totalPoint += item.giftPoint * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });
    ToPoint = totalPoint;
    ToItem = totalItems;
    subtotal.innerHTML = `<span style="font-weight: 700;">總訂購數量：<span style="font-weight: 900;">${totalItems}</span>&nbsp;件商品&nbsp;&nbsp;總禮品點數：<span style="font-weight: 900;">${totalPoint}&nbsp;</span>點</span>`;
    shoppingCartListCount.innerHTML = totalItems;
    shoppingCartCount.innerHTML = totalItems;
    checkoutOrderListTotal.innerHTML = `<span style="font-weight: 500;">總訂購數量：共<span style="font-weight: 600; color:#ba3e3c;">&nbsp;${totalItems}&nbsp;</span>件</span>
                                        <span style="font-weight: 500;"> / 兌換禮品積分總計：<span style="font-weight:600;color:#ba3e3c;">${totalPoint}&nbsp;</span>點</span>`;
};

function renderCartItems() {
    let totalPoint = 0;
    checkoutOrderList1.innerHTML = "";
    shoppingAllList.innerHTML = "";
    cart.forEach((item) => {
        totalPoint = item.giftPoint * item.numberOfUnits;
        shoppingAllList.innerHTML += `
                <div class="shoppingListShow">
                    <div class="shopinfListImg">
                        <img src="./images/Products/Normal/${item.giftName}.jpg" alt="">
                    </div>
                    <div class="shoppingListMain">
                        <br>
                        <span>${item.giftName}</span>
                        <br>
                        <span>Point:${item.giftPoint}</span>
                        <br>
                        <span>數量</span>
                        <input type="button" value="－" class="countMinus" id="countMinus" onclick="changeNumberOfUnits('minus',${item.giftId})">
                        <span class="countAll" id="countAll">&nbsp;&nbsp;${item.numberOfUnits}&nbsp;&nbsp;</span>
                        <input type="button" value="+" class="countAdd" id="countAdd" onclick="changeNumberOfUnits('Add',${item.giftId})">
                    </div>
                    <div class="shoppingListTrashCan" onclick="removeItemFromCart(${item.giftId})">
                    <img src="https://img.icons8.com/external-outline-stroke-bomsymbols-/22/737373/external-garbage-can-general-office-outline-outline-stroke-bomsymbols-.png"/>
                    </div>
                </div>`;
        checkoutOrderList1.innerHTML += `<div class="checkoutOrderList1">
                                            <div class="OrderListImg">
                                                <img src="./images/Products/Normal/${item.giftName}.jpg" alt="">
                                            </div>
                                            <div class="OrderListName" style="padding-top:4% ;">
                                                <span class="OrderListNameBrand">${item.giftBrand}</span>
                                                <br>
                                                <span class="OrderListNameName">${item.giftName}</span>
                                                <br>
                                                <span class="OrderListNameDes">${item.giftDescribe}</span>
                                            </div>
                                            <div class="OrderListCount">
                                                <span>${item.numberOfUnits}</span>
                                            </div>
                                            <div class="OrderListPoint">
                                                <span>${totalPoint}</span>
                                            </div>
                                        </div>`;
    })
};

function changeNumberOfUnits(action, id) {
    cart = cart.map((item) => {
        let numberOfUnits = item.numberOfUnits;
        if (item.giftId === id) {
            if (action === "minus" && numberOfUnits >= 2) {
                numberOfUnits--;
            }
            else if (action === "Add" && numberOfUnits <= 8) {
                numberOfUnits++;
            }
        }
        return {
            ...item,
            numberOfUnits: numberOfUnits
        };
    });
    updateCart();
};

function removeItemFromCart(id) {
    cart = cart.filter((item) => item.giftId != id);
    updateCart();
}

const checkout = document.querySelector(".checkout");
checkout.addEventListener("click", function () {
    const contentAll = document.querySelector("#contentAll");
    const orderCheckout = document.querySelector("#orderCheckout");
    checkoutOrderList1.innerHTML = "";
    contentAll.style.display = "none";
    orderCheckout.style.display = "";
    orderCheckout.style.display = "";
    cart.forEach((item) => {
        checkoutOrderList1.innerHTML += `<div class="checkoutOrderList1">
                                            <div class="OrderListImg">
                                                <img src="./images/Products/Normal/${item.giftName}.jpg" alt="">
                                            </div>
                                            <div class="OrderListName" style="padding-top:4% ;">
                                                <span class="OrderListNameBrand">${item.giftBrand}</span>
                                                <br>
                                                <span class="OrderListNameName">${item.giftName}</span>
                                                <br>
                                                <span class="OrderListNameDes">${item.giftDescribe}</span>
                                            </div>
                                            <div class="OrderListCount">
                                                <span>${item.numberOfUnits}</span>
                                            </div>
                                            <div class="OrderListPoint">
                                                <span>${item.giftPoint}</span>
                                            </div>
                                        </div>`;
    })
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            orderCheckoutName.innerHTML = `姓名：${myJson.memberName}`;
            orderCheckoutPhone.innerHTML = `電話：${myJson.phone}`;
            orderCheckoutAddress.innerHTML = `地址：${myJson.address}`;
        });
});

const orderCheckoutConfirmBtn = document.querySelector("#orderCheckoutConfirmBtn");
orderCheckoutConfirmBtn.addEventListener("click", function () {
    //寫進資料庫//
    // let ID = window.localStorage.getItem("id");
    // let M = Math.floor(Math.random() * 90) + 10;
    // let Today = new Date();
    // let TODAY = `${Today.getFullYear()}0${Today.getMonth() + 1}${Today.getDate()}${M}`;
    // let _data = {
    //     "orderNumber": 2022091901,
    //     "orderDate": parseInt(TODAY),
    //     "orderStatus": "待確認",
    //     "orderShipDate": "2222-22-22",
    //     "orderProductTotalItem": ToPoint,
    //     "orderProductTotalPoint": ToItem,
    //     "memberId": ID
    // }
    // fetch('http://localhost/api/Order', {
    //     method: "POST",
    //     body: JSON.stringify(_data),
    //     headers: { "Content-type": "application/json; charset=UTF-8" }
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    //     .catch(err => console.log(err));
    let POINT;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            POINT = myJson.totalPoint - ToPoint;
            let _data = {
                "memberId": ID,
                "memberName": window.localStorage.getItem("name"),
                "gender": Boolean(window.localStorage.getItem("gender")),
                "address": window.localStorage.getItem("address"),
                "email": window.localStorage.getItem("mail"),
                "phone": window.localStorage.getItem("phone"),
                "birthday": window.localStorage.getItem("birthday"),
                "password": window.localStorage.getItem("password"),
                "pin": window.localStorage.getItem("pin"),
                "totalPoint": POINT,
                "flyOnGiftOrders": [],
                "flyOnTickets": []
            }

            fetch(url, {
                method: "PUT",
                body: JSON.stringify(_data),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
                .then(response => response.json())
                .then(json => console.log(json))
                .catch(err => console.log(err));



        });


    // 這是跳出來的視窗哦
    Swal.fire({
        position: 'center',
        icon: 'success',
        iconColor: 'white',
        title: '感謝您的兌換',
        timer: 1500,
        width: '600px',
        height: '350px',
        background: '#d85755',
        color: 'white',
        showConfirmButton: false
    }).then(function () { window.location.href = "./Gift.html" })

});