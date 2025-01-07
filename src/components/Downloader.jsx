import React, { useState } from 'react';
import Spinner from './Spinner'; // Spinner component for loading animation
import { useNavigate } from 'react-router-dom'; // For navigation 🚀
import '../styles/Downloader.css'; // Importing styles for the Downloader component

const Downloader = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation 🔄

  // State management 🛠️
  const [videoUrl, setVideoUrl] = useState(''); // To store the YouTube video URL entered by the user
  const [loading, setLoading] = useState(false); // To manage the loading spinner visibility
  const [downloadLink, setDownloadLink] = useState(null); // To store the generated download link
  const [error, setError] = useState(''); // To store any error messages

  // Extract YouTube video ID from URL
  const getVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  // Handle video download logic 🎥⬇️
  const handleDownload = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Show loading spinner
    setError(''); // Clear any existing errors
    setDownloadLink(null); // Reset download link

    // Extract video ID from URL
    const videoId = getVideoId(videoUrl);
    if (!videoId) {
      setLoading(false);
      setError('Invalid YouTube URL. Please enter a valid link.');
      return;
    }

    // API endpoint and options
    const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${videoId}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'f2e84ce640mshee213fbcd3f5703p13d1b2jsn106a8cc627be', // API Key for authentication 🔑
        'x-rapidapi-host': 'youtube-mp36.p.rapidapi.com', // API Host
      },
    };

    try {
      // Make API request and process response 🌐
      const response = await fetch(url, options);
      const result = await response.json();
      setLoading(false); // Hide loading spinner

      // Check if API call was successful ✅
      if (result && result.status === 'ok') {
        setDownloadLink(result.link); // Set the download link provided by the API
      } else {
        setError('Failed to generate download link. Please try again later.');
      }
    } catch (error) {
      // Handle errors during API call ❌
      setLoading(false); // Hide loading spinner
      setError('An error occurred. Please try again later.'); // Set error message
      console.error(error); // Log error for debugging
    }
  };

  // Navigate to Home page 🏠
  const handleGoBack = () => {
    navigate('/'); // Navigate back to Home
  };

  // Render the Downloader UI 🎨
  return (
    <section className="downloader">
      {/* Form for video URL submission */}
      <form onSubmit={handleDownload}>
        <h2>Convert Youtube videos into MP3 for free!</h2>

        {/* Input field for YouTube URL */}
        <div className="input-box">
          <label>Enter YouTube Video URL</label>
          <input
            type="text"
            className="field"
            placeholder="Paste YouTube Video URL"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)} // Update state on input change
            required
          />
        </div>

        {/* Button container for horizontal alignment */}
        <div className="button-container">
          {/* Submit button */}
          <button type="submit">Convert</button>

          {/* Go back button */}
          <button type="button" onClick={handleGoBack}>
            &#8592; Home
          </button>
        </div>
      </form>

      {/* Show loading spinner when processing request */}
      {loading && (
        <div className="spinner-container">
          <Spinner />
        </div>
      )}

      {/* Display download link when available */}
      {downloadLink && (
        <div className="download-link">
          <a href={downloadLink} download>
            Click here to download the MP3🎶
          </a>
        </div>
      )}

      {/* Display error message when there is an error */}
      {error && <div className="error-message">{error}</div>}
    </section>
  );
};

export default Downloader;
