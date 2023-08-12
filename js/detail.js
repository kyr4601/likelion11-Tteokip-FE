/*정보 변수화*/


let dDay = document.querySelector('.d-day');
dDay.innerText = detaildata[0].dDay;

let realtitle = document.querySelector('.prdTitle');
realtitle.innerText = detaildata[0].titles;

let dateinfo = document.querySelector('.dateinfo');
dateinfo.innerText = detaildata[0].concertdate;

let placeinfo = document.querySelector('.placeinfo');
placeinfo.innerText = detaildata[0].concertplace;


let infotext1 = document.getElementById('veiwing_age');
infotext1.innerText = detaildata[0].age;

let infotext2 = document.getElementById('veiwing_time');
infotext2.innerText = detaildata[0].veiwingTime;

let infotext3 = document.getElementById('concertPerformer');
infotext3.innerText = detaildata[0].performer;


let seat1 = document.getElementById('Seat1');
seat1.innerText = detaildata[1].seat1;

let price1 = document.getElementById('Price1');
price1.innerText = detaildata[1].price1;

let seat2 = document.getElementById('Seat2');
seat2.innerText = detaildata[1].seat1;

let price2 = document.getElementById('Price2');
price2.innerText = detaildata[1].price2;

let seat3 = document.getElementById('Seat3');
seat3.innerText = detaildata[1].seat3;

let price3 = document.getElementById('Price1');
price3.innerText = detaildata[1].price1;

let seat4 = document.getElementById('Seat4');
seat4.innerText = detaildata[1].seat4;

let price4 = document.getElementById('Price4');
price4.innerText = detaildata[1].price4;

let seat5 = document.getElementById('Seat5');
seat5.innerText = detaildata[1].seat1;

let price5 = document.getElementById('Price5');
price5.innerText = detaildata[1].price1;

let seat6 = document.getElementById('Seat6');
seat6.innerText = detaildata[1].seat6;

let price6 = document.getElementById('Price6');
price6.innerText = detaildata[1].price6;

let seat7 = document.getElementById('Seat7');
seat7.innerText = detaildata[1].seat7;

let price7 = document.getElementById('Price7');
price7.innerText = detaildata[1].price7;


/*

for (let i = 1; i <= 7; i++) {

    infopriceitem = document.createElement('li');

    var name = document.createElement("span");
    name.className = 'name' + `${i}`;
    name.id = "Seat" + `${i}`;
    name.innerText = detaildata[1].seat`${i}`;

    var price = document.createElement("span");
    price.className = 'price' + `${i}`;
    price.id = "Price" + `${i}`;
    price.innerText = detaildata[1].price`${i}`;

    infopriceitem.appendChild(name, price);
    infopricelist.appendChild(infopriceitem);

}


*/


/*하이퍼링크*/

function moveRaffle() {
    location.href = "../html/raffle.html";
}

function moveMypage() {
    location.href = "../html/mypage.html";
}

function moveMain() {
    location.href = "../html/main.html"
}

/*calendar*/

var today = new Date();//오늘 날짜//내 컴퓨터 로컬을 기준으로 today에 Date 객체를 넣어줌
var date = new Date();//today의 Date를 세어주는 역할

window.onload = function(){
    buildCalendar();
}
function prevCalendar() {
    // 이전 달을 today에 값을 저장하고 달력에 today를 넣어줌
    //getMonth()는 현재 달을 받아 오므로 이전달을 출력하려면 -1을 해줘야함
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    buildCalendar();
}

function nextCalendar() {
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    buildCalendar();
}

/*현재 달 달력 만들기*/

function buildCalendar(){
    var doMonth = new Date(today.getFullYear(),today.getMonth(),1);
    //이번 달의 첫째 날,
    var lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
    //이번 달의 마지막 날
    var tbCalendar = document.getElementById("calendar");
    var tbCalendarYM = document.getElementById("tbCalendarYM");
    tbCalendarYM.innerHTML = today.getFullYear() + ". " + (today.getMonth() + 1) ;

    while (tbCalendar.rows.length > 2) {
        //열을 지워줌
        //기본 열 크기는 body 부분에서 2로 고정되어 있다.
        tbCalendar.deleteRow(tbCalendar.rows.length-1);
    }
    let row = null;
    row = tbCalendar.insertRow();
    row.className = "dateList";
    //테이블에 새로운 열 삽입
    var cnt = 0;// count, 셀의 갯수를 세어주는 역할
    // 1일이 시작되는 칸을 맞추어 줌

    var anyDate = 27;

    for (i=0; i<doMonth.getDay(); i++) {
        /*이번달의 day만큼 돌림*/
        cell = row.insertCell();//열 한칸한칸 계속 만들어주는 역할
        cell.id = "disabled";
        cnt = cnt + 1;//열의 갯수를 계속 다음으로 위치하게 해주는 역할
    }
    /*달력 출력*/
    for (i=1; i<=lastDate.getDate(); i++) {
        cell = row.insertCell();//열 한칸한칸 계속 만들어주는 역할
        cell.innerHTML = i;
        cell.className = "ableDate";
        cnt = cnt + 1;//열의 갯수를 계속 다음으로 위치하게 해주는 역할

        /*일요일 구하기*/
        if (cnt % 7 == 1) {
            cell.innerHTML = "<font color=#F79DC2>" + i
            //1번째의 cell에만 색칠
        }

        /*토요일 구하기*/
        if (cnt%7 == 0){
            cell.innerHTML = "<font color=skyblue>" + i
            row = calendar.insertRow();
        }
        /*지정된 날짜에 색 칠하기*/
        if (today.getFullYear() == date.getFullYear()
            && today.getMonth() == date.getMonth()
            && i == anyDate) {
            cell.bgColor = "#26ddb1";//셀의 배경색
            cell.style.border = "1px solid #26ddb1";
            cell.style.borderRadius = "60px" ;
            cell.innerHTML = "<font color='white'>" + i
        }
    }
}
/*


/!*찜버튼-메인css에서 가져옴*!/


const likeBtn = document.getElementById('likeBtn');
const empty = document.getElementById('emptyHeart');
const fill = document.getElementById('fillHeart');

likeBtn.addEventListener("click", function(){
    if(fill.style.display == "flex"){
        fill.style.display = "none";
        empty.style.display = "flex";
    }else{
        fill.style.display = "flex";
        empty.style.display = "none";
    }

})
*/
