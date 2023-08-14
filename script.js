console.log('welcome');
let songIndex=0;
let audioElement=new Audio('songs/Tareef.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songName:"Kinj Karan Tareef",filePath:"songs/1.mp3",coverPath:"images/tareef.jpeg"},
    {songName:"EXCUSES",filePath:"songs/2.mp3",coverPath:"images/excuses.jpg"},
    {songName:"INSANE",filePath:"songs/3.mp3",coverPath:"images/insane.jpg"},
    {songName:"Wo Noor",filePath:"songs/4.mp3",coverPath:"images/wonoor.jpg"},
    {songName:"Summer High",filePath:"songs/5.mp3",coverPath:"images/summerhigh.jpg"},
    {songName:"DESIRES",filePath:"songs/6.mp3",coverPath:"images/desires.jpg"},
    {songName:"TOXIC",filePath:"songs/7.mp3",coverPath:"images/toxic.jpg"},
    {songName:"Against All Odds",filePath:"songs/8.mp3",coverPath:"images/against.jpg"},
    {songName:"WAR",filePath:"songs/9.mp3",coverPath:"images/war.jpg"},
    {songName:"SPACESHIP",filePath:"songs/10.mp3",coverPath:"images/spaceship.jpg"},
]

songItems.forEach((element,i)=>{
   
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
})


 masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currenttime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
 })



audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;  ;
}) 

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
})