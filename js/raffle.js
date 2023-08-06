/*남은 작업
1. detail에서 url로 넘긴 콘서트 제목 받아오기
2. 해당 제목을 get의 params로 담아 해당 콘서트의 정보(장소, 일시, 구역가격, 사진) data 받아오기
3. title-place, time, area-price, img에 data 채우기
4. 결제하기 버튼 -> post - 선택구역, 매수, 콘서트 제목
 */

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
    alert('응모가 완료되었습니다.' + '\n' + 'Koun이 당신의 행운을 빕니다.');
})



