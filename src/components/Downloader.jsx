import React, { useState } from 'react';
import axios from 'axios'; // Axios for making API requests
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

  // Handle video download logic 🎥⬇️
  const handleDownload = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setLoading(true); // Show loading spinner
    setError(''); // Clear any existing errors
    setDownloadLink(null); // Reset download link

    // Prepare request parameters 🔧
    const encodedParams = new URLSearchParams();
    encodedParams.append('url', videoUrl); // Add YouTube URL to the request payload

    // Axios request options 🌐
    const options = {
      method: 'POST',
      url: 'https://youtube-media-downloader.p.rapidapi.com/v2/misc/list-items',
      headers: {
        'x-rapidapi-key': '72177855a5msh5b849bc007b496dp1585b1jsn266ced173bac', // API Key for authentication 🔑
        'x-rapidapi-host': 'youtube-media-downloader.p.rapidapi.com', // API Host
        'Content-Type': 'application/x-www-form-urlencoded' // Content-Type header
      },
      data: encodedParams, // Payload for the request
    };

    try {
      // Make API request and process response 🌐
      const response = await axios.request(options);
      setLoading(false); // Hide loading spinner

      // Check if API call was successful ✅
      if (response.data && response.data.status === 'success') {
        setDownloadLink(response.data.data.url); // Set the download link provided by the API
      } else {
        setError('Invalid link or link is broken.'); // Set error message for invalid links
      }
    } catch (error) {
      // Handle errors during API call ❌
      setLoading(false); // Hide loading spinner
      setError('Invalid link or link is broken.'); // Set error message
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
        <h2>Free Download YouTube Video</h2>

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
          <button type="submit">Download</button>

          {/* Go back button */}
          <button type="button" onClick={handleGoBack}>
            &#8592; <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
            <i class="fas fa-home"></i>
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
            Click here to download the video
          </a>
        </div>
      )}

      {/* Display error message when there is an error */}
      {error && <div className="error-message">{error}</div>}
    </section>
  );
};

export default Downloader;
