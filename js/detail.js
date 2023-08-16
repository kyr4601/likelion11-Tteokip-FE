

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



for (let i = 1; i <= 7; i++) {
    let seat = document.getElementById(`Seat${i}`);
    seat.innerText = detaildata[1][`seat${i}`];

    let price = document.getElementById(`Price${i}`);
    price.innerText = detaildata[1][`price${i}`];
}


/*하이퍼링크*/


const goraffle = document.getElementById('goRaffle');

goraffle.addEventListener("click", function (event){
    applybtn = searchResult.innerText;
    window.location.href = 'raffle.html?raffle=' + encodeURIComponent(applybtn);
})

function moveMypage() {
    location.href = "../html/mypage.html";
}

function moveMain() {
    location.href = "../html/main.html"
}

/*calendar*/


/*해야할 것
*
* 1. 달력 data날짜로 변경 ✔
* 2. API 연결
* */


//var today = new Date();//오늘 날짜//내 컴퓨터 로컬을 기준으로 today에 Date 객체를 넣어줌

let totaldate = detaildata[0].concertdate;
splitdate = totaldate.split('.');
console.log(splitdate[1])

let year = splitdate[0];
/*
Number(year);
console.log(typeof year);
*/

let month = splitdate[1] - 1;
if (month[0] == '0') {
    month = month[1];
}

let day = splitdate[2][0] + splitdate[2][1];
if (day[0] == '0') {
    day = day[1];
}

console.log(year); //2024
console.log(month) //10
console.log(day) //9

let today = new Date(year, month, day);
let date = new Date(year, month, day); //today의 Date를 세어주는 역할

window.onload = function(){
    buildCalendar();
}
function prevCalendar() {
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    buildCalendar();
}

function nextCalendar() {
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    buildCalendar();
}

/*현재 달 달력 만들기*/

function buildCalendar(){
    let doMonth = new Date(today.getFullYear(),today.getMonth(),1);
    //이번 달의 첫째 날,
    let lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
    //이번 달의 마지막 날
    let tbCalendar = document.getElementById("calendar");
    let tbCalendarYM = document.getElementById("tbCalendarYM");
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
    let cnt = 0;// count, 셀의 갯수를 세어주는 역할
    // 1일이 시작되는 칸을 맞추어 줌


    for (i=0; i<doMonth.getDay(); i++) {
        cell = row.insertCell();//열 한칸한칸 계속 만들어주는 역할
        cell.id = "disabled";
        cnt = cnt + 1;
    }
    /*달력 출력*/
    for (i=1; i<=lastDate.getDate(); i++) {
        cell = row.insertCell();//열 한칸한칸 계속 만들어주는 역할
        cell.innerHTML = i;
        cell.className = "ableDate";
        cnt = cnt + 1;

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
            && i == today.getDate()) {


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