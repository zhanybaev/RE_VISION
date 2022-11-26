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
}

const text1 = document.getElementsByClassName('block3__text-first')[0];
const text2 = document.getElementsByClassName('block3__text-second')[0];
document.addEventListener('scroll', ()=>{
  console.log(window.scrollY);
  const moveRight = -22.8297872 + (0.0191489362 * window.scrollY)
  console.log(moveRight);
  const moveLeft = 54.5170843 + (-0.020501139 * window.scrollY)
  text1.setAttribute('style', `transform: translateX(${moveRight}%)`)
  text2.setAttribute('style', `transform: translateX(${moveLeft}%)`)
})
