// import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vidgdfgte!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

const btnSearch = document.getElementById('btn-search')
const formUsername = document.getElementById("username")
const cardAvatar = document.getElementById("card-avatar")
const cardTitle = document.getElementById("card-title")
const cardUsername = document.getElementById("card-username")
const cardDetail = document.getElementById("card-detail")
const cardProfileUrl = document.getElementById("card-pofile-url")

btnSearch.addEventListener('click',function(){
  const username = formUsername.value
  //calback fetch API / Cara lama
  fetch('https://api.github.com/users/' + username)
  .then(res => res.json())
  .then((data)=>{
    cardUsername.innerText = data.name
    cardDetail.innerText = data.bio
    cardAvatar.src = data.avatar_url
    cardProfileUrl.href= data.html_url
  })
  // alert('username : ' +formUsername.value);
})