const count_per_page = 3;
const numberButWrapper = document.querySelector('.number-but-wrapper');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let appliedPage = 1;




/*번호 수에 맞게 페이지 버튼 구성*/
const setPageButtons = () => {
    numberButWrapper.innerHTML = '';
    for (let i = 1; i <= getTotalPageCount(); i++) {
        numberButWrapper.innerHTML += `<span class="number-button"> ${i} </span>`;
    }
    numberButWrapper.firstChild.classList.add('selected');
    pageNumberBut = document.querySelectorAll('.number-button');
};

/*예매 현황 페이지내이션 & 동적할당*/

const setPageOf = (pageNumber) => {
    const list = document.getElementById("list");
    list.innerText = '';
    for (
        let i = count_per_page * (pageNumber - 1) + 1;
        i <= count_per_page * (pageNumber - 1) + 3 && i <= data.length;
        i++
    ) {
        const parentElement = document.createElement('li');
        // 부모 요소 선택
        //var parentElement = document.querySelector('#orderList');
        // 전체 div 생성
        var itemBox = document.createElement("div");
        itemBox.className = "itemBox";
        // reserveDate_itemBox 요소 생성
        var reserveDateItemBox = document.createElement("div");
        reserveDateItemBox.className = "reserveDate_itemBox";
        var reserveDateText = document.createElement("p");
        reserveDateText.className = "itemText";
        reserveDateText.id = "concertdate";
        reserveDateText.textContent = data[i - 1].reservdate;
        reserveDateItemBox.appendChild(reserveDateText);
        //reserveDate_itemBox를 itemBox에 추가
        itemBox.appendChild(reserveDateItemBox);
        // info_itemBox 요소 셍성
        var infoItemBox = document.createElement("div");
        infoItemBox.className = "info_itemBox";

        infoItemBox.addEventListener('click', function (event) {
            boxinfo = event.target.closest('h3').textContent;
            console.log(boxinfo);
            window.location.href = 'detail.html?search=' + encodeURIComponent(boxinfo);
        });

        var img = document.createElement("img");
        img.src = "../img/Poster_Lauv.png";
        img.alt = "posterImg";
        img.className = "posterImg";
        var infoItemText = document.createElement("div");
        infoItemText.className = "info_itemText";
        var infoTitle = document.createElement("h3");
        infoTitle.className = "info_title";
        infoTitle.id = "concertname";
        infoTitle.textContent = data[i - 1].title;
        var infoDetail = document.createElement("div");
        infoDetail.className = "info_detail";
        var infoTime = document.createElement("p");
        infoTime.className = "info_time";
        infoTime.id = "concertinform";
        infoTime.textContent = data[i - 1].concertdate;
        var infoBar = document.createElement("p");
        infoBar.className = "info_bar";
        infoBar.textContent = "|";
        var infoCount = document.createElement("p");
        infoCount.className = "info_count";
        infoCount.id = "concertcount";
        infoCount.textContent = data[i - 1].concertcount;
        //각 부모요소에 요소 추가
        infoDetail.appendChild(infoTime);
        infoDetail.appendChild(infoBar);
        infoDetail.appendChild(infoCount);
        infoItemText.appendChild(infoTitle);
        infoItemText.appendChild(infoDetail);
        infoItemBox.appendChild(img);
        infoItemBox.appendChild(infoItemText);
        //info_itemBox를 itemBox에 추가
        itemBox.appendChild(infoItemBox);
        // current_itemBox 요소 생성
        var currentItemBox = document.createElement("div");
        currentItemBox.className = "current_itemBox";
        var currentInform = document.createElement("p");
        currentInform.className = "current";
        currentInform.id = "currentInform";
        var resultBtn = document.createElement("button");
        resultBtn.className = "result_button";
        resultBtn.addEventListener('click', moveResult);
        var resultBtnText = document.createTextNode('확인');
        resultBtn.appendChild(resultBtnText);
        resultBtn.classList.add('result_button');

        resultBtn.addEventListener('click', function (event) {
            resultTerm = event.target.innerText;
            window.location.href = 'resultPopup.html?result=' + encodeURIComponent(resultTerm);
        });

        var dDay = document.createElement("p");
        dDay.className = "dday";
        dDay.id = "d_day";
        dDay.textContent = data[i - 1].dDay;
        if (data[i - 1].dDay == '[D-Day]') {
            currentInform.textContent = "응모종료";
            currentItemBox.appendChild(resultBtn);
            currentItemBox.appendChild(currentInform);
        } else {
            currentInform.textContent = "응모중";
            currentItemBox.appendChild(currentInform);
            currentItemBox.appendChild(dDay);
        }

        //current_itemBox를 itemBox에 추가
        itemBox.appendChild(currentItemBox);
        // cancel_itemBox 요소 생성
        var cancelItemBox = document.createElement("div");
        cancelItemBox.className = "cancel_itemBox";
        var cancelButton = document.createElement("button");
        cancelButton.className = "cancelBtn";
        cancelButton.textContent = "취소";
        cancelItemBox.appendChild(cancelButton);
        itemBox.appendChild(cancelItemBox);
        //다 완성된 itemBox 요소를 ul에 추가
        parentElement.appendChild(itemBox);
        list.append(parentElement);
    }}


/*페이지 번호 버튼 클릭 이벤트*/
let pageNumberBut = document.querySelectorAll('.number-button');
pageNumberBut.forEach((numberButton) => {
    numberButton.addEventListener('click', (e) => {
        setPageOf(+e.target.innerHTML);
    });
});

/*css 먹이기*/

const moveSelectedPageHighlight = () => {
    const pageNumberButtons = document.querySelectorAll('.number-button');
    pageNumberButtons.forEach((numberButton) => {
        if (numberButton.classList.contains('selected')) {
            numberButton.classList.remove('selected');
        }
    });
    pageNumberButtons[appliedPage - 1].classList.add('selected');
};

setPageButtons();
setPageOf(appliedPage);


/*이전 이후 버튼 클릭 이벤트*/
prevButton.addEventListener('click', () => {
    if (appliedPage > 1){
        appliedPage -= 1;
        setPageOf(appliedPage);
        moveSelectedPageHighlight();
    }

});


nextButton.addEventListener('click', () => {
    if (appliedPage < getTotalPageCount()) {
        appliedPage += 1;
        setPageOf(appliedPage);
        moveSelectedPageHighlight();
    }
});

/*페이지 번호 버튼 클릭 리스너*/
pageNumberBut.forEach((numberButton) => {
    numberButton.addEventListener('click', (e) => {
        appliedPage = +e.target.innerHTML;
        setPageOf(appliedPage);
        moveSelectedPageHighlight();
    })
});
