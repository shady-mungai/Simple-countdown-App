let clockText = document.querySelector(".clock h1")

setInterval(()=>{
let now = new Date
let hour = 24 - now.getHours()
let minute = 59 - now.getMinutes()
let second = 59 - now.getSeconds()


if(minute < 10){
    let minute = `0${minute}`
}
if(second < 10){
    let second = `0${second}`
}

clockText.innerHTML = `${hour}:${minute}:${second}`
},1000)