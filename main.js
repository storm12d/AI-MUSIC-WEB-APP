 rightwrist_x= 0;
leftWrist_x= 0;
 rightwrist_y=0
  leftwrist_y= 0;

function setup()
{
 canvas = createCanvas(600, 500);
 canvas.center();

 video = createCapture(VIDEO);
 video.hide();
 
 poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
image(video,0,0,600,500);
}

function preload()
{
    song = loadSound("Master - Kutti Story Video _ Thalapathy Vijay _ Anirudh Ravichander _ Lokesh Kanagaraj.mp3");

    song = loadSound("DARBAR (Tamil) - Chumma Kizhi (Lyric Video) _ Rajinikanth _ AR Murugadoss _ Anirudh _ Subaskaran.mp3");
}

function modelLoaded(){
    console.log('PoseNet Is Initializied');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
      console.log(results);
      scoreRightWrist = results[0].pose.keypoints[10].score;
      scoreLeftWrist = results[0].pose.keypoints[9].score;

      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);
        }
}