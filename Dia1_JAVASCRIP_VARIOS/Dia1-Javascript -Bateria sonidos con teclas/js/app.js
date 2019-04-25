
function playSound(e){

const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
console.log(audio);

if(!audio) return; //Salimos de la función si no existe el audio (null) no hay valor asociado en data-key

audio.currentTime = 0; //rewind to the start
audio.play();

key.classList.add('playing');

}


function removeTransition(e){
	if(e.propertyName !== 'transform') return;// salimos si no es una transformación

	this.classList.remove('playing');
	

}

const keys = document.querySelectorAll('.key');
//console.log(keys);
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);

