//生成驗證碼==================================================
var valcode = ""
var memberemail = ""
var email驗證 = false;
$(function () {
    valcode = Math.random().toString(36).substring(2, 6).toUpperCase();
    console.log(valcode)
})
//生成驗證碼結束==============================================

//寄送驗證碼==================================================
function sendEmail() {
    Email.send({
        SecureToken: "1cae3f90-4f5e-4df2-9f12-b138075cd5d4",
        To: `${memberemail}`,
        From: "flyonairlineservices@gmail.com",
        Subject: "歡迎加入飛昂航空",
        Body: `您的驗證碼為${valcode}`
    }).then(
        message => alert("驗證碼已寄出")
    );
}
//寄送驗證碼結束==============================================

//輸入格點擊變色============================
$(function () {
    $(':text').focus(function () {
        $(this).css('backgroundColor', 'aliceblue')
    }).blur(function () {
        $(this).css('backgroundColor', 'transparent')
    })
    $(':password').focus(function () {
        $(this).css('backgroundColor', 'aliceblue')
    }).blur(function () {
        $(this).css('backgroundColor', 'transparent')
    })
    $('select').focus(function () {
        $(this).css('backgroundColor', 'aliceblue')
    }).blur(function () {
        $(this).css('backgroundColor', 'transparent')
    })

})

var genderCheck = false;
var countryCheck = false;
var firstround = false;

//第一段註冊=======================================================
$(function () {

    $('#countryselect').blur(function () {

        if ($(this).val() == 'Taiwan') {
            countryCheck = true
        }
        if (genderCheck == true && countryCheck == true && firstround == true) {

            $('#btn1').css('background', '#ba3e3c')
        }
    })

    $('#mygenderselect').blur(function () {

        if ($(this).val() == 'true' || $(this).val() == 'false') {
            genderCheck = true
        }
        if (genderCheck == true && countryCheck == true && firstround == true && email驗證 == true) {

            $('#btn1').css('background', '#ba3e3c')
        }
    })

    //全部輸入後，確認按鈕變紅色
    $('#email, #lastname, #firstname, #birth').blur(function () {
        if ($('#email').val() !== '' && $('#lastname').val() !== '' && $('#firstname').val() !== '' && $('#birth').val() !== '') {
            firstround = true
            if (genderCheck == true && countryCheck == true && firstround == true && email驗證 == true) {

                $('#btn1').css('background', '#ba3e3c')
            }
        }
    })
    //end

    //信箱規則開始
    $('#email').blur(function () {
        let pattern = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
        if (!pattern.test($('#email').val())) {
            alert('請輸入正確Email格式')
            $('#email').val("")
        } else {
            $('#mailchecking').css('display', 'block')
            $('#mail驗證提示').css('display', 'flex')
            $('#emailbox').css('width', '430px')
            $('#emailimg').css('display', 'block')
            memberemail = $('#email').val()

        }
    })
    //end

    //Email驗證正確後===================================
    $('#mailnumber').blur(function () {

        if ($('#mailnumber').val() == valcode) { //驗證正確
            $('#emailimg').attr('src', './images/icons8-ok-48.png')
            $('#mailchecking').css('display', 'none')
            $('#mail驗證提示').css('display', 'none')
            $('#btn1').css('background', '#ba3e3c')
            email驗證 = true

        } else {//驗證失敗
            $('#emailimg').attr('src', './images/icons8-cancel-48.png')
            $('#mailnumber').val("")
            email驗證 = false
        }
    })



    //Email驗證正確結束=================================

    //如果沒有全部輸入，跳提示
    $('#btn1').click(function () {
        //alert('111')
        
        let failed = false
        $('#email, #lastname, #firstname, #birth').each(function () {
            if ($(this).val() == '') {
                failed = true
            }
        })

        if (failed == false && email驗證 == true) {
            //這裡輸入 1. 讓下面的第二段表格出現(抓class pw) 2.圖的進度改成第二步(用換圖的方式) 3.然後讓確認失效
            $('.pw').css('display', 'flex')
            $('#btn1').css('display', 'none')
            $('#step').attr('src', "./images/step2.png")
            $('#first').css('visibility', 'hidden')
            $('#second').css('visibility', 'visible')
            $('#thank1').text(`謝謝 ${$('#firstname').val()} ，讓我們保護您的帳戶`)

            if ($(window).width() < 574) {
                let target_top = $("#area2").offset().top - 150;
                let $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                $body.animate({ scrollTop: target_top }, 800);
            }
            else {
                let target_top = $("#area2").offset().top;
                let $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                $body.animate({ scrollTop: target_top }, 800);
            }

        } else {
            alert('請輸入所有空格')
        }

    })
    //end

})
//第一段註冊結束====================================================




//第二段註冊開始===================================================
//眼睛-顯示密碼 ===============================================
function ShowPwd1() {
    let x = document.getElementById("pwd1");
    let y = document.getElementById("eye1");
    if (x.type === "password") {
        x.type = "text";
        y.src = "./images/icons8-eye-80.png"
    } else {
        x.type = "password";
        y.src = "./images/icons8-closed-eye-80.png"
    }

}
function ShowPwd2() {
    let x = document.getElementById("pwd2");
    let y = document.getElementById("eye2");
    if (x.type === "password") {
        x.type = "text";
        y.src = "./images/icons8-eye-80.png"
    } else {
        x.type = "password";
        y.src = "./images/icons8-closed-eye-80.png"
    }

}
function ShowPwd3() {
    let x = document.getElementById("pwd3");
    let y = document.getElementById("eye3");
    if (x.type === "password") {
        x.type = "text";
        y.src = "./images/icons8-eye-80.png"
    } else {
        x.type = "password";
        y.src = "./images/icons8-closed-eye-80.png"
    }

}
function ShowPwd4() {
    let x = document.getElementById("pwd4");
    let y = document.getElementById("eye4");
    if (x.type === "password") {
        x.type = "text";
        y.src = "./images/icons8-eye-80.png"
    } else {
        x.type = "password";
        y.src = "./images/icons8-closed-eye-80.png"
    }

}
//顯示密碼結束 ====================================================

//確認密碼規則開始================================================
$(function () {
    let flag1 = false
    let flag2 = false
    let flag3 = false
    //8個字符規則================================
    $('#pwd1').keyup(function () {


        let password = $('#pwd1').val()
        // let flag2 = false

        if (password.length >= 8) {
            // alert('ok')
            $('#check1').attr("src", "./images/icons8-ok-48.png")
            flag1 = true
        } else {
            $('#check1').attr("src", "./images/icons8-cancel-48.png")
            flag1 = false
        }
        //8個字符規則結束============================

        //一個大寫字符規則================================
        let pattern = /[A-Z]/g;
        let v = pattern.test($('#pwd1').val())
        if (v == true) {
            $('#check2').attr("src", "./images/icons8-ok-48.png")
            flag2 = true
        } else {
            $('#check2').attr("src", "./images/icons8-cancel-48.png")
            flag2 = false
        }
        //一個大寫字符規則結束================================

        //一個數字或特殊符號規則================================
        let pattern2 = /\d|[!@#$%^&*]/g;
        let v2 = pattern2.test($('#pwd1').val())
        if (v2 == true) {
            $('#check3').attr("src", "./images/icons8-ok-48.png")
            flag3 = true
        } else {
            $('#check3').attr("src", "./images/icons8-cancel-48.png")
            flag3 = false
        }

        //一個數字或特殊符號規則結束================================
    })//keyup
    $('#pwd1').blur(function () {
        if (flag1 !== true || flag2 !== true || flag3 !== true) {
            $('#wrongAlert').css("visibility", "visible")
            $('#pwd1').val("")
            $('#check1').attr("src", "./images/icons8-cancel-48.png")
            flag1 = false
            $('#check2').attr("src", "./images/icons8-cancel-48.png")
            flag2 = false
            $('#check3').attr("src", "./images/icons8-cancel-48.png")
            flag3 = false
        } else {
            $('#wrongAlert').css("visibility", "hidden")
        }
    })
})

$('#pwd3').blur(function () {
    if ($(this).val().length < 4) {
        $(this).val("")
    }
})

//二次密碼確認===================================================
//密碼
$('#pwd2').blur(function () {

    if ($(this).val() !== $('#pwd1').val()) {
        $('#wrongAlert1').css("visibility", "visible")
        $('#pwd2').val('')
    } else {
        $('#wrongAlert1').css("visibility", "hidden")
    }
})


//pin
$('#pwd4').blur(function () {

    if ($(this).val() !== $('#pwd3').val()) {
        $('#wrongAlert2').css("visibility", "visible")
        $('#pwd4').val('')
    } else {
        $('#wrongAlert2').css("visibility", "hidden")
    }
})

//二次密碼確認結束===================================================




//確認密碼規則結束================================================

//第二個確認按鈕
$(function () {
    $('#pwd1, #pwd2, #pwd3, #pwd4').blur(function () {
        if ($('#pwd1').val() !== '' && $('#pwd2').val() !== '' && $('#pwd3').val() !== '' && $('#pwd4').val() !== '') {
            $('#btn2').css('background', '#ba3e3c')
        }
    })
    //end
    //如果沒有全部輸入，跳提示
    $('#btn2').click(function () {
        // alert('111')
        let failed = false
        $('#pwd1, #pwd2, #pwd3, #pwd4').each(function () {
            if ($(this).val() == '') {
                failed = true
            }
        })

        if (failed == true) {
            alert('請輸入所有空格')
        } else {
            //這裡輸入 1. 讓下面的第三段表格出現(抓class pw) 2.圖的進度改成第三步(用換圖的方式) 3.然後讓確認失效
            $('.detail').css('display', 'flex')
            $('#btn2').css('display', 'none')
            $('.box-pw-btn').css('margin-bottom', '0px')
            $('#step').attr('src', './images/step3.png')
            $('#first').css('visibility', 'hidden')
            $('#second').css('visibility', 'hidden')
            $('#third').css('visibility', 'visible')
            $('#thank2').text(`${$('#firstname').val()} ，我們怎麼聯繫您？`)

            if ($(window).width() < 574) {
                let target_top = $("#area3").offset().top - 150;
                let $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                $body.animate({ scrollTop: target_top }, 800);
            }
            else {
                let target_top = $("#area3").offset().top;
                let $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
                $body.animate({ scrollTop: target_top }, 800);
            }

        }

    })
})
//end
//第二段註冊結束===================================================

//第三段註冊開始===============================================================

function cls() {
    //捕獲觸發事件的物件，並設定為以下語句的預設物件
    with (event.srcElement)
    //如果當前值為預設值，則清空
    if (value == defaultValue) value = ""


}
var flag6 = false
var flag7 = false
var flag8 = false
var flag9 = false

function res1() {
    //捕獲觸發事件的物件，並設定為以下語句的預設物件
    with (event.srcElement)
    //如果當前值為空，則重置為預設值
    if (value == "") {
        value = defaultValue
        flag6 = false
    } else {
        flag6 = true
    }
}
function res2() {
    //捕獲觸發事件的物件，並設定為以下語句的預設物件
    with (event.srcElement)
    //如果當前值為空，則重置為預設值
    if (value == "") { value = defaultValue }
}
function res3() {
    //捕獲觸發事件的物件，並設定為以下語句的預設物件
    with (event.srcElement)
    //如果當前值為空，則重置為預設值
    if (value == "") {
        value = defaultValue
        flag7 = false
    } else {
        flag7 = true
    }
}
function res4() {
    //捕獲觸發事件的物件，並設定為以下語句的預設物件
    with (event.srcElement)
    //如果當前值為空，則重置為預設值
    if (value == "") {
        value = defaultValue
        flag8 = false
    } else {
        flag8 = true
    }
}
function res5() {
    //捕獲觸發事件的物件，並設定為以下語句的預設物件
    with (event.srcElement)
    //如果當前值為空，則重置為預設值
    if (value == "") {
        value = defaultValue
        flag9 = false
    } else {
        flag9 = true
    }
}

function res6() {
    //捕獲觸發事件的物件，並設定為以下語句的預設物件
    with (event.srcElement)
    //如果當前值為空，則重置為預設值
    if (value == "") {
        value = defaultValue

    }
}


var flag5 = false
//加入按鈕===============================
$(function () {

    // $('#city, #postal, #address, #phone').blur(function () {
    //     if ($('#city').val() !== '' && $('#postal').val() !== '' && $('#address').val() !== '' && $('#phone').val() !== '') {
    //         // $('#btn3').css('background', '#ba3e3c')
    //         flag4 = true
    //         if (flag6 == true && flag5 == true) {
    //             $('#btn3').css('background', '#ba3e3c')
    //             // alert('OK')
    //         }
    //     } else { flag4 = false }
    // })


    $('#city, #postal, #address, #phone').blur(function () {
        if (flag5 == true && flag6 == true && flag7 == true && flag8 == true && flag9 == true) {
            $('#btn3').css('background', '#ba3e3c')

        }
    })

    $('#el').click(function () {
        if ($("#el").is(":checked")) {
            flag5 = true
            if (flag5 == true && flag6 == true && flag7 == true && flag8 == true && flag9 == true) {
                $('#btn3').css('background', '#ba3e3c')
                // alert('OK')
            }
        } else {
            flag5 = false
        }
    })

    // if(flag4==true && flag5==true){
    //     $('#btn3').css('background', '#ba3e3c')
    //     // alert('OK')
    // }

    //end
    //如果沒有全部輸入，跳提示
    $('#btn3').click(function () {
        // alert('111')

        if (flag6 == false || flag5 == false || flag7 == false || flag8 == false || flag9 == false) {
            alert('請輸入所有空格')
        } else {
            let gender = $("#gender option:selected").val();
            let lastname = document.querySelector("#lastname");
            let firstname = document.querySelector("#firstname");
            let birth = document.querySelector("#birth");
            let email = document.querySelector("#email");
            let pwd1 = document.querySelector("#pwd1");
            let pwd3 = document.querySelector("#pwd3");
            let state = document.querySelector("#state");
            let city = document.querySelector("#city");
            let postal = document.querySelector("#postal");
            let address = document.querySelector("#address");
            let phone = document.querySelector("#phone");

            let mGender = Boolean(gender);
            let mName = lastname.value + " " + firstname.value;
            let mBirthday = birth.value;
            let mEmail = email.value;
            let mPassword = pwd1.value;
            let mPIN = pwd3.value;
            let mAddress = postal.value + city.value + state.value + address.value;
            let mPhone = phone.value;

            let _data = {
                "MemberName": mName,
                "Gender": mGender,
                "Address": mAddress,
                "Email": mEmail,
                "Phone": mPhone,
                "Birthday": mBirthday,
                "Password": mPassword,
                "PIN": mPIN,
                "TotalPoint": 0,
                // "flyOnGiftOrders": [],
                // "flyOnTickets": []
            }


            fetch('http://localhost/api/Member', {
                method: "POST",
                body: JSON.stringify(_data),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
                .then(response => response.json())
                .then(json => console.log(json))
                .catch(err => console.log(err));
        }
        //全部輸入完成 送出表單 轉跳頁面
        // $(window).attr('location', "welcom.html")
        Swal.fire({
            imageUrl: './images/welcome.png',
            width: '1000px',
            position: 'center',
            timer: 3000,
            html: `<button class="OKbtn" onclick="window.location.href='../1_首頁/flyon.html'">讓我們立即開始</button>`,
            showConfirmButton: false,
        }).then(function () { window.location.href = "../1_首頁/flyon.html" })
    })
})


 //第三段註冊結束===============================================================
