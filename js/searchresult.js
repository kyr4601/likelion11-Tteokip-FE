//main->detail

// URL에서 main에서 검색한 단어를 가져오기
function getSearchTermFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('search');
}

// 검색어로 detail페이지로 이동해 결과를 렌더링하는 함수
function renderSearchResult() {
    const searchTerm = getSearchTermFromURL();
    const searchResult = document.getElementById('searchResult');
    searchResult.innerText = searchTerm;
}
window.addEventListener('DOMContentLoaded', renderSearchResult);

