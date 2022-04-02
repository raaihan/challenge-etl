
const readlineSync = require('readline-sync')
const fetch = require('node-fetch');

const GetInformation = (username) => new Promise((resolve, reject) => {
    fetch("https://api.github.com/users/" + username, {
      method: "GET",
    })
    .then(res => res.json())
    .then(result => {
       resolve(result)
    })
    .catch(err => reject(err))

});  



(async()=>{
const username = readlineSync.question('Masukan Username : ')
const getinfo = await GetInformation(username)
console.clear()
nama = getinfo.name
followers = getinfo.followers
following = getinfo.following
if(getinfo.message == "Not Found"){

    console.log("Data Tidak Ditemukan")
}
else{
console.log("|----------------------------------------------------------")
console.log(`| Username           : https://github.com/${username}/`)
console.log(`| Nama               : ${nama}`)
console.log(`| Jumlah Followers   : ${followers}`)
console.log(`| Jumlah following   : ${following}`)
console.log("|----------------------------------------------------------")
}


})();