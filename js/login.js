const moveMain = () => {
    location.href = "../html/main.html"
}

const baseUrl = "http://13.124.88.252:8080";

/*회원가입

const name = document.getElementById('name').value;
const pw = document.getElementById('pw').value;
const mail = document.getElementById('mail').value;

const signUp = () => {

    axios.post(baseUrl + "/api/signup", {
        "userName": name,
        "userEmail" : mail,
        "password": pw
    }).then(function (response) {
        alert('회원가입이 완료되었습니다.');
        window.location.href = "../html/main.html";
    }).catch(function (error) {
        console.log("error")
    })
}
*/


/*로그인*/

const loginPw = document.getElementById('loginPw').value;
const loginMail = document.getElementById('loginMail').value;

const login = () => {

    axios.post(baseUrl + "/api/form_login", {
        "userEmail" : loginMail,
        "password": loginPw
    }).then(function (response) {
        console.log(response.data)
        alert('로그인이 완료되었습니다.');
        window.location.href = "../html/main.html";

    }).catch(function (error) {
        console.log("error")
    })
}
