import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Downloader from "./components/Converter";
import Contact from "./components/Contact";
import "./App.css";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <div className="about-yt">
      {/* About Section - Brief introduction to the app 📖 */}
      <h2>Welcome to YouFetch!</h2>
      <p>
      Free convert and download YouTube videos into MP3 format effortlessly. This tool works seamlessly on desktop, mobile, and all devices without the need for any additional software installation. Best of all, it’s completely free and safe to use! 
      </p>
      <h3>How Does It Work?</h3>
      <ul>
        <li>
          Head over to YouTube and search for the video you’d like to convert.
          Once you’ve found it, copy the video URL from the address bar
          (e.g., youtube.com/watch?v=video-id). 🔍
        </li>
        <li>
         Paste the URL into the YouFetch converter and hit the "Convert" button. ⬇️
        </li>
        <li>
          Sit back and relax while YouFetch processes your request. In moments,
          your converted file will be ready for download. Please note that
          videos up to 60 minutes in length can be processed. ⏳
        </li>
      </ul>
      <h4>Follow me on GitHub and give me a star🌟</h4>
      {/* Call-to-Action Button to start the process 🚀 */}
      <button className="get-started-button" onClick={() => navigate("/download")}>
        Get Started
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/youFetch' : '/'}>
      <div className="home">
        <Header />
        <Routes>
          <Route path="/" element={<AboutSection />} />
          <Route path="*" element={<AboutSection />} />
          <Route path="/download" element={<Downloader />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
