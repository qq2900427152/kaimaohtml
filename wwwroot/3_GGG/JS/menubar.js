const contentAll = document.querySelector("#contentAll");
const orderCheckout = document.querySelector("#orderCheckout");
let contentAllhtml = "";
//積分兌換
const pointChange = document.getElementsByName("pointChange");
pointChange[0].onclick = function () {
    RuleBar.style.display = "none";
    personalInfo.style.display = "none";
    contentAll.style.display = "";
    orderCheckout.style.display = "none";
    GiftAll();
};

//個人資料
const personalInfor = document.getElementsByName("personalInfor");
const personalInfo = document.querySelector(".personalInfo");
const personalInfo1 = document.querySelector(".personalInfo1");
const orderCheckoutName = document.querySelector(".orderCheckoutName");
const orderCheckoutPhone = document.querySelector(".orderCheckoutPhone");
const orderCheckoutAddress = document.querySelector(".orderCheckoutAddress");
let ID = window.localStorage.getItem("id");
let url = `http://localhost/api/Member/${ID}`
personalInfor[0].onclick = function () {
    RuleBar.style.display = "none";
    personalInfo.style.display = "";
    contentAll.style.display = "none";
    orderCheckout.style.display = "none";

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            let BIRTH = myJson.birthday;
            let BIRTHSplit = BIRTH.split("T");
            personalInfo1.innerHTML = `
                                    <table class="table table-hover">
                                        <tbody>
                                            <tr>
                                                <th scope="row">姓名 Member Name</th>
                                                <td><span>${myJson.memberName}</span></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">帳號 Account</th>
                                                <td>${myJson.email}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">地址 Address</th>
                                                <td>
                                                    <input type="text" name="Address" class="AddInput1" value="${myJson.address}">
                                                </td>
                                            </tr>
                                            <tr>
                                                <th scope="row">手機 Cellphone</th>
                                                <td>
                                                    <input type="text" name="Phone" class="AddInput2" value="${myJson.phone}">
                                                </td>
                                            <tr>
                                                <th scope="row">生日 Birthday</th>
                                                <td>${BIRTHSplit[0]}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">累積積分 Point</th>
                                                <td>${myJson.totalPoint}</td>
                                            </tr>
                                            <tr>
                                                <th></th>
                                                <!-- btn btn-secondary btn-md -->
                                                <td><button class="btnCheck" onclick="personalInfoRevise()">確認修改</button></td>
                                            </tr>
                                        </tbody>
                                    </table>`;
            orderCheckoutName.innerHTML = `姓名：${myJson.memberName}`;
            orderCheckoutPhone.innerHTML = `電話：${myJson.phone}`;
            orderCheckoutAddress.innerHTML = `地址：${myJson.address}`;
        });
};

function personalInfoRevise() {
    const AddInput1 = document.querySelector(".AddInput1");
    const AddInput2 = document.querySelector(".AddInput2");
    let POINT = window.localStorage.getItem("point") - ToPoint;
    let _data = {
        "memberId": ID,
        "memberName": window.localStorage.getItem("name"),
        "gender": Boolean(window.localStorage.getItem("gender")),
        "address": AddInput1.value,
        "email": window.localStorage.getItem("mail"),
        "phone": AddInput2.value,
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
    Swal.fire({
        position: 'center',
        icon: 'success',
        iconColor: 'white',
        title: '資料修改成功',
        showConfirmButton: false,
        timer: 1000,
        width: '300px',
        background: '#d85755',
        color: 'white',
    })
}

// 兌換規則
const pointRule = document.getElementsByName("pointRule");
const RuleBar = document.querySelector(".RuleBar");
let pointRulehtml = "";
pointRule[0].onclick = function () {
    personalInfo.style.display = "none";
    RuleBar.style.display = "";
    contentAll.style.display = "";
    orderCheckout.style.display = "none";
    fetch('http://127.0.0.1:5500/3_積分/JSON/Rule.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            pointRulehtml = `<div class="RuleContent">
                                     <div class="RuleContent1">
                                     ${myJson[0].Rule}
                                     </div>
                                 </div>`;
            contentAll.innerHTML = pointRulehtml;
        });
    RuleClick();
};

// 過去兌換
const pointRecord = document.getElementsByName("pointRecord");
pointRecord[0].onclick = function () {
    RuleBar.style.display = "none";
    personalInfo.style.display = "none";
    contentAll.style.display = "";
    orderCheckout.style.display = "none";

    // fetch('http://127.0.0.1:5500/3_積分/JSON/OrderList.json')
    fetch('http://localhost/api/Order')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {

            contentAllhtml = `<div class="OrderList">
            <div class="OrderList1">
                <table>
                    <thead>
                        <tr>
                            <th>訂單編號</th>
                            <th>訂單日期</th>
                            <th>訂單狀態</th>
                            <th>出貨日期</th>
                            <th>兌換數量</th>
                            <th>使用點數</th>
                            <th>詳細資訊</th>
                        </tr>
                    </thead>
                    <tbody>`;
            myJson.forEach(element => {
                if (element.memberId == window.localStorage.getItem("id")) {
                    let orderDate = element.orderDate;
                    let orderDateSplit = orderDate.split("T");
                    let orderShipDate = element.orderShipDate;
                    let orderShipDateSplit = orderShipDate.split("T");
                    contentAllhtml += `<tr>
                <td label="訂單編號">${element.orderNumber}</td>
                <td label="訂單日期">${orderDateSplit[0]}</td>
                <td label="訂單狀態">${element.orderStatus}</td>
                <td label="出貨日期">${orderShipDateSplit[0]}</td>
                <td label="兌換數量">${element.orderProductTotalItem}</td>
                <td label="使用點數">${element.orderProductTotalPoint}</td>
                <td label="詳細資訊"><button class="btnMore" onclick="OpenModal(${element.orderNumber})">MORE</button></td>
            </tr>`;
                }
            });
            contentAllhtml += `</tbody>
                                </table>
                                </div>
                                </div>`;
            contentAll.innerHTML = contentAllhtml;
        });
};
function OpenModal(id) {
    let OderListDetail1 = document.querySelector(".OderListDetail1");
    let OderListDetail1HTML = "";
    fetch('http://localhost/api/OrderDetail')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            OderListDetail1HTML = ` <table>
                                    <thead>
                                        <tr>
                                            <th>序</th>
                                            <th>禮品編號</th>
                                            <th>禮品名稱</th>
                                            <th>禮品數量</th>
                                            <th>禮品積分</th>
                                        </tr>
                                    </thead>
                                    <tbody>`;
            let count = 1;
            myJson.forEach(element => {
                if (element.orderNumber == id) {


                    //GiftID連接開始
                    let GiftID = element.giftId;
                    let Gifturl = `http://localhost/api/Gift/${GiftID}`

                    console.log(Gifturl)
                    fetch(Gifturl)
                        .then(function (response) {
                            return response.json();
                        })
                        .then(function (myGiftJson) {
                            if (myGiftJson.giftId == element.giftId) {
                                OderListDetail1HTML += `<tr>
                                                <td label="序">${count}</td>
                                                <td label="禮品編號">${element.giftId}</td>
                                                <td label="禮品名稱">${element.orderProductName}</td>
                                                <td label="禮品數量">${element.orderProductCount}</td>
                                                `;
                                count++;
                                OderListDetail1HTML += `<td label="禮品積分">${myGiftJson.giftPoint}</td>
                                </tr>
                                    </tbody>
                                `;

                            }
                            // OderListDetail1HTML += `
                            //         </table>`;


                            console.log(OderListDetail1HTML);
                            OderListDetail1.innerHTML = OderListDetail1HTML;
                        });
                }
            });

        });

    let element = document.getElementById('OderListDetail');
    element.style.display = 'block'
};
const CloseIcon = document.querySelector(".CloseIcon");
CloseIcon.addEventListener("click", CloseModal);

function CloseModal() {
    let element = document.getElementById('OderListDetail')
    element.style.display = 'none'
}
// 優惠商品
const discountProduct = document.getElementsByName("discountProduct");
discountProduct[0].onclick = function () {
    RuleBar.style.display = "none";
    personalInfo.style.display = "none";
    contentAll.style.display = "";
    orderCheckout.style.display = "none";
    discountGiftAll();
};

//兌換規則裡的每個一小按鈕會出現的資料
function RuleClick() {
    const Rule = document.getElementsByName("Rule");
    const Point = document.getElementsByName("Point");
    const Personal = document.getElementsByName("Personal");
    const App = document.getElementsByName("App");


    Rule[0].onclick = function () {
        contentAll.style.display = "";
        fetch('http://127.0.0.1:5500/3_積分/JSON/Rule.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                pointRulehtml = `<div class="RuleContent">
                                     <div class="RuleContent1">
                                     ${myJson[0].Rule}
                                     </div>
                                 </div>`;
                contentAll.innerHTML = pointRulehtml;
            });
    };
    Point[0].onclick = function () {
        contentAll.style.display = "";
        fetch('http://127.0.0.1:5500/3_積分/JSON/Rule.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                pointRulehtml = `<div class="RuleContent">
                                 <div class="RuleContent1">
                                 ${myJson[1].Point}
                                 </div>
                             </div>`;
                contentAll.innerHTML = pointRulehtml;
            });

    };

    Personal[0].onclick = function () {
        contentAll.style.display = "";
        fetch('http://127.0.0.1:5500/3_積分/JSON/Rule.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                pointRulehtml = `<div class="RuleContent">
                                 <div class="RuleContent1">
                                 ${myJson[2].Personal}
                                 </div>
                             </div>`;
                contentAll.innerHTML = pointRulehtml;
            });
    };
    App[0].onclick = function () {
        contentAll.style.display = "";
        fetch('http://127.0.0.1:5500/3_積分/JSON/Rule.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                pointRulehtml = `<div class="RuleContent">
                                 <div class="RuleContent1">
                                 ${myJson[3].App}
                                 </div>
                             </div>`;
                contentAll.innerHTML = pointRulehtml;
            });
    };
};
