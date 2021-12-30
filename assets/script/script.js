
var target_date = new Date("january 15, 2145").getTime();
var dias, horas, minutos, segundos;
var regressiva = document.getElementById("regressiva");

const headM = document.querySelector('#head')

/*INICIO DO RELOGIO*/
setInterval(function () {
    var current_date = new Date().getTime();
    var segundos_f = (target_date - current_date) / 1000;

    dias = parseInt(segundos_f / 86400);
    segundos_f = segundos_f % 86400;
    
    horas = parseInt(segundos_f / 3600);
    segundos_f = segundos_f % 3600;
    
    minutos = parseInt(segundos_f / 60);
    segundos = parseInt(segundos_f % 60);
    
    document.getElementById('dia').innerHTML = dias;
    document.getElementById('hora').innerHTML = horas;
    document.getElementById('minuto').innerHTML = minutos;
    document.getElementById('segundo').innerHTML = segundos;
  
}, 1000);
/*FIM DO RELOGIO*/


// document.addEventListener("scroll", function() {
//     var position = window.pageYOffset;

//     if(position >= 1590){
//         headM.classList.add("newClassCase")
//     }else{
//         headM.classList.remove("newClassCase")
//     }
// })

const changeHeaderColor = () => {
    var position = window.pageYOffset

    if(position >= 1590){
        headM.classList.add("newClassCase")
    }else{
        headM.classList.remove("newClassCase")
    }
}
document.addEventListener("scroll", changeHeaderColor)


let page = 1

const getPosts = async () => {
    const response = await
    fetch(`https://my-json-server.typicode.com/bitcoin-log/demo/posts?_limit=4`)
    return response.json()
}

const postsContainer = document.querySelector('.section-card')

const generatePostsTemplate = posts => posts.map(({author, title, image, description}) => `
    <div class="card">
        <h1 class="card-title"><a href="" target="blank">${title}</a></h1>
        <p>${author}</p>
        <img class="img-body" src="${image}">
        <p class="card-body">${description}</p>
    </div>

`).join('')

const addPostsIntoDom = async () => {
    const posts = await getPosts()
    const postsTemplate = generatePostsTemplate(posts)

    postsContainer.innerHTML += postsTemplate
    
}

addPostsIntoDom()

