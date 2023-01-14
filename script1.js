let username = document.querySelector('.username')
let password = document.querySelector('.password')
let login = document.querySelector('.login')
let error = document.querySelector('.error')

let obj = {};
let postArr = [];

let storage = [{
    username: 'kminchelle',
    password: '0lelplR'
    }
]


function stay(){
    if(localStorage.getItem('user')){
            let getLocalData = localStorage.getItem('user')
            let parser = JSON.parse(getLocalData)
            console.log(parser[0].username === 'kminchelle' && parser[0].password === '0lelplR');
            if(parser[0].username === 'kminchelle' && parser[0].password === '0lelplR'){
            location.pathname = 'index2.html'
        }    
    }
}

stay()

login.addEventListener('click', function getDAta() {
    if (username.value === 'kminchelle' && password.value === '0lelplR'){
        localStorage.setItem('user', JSON.stringify(storage))
        location.pathname = 'index2.html'

        obj.username = username.value;
        obj.password = password.value;
        let url = `https://reqres.in/api/users`;
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        xhr.onload = (response) => {
        let res = response.currentTarget.response;
        let user = JSON.parse(res);
        postArr.push(user);
        console.log(postArr, "post");
    }
    xhr.send(JSON.stringify(obj));
}
        else {
            error.innerHTML = 'Wrong username or password'
        }
    })