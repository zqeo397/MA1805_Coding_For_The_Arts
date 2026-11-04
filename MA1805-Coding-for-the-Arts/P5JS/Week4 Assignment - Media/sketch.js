let videos = []; // Empty Array that holds the videos
let vid1, vid2, vid3; // Variables that hold the videos
let currentVideo = 0;
let button; // This empty variable adjusts depending on if the fideo is playing or paused
let nextButton;
let playing = false;





function preload() {
  // This block below is getting the videos ready for the Array by preloading, 
  // It also hides the videos from initially showning when preloaded + Empties the Array\
  // Whilst `currentVideo` is set to 0 as a variable I always like to just be 100% sure its at 0. 
  
  vid1 = createVideo('Video1.mp4');
  vid2 = createVideo('Video2.mp4');
  vid3 = createVideo('Video3.mp4');
  vid1.hide();
  vid2.hide();
  vid3.hide();
  videos = [];
  currentVideo = 0;
}
function setup() {
  //The following block basically gets everything ready,
  // it makes the canvas, buttons, adds videos to the array. )
  
  createCanvas(1280, 720);
  videos[0] = vid1;
  videos[1] = vid2;
  videos[2] = vid3;
  button = createButton('play');
  button.mousePressed(toggleVid); 
  nextButton = createButton('Next video');
  nextButton.mousePressed(nextVideo);
}
function draw() {
      //This simply just shows whatever `currentVideo` is set to.
      image(videos[currentVideo], 0, 0, 1280, 720);

}

// The following two blocks check if the video is playing or paused, and changes if status of the button depending on what status the video is in.
function toggleVid() {
  if (playing) {
    videos[currentVideo].pause();
    button.html('play');
  } else {
    videos[currentVideo].loop();
    button.html('pause');
  }
  playing = !playing;
}

function nextVideo() {
  videos[currentVideo].stop();
  currentVideo = (currentVideo + 1) % videos.length;  
  videos[currentVideo].loop();
  playing = false;
}