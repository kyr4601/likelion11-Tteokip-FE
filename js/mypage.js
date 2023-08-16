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

function moveResult() {
    location.href = "../html/resultPopup.html"
}


//let mypagedata =[];


// window.onload = () => {
//     getmypage();
// }

/*검색 - 콘서트 제목 모두 가져오기
const getmypage = () => {
    axios.get('/api/sections/item/{itemId}?itemId=이름??')
        .then(response =>{
            console.log(response.data);
            mypagedata = response.data;
        }).catch(function (error) {
            console.log(error);
        })
}*/
