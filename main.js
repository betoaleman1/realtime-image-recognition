video=" ";
status=" ";
function preload(){
    video=createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas=createCanvas(250,250);
    canvas.center();
}

function draw(){
    image(video,0,0,250,250);
}

function play_video(){
    object_detector=ml5.object_detector("cocossd, modelLoaded");
    document.getElementById("status").innerHTML="estado: detactando objetos";
}

function modelLoaded(){
    console.log("modelocargado");
    status="true";
    video.loop();
    video.speed(1);
    video.volume(1);
}