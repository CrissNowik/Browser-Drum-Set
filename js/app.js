document.addEventListener("DOMContentLoaded", function() {
  //keyboard play
  function playSound(e) {
    let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let btn = document.querySelector(`.drum[data-key="${e.keyCode}"]`);

    if(!sound) return; //stop if there is no proper choosen key
    sound.currentTime = 0;
    sound.play();   // playing sounds

    btn.classList.add('play');// animate playing btn
  };

  // mouseclick/tap play
  function clickSound(e) {
      let soundPS = document.querySelector(`audio[data-key="${e.path["0"].parentElement.dataset.key}"]`);
      let btnP = document.querySelector(`.drum[data-key="${e.path["0"].parentElement.dataset.key}"]`);
      let btnS = document.querySelector(`.drum[data-key="${e.path["0"].parentElement.dataset.key}"]`);

      if (soundPS === null && btnP === null && btnS === null) {
        let sound = document.querySelector(`audio[data-key="${e.srcElement.attributes["0"].value}"]`)
        let btn = document.querySelector(`.drum[data-key="${e.srcElement.attributes["0"].value}"]`);

          if(!sound) return; //stop if there is no choosen key
          sound.currentTime = 0;
          sound.play(); // playing sounds btn

          btn.classList.add('play'); // animate playing btn
      } else {
        let btn = document.querySelector(`.drum[data-key="${e.path["0"].parentElement.dataset.key}"]`);
        if(!soundPS) return; //stop if there is no click

        soundPS.currentTime = 0;
        soundPS.play(); //playing sounds btn childs
        btn.classList.add('play'); // animate playing btn
      }
  }

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('play');
  }

  let btns = document.querySelectorAll('.drum');
  let btnP = document.querySelectorAll('.drum > p');
  let btnS = document.querySelectorAll('.drum > span');

  btns.forEach( btn => btn.addEventListener('transitionend', removeTransition));
  btns.forEach( btn => btn.addEventListener('click', clickSound));
  btnP.forEach( btnP => btnP.addEventListener('click', clickSound));
  btnS.forEach( btnS => btnS.addEventListener('click', clickSound));
  window.addEventListener('keydown', playSound);

}); // DOM contentloaded end
