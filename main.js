var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if (Content == "selfie") {
        speak();
    }
}

camera = document.getElementById("camera");
Webcam.set({
    width: 500,
    height: 400,
    image_format: 'jpeg',
    jpeg_quality: 90
});



function speak() {


    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your first Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function () {
        img_id = "selfie_1";
        take_snapshot();
        speak_data = "taking your selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 5000)

    setTimeout(function () {
        img_id = "selfie_2";
        take_snapshot();
        speak_data = "taking your selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 10000)

    setTimeout(function () {
        img_id = "selfie_3";
        take_snapshot();
        speak_data = "taking your selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);

    }, 15000)

}

function take_snapshot() {

    console.log(img_id);

    webcam.snap(function (data_uri) {

        if (img_id == "selfir_1") {
            document.getElementById(result_1).innerHTML = '<img id = "selfie_1" src="' + data_uri + '"/>';
        }

        if (img_id == "selfir_2") {
            document.getElementById(result_2).innerHTML = '<img id = "selfie_2" src="' + data_uri + '"/>';
        }

        if (img_id == "selfir_3") {
            document.getElementById(result_3).innerHTML = '<img id = "selfie_3" src="' + data_uri + '"/>';
        }
    });
}