console.log("welcom to spotify");
// Initialze the variable

let songIdx = 0;
let audioElement = new Audo('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let song = [
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
    { songName: 'Salam_Ishq', filePath: 'song/1.mp3', coverPath: 'covers/1.jpg' },
]
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause')
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-circle-play')
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    // update Seekbar
})
