const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views')); // html
app.use(express.static(__dirname + '/public')); // js, css, images


app.get('/', (req, res) => {
  res.sendFile('index.html');
});

const server = app.listen(80);
console.log('listening port 80 ...');
/*	function start_voice_recongnition() {
		if (window.hasOwnProperty('webkitSpeechRecognition')) {
			console.log("voice recongnition start !");
			var recognition = new webkitSpeechRecognition();

			recognition.continuous = false;
			recognition.interimResults = false;

			recognition.lang = "cmn-Hans-CN";
			//recognition.lang = "en-US";
			recognition.start();

			recognition.onresult = function(e) {
				document.getElementById('transcript').value
									 = e.results[0][0].transcript;
				recognition.stop();
				document.getElementById('labnol').submit();
			};

			recognition.onerror = function(e) {
				recognition.stop();
			}

		}
	}
	
	//var  SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
	//var  recognition = new SpeechRecognition();
	const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
	const recognition = new SpeechRecognition();
	recognition.lang = 'cmn-Hans-CN';
	recognition.interimResults = false;
	//document.querySelector('button').addEventListener('click', () => {
	  recognition.start();
	  console.log("voice recongnition start !");
	//});
	recognition.addEventListener('result', (e) => {
		  let last = e.results.length - 1;
		  let text = e.results[last][0].transcript;
		console.log(text);
		  console.log('Confidence: ' + e.results[0][0].confidence);

	  // We will use the Socket.IO here later…
	});
	
	*/