
// -----hamburger------

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});


// -----login------
document.querySelector("#show-login").addEventListener("click", function () {
  document.querySelector(".popup").classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("active");
});



// -----主選單預訂行程------
const menuA_btn = document.querySelector('.meuleftA');
const mega_menu = document.querySelector('.mega-box');

menuA_btn.addEventListener('mouseover', function () {
  menuA_btn.classList.toggle('meuleftA-active');
  mega_menu.classList.toggle('meuleftA-active');
  mega_menu.style.display = "";
  mega2_menu.style.display = "none";
});


document.querySelector(".rowClose").addEventListener("click", function () {
  document.querySelector(".mega-box").classList.remove("meuleftA-active");
});



// -----主選單準備啟程------

const menuA2_btn = document.querySelector('.meuleftA2');
const mega2_menu = document.querySelector('.mega-box2');

menuA2_btn.addEventListener('mouseover', function () {
  menuA2_btn.classList.toggle('meuleftA-active2');
  mega2_menu.classList.toggle('meuleftA-active2');
  mega2_menu.style.display = "";
  mega_menu.style.display = "none";
});

document.querySelector(".rowClose2").addEventListener("click", function () {
  document.querySelector(".mega-box2").classList.remove("meuleftA-active2");
});

// let card_bool=true;

// $('#moreSearch_button').click(function(e){
//     e.preventDefault();
//     if(card_bool){
//         $('#moreSearch_card').animate({width:"100%"},500,'swing');
//         // $('#moreSearch_button').animate({top:"30%"},500,'swing');
//         card_bool=false;
//     }
//     else
//     {
//         $('#moreSearch_card').animate({width:"0px"},500,'swing');
//         // $('#moreSearch_button').animate({left:"0px"},500,'swing');
//         card_bool=true;
//     }
// })




// -----RWD主選單預訂行程------

// const menuRWDA_btn = document.querySelector('.mobile-navDown');
// const megaRWD_menu = document.querySelector('.mega-box');
// const moble_navdowndiv= document.querySelector('.moble-navdowndiv');

// menuRWDA_btn.addEventListener('click', function () {
//     menuRWDA_btn.classList.toggle('meuleftA-active');
//     megaRWD_menu.classList.toggle('meuleftA-active');
//     megaRWD_menu.style.display="";

// });

// ---------goplacepop-------------

// const goplace_btn = document.querySelector('#goplacebtn');
// const goplacepopact = document.querySelector('#goplacepop');

// goplace_btn.addEventListener('click', function () {
//     console.log("aaa");
//     goplace_btn.classList.toggle('#goplacepop.active');
//     goplacepopact.classList.toggle('#goplacepop.active');
// });

document.querySelector("#goplacebtn").addEventListener("click", function () {
  document.querySelector("#goplacepop").classList.add("active");
  $('html,body').animate({ scrollTop: 15 }, 333);
});
document.querySelector("#arriveplacebtn").addEventListener("click", function () {
  document.querySelector("#goplacepop").classList.add("active");
});

document.querySelector("#goplacebtn").addEventListener("click", function () {
  document.querySelector("#goplacepopdown").classList.add("active");
});
document.querySelector("#arriveplacebtn").addEventListener("click", function () {
  document.querySelector("#goplacepopdown").classList.add("active");
});

document.querySelector(".mapscloseBtn").addEventListener("click", function () {
  document.querySelector("#goplacepop").classList.remove("active");
  $('html,body').animate({ scrollTop: 0 }, 333);
});

document.querySelector(".mapscloseBtn").addEventListener("click", function () {
  document.querySelector("#goplacepopdown").classList.remove("active");
  $('html,body').animate({ scrollTop: 0 }, 333);
});


// ---------地圖按鈕跳轉畫面-------------


$(document).ready(function () {
  $("#correctbtn1").click(function () {
    $("html, body").animate({
      scrollTop: $("#btnfake1").offset().top
    }, { duration: 500, easing: "swing" });
    return false;
  });
  $("#correctbtn2").click(function () {
    $("html, body").animate({
      scrollTop: $("#btnfake2").offset().top
    }, { duration: 500, easing: "swing" });
    return false;
  });
});

// ---------上面的三個按鈕-----------

$(document).ready(function () {
  $("#gppddown2").click(function () {
    $("html, body").animate({
      scrollTop: $("#btnfake1").offset().top
    }, { duration: 500, easing: "swing" });
    return false;
  });
  $("#gppddown3").click(function () {
    $("html, body").animate({
      scrollTop: $("#btnfake2").offset().top
    }, { duration: 500, easing: "swing" });
    return false;
  });
});
$('#gppddown1').click(function () {
  $('html,body').animate({ scrollTop: 15 }, 333);
});



// --------------登入後------------------

document.querySelector("#logout").addEventListener("click", function () {
  document.querySelector(".poploginBox").classList.remove("active");
  document.querySelector(".popbiglogin").classList.remove("active");
  window.location.href = "./flyon.html";
});
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const loginbtn = document.querySelector("#loginbtn");
const popup = document.querySelector(".popup");
const hiName = document.querySelector(".hiName");
const poploginnameround = document.querySelector(".poploginnameround");
const flyonpointspan = document.querySelector(".flyonpointspan");

loginbtn.addEventListener("click", function () {
  // fetch("./Login.json")
  fetch('http://localhost/api/Member')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      let result;
      myJson.find(e => {
        if (e.email == email.value && e.password == password.value) {
          result = e;
        }
      });
      if (result) {
        document.querySelector(".poploginBox").classList.add("active");
        popup.style.display = "none";
        window.localStorage.setItem("id", result.memberId)
        window.localStorage.setItem("name", result.memberName)
        window.localStorage.setItem("gender", result.gender)
        window.localStorage.setItem("address", result.address)
        window.localStorage.setItem("mail", result.email)
        window.localStorage.setItem("phone", result.phone)
        window.localStorage.setItem("birthday", result.birthday)
        window.localStorage.setItem("password", result.password)
        window.localStorage.setItem("pin", result.pin)
        window.localStorage.setItem("point", result.totalPoint)

        
        let NAME = window.localStorage.getItem("name");
        let NAMESplit1 = NAME.split("");
        let NAMESplit2 = NAME.split(" ");
        let MAIL = window.localStorage.getItem("mail");
        let POINT = window.localStorage.getItem("point");
        flyonpointspan.innerHTML = `${POINT}`;
        poploginnameround.innerHTML = `${NAMESplit1[0]}`;
        hiName.innerHTML = `<h6 class="hiNameh6-1">Hi</h6>
                                <h3 class="hiNameh3">${NAMESplit2[0]}</h3>
                                <h6 class="hiNameh6-2">${MAIL}</h6>
                                <div class="hinameRed">RED</div>`;
      }
      else {
        alert("帳號或密碼錯誤，請重新輸入");
      }
    })
});

const MyflyonName = document.querySelector(".MyflyonName");
MyflyonName.addEventListener("click", function () {
  window.location.href = "../3_積分/Gift.html";
})


// --------------右邊登入小箭頭------------------

const poploginName = document.querySelector(".poploginName");

let arrowclick = true;
$("#poploginNamebtn").click(function (e) {
  let NAME = window.localStorage.getItem("name");
  let NAMESplit = NAME.split("");
  if (arrowclick) {
    $(".down").css('transform', 'rotate(-135deg)')
    arrowclick = false;
    $(".poploginnameround").replaceWith(`<div class="poploginnameroundX">&times</div>`);
    // 大大大方框
    $(".popbiglogin").addClass("active")
  }
  else {
    $(".down").css('transform', 'rotate(45deg)')
    arrowclick = true;
    $(".poploginnameroundX").replaceWith(`<div class="poploginnameround">${NAMESplit[0]}</div>`);
    // 大大大方框
    $(".popbiglogin").removeClass("active")
  }
});

const correctbtn3 = document.querySelector("#correctbtn3");
correctbtn3.addEventListener("click", function () {
  window.location.href = "../4_票務/Flyon Tickets.html";
})