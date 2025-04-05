let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

let curr_track = document.createElement('audio');

    let track_list = [
      {
        name: "Night Owl",
        artist: "Broke For Free",
        image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
      },
      {
        name: "Enthusiast",
        artist: "Tours",
        image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
      },
      {
        name: "Shipping Lanes",
        artist: "Chad Crouch",
        image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3"
      },
      {
        name: "Sunset",
        artist: "Kai Engel",
        image: "https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kai_Engel/Idea/Kai_Engel_-_06_-_Sunset.mp3"
      },
      {
        name: "Cylinder Five",
        artist: "Chris Zabriskie",
        image: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Chris_Zabriskie/Cylinders/Chris_Zabriskie_-_05_-_Cylinder_Five.mp3"
      },
      {
        name: "Dreams Become Real",
        artist: "Kevin MacLeod",
        image: "https://images.pexels.com/photos/1384698/pexels-photo-1384698.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Kevin_MacLeod/Calming/Kevin_MacLeod_-_Dreams_Become_Real.mp3"
      },
      {
        name: "Little Lily Swing",
        artist: "Tri-Tachyon",
        image: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tri-Tachyon/The_Winter_Embrace/Tri-Tachyon_-_01_-_Little_Lily_Swing.mp3"
      },
      {
        name: "Rainy Days",
        artist: "Joakim Karud",
        image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Joakim_Karud/Dizzy/Joakim_Karud_-_01_-_Rainy_Days.mp3"
      },
      {
        name: "Golden Hour",
        artist: "Podington Bear",
        image: "https://images.pexels.com/photos/217872/pexels-photo-217872.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Podington_Bear/Solo_Instrumental/Podington_Bear_-_Golden_Hour.mp3"
      },
      {
        name: "Cold Funk",
        artist: "Kevin MacLeod",
        image: "https://images.pexels.com/photos/2754200/pexels-photo-2754200.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Kevin_MacLeod/Funkorama/Kevin_MacLeod_-_Cold_Funk.mp3"
      },
      {
        name: "On My Way",
        artist: "Ghostrifter",
        image: "https://images.pexels.com/photos/2295087/pexels-photo-2295087.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Ghostrifter_Official/On_My_Way/Ghostrifter_Official_-_01_-_On_My_Way.mp3"
      },
      {
        name: "Cascade",
        artist: "Kubbi",
        image: "https://images.pexels.com/photos/3308589/pexels-photo-3308589.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kubbi/Symbols/Kubbi_-_07_-_Cascade.mp3"
      },
      {
        name: "Lullaby",
        artist: "Scott Holmes",
        image: "https://images.pexels.com/photos/1648526/pexels-photo-1648526.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Scott_Holmes/Music_For_TV__Film/Scott_Holmes_-_Lullaby.mp3"
      },
      {
        name: "Silence",
        artist: "Kai Engel",
        image: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Kai_Engel/Idea/Kai_Engel_-_01_-_Silence.mp3"
      },
      {
        name: "Evergreen",
        artist: "Podington Bear",
        image: "https://images.pexels.com/photos/355747/pexels-photo-355747.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Music_for_Video/Podington_Bear/Happy_Electronic/Podington_Bear_-_Evergreen.mp3"
      },
      {
        name: "Warm Feeling",
        artist: "SoulProdMusic",
        image: "https://images.pexels.com/photos/2236703/pexels-photo-2236703.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/SoulProdMusic/Warm_Feeling/SoulProdMusic_-_01_-_Warm_Feeling.mp3"
      },
      {
        name: "Golden Light",
        artist: "Wild Flower",
        image: "https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Wild_Flower/Sunset_Memories/Wild_Flower_-_Golden_Light.mp3"
      },
      {
        name: "Freedom",
        artist: "Bensound",
        image: "https://images.pexels.com/photos/2894333/pexels-photo-2894333.jpeg",
        path: "https://www.bensound.com/bensound-music/bensound-freedom.mp3"
      },
      {
        name: "Journey",
        artist: "Alexander Nakarada",
        image: "https://images.pexels.com/photos/3573351/pexels-photo-3573351.jpeg",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Alexander_Nakarada/Journey/Alexander_Nakarada_-_Journey.mp3"
      },
      {
        name: "Going Higher",
        artist: "Bensound",
        image: "https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg",
        path: "https://www.bensound.com/bensound-music/bensound-goinghigher.mp3"
      }
    ];
    


function random_bg_color() {
  let red = Math.floor(Math.random() * 128) + 128;
  let green = Math.floor(Math.random() * 128) + 128;
  let blue = Math.floor(Math.random() * 128) + 128;
  document.body.style.background = `rgb(${red}, ${green}, ${blue})`;
}

function loadTrack(index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[index].path;
  curr_track.load();
  track_art.style.backgroundImage = `url(${track_list[index].image})`;
  track_name.textContent = track_list[index].name;
  track_artist.textContent = track_list[index].artist;
  now_playing.textContent = `PLAYING ${index + 1} OF ${track_list.length}`;
  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

loadTrack(track_index);

function playpauseTrack() {
  isPlaying ? pauseTrack() : playTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  track_index = (track_index + 1) % track_list.length;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  track_index = (track_index - 1 + track_list.length) % track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  if (!isNaN(curr_track.duration)) {
    let seekPosition = curr_track.currentTime * (100 / curr_track.duration);
    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime % 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration % 60);

    curr_time.textContent = `${String(currentMinutes).padStart(2, '0')}:${String(currentSeconds).padStart(2, '0')}`;
    total_duration.textContent = `${String(durationMinutes).padStart(2, '0')}:${String(durationSeconds).padStart(2, '0')}`;
  }
}

seek_slider.addEventListener("input", seekTo);
volume_slider.addEventListener("input", setVolume);
playpause_btn.addEventListener("click", playpauseTrack);
next_btn.addEventListener("click", nextTrack);
prev_btn.addEventListener("click", prevTrack);



