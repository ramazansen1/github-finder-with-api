
class Github{
    constructor(){
        this.client_id = ''
        this.client_secret = ''
        this.repos_count = 10
        this.repos_sort = "asc"
    }

    async getUser(user){
        // kullanıcının profilini çekme
        const profileRes = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret= ${this.client_secret}`)

        // kullanıcının repolarını çekme
        const reposRes = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret= ${this.client_secret}`)
        
        // kullanıcı profili ve repolarını json a çevirme
        const profile = await profileRes.json()
        const repos = await reposRes.json()

        // işlenmiş veriyi fonk. çağırıldığı yere gönderme yani app.js içindeki yere
        return {
            profile,
            repos,
        }
    }
}

export default Github


// hatayı yönetme

// try {
//     const profileRes = await fetch(`https://api.github.com/users/${user}`)

//     // gelen cevabı jsona çevirme
//     const profile = await profileRes.json()
//     return profile
// } catch (error) {
//     console.log(err)
// } 