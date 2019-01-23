var song;

function preload() {
  song = loadSound('assets/Major Lazer - Light It Up.mp3');
}

function setup() {
  createCanvas(710, 200);
  song.play();
  background(0,255,0);
}

/*function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.pause(); // .play() will resume from .pause() position
    background(255,0,0);
  } else {
    song.play();
    background(0,255,0);
  }
}

function whileLoading(total){
  print('Loaded: ' + total);
}

function soundReady(){
  print('Sound is ready.');
}
*/
