//
//
//
//
//
//
//
//


function reset() {
  working = false;
  document.getElementById("btn").innerHTML = "Start Dictation";
}

function action() {
  if (working) {
    speech.stop();
    reset();
  } else {
    working = true;
    document.getElementById("btn").innerHTML = "Stop Listening";
    speech.start();
  }
}

function initialize() {
  speech = new webkitSpeechRecognition();
  speech.continuous = true;
  speech.maxAlternatives = 5;
  speech.interimResults = true;
  speech.lang =  "cmn-Hans-CN";
}

var  working, speech, final_transcript = "";


if (!('webkitSpeechRecognition' in window)) {
  console.log("not  supported !");
} 

initialize();
reset();
 

speech.onresult = function(e) {
	var interim_transcript = '';
	if (typeof(e.results) == 'undefined') {
	  reset();
	  return;
	}
	for (var i = e.resultIndex; i < e.results.length; ++i) {
	  var val = e.results[i][0].transcript;
	  if (e.results[i].isFinal) {
		final_transcript += " " + val;
	  } else {
		interim_transcript += " " + val;
	  }
	}
	console.log(final_transcript);
	console.log(interim_transcript);

};

speech.onerror = function(e) {
	var msg = e.error + " error";
	if (e.error === 'no-speech') {
		msg =  "No microphone  detected ";
	} else if (e.error === 'audio-capture') {
		msg =  "Please ensure your microphone is connected ";
	} else if (e.error === 'not-allowed') {
		msg = " Please allow Microphone access ";
	}
	console.log(msg);
};
