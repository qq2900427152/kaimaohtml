
var place_date = [
    {
        tag: "tpa",
        place: "臺灣(TPA)",
    },
    {
        tag: "jpn",
        place: "日本(JPN)",
    },
    {
        tag: "kor",
        place: "南韓(KR)",
    },
    {
        tag: "hkg",
        place: "香港(HKG)",
    },
    {
        tag: "bkk",
        place: "泰國(BKK)",
    },
]
const goplace = document.querySelector(".goPlace");
const arriveplace = document.querySelector(".arrivePlace");
let html = "";
let arrivehtml = "";


$(".goPlace").click(function (e) {

    if (html != "") {
        html = "";
        arrivehtml = "";
        document.querySelector(".goPlace").innerHTML = "";
        document.querySelector(".arrivePlace").innerHTML = "";
        $(".correctbtn1").css('visibility','hidden')
    }

});

$(".arrivePlace").click(function (e) {

    if (arrivehtml != "") {
        arrivehtml = "";
        document.querySelector(".arrivePlace").innerHTML = "";
        $(".correctbtn1").css('visibility','hidden')
    }
});



// --------------------tpa---------------------------

$(".tpa").click(function (e) {
    var tagname = $(this).attr("data-name");

    if (html != `${place_date[0].place}` && html != "") {
        arrivehtml = `${place_date[0].place}`;
        arriveplace.innerHTML = arrivehtml;
    }
    else {
        html = `${place_date[0].place}`;
        goplace.innerHTML = html;
    }
    if (html != "" && arrivehtml != "") {
        $(".correctbtn1").css('visibility','visible')
    }
});

$(".tpa1").click(function (e) {
    var tagname = $(this).attr("data-name");
    if (html != `${place_date[0].place}` && html != "") {
        arrivehtml = `${place_date[0].place}`;
        arriveplace.innerHTML = arrivehtml;
    }
    else {
        html = `${place_date[0].place}`;
        goplace.innerHTML = html;
    }
    if (html != "" && arrivehtml != "") {
        $(".correctbtn1").css('visibility','visible')
    }
    
});

var bkk_btn = document.querySelector('.tpa1');

bkk_btn.addEventListener('mouseenter', function () {
    document.querySelector('.tpa').style['fill'] = '#ba3e3c';
    document.querySelector('.tpa').style['transform'] = 'translate(-5px,-5px)';
    document.querySelector('.tpa').style['transition'] = '0.5s';
}
);

var bkk_btn = document.querySelector('.tpa1');

bkk_btn.addEventListener('mouseout', function () {
    $(".tpa").attr("style", "");
}
);


// --------------------jpn---------------------------


$(".jpn").click(function (e) {
    var tagname = $(this).attr("data-name");

    if (html != `${place_date[1].place}` && html != "") {
        //not japan
        arrivehtml = `${place_date[1].place}`;
        arriveplace.innerHTML = arrivehtml;
    }
    else {
        html = `${place_date[1].place}`;
        goplace.innerHTML = html;
    }
    if (html != "" && arrivehtml != "") {
        $(".correctbtn1").css('visibility','visible')
    }

});

$(".jpn1").click(function (e) {
    var tagname = $(this).attr("data-name");
    if (html != `${place_date[1].place}` && html != "") {
        arrivehtml = `${place_date[1].place}`;
        arriveplace.innerHTML = arrivehtml;
    }
    else {
        html = `${place_date[1].place}`;
        goplace.innerHTML = html;
    }
    if (html != "" && arrivehtml != "") {
        $(".correctbtn1").css('visibility','visible')
    }
});
//字體帶動圖片
function A() {
    document.querySelector('.jpn3').style['fill'] = '#ba3e3c';
    document.querySelector('.jpn3').style['transform'] = 'translate(-5px,-5px)';
    document.querySelector('.jpn3').style['transition'] = '0.5s';
    document.querySelector('.jpn4').style['fill'] = '#ba3e3c';
    document.querySelector('.jpn4').style['transform'] = 'translate(-5px,-5px)';
    document.querySelector('.jpn4').style['transition'] = '0.5s';
    document.querySelector('.jpn5').style['fill'] = '#ba3e3c';
    document.querySelector('.jpn5').style['transform'] = 'translate(-5px,-5px)';
    document.querySelector('.jpn5').style['transition'] = '0.5s';
    document.querySelector('.jpn6').style['fill'] = '#ba3e3c';
    document.querySelector('.jpn6').style['transform'] = 'translate(-5px,-5px)';
    document.querySelector('.jpn6').style['transition'] = '0.5s';
};
function B() {
    $(".jpn3").attr("style", "");
    $(".jpn4").attr("style", "");
    $(".jpn5").attr("style", "");
    $(".jpn6").attr("style", "");
};
var bkk_btn = document.querySelector('.jpn1');
bkk_btn.addEventListener('mouseenter', function () {
    A();
}
);
bkk_btn.addEventListener('mouseout', function () {
    B();
}
);

var bkk_btn2 = document.querySelector('.jpn3');

bkk_btn2.addEventListener('mouseenter', function () {
    A();
}
);

var bkk_btn2 = document.querySelector('.jpn3');

bkk_btn2.addEventListener('mouseout', function () {
    B();
}
);

var bkk_btn3 = document.querySelector('.jpn4');

bkk_btn3.addEventListener('mouseenter', function () {
    A();
}
);

var bkk_btn3 = document.querySelector('.jpn4');

bkk_btn3.addEventListener('mouseout', function () {
    B();
}
);


// --------------------kor---------------------------



$(".kor").click(function (e) {
    var tagname = $(this).attr("data-name");
    if (html != `${place_date[2].place}` && html != "") {
        arrivehtml = `${place_date[2].place}`;
        arriveplace.innerHTML = arrivehtml;
    }
    else {
        html = `${place_date[2].place}`;
        goplace.innerHTML = html;
    }
    if (html != "" && arrivehtml != "") {
        $(".correctbtn1").css('visibility','visible')
    }

});

$(".kor1").click(function (e) {
    var tagname = $(this).attr("data-name");
    if (html != `${place_date[2].place}` && html != "") {
        arrivehtml = `${place_date[2].place}`;
        arriveplace.innerHTML = arrivehtml;
    }
    else {
        html = `${place_date[2].place}`;
        goplace.innerHTML = html;
    }
    if (html != "" && arrivehtml != "") {
        $(".correctbtn1").css('visibility','visible')
    }
});

var bkk_btn = document.querySelector('.kor1');

bkk_btn.addEventListener('mouseenter', function () {
    document.querySelector('.kor').style['fill'] = '#ba3e3c';
    document.querySelector('.kor').style['transform'] = 'translate(-5px,-5px)';
    document.querySelector('.kor').style['transition'] = '0.5s';
}
);

var bkk_btn = document.querySelector('.kor1');

bkk_btn.addEventListener('mouseout', function () {
    $(".kor").attr("style", "");
}
);

// --------------------hkg---------------------------

$(".hkg").click(function (e) {
    var tagname = $(this).attr("data-name");
    if (html != `${place_date[3].place}` && html != "") {
        arrivehtml = `${place_date[3].place}`;
        arriveplace.innerHTML = arrivehtml;
    }
    else {
        html = `${place_date[3].place}`;
        goplace.innerHTML = html;
    }
    if (html != "" && arrivehtml != "") {
        $(".correctbtn1").css('visibility','visible')
    }
});

$(".hkg1").click(function (e) {
    var tagname = $(this).attr("data-name");
    if (html != `${place_date[3].place}` && html != "") {
        arrivehtml = `${place_date[3].place}`;
        arriveplace.innerHTML = arrivehtml;
    }
    else {
        html = `${place_date[3].place}`;
        goplace.innerHTML = html;
    }
    if (html != "" && arrivehtml != "") {
        $(".correctbtn1").css('visibility','visible')
    }
});

var bkk_btn = document.querySelector('.hkg1');

bkk_btn.addEventListener('mouseenter', function () {
    document.querySelector('.hkg').style['fill'] = '#ba3e3c';
    document.querySelector('.hkg').style['transform'] = 'translate(-5px,-5px)';
    document.querySelector('.hkg').style['transition'] = '0.5s';
}
);

var bkk_btn = document.querySelector('.hkg1');

bkk_btn.addEventListener('mouseout', function () {
    $(".hkg").attr("style", "");
}
);

// --------------------bkk---------------------------

$(".bkk").click(function (e) {
    var tagname = $(this).attr("data-name");
    if (html != `${place_date[4].place}` && html != "") {
        arrivehtml = `${place_date[4].place}`;
        arriveplace.innerHTML = arrivehtml;
        $(".correctbtn1").css('visibility','hidden')
    }
    else {
        html = `${place_date[4].place}`;
        goplace.innerHTML = html;
        
    }
    if (html != "" && arrivehtml != "") {
        $(".correctbtn1").css('visibility','visible')
    }
});

$(".bkk1").click(function (e) {
    var tagname = $(this).attr("data-name");
    if (html != `${place_date[4].place}` && html != "") {
        arrivehtml = `${place_date[4].place}`;
        arriveplace.innerHTML = arrivehtml;
    }
    else {
        html = `${place_date[4].place}`;
        goplace.innerHTML = html;
        
    }
    if (html != "" && arrivehtml != "") {
        $(".correctbtn1").css('visibility','visible')
    }
});


var bkk_btn = document.querySelector('.bkk1');

bkk_btn.addEventListener('mouseenter', function () {
    document.querySelector('.bkk').style['fill'] = '#ba3e3c';
    document.querySelector('.bkk').style['transform'] = 'translate(-5px,-5px)';
    document.querySelector('.bkk').style['transition'] = '0.5s';
}
);

var bkk_btn = document.querySelector('.bkk1');

bkk_btn.addEventListener('mouseout', function () {
    $(".bkk").attr("style", "");
}
);





// --------------------按鈕--------------------------   




//     if (html != "" && arrivehtml != "") {
//         $(".correctbtn1").css('visibility','visible')
       
$(".correctbtn1").click(function (e) {
    $(".correctbtn1").css('visibility','hidden')

});

       
$(".correctbtn2").click(function (e) {
    $(".correctbtn2").css('visibility','hidden')

});