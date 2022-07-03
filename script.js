// console.log("Welcome to Spotify");

//Initialize the variables
let songIndex = 0;
let audioElement  = new Audio('Songs/1.mp3');
masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: 'Let me Love You',filePath: "Songs/1.mp3"},
    {songName: 'Aye mere hum nava',filePath: "Songs/2.mp3"},
    {songName: 'Ghajani backgrou',filePath: "Songs/3.mp3"},
    {songName: 'Naino ki jo baat....',filePath: "Songs/4.mp3"},
    {songName: 'Tere bina jeena saja',filePath: "Songs/5.mp3"},
    {songName: 'Tumhe pake dilbar',filePath: "Songs/6.mp3"},
    {songName: 'Tumhe pake dilbar',filePath: "Songs/7.mp3"},
    {songName: 'Tumhe pake dilbar',filePath: "Songs/8.mp3"},
    {songName: 'Tumhe pake dilbar',filePath: "Songs/9.mp3"},
    {songName: 'Tumhe pake dilbar',filePath: "Songs/10.mp3"},
]

songItems.forEach((element,i)=>{
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})
// audioElement.play();

// Handle Play/Pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');  
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //Update SeekBar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100) // it will give the percentage of song played
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `Songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
    songIndex = 0;
    else
    songIndex+=1;

    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    songIndex = 0;
    else
    songIndex-=1;

    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})