let total = 0;
let adultTotal = 0;
let childTotal = 0;
let babyTotal = 0;

const AdultMinus = document.querySelector("#AdultMinus");
const AdultAdd = document.querySelector("#AdultAdd");
const AdultTotal = document.querySelector("#AdultTotal");

const ChildMinus = document.querySelector("#ChildMinus");
const ChildAdd = document.querySelector("#ChildAdd");
const ChildTotal = document.querySelector("#ChildTotal");

const BabyMinus = document.querySelector("#BabyMinus");
const BabyAdd = document.querySelector("#BabyAdd");
const BabyTotal = document.querySelector("#BabyTotal");

const wrongspan=document.querySelector(".wrongspan");
const wrongspanbox=document.querySelector(".wrongspanbox");

AdultMinus.addEventListener("click", function () {
    adultTotal--;
    AdultTotal.innerHTML = adultTotal;
    total = adultTotal + childTotal + babyTotal;
    totalLessNine();
    if (adultTotal <= 0) {
        AdultMinus.disabled = true;
    }
})
AdultAdd.addEventListener("click", function () {
    adultTotal++;
    AdultTotal.innerHTML = adultTotal;
    total = adultTotal + childTotal + babyTotal;
    AdultMinus.disabled = false;
    totalOverNine();
})

ChildMinus.addEventListener("click", function () {
    childTotal--;
    ChildTotal.innerHTML = childTotal;
    total = adultTotal + childTotal + babyTotal;
    totalLessNine();
    if (childTotal <= 0) { ChildMinus.disabled = true; }
})
ChildAdd.addEventListener("click", function () {
    childTotal++;
    ChildTotal.innerHTML = childTotal;
    total = adultTotal + childTotal + babyTotal;
    ChildMinus.disabled = false;
    totalOverNine();
})

BabyMinus.addEventListener("click", function () {
    babyTotal--;
    BabyTotal.innerHTML = babyTotal;
    total = adultTotal + childTotal + babyTotal;
    totalLessNine();
    if (babyTotal <= 0) { BabyMinus.disabled = true; }
})
BabyAdd.addEventListener("click", function () {
    babyTotal++;
    BabyTotal.innerHTML = babyTotal;
    total = adultTotal + childTotal + babyTotal;
    BabyMinus.disabled = false;
    totalOverNine();
})


//如果總人數大於九，加按鍵就無作用
function totalOverNine() {
    if (total >= 9) {
        AdultAdd.disabled = true;
        ChildAdd.disabled = true;
        BabyAdd.disabled = true;
        wrongspanbox.style.display="";
        wrongspan.innerHTML="<span>如果需要預訂十位成員以上,請聯絡票務專服人員.</span>"
    }
}
//如果總人數小於九，加按鍵就有作用
function totalLessNine() {
    if (total <= 9) {
        AdultAdd.disabled = false;
        ChildAdd.disabled = false;
        BabyAdd.disabled = false;
        wrongspan.innerHTML=""
        wrongspanbox.style.display="none";
    }
}