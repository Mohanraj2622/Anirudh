document.addEventListener("DOMContentLoaded", () => {
  const savedTrack = localStorage.getItem("currentTrack");
  if (savedTrack) {
    const track = JSON.parse(savedTrack);
    playSong(track);
    localStorage.removeItem("currentTrack"); // Remove to prevent replay
  }
});

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && (event.key === "=" || event.key === "-" || event.key === "0")) {
    event.preventDefault();
  }
});

document.addEventListener("wheel", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, { passive: false });

// WebViewString Communication with MIT App Inventor
function updateAppInventorState(state) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(state);
  }
}

// Function to send a message to MIT App Inventor about Media Session status
function updateAppInventorWithMediaSessionStatus(status) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString("MediaSessionStatus: " + status);
  }
}

// Media Session API Integration
function setupMediaSession() {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler("play", playSong);
    navigator.mediaSession.setActionHandler("pause", pauseSong);
    navigator.mediaSession.setActionHandler("nexttrack", playNextSong);
    navigator.mediaSession.setActionHandler("previoustrack", playPrevSong);

    // Inform App Inventor that the Media Session is enabled
    updateAppInventorWithMediaSessionStatus("Media Session Enabled");
  } else {
    // Inform App Inventor that the Media Session is not supported
    updateAppInventorWithMediaSessionStatus("Media Session Not Supported");
  }
}

// Existing code remains the same
const SONGS = [
  // 1 list
  {
    title: "Dakalti",
    artist: "Andreya",
    url: "Dakalti.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ek-Do-Theen",
    artist: "Andreya",
    url: "Ek-Do-Theen.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

  {
    title: "Elay Makka",
    artist: "Andreya",
    url: "Elay Makka.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "En-Pulse-Yethitu",
    artist: "Andreya",
    url: "En-Pulse-Yethitu-Poriye.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Engadi-Porandha",
    artist: "Andreya",
    url: "Engadi-Porandha.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Ennadi-Maayavi-Nee",
    artist: "Andreya",
    url: "Ennadi-Maayavi-Nee-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Google-Google",
    artist: "Andreya",
    url: "Google-Google-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Hey-Vasamoakka",
    artist: "Andreya",
    url: "Hey-Vasamoakka.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Idhu-Varai",
    artist: "Andreya",
    url: "Idhu-Varai.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Kadhalikka-Pennoruthi",
    artist: "Andreya",
    url: "Kadhalikka-Pennoruthi.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Madurai-Ponnu",
    artist: "Andreya",
    url: "Madurai-Ponnu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Mouname Mouname",
    artist: "Andreya",
    url: "Mouname Mouname.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nee Nee Nee",
    artist: "Andreya",
    url: "Nee Nee Nee.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Nee-Sunno_New_Moono",
    artist: "Andreya",
    url: "Nee-Sunno-New-Moono.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "No-Money-No-Honey",
    artist: "Andreya",
    url: "No-Money-No-Honey.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oh-Baby-Oh-Baby",
    artist: "Andreya",
    url: "Oh-Baby-Oh-Baby.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oh-Eesa",
    artist: "Andreya",
    url: "Oh-Eesa.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Oo-Solriya-Oo-Oo-Solriya",
    artist: "Andreya",
    url: "Oo-Solriya-Oo-Oo-Solriya-MassTamilan.fm.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Police kaarana Kattikitta",
    artist: "Andreya",
    url: "Police Kaarana Kattikitta.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Pookal Pookum",
    artist: "Andreya",
    url: "Pookal Pookum.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Rainbow-Thiralil",
    artist: "Andreya",
    url: "Rainbow-Thiralil-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Senthamil-Pesum-Azhgu",
    artist: "Andreya",
    url: "Senthamil-Pesum-Azhgu-MassTamilan.so.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Theertha-Vilayattu",
    artist: "Andreya",
    url: "Theeratha-Vilayattu.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Andreya",
    artist: "Andreya",
    url: "Un-Mela-Aasadhaan.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Unnai-Kaanadhu-Naan",
    artist: "Andreya",
    url: "Unnai-Kaanadhu-Naan.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Vilayadu-Mangatha-Extended-dance-Mix",
    artist: "Andreya",
    url: "Vilayadu-Mangatha-Extended-Dance-Mix.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Who-Is-The-Hero",
    artist: "Andreya",
    url: "Who-Is-The-Hero-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yaarada-(Kangal-mudidathey)",
    artist: "Andreya",
    url: "Yaarada-(Kangal-Mudidathey)-MassTamilan.com.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },
  {
    title: "Yeno-Yeno-Panithuli",
    artist: "Andreya",
    url: "Yeno-Yeno-Panithuli-MassTamilan.dev.mp3",
    coverUrl: "https://example.com/cover1.jpg",
  },

];

let currentSongIndex = 0;
let isPlaying = false;
let userPaused = false;
let isSearchActive = false;
let searchResults = [];
const audio = new Audio();
const trackList = document.getElementById('trackList');
const searchInput = document.getElementById('search');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const cover = document.getElementById('cover');
const playPauseButton = document.getElementById('playPause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const progress = document.getElementById('progress');
const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

// Function to send media control events to MIT App Inventor
function sendMediaControlEvent(event) {
  if (window.AppInventor) {
    window.AppInventor.setWebViewString(`MediaControl:${event}`);
  }
}

// Function to send metadata updates to MIT App Inventor
function sendMetadataUpdate(song) {
  if (window.AppInventor) {
    const metadata = {
      title: song.title,
      artist: song.artist,
      coverUrl: song.coverUrl || "default-cover.jpg",
    };
    window.AppInventor.setWebViewString(`MetadataUpdate:${JSON.stringify(metadata)}`);
  }
}

const loadSong = (index) => {
  const song = SONGS[index];
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = song.url;
  progress.value = 0;
  currentTimeDisplay.textContent = "0:00";
  durationDisplay.textContent = "0:00";
  updateMediaSession(song);
  cover.src = song.coverUrl || "default-cover.jpg";
  // Try to extract cover image from MP3 metadata
  fetch(song.url)
    .then(response => response.blob())
    .then(blob => {
      jsmediatags.read(blob, {
        onSuccess: function (tag) {
          const picture = tag.tags.picture;
          if (picture) {
            let base64String = "";
            for (let i = 0; i < picture.data.length; i++) {
              base64String += String.fromCharCode(picture.data[i]);
            }
            const base64 = btoa(base64String);
            cover.src = `data:${picture.format};base64,${base64}`;
          } else {
            cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
          }
        },
        onError: function (error) {
          console.error("Error reading cover art:", error);
          cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
        }
      });
    })
    .catch(error => {
      console.error("Error fetching MP3 file:", error);
      cover.src = song.coverUrl || "default-cover.jpg"; // Use array cover or fallback
    });
};

// Play the current song
const playSong = () => {
  userPaused = false;
  isPlaying = true;
  audio.play().catch(error => {
    console.error("Playback failed:", error);
  });
  playPauseButton.textContent = '⏸';
  updateAppInventorState(`Playing: ${SONGS[currentSongIndex].title}`)
  sendMediaControlEvent('play');
};

// Pause the current song (only when user explicitly pauses)
const pauseSong = () => {
  userPaused = true;
  isPlaying = false;
  audio.pause();
  playPauseButton.textContent = '▶️';
  updateAppInventorState(`Paused: ${SONGS[currentSongIndex].title}`);
  sendMediaControlEvent('pause');
};

// Toggle play/pause
const togglePlayPause = () => {
  isPlaying ? pauseSong() : playSong();
};

// Play the next song
const playNextSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex + 1) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex + 1) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('next');
};

// Play the previous song
const playPrevSong = () => {
  if (isSearchActive && searchResults.length > 0) {
    currentSongIndex = (currentSongIndex - 1 + searchResults.length) % searchResults.length;
    loadSong(SONGS.indexOf(searchResults[currentSongIndex]));
  } else {
    currentSongIndex = (currentSongIndex - 1 + SONGS.length) % SONGS.length;
    loadSong(currentSongIndex);
  }
  playSong();
  sendMediaControlEvent('previous');
};

// Update the progress bar and time display
const updateProgress = () => {
  const { currentTime, duration } = audio;
  progress.value = (currentTime / duration) * 100 || 0;
  currentTimeDisplay.textContent = formatTime(currentTime);
  durationDisplay.textContent = formatTime(duration);
};

// Format time for display
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

// Handle seeking through the progress bar
const handleSeek = (e) => {
  const seekTime = (e.target.value / 100) * audio.duration;
  audio.currentTime = seekTime;
};

// Update WebViewString to prevent App Inventor from stopping
updateAppInventorState("Playing: " + SONGS[currentSongIndex].title + " - " + Math.floor(audio.currentTime) + "s");

// Debounce function to limit the rate of execution
const debounce = (func, delay) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
};

// Filter the song list based on the search input
const filterSongs = debounce(() => {
  const query = searchInput.value.toLowerCase();
  searchResults = SONGS.filter((song) => song.title.toLowerCase().includes(query));
  isSearchActive = query.length > 0;
  renderSongList(searchResults);
}, 300);

const renderSongList = (songs) => {
  trackList.innerHTML = ''; // Clear the existing list
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.classList.add('track');

    // Create an image element for the cover
    const img = document.createElement('img');
    img.src = "default-cover.jpg"; // Set default initially
    img.alt = song.title;
    img.classList.add('track-cover'); // Add CSS class for styling

    // Array of random cover images (URLs or Base64 data)
    const defaultCovers = [
      "andreya-cover-1.png",
      "andreya-cover-2.png",
      "andreya-cover-3.png",
      "andreya-cover-4.png",
      "andreya-cover-5.png"
    ];

    // Function to get a random cover image
    function getRandomCover() {
      return defaultCovers[Math.floor(Math.random() * defaultCovers.length)];
    }

    // Set a random cover icon immediately
    img.src = getRandomCover();

    // Create a div for track info
    const trackInfo = document.createElement('div');
    trackInfo.classList.add('track-info');

    // Create a div for the title
    const trackTitle = document.createElement('div');
    trackTitle.classList.add('track-title');
    trackTitle.textContent = song.title;
    trackInfo.appendChild(trackTitle);

    li.appendChild(img);
    li.appendChild(trackInfo);

    li.addEventListener('click', () => {
      if (isSearchActive) {
        currentSongIndex = SONGS.indexOf(song);
      } else {
        currentSongIndex = index;
      }
      loadSong(currentSongIndex);
      playSong();
    });

    trackList.appendChild(li);
  });
};

// Function to update media session metadata and send status to App Inventor
const updateMediaSession = (song) => {
  if ('mediaSession' in navigator) {
    // Default to provided coverUrl or a fallback image
    let artworkUrl = song.coverUrl || "default-cover.jpg";

    // Try extracting embedded cover art from MP3 metadata
    fetch(song.url)
      .then(response => response.blob())
      .then(blob => {
        jsmediatags.read(blob, {
          onSuccess: (tag) => {
            const picture = tag.tags.picture;
            if (picture) {
              let base64String = "";
              for (let i = 0; i < picture.data.length; i++) {
                base64String += String.fromCharCode(picture.data[i]);
              }
              artworkUrl = `data:${picture.format};base64,${btoa(base64String)}`;
            }

            // Update media session with extracted or fallback artwork
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            // Send update to App Inventor
            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title}`);
          },
          onError: (error) => {
            console.error("Error extracting metadata:", error);

            // Use fallback cover if metadata extraction fails
            navigator.mediaSession.metadata = new MediaMetadata({
              title: song.title,
              artist: song.artist,
              album: song.album || "Unknown Album",
              artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
            });

            updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (No Cover Found)`);
          }
        });
      })
      .catch((error) => {
        console.error("Error fetching MP3 file:", error);

        // Use fallback cover if fetching fails
        navigator.mediaSession.metadata = new MediaMetadata({
          title: song.title,
          artist: song.artist,
          album: song.album || "Unknown Album",
          artwork: [{ src: artworkUrl, sizes: "512x512", type: "image/png" }]
        });

        updateAppInventorWithMediaSessionStatus(`Metadata Updated: ${song.title} (Failed to Fetch)`);
      });
  }
};

  // Notification functions
  function showNotification() {
    console.log("Showing notification...");
    // Add your notification UI logic here
  }

  function hideNotification() {
    console.log("Hiding notification...");
    // Add your notification UI logic here
  }

// Ensure playback continues when app is in the background
document.addEventListener("visibilitychange", () => {
  if (document.hidden && isPlaying) {
    showNotification();
  } else {
    hideNotification();
    if (isPlaying) {
      audio.play().catch(error => {
        console.error("Resume after visibility change failed:", error);
      });
    }
  }
});


// Handle system-triggered pauses (e.g., app backgrounded)
audio.addEventListener('pause', (event) => {
  if (!userPaused && isPlaying) {
    // Automatically resume playback if paused by the system (not user)
    setTimeout(() => {
      audio.play().catch(error => {
        console.error("Auto-resume failed:", error);
      });
    }, 100);
  }
});

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', () => {
  if (searchInput.value === '') {
    isSearchActive = false;
    searchResults = [];
    renderSongList(SONGS);
  } else {
    filterSongs();
  }
});

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Event listeners for audio and controls
audio.addEventListener('ended', playNextSong);
audio.addEventListener('timeupdate', updateProgress);
searchInput.addEventListener('input', filterSongs);
playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
progress.addEventListener('input', handleSeek);

// Initial setup
loadSong(currentSongIndex);
renderSongList(SONGS);
setupMediaSession();
