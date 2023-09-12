// src/components/eKYC/FaceCapture.js
import React from 'react';
import Webcam from 'react-webcam';

const FaceCapture = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Process the captured image or send it to your server.
  }, [webcamRef]);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture</button>
    </div>
  );
};

export default FaceCapture;
