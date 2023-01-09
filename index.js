let marginTop=0;
let moveRightX, moveLeftX;
if(window.innerWidth>=1024){
  moveRightX=0.0191489362;
  moveLeftX=-0.020501139;
}else if(window.innerWidth<1024 && window.innerWidth>800){
  moveRightX=0.0191489362;
  moveLeftX=-0.027643995928571
}else{
  moveRightX=0.0246646715
  moveLeftX=-0.027643995928571
}
document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (
        e.clientX+window.scrollX
      )
      + 'px'
    );
    document.documentElement.style.setProperty (
      '--y', (
        e.clientY+window.scrollY
      ) 
      + 'px'
    );
    marginTop = e.clientY
}
const text1 = document.getElementsByClassName('block3__text-first')[0];
const text2 = document.getElementsByClassName('block3__text-second')[0];
document.addEventListener('scroll', ()=>{
  const moveRight = -22.8297872 + (moveRightX * window.scrollY)
  const moveLeft = 54.5170843 + (moveLeftX * window.scrollY)
  text1.setAttribute('style', `transform: translateX(${moveRight}%)`)
  text2.setAttribute('style', `transform: translateX(${moveLeft}%)`)
  document.documentElement.style.setProperty (
    '--y', (
      window.scrollY + marginTop
    ) 
    + 'px'
  )  
})