console.log("Welcome to MyMusic App");

//Initialise the variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('Gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let mastersongname = document.getElementById('mastersongname');

let songs =[
    {songname : "Let Me Love you", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
     {songname : "Hallelujah", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
     {songname : "The Chain", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
     {songname : "Rubberband Man", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
     
]

songs.forEach((element, i)=>{
    console.log(element, i);
    document.getElementsByClassName("img")[i] = songs[i].coverPath;
    document.getElementsByClassName("songname")[i].innerText = songs[i].songname;
})

// handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    gif.style.opacity =1;
}
else{
    audioElement.pause();
    gif.style.opacity =0;
}
})

//Listen to events

audioElement.addEventListener('timeupdate', ()=>{

    //Update the seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration) *100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration /100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element=>{;
        
    }))
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
       makeAllPlays();
       songIndex= parseInt(e.target.id);
       audioElement.src= `songs/${songIndex+1}.mp3`;
       mastersongname.innerText = songs[songIndex].songname;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity =1;
    
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=3){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src= `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    
})

