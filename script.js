console.log('welcome to spotify develope by "span"');

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs=[
    {songsName: "song-1", filepath:'songs/1mp3', coverPath: 'covers/1/jpg'},
    {songsName: "song-2", filepath:'songs/2mp3', coverPath: 'covers/2/jpg'},
    {songsName: "song-3", filepath:'songs/3mp3', coverPath: 'covers/3/jpg'},
    {songsName: "song-4", filepath:'songs/4mp3', coverPath: 'covers/4/jpg'},
    {songsName: "song-5", filepath:'songs/5mp3', coverPath: 'covers/5/jpg'},
    {songsName: "song-6", filepath:'songs/6mp3', coverPath: 'covers/6/jpg'},
    {songsName: "song-7", filepath:'songs/7mp3', coverPath: 'covers/7/jpg'},
    {songsName: "song-8", filepath:'songs/8mp3', coverPath: 'covers/8/jpg'},
    {songsName: "song-9", filepath:'songs/9mp3', coverPath: 'covers/9/jpg'},
    {songsName: "song-10", filepath:'songs/10mp3', coverPath: 'covers/10/jpg'},
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
