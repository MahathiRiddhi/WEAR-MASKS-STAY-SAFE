
prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(camera);


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JNFBj-cdf/model.json", modelLoaded)

function modelLoaded() {
    console.log("Model Ready")
}

function check() {
    var image = document.getElementById("snapShot")
    classifier.classify(image, gotResult)
}
function gotResult(error, results) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results)
        prediction_1 = (results[0].label)
        document.getElementById("status").innerHTML = prediction1
    }
}