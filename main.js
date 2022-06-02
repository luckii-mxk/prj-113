function setup() {
    canvas = createCanvas(480, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);

    video.hide();
}

function draw() {
    image(video, 0, 0, 480, 400);
}

function take_snapshot() {
    save('bday-code.png');
}