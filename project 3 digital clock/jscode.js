const clock = document.getElementById('clock')

let date = new Date();
// console.log(date.toLocaleTimeString())


setInterval(function(){

  clock.innerHTML=date.toLocaleTimeString()
})