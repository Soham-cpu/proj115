function preload() {

}

function setup() {
    canvas = createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();


    poseNet = ml5.poseNet(video, uploaded_);
    poseNet.on('pose', gotResutls);
}

function uploaded_() {
    console.log("model loaded");
}

function gotResutls(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 350, 300);
}

function take_picture() {
    save("picture.png");
}