import Github from "./github.js"
import UI from "./ui.js"


// github ve ui classlarının örneğini oluşturma
const github = new Github
const ui = new UI

const searchUser = document.getElementById("search-user")
const searchBtn = document.getElementById("search-btn")

// eğer ara butonuna basılırsa
searchBtn.addEventListener("click", getInput)
// eğer enter tuşuna basılırsa
searchUser.addEventListener("keypress", (e) => {
    // console.log(e)
    if(e.key === "Enter") {
        getInput()
    }
})

function getInput(){
// inputa girilen değeri github.js içinde ki getUsera gönderiyoruz 
    // eğer inputunun içi doluysa api isteği at
    if(searchUser.value !== ''){
        github.getUser(searchUser.value).then((data) => {
            // eğer gelen verideki mesaj 'Not Found' ise
            if(data.profile.message === 'Not Found'){
                // show err
                ui.showAlert("Aradığınız Kullanıcı Bulunamadı", "alert alert-danger")
            } else {
                // show profile
                ui.showProfile(data.profile)
                // show repos
                ui.showRepos(data.repos)
                ui.showAlert("Kullanıcı Başarıyla Bulundu", "alert alert-success")
            }
        })
    } else {
        ui.showAlert("Form Alanı Boş Bırakılamaz", "alert alert-warning")
        ui.clearProfile()
    } 
    
    searchUser.value = ""
}
//     // theme
//     const themeBtn = document.getElementById("theme")

//     themeBtn.addEventListener("click",changeTheme)

//     function changeTheme(){
//         const body = document.querySelector("body")

//         body.classList.toggle("bg-dark")
//         body.classList.toggle("text-bg-dark")

//         if(body.classList.contains("bg-dark")){
//             themeBtn.innerText = "Açık Mod"
//         } else{
//             themeBtn.innerText = "Koyu Mod"
//         }
// }
