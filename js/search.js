const ul = document.querySelector(".rel-list");
const searchInput = document.querySelector("#search");
const relContainer = document.querySelector(".list");
let cache = '';


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
    }, 300);
}


const loadData = (input) => {
    let data = ["라우브 내한공연", "임영웅 전국투어", "싸이 흠뻑쇼 인천", "싸이 흠뻑쇼 서울", "싸이 흠뻑쇼 부산"];
    const filteredData = data.filter(item => item.includes(input));
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
            searchTerm = event.target.innerText;
            window.location.href = 'detail.html?search=' + encodeURIComponent(searchTerm);
        })
    })

}

checkInput();

