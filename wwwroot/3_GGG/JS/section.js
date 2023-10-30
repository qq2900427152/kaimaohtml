function doFirst() {
    // const nameAndNo = document.querySelector(".nameAndNo");
    // let NAME = window.localStorage.getItem("name");
    // let NAMESplit2 = NAME.split(" ");
    // let EMAIL = window.localStorage.getItem("mail");

    // nameAndNo.innerHTML = `<h5>Hello ${NAMESplit2[0]}</h5>
    //                  <p>Member no: ${EMAIL}</p>`;
    // const point = document.querySelector(".point");
    // let POINT = window.localStorage.getItem("point");
    // point.innerHTML = `${POINT}`;

    let ID = window.localStorage.getItem("id");
    let url = `http://localhost/api/Member/${ID}`
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            const nameAndNo = document.querySelector(".nameAndNo");
            let NAME = myJson.memberName;
            let NAMESplit2 = NAME.split(" ");
            let EMAIL = myJson.email;

            nameAndNo.innerHTML = `<h5>Hello ${NAMESplit2[0]}</h5>
                             <p>Member no: ${EMAIL}</p>`;
            const point = document.querySelector(".point");
            let POINTT = myJson.totalPoint;
            point.innerHTML = `${POINTT}`;
        });
}
window.addEventListener("load", doFirst)