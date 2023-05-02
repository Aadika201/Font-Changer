function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 150);

    canvas = createCanvas(550, 500);
    canvas.position(860, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized')
}

function draw()
{
    background('#969a97');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}