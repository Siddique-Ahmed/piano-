const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keyCheckbox = document.querySelector(".keys-checkbox input");

let allKeyAudio = [];
audio = new Audio("tunes/a.wav")

const playTune = (key)=>{
  audio.src =  `tunes/${key}.wav`
  audio.play();

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(()=>{
    clickedKey.classList.remove("active");
  },150)
}

pianoKeys.forEach(key =>{
  allKeyAudio.push(key.dataset.key)
  key.addEventListener("click",()=> playTune(key.dataset.key));
})

const controlVolume = (e)=>{
  audio.volume = e.target.value;
}

const pressedKey = (e) =>{
  if(allKeyAudio.includes(e.key)) playTune(e.key);
}


const showHideKeys = () =>{
  pianoKeys.forEach(key => key.classList.toggle("hide"));
}

keyCheckbox.addEventListener("click", showHideKeys)
volumeSlider.addEventListener("input", controlVolume)
document.addEventListener("keydown", pressedKey)