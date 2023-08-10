let iddata = "이솔";
let maildata = "ek******@n****.com";
let name = document.getElementById('nameid');
let nameinfo = document.getElementById('nameinfo');
let mailinfo = document.getElementById('mailinfo')
name.innerText = iddata;
nameinfo.innerText = iddata;
mailinfo.innerText = maildata;
/*공연정보 페이지네이션*/

/**
 * 필요한 페이지 번호 개수 구하기
 * @returns {number} - 필요한 페이지 번호 개수
 */
/*필요한 페이지 번호 개수*/
const getTotalPageCount = () => {
    return Math.ceil(data.length / count_per_page);
};

/*하이퍼링크*/

function moveMain() {
    location.href = "../html/main.html";
}
function moveMypage() {
    location.href = "../html/mypage.html";
}
function moveDetail() {
    location.href = "../html/detail.html";
}
function moveRaffle() {
    location.href = "../html/raffle.html";
}

function moveResult() {
    location.href = "../html/resultPopup.html"
}