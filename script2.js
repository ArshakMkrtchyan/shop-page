let log_out = document.querySelector('.log_out')

log_out.addEventListener('click', () => {
    location.pathname = 'index1.html'
    localStorage.removeItem('user')
})


let inner = document.querySelector('.inner')
let categories = document.querySelector('.categories')

function getData (url){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.onload = (res) => {
        // console.log(res);
        let data = JSON.parse(res.target.response);
        inner.innerHTML = ''
        console.log(data);
        data.products.forEach((product) =>{
            let elem=document.createElement("div")
            elem.setAttribute("class","box")
            product.images.forEach((image) => {
                console.log(image);
            })
            elem.innerHTML=`<h2>${product.title}</h2> <img src="${product.thumbnail}"><p>${product.description}</p> <h4>price: ${product.price}$</h4>`
            inner.append(elem)
        })
    }
    xhr.send()
}

getData('https://dummyjson.com/products')    


function getCategories (url) {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.onload = (res) => {
        let data = JSON.parse(res.target.response)
        // console.log(res);
        data.forEach(element => {
            let elem = document.createElement('button')
            elem.setAttribute('class', 'btn')
            elem.innerHTML = element
            categories.append(elem)
            elem.addEventListener('click', () => {
                // console.log(element, 'el');
                getData(`https://dummyjson.com/products/category/${element}`)
            })
        });
    }
    xhr.send()
}

getCategories('https://dummyjson.com/products/categories')


let all = document.createElement('button')
all.setAttribute('class', 'btn')
all.innerText = 'All'
categories.append(all)
all.addEventListener('click', () =>{
    getData('https://dummyjson.com/products')
})

