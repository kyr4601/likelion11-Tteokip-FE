//main->detail

// URL에서 main에서 검색한 단어를 가져오기
function getSearchTermFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('search');
}

/*제목 보내고 상세페이지에 필요한 모든 정보 가져오기*/
//let dataFordetail =[];


/*콘서트 제목으로 모든 아이템 가져오기
const getdetailinfo = () => {
    axios.get('api/items/{itemName}?itemName=searchTerm')
        .then(response =>{
            console.log(response.data);
            dataFordetail = response.data;
        }).catch(function (error) {
            console.log(error);
        })
}
*/

// 검색어로 detail페이지로 이동해 결과를 렌더링하는 함수
function renderSearchResult() {
const searchTerm = getSearchTermFromURL();
const searchResult = document.getElementById('searchResult');
searchResult.innerText = searchTerm;



    getdetailinfo();
}
window.addEventListener('DOMContentLoaded', renderSearchResult);