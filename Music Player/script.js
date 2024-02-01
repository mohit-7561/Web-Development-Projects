let audioElement = new Audio('Songs/song1.mp3');
let songIndex = 0;
let playButtonElement = document.querySelector('#play-button');
let progressBarElement = document.querySelector('#progressBar');
let gifElement = document.querySelector('#gif');
let songNameElement = document.querySelector('#songName');
let songsList = [
    {songName: 'AUR SIKHAYAT' , filePath: 'Songs/song1.mp3', bannerPath: 'assests/banner1.jpg'},
    {songName: 'RAASHAH' , filePath: 'Songs/song2.mp3', bannerPath: 'assests/banner2.jpg'},
    {songName: 'MAI HOON NA' , filePath: 'Songs/song3.mp3', bannerPath: 'assests/banner3.jpg'},
    {songName: 'KAJAL' , filePath: 'Songs/song4.mp3', bannerPath: 'assests/banner4.jpg'},
    {songName: 'JOOTA JAPANI' , filePath: 'Songs/song5.mp3', bannerPath: 'assests/banner5.jpg'},
]

playButtonElement.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        playButtonElement.classList.remove('fa-play-circle');
        playButtonElement.classList.add('fa-pause-circle');
        gifElement.style.opacity = 1
    }
    else{
        audioElement.pause();
        playButtonElement.classList.remove('fa-pause-circle');
        playButtonElement.classList.add('fa-play-circle');
        gifElement.style.opacity = 0
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    // update progressBar
    progress = ((audioElement.currentTime/audioElement.duration)*100);
    progressBarElement.value = progress;
})


progressBarElement.addEventListener('change', ()=>{
    audioElement.currentTime = (progressBarElement.value*audioElement.duration/100);
})



let songListElement = document.querySelector('.songList');
let innerHTML = '';
songsList.forEach(item =>{
    innerHTML += `
        <div class="songItems">
            <img src="${item.bannerPath}" alt="song Banner">
            <span>${item.songName}</span>
            <span class="songListPlay"><span>2:30 <i class="fas songListPlayIcon fa-play-circle"></i> </span> </span>
        </div>

`
});
songListElement.innerHTML = innerHTML;



let songListPlayElement = document.querySelectorAll('.songListPlayIcon');

const makeAllPlays = () => {
    songListPlayElement.forEach(element => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

songListPlayElement.forEach((element, index) => {
    element.addEventListener('click', () => {
        makeAllPlays();
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');

        // Pause any currently playing song
        if (!audioElement.paused) {
            audioElement.pause();
            playButtonElement.classList.remove('fa-pause-circle');
            playButtonElement.classList.add('fa-play-circle');
            gifElement.style.opacity = 0;
        }

        // Set the new song and play it
        audioElement.src = songsList[index].filePath;
        audioElement.play();
        songIndex = index;
        songNameElement.innerText = songsList[songIndex].songName;
        playButtonElement.classList.remove('fa-play-circle');
        playButtonElement.classList.add('fa-pause-circle');
        gifElement.style.opacity = 1;
    });
});

let backwardButtonElement = document.querySelector('#backward');
let songInfoElement = document.querySelector('.songInfo');

backwardButtonElement.addEventListener('click', () => {
    // Pause any currently playing song
    if (!audioElement.paused) {
        audioElement.pause();
        playButtonElement.classList.remove('fa-pause-circle');
        playButtonElement.classList.add('fa-play-circle');
        gifElement.style.opacity = 0;
    }

    // Move to the previous song
    if (songIndex > 0) {
        songIndex -= 1;
    } else {
        songIndex = songsList.length - 1;
    }

    // Set the new song and play it
    audioElement.src = songsList[songIndex].filePath;
    audioElement.play();
    songNameElement.innerText = songsList[songIndex].songName;
    playButtonElement.classList.remove('fa-play-circle');
    playButtonElement.classList.add('fa-pause-circle');
    gifElement.style.opacity = 1;

    // Update the song list play icons
    makeAllPlays();
    songListPlayElement[songIndex].classList.remove('fa-play-circle');
    songListPlayElement[songIndex].classList.add('fa-pause-circle');
});


let forwardButtonElement = document.querySelector('#forward');

forwardButtonElement.addEventListener('click', () => {
    // Pause the current song
    audioElement.pause();
    playButtonElement.classList.remove('fa-pause-circle');
    playButtonElement.classList.add('fa-play-circle');
    gifElement.style.opacity = 0;

    // Move to the next song in the playlist
    if (songIndex >=5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }

    // Set the new song and play it
    audioElement.src = songsList[songIndex].filePath;
    audioElement.play();
    songNameElement.innerText = songsList[songIndex].songName;
    playButtonElement.classList.remove('fa-play-circle');
    playButtonElement.classList.add('fa-pause-circle');
    gifElement.style.opacity = 1;

     // Update the song list play icons
     makeAllPlays();
     songListPlayElement[songIndex].classList.remove('fa-play-circle');
     songListPlayElement[songIndex].classList.add('fa-pause-circle');
});



let volumeControlElement = document.querySelector('#volumeControl');

// Set initial volume (0.5 is 50%, you can adjust as needed)
audioElement.volume = 0.5;
volumeControlElement.value = audioElement.volume * 100; // Update volume control value

// Add event listener to volume control
volumeControlElement.addEventListener('input', () => {
    // Update the volume based on the value of the volume control
    audioElement.volume = volumeControlElement.value / 100;
});

// Function to update volume control when volume changes
function updateVolumeControl() {
    volumeControlElement.value = audioElement.volume * 100;
}


