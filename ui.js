class UI {
    constructor(){
       this.profile = document.getElementById("profile")
    }
    
    // profile arayüzünü ekrana basma
    showProfile(user){
        const created_at = new Date(user.created_at).toLocaleDateString()
        // console.log(created_at)

        // console.log(user)
        this.profile.innerHTML = `
            <div class="container border my-4 p-4">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid" src="${user.avatar_url}" alt="">
                        <a href="${user.html_url}" class="btn btn-primary my-4 w-100" target="_blank">
                            Profili Göster
                        </a>
                    </div>
                    
                    <div class="col-md-9">
                        <span class="badge bg-primary fs-6 mt-1">Açık Repolar: ${user.public_repos}</span>
                        <span class="badge bg-secondary fs-6 mt-1">Açık Gistler: ${user.public_gists}</span>
                        <span class="badge bg-success fs-6 mt-1">Takipçiler: ${user.followers}</span>
                        <span class="badge bg-info fs-6 mt-1">Takip Edilenler: ${user.following}</span>

                        <ul class="list-group my-5">
                            <li class="list-group-item">Hakkında: ${user.bio}</li>
                            <li class="list-group-item">Şirket: ${user.company}</li>
                            <li class="list-group-item">Website: ${user.blog}</li>
                            <li class="list-group-item">Konum: ${user.location}</li>
                            <li class="list-group-item">Hesap Oluşturulma Tarihi: ${created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="container p-3" id="repos"></div>
        `
    }

    showRepos(repos){
        let output = '<h3 class="fs-1">Güncel Repolar</h3>'

        repos.forEach((repo) => {
            // console.log(repo)
            output += `
                <div class="border p-3 mb-4">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge bg-primary">Yıldız: ${repo.stargazers_count}</span>
                            <span class="badge bg-secondary">İzleyenler: ${repo.watchers_count}</span>
                            <span class="badge bg-success">Forklar: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>
            `
        })

        // console.log(output)
        // html gönderme
        document.getElementById("repos").innerHTML = output
    }

    // uyarı mesajı oluşturma
    showAlert(message, bgcolor){
        // create Div
        const alertDiv = document.createElement("div")

        // add class
        alertDiv.className = bgcolor

        // add text
        alertDiv.innerText = message

        // gönderilecek yerin elemanını alma
        const outlet =  document.getElementById("alert")

        // html gönderme
        outlet.appendChild(alertDiv)

        // alerti 3 sn sonra kaldır
        setTimeout(()=> {
            // class içerisinde olduğumuz için this ile erişiriz.
            this.clearAlert()
        }, 3000)
    }

    // uyarıyı ekrandan belli bir sürede silme

    clearAlert(){
        // ekrandaki alert al
        const currentAlert = document.querySelector(".alert")
        // alert varsa htmlden kaldırma
        if(currentAlert){
            currentAlert.remove()
        }
    }

    // gösterilen profili temizleme

    clearProfile(){
        this.profile.innerHTML = ""
    }
}

//    change theme

//     const themeImg = document.getElementById("theme")

//     themeImg.addEventListener("click",changeTheme)

//     function changeTheme(){
//         const body = document.querySelector("body")

//         body.classList.toggle("bg-dark")
//         body.classList.toggle("text-bg-dark")

//         if(body.classList.contains("bg-dark")){
//             themeImg.innerText = "Açık Mod"
//         } else{
//             themeImg.innerText = "Koyu Mod"
//         }
// }

const toggleSwitch = document.querySelector('.toggle-input');
const sunIcon = document.querySelector('.toggle-icon-sun');
const moonIcon = document.querySelector('.toggle-icon-moon');
const body = document.querySelector("body")

function switchTheme(e) {
    // console.log(e.target.checked)
  if (e.target.checked) {

    body.classList.toggle("bg-dark")
    body.classList.toggle("text-bg-dark")
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline-block";
  } else {

    body.classList.toggle("bg-dark")
    body.classList.toggle("text-bg-dark")
    sunIcon.style.display = "none";
    moonIcon.style.display = "inline-block";
  }    
}

toggleSwitch.addEventListener('change', switchTheme);


export default UI