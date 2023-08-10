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
    //대로 된 다음달 시작일(1일)은 못가져오고 1 전인 0, 즉 전달 마지막일 을 가져오게 된다
    var tbCalendar = document.getElementById("calendar");
    //날짜를 찍을 테이블 변수 만듬, 일 까지 다 찍힘
    var tbCalendarYM = document.getElementById("tbCalendarYM");
    //테이블에 정확한 날짜 찍는 변수
    tbCalendarYM.innerHTML = today.getFullYear() + ". " + (today.getMonth() + 1) ;

    /*while은 이번달이 끝나면 다음달로 넘겨주는 역할*/
    while (tbCalendar.rows.length > 2) {
        //열을 지워줌
        //기본 열 크기는 body 부분에서 2로 고정되어 있다.
        tbCalendar.deleteRow(tbCalendar.rows.length-1);
        //테이블의 tr 갯수 만큼의 열 묶음은 -1칸 해줘야지
        //30일 이후로 담을달에 순서대로 열이 계속 이어진다.
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
            //월화수목금토일을 7로 나눴을때 나머지가 0이면 cnt가 7번째에 위치함을 의미한다
            cell.innerHTML = "<font color=skyblue>" + i
            row = calendar.insertRow();
            //토요일 다음에 올 셀을 추가
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

/*logo클릭->메인으로 이동*/

function moveMain() {
    location.href = "../html/main.html"
}

/*찜버튼-메인css에서 가져옴*/


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
