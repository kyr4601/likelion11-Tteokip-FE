const count_per_page = 3;
const numberButWrapper = document.querySelector('.number-but-wrapper');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let appliedPage = 1;



// 데이터를 가져온 후, 해당 데이터의 길이를 밖에서 사용할 수 있도록 처리 못함



/*번호 수에 맞게 페이지 버튼 구성*/


/*예매 현황 페이지내이션 & 동적할당*/

const totalvar = async () => {

    const list = document.getElementById("list");
    list.innerText = '';

    try {

        const setPageButtons = () => {
            numberButWrapper.innerHTML = '';
            for (let i = 1; i <= Math.ceil(arrayLength / count_per_page); i++) {
                numberButWrapper.innerHTML += `<span class="number-button"> ${i} </span>`;
            }
            numberButWrapper.firstChild.classList.add('selected');
        };

        const data = await getData();
        console.log('Data:', data); // 전체 데이터 출력
        const arrayLength = data.length;
        console.log('Array length:', arrayLength); // 데이터의 길이 출력

        const setPageOf = (pageNumber) => {
            for (
                let i = count_per_page * (pageNumber - 1) + 1;
                i <= count_per_page * (pageNumber - 1) + 3 && i <= arrayLength;
                i++
            ) {
                const itemName = data[i - 1].itemName;
                console.log('itemName:', itemName);

                const parentElement = document.createElement('li');
                // 부모 요소 선택
                //var parentElement = document.querySelector('#orderList');
                // 전체 div 생성
                let itemBox = document.createElement("div");
                itemBox.className = "itemBox";
                // reserveDate_itemBox 요소 생성
                let reserveDateItemBox = document.createElement("div");
                reserveDateItemBox.className = "reserveDate_itemBox";
                let reserveDateText = document.createElement("p");
                reserveDateText.className = "itemText";
                reserveDateText.id = "concertdate";
                cutdate = data[i - 1].applicationDate;
                cutdate = cutdate.split(' ')[0];
                console.log(cutdate);
                reserveDateText.textContent = cutdate;
                reserveDateItemBox.appendChild(reserveDateText);
                //reserveDate_itemBox를 itemBox에 추가
                itemBox.appendChild(reserveDateItemBox);
                // info_itemBox 요소 셍성
                let infoItemBox = document.createElement("div");
                infoItemBox.className = "info_itemBox";

                infoItemBox.addEventListener('click', function (event) {
                    boxinfo = event.target.closest('h3').textContent;
                    console.log(boxinfo);
                    window.location.href = 'detail.html?search=' + encodeURIComponent(boxinfo);
                });

                let img = document.createElement("img");
                img.src = "../img/Poster_Lauv.png";
                img.alt = "posterImg";
                img.className = "posterImg";
                let infoItemText = document.createElement("div");
                infoItemText.className = "info_itemText";
                let infoTitle = document.createElement("h3");
                infoTitle.className = "info_title";
                infoTitle.id = "concertname";
                infoTitle.textContent = data[i - 1].itemName;
                let infoDetail = document.createElement("div");
                infoDetail.className = "info_detail";
                let infoTime = document.createElement("p");
                infoTime.className = "info_time";
                infoTime.id = "concertinform";
                infoTime.textContent = data[i - 1].dateTime;
                let infoBar = document.createElement("p");
                infoBar.className = "info_bar";
                infoBar.textContent = "|";
                let infoCount = document.createElement("p");
                infoCount.className = "info_count";
                infoCount.id = "concertcount";
                infoCount.textContent = data[i - 1].raffleCount + ' 매';
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
                let currentItemBox = document.createElement("div");
                currentItemBox.className = "current_itemBox";
                let currentInform = document.createElement("p");
                currentInform.className = "current";
                currentInform.id = "currentInform";
                let resultBtn = document.createElement("button");
                resultBtn.className = "result_button";

                const result = data[i - 1].raffleStatus;
                console.log(result);

                if (result == 'true') {
                    resultBtn.addEventListener('click', moveResult);
                    let resultBtnText = document.createTextNode('확인');
                    resultBtn.appendChild(resultBtnText);
                    resultBtn.classList.add('result_button');

                } else {
                    resultBtn.addEventListener('click', function () {
                        alert('응모에 당첨되지 않았습니다.' + '\n' + '아쉽지만 다음에 진행되는 응모에 도전해주세요.' + '\n' + '\n' + '항상 Koun을 사랑해주셔서 감사합니다.');
                        window.location.href = "main.html";
                    });
                    //실패했는데 팝업 나오면 안되는디 처리 어떻게하지
                }

                resultBtn.addEventListener('click', moveResult);
                let resultBtnText = document.createTextNode('확인');
                resultBtn.appendChild(resultBtnText);
                resultBtn.classList.add('result_button');


                resultBtn.addEventListener('click', function (event) {
                    resultTerm = event.target.innerText;
                    window.location.href = 'resultPopup.html?result=' + encodeURIComponent(resultTerm);
                });

                let dDay = document.createElement("p");
                dDay.className = "dday";
                dDay.id = "d_day";
                let now = new Date();
                let today_year = now.getFullYear();
                let today_month = now.getMonth() + 1;
                let today_date = now.getDate();
                console.log(today_year); //2023
                console.log(today_month); //7
                console.log(today_date); //15


                let uploadTime = data[i - 1].uploadTime;
                console.log(uploadTime);
                let update_year = uploadTime.split('-')[0];
                let update_month = uploadTime.split('-')[1];
                let update_date = uploadTime.split('-')[2];
                console.log(update_year,update_month,update_date) //2023 08 17


                /*dday 계산*/
                if(today_year < update_year) {
                    today_month += 12;
                    let day30 = [2, 4, 6, 9, 11];
                    let day31 = [1, 3, 5, 7, 8, 10, 12];
                    if ((today_month < update_month) && (day30.includes(update_month))) {
                        if (today_month != 2) {
                            today_date += 30;
                        } else {
                            if ((today_year % 4 == 0 && today_year % 100 != 0) || today_year % 400 == 0) {
                                today_date += 29;
                            } else {
                                today_date += 28;
                            }
                        }
                    } else if (today_month < update_month && day31.includes(update_month)) {
                        today_date += 31;
                    }
                }

                console.log(today_year, today_month, today_date); //2023 8 17
                console.log(update_year,update_month,update_date) //2023 08 19

                realdday = 5 - (today_date - update_date);
                console.log(realdday)
                if (realdday <= 0) {
                    currentInform.textContent = "응모종료";
                    currentItemBox.appendChild(resultBtn);
                    currentItemBox.appendChild(currentInform);
                } else {
                    if (realdday <= 5) {
                        currentInform.textContent = "응모중";
                        dDay.textContent = "[D-" + realdday+']';
                        currentItemBox.appendChild(currentInform);
                        currentItemBox.appendChild(dDay);
                    } else {
                        currentInform.textContent = '응모 시작 전';
                        currentItemBox.appendChild(currentInform);
                    }
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
            }
        };

        setPageButtons();
        setPageOf(appliedPage);

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

    } catch (error) {
        throw error;
    }
}

totalvar();