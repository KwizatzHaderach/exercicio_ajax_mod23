document.addEventListener("DOMContentLoaded", function () {
    const avatarElement = document.querySelector('.profile-avatar')
    const nameElement = document.querySelector('.profile-name')
    const userNameElement = document.querySelector('.profile-username')
    const repositorioElement = document.querySelector('#repositorios')
    const seguidoresElement = document.querySelector('#seguidores')
    const seguindoElement = document.querySelector('#seguindo')
    const linkElement = document.querySelector('.profile-link')
    const urlAPI = 'https://api.github.com/users/KwizatzHaderach'


    fetch(urlAPI)
        .then(function (resposta) {
            return resposta.json()
        })
        .then(function (json) {
            nameElement.innerText = json.name
            userNameElement.innerText = json.login
            avatarElement.src = json.avatar_url
            seguidoresElement.innerHTML = json.followers
            seguindoElement.innerHTML = json.following
            repositorioElement.innerHTML = json.public_repos
            linkElement.href = json.html_url
        })
})