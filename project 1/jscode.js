const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
console.log(button)

button.addEventListener('click',function(e){
  console.log(e)
  console.log(e.target)

  switch (true) {
    case (e.target === grey):
      console.log(body.style.backgroundColor = "red");
      break;
    default:
  }
  switch (true) {
    case (e.target === white):
      console.log(body.style.backgroundColor = "purple");
      break;
    default:
  }
  switch (true) {
    case (e.target === blue):
      console.log(body.style.backgroundColor = "black");
      break;
    default:
  }
  switch (true) {
    case (e.target === yellow):
      console.log(body.style.backgroundColor = "orange");
      break;
    default:
  }

  
})

});