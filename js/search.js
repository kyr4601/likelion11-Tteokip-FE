const ul = document.querySelector(".rel-list");
const searchInput = document.querySelector("#search");
const relContainer = document.querySelector(".list");
//let titledata =[];


// window.onload = () => {
//     gettitle();
// }

/*검색 - 콘서트 제목 모두 가져오기
const gettitle = () => {
    axios.get('')
        .then(response =>{
            console.log(response.data);
            titledata = response.data;
        }).catch(function (error) {
            console.log(error);
        })
}*/

const checkInput = () => {
    const beforeInput = searchInput.value;
    timer(beforeInput);
}


const timer = (beforeInput) => {
    setTimeout(() => {

        if(searchInput.value === beforeInput) {
            console.log("입력멈춤");
            loadData(searchInput.value);
            checkInput();

        } else {
            console.log("입력변함");
            checkInput();
        }

        if(searchInput.value === "") {
            relContainer.classList.add("hide");
        } else {
            relContainer.classList.remove("hide");
        }
    }, 1000);
}


const loadData = (input) => {
    let data = ["라우브 내한공연", "임영웅 전국투어", "싸이 흠뻑쇼 인천", "싸이 흠뻑쇼 서울", "싸이 흠뻑쇼 부산"];
    const filteredData = data.filter(item => item.includes(input));
    //실제 데이터 통신 후 대체코드
    //const filteredData = titledata.filter(item => item.includes(input));
    fillSearch(filteredData);
}

const fillSearch = (suggestArr) => {
    ul.innerHTML = "";
    suggestArr.forEach((el, idx) => {
        const li = document.createElement("li");
        li.innerHTML = el;
        ul.appendChild(li);
        li.addEventListener("click", function (event){
            //searchInput.value = event.target.innerText;
            let searchTerm = event.target.innerText;
            window.location.href = 'detail.html?search=' + encodeURIComponent(searchTerm);
        })
    })

}

checkInput();

/*차트 클릭시 페이지 전환*/
const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
    card.addEventListener("click", function (event) {
        let title = card.querySelector('.card-title h3').textContent;
        window.location.href = 'detail.html?search=' + encodeURIComponent(title);
    });
});