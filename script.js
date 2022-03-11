const headerContainer = document.querySelector('.header__container');
const headerBtns = document.querySelectorAll('.header__nav-btn');
const mainButton = document.querySelector('.main__button');
const mainContainer = document.querySelector('.main__container');
let isPlay = false;
const audio = new Audio();
let namePlay = ''; 

const playPauseAudio = (namePlay) => {
  audio.src = `./assets/audio/${namePlay}.mp3`;
  audio.currentTime = 0;
  audio.autoplay = true;
  if (!isPlay) {
    audio.play()
    isPlay = true;
    mainButton.classList.add('pause');
  } else {
    audio.pause();
    isPlay = false;
    mainButton.classList.remove('pause');
  }
}

const pauseAudio = () => {
  audio.pause();
  isPlay = false;
}

mainButton.addEventListener('click', ()=> {
  mainButton.classList.toggle('pause');
  namePlay === '' 
    ? playPauseAudio('forest') 
    : playPauseAudio(namePlay);
})

const channgeActiveClass = (e) => {
  headerBtns.forEach(btn => btn.classList.remove('btn-active'));
  if (e.target.classList.contains('header__nav-btn')) {
    e.target.classList.add('btn-active');
  }
}

headerContainer.addEventListener('click', (e) => {
  channgeActiveClass(e);
  pauseAudio()
  namePlay = e.target.dataset.item;
  if (e.target.dataset.item === 'forest') {
    // console.log('Лес');
    mainContainer.style.backgroundImage = `
    url("./assets/img/${e.target.dataset.item}.jpg")`;
    playPauseAudio(e.target.dataset.item)
  }
  if (e.target.dataset.item === 'nightingale') {
    // console.log('Соловей');
    mainContainer.style.backgroundImage = `
    url("./assets/img/${e.target.dataset.item}.jpg")`;
    playPauseAudio(e.target.dataset.item)
  }
  if (e.target.dataset.item === 'thrush') {
    // console.log('Дрозд');
    mainContainer.style.backgroundImage = `
    url("./assets/img/${e.target.dataset.item}.jpg")`;
    playPauseAudio(e.target.dataset.item)
  }
  if (e.target.dataset.item === 'robin') {
    // console.log('Малиновка');
    mainContainer.style.backgroundImage = `
    url("./assets/img/${e.target.dataset.item}.jpg")`;
    playPauseAudio(e.target.dataset.item)
  }
  if (e.target.dataset.item === 'lark') {
    // console.log(' Жаваронок');
    mainContainer.style.backgroundImage = `
    url("./assets/img/${e.target.dataset.item}.jpg")`;
    playPauseAudio(e.target.dataset.item)
  }
  if (e.target.dataset.item === 'warbler') {
    // console.log('Славка');
    mainContainer.style.backgroundImage = `
    url("./assets/img/${e.target.dataset.item}.jpg")`;
    playPauseAudio(e.target.dataset.item)
  }
})


