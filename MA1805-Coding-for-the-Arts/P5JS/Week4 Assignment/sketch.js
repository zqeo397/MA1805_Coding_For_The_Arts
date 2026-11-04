let img;
let playing = false;




function preload() {
  img = loadImage('images.jpeg');
  scream = loadSound('discord-cat-scream.mp3'); 
}
function setup() {
  createCanvas(1920 , 1089);
   scream.setVolume(0.2);
  vid = createVideo('chroma-keyed-video.mp4'); 
  vid.size(width, height);
  vid.volume(1);
  vid.hide(); 



}

function draw() {
  background(220);
  if (playing === false) {
    image(img, 0, 0, 1920, 1080); 
    vid.stop();
  }   
    else {
    image(vid, 0, 0, 1920, 1080); 
  }
   
  
  if (playing === true) {
     vid.play(); 
     vid.volume(1);
    }
    
}

function mousePressed() {
    scream.stop(); 
    vid.loop();
    playing = true;
  }
function mouseReleased() {
    scream.play(); 
    scream.loop();
    scream.setVolume(0.2);
    playing = false;
    vid.hide();
}
