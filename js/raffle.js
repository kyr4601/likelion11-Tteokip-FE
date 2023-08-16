/*남은 작업
1. detail에서 url로 넘긴 콘서트 제목 받아오기
2. 해당 제목을 get의 params로 담아 해당 콘서트의 정보(장소, 일시, 구역가격, 사진) data 받아오기
3. title-place, time, area-price, img에 data 채우기
4. 결제하기 버튼 -> post - item name(콘서트 제목), 구역, 티켓가격, 매수
 */

const baseUrl = "http://ec2-3-38-100-226.ap-northeast-2.compute.amazonaws.com:8080";

const paybox = document.getElementById("pay");
const areaElements = document.querySelectorAll('.area-a, .area-b, .area-c, .area-d, .area-e, .area-f, .area-g');
const quantity = document.getElementById("ticketNum");
const max = document.getElementById("maxNotice");
const plus = document.getElementById("plusBtn");
const minus = document.getElementById("minusBtn");
const totalprice = document.getElementById("price");


for (const area of areaElements) {
    area.addEventListener("click", function() {
        paybox.style.display = "block";
        quantity.innerText = 1;
        max.style.display = "none";
        plus.disabled = false;
        minus.disabled = true;
        const areaName = this.querySelector("h3").innerText;
        const pricedata = this.querySelector(".area-price").innerText;
        totalprice.innerText = pricedata;
        document.getElementById("selectArea").innerText = areaName;

        //2매일때
        plus.addEventListener("click", function (){
            quantity.innerText = 2;
            max.style.display = "block";
            const price = parseInt(pricedata.replace(/[^0-9]/g, ''), 10);
            totalprice.innerText = (price * 2).toLocaleString() + ' 원';
            minus.disabled = false;
            plus.disabled = true;

        })
        //1매일때
        minus.addEventListener("click", function (){
            quantity.innerText = 1;
            max.style.display = "none";
            totalprice.innerText = pricedata;
            minus.disabled = true;
            plus.disabled = false;
        })

    });
}

const paybtn = document.getElementById("payBtn");

paybtn.addEventListener("click", function (){
    //외않되는대
    /*
    if(paybox.style.display === "none"){
        alert('구역을 선택해주세요.')
    }else{
        alert('응모가 완료되었습니다.' + '\n' + 'Koun이 당신의 행운을 빕니다.');
        window.location.href = "main.html";
    }*/
    axios.post(baseUrl + "/api/raffles", {
        "raffleCount": quantity.innerText,
        "raffleDrawDate": "2023-08-04 15:30",
        "userId": 1,
        "itemId": 2,
        "sectionId": 2
    }).then(function (response) {
        console.log(quantity.innerText);
        alert('응모가 완료되었습니다.' + '\n' + 'Koun이 당신의 행운을 빕니다.');
    }).catch(function (error) {
        console.log("error")
    })
})


/*콘서트 제목으로 detail-raffle 연결*/
function getTitleFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('raffle');
}

function renderResult() {
    const titleTerm = getTitleFromURL();
    const Result = document.getElementById('mainTitle');
    // 서버에서 검색 결과를 가져오는 로직을 구현하고 해당 결과를 페이지2에 렌더링하는 작업을 수행한다.
    Result.innerText = titleTerm;
}

// 페이지가 로드되었을 때 검색 결과를 렌더링
window.addEventListener('DOMContentLoaded', renderResult);

