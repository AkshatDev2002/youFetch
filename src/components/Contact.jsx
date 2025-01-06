import React, { useState } from 'react';
import '../styles/Contact.css';
import { useNavigate } from 'react-router-dom'; // Import the hook

const Contact = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle form submission 🚀
  const onSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior ❌

    const formData = new FormData(event.target); // Collect form data ✍️
    formData.append("access_key", "21f2f38e-b0ff-4195-a016-da0a48247c55"); // Add access key for API authentication 🔑

    // Convert FormData to JSON object 🌐
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // Submit form data to Web3Forms API 📬
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json()); // Convert response to JSON 📜

    // Handle success and error responses 👍👎
    if (res.success) {
      setToastVisible(true); // Show toast on success ✅
      setTimeout(() => setToastVisible(false), 5000); // Hide toast after 5 seconds ⏱️
      console.log("Success", res); // Log success message 🎉
    } else {
      setToastVisible(true); // Show toast on error ⚠️
      setTimeout(() => setToastVisible(false), 5000); // Hide toast after 5 seconds ⏱️
      console.log("Error", res); // Log error message 🛑
    }
  };

  // Go back to the home page function
  const goBack = () => {
    navigate('/'); // Navigate back to home page
  };

  // Render the Contact form and toast notification UI 🖼️
  return (
    <section className='contact'>
      <form onSubmit={onSubmit}>
        {/* Form heading 📧 */}
        <h2>Contact Me!</h2>

        {/* Input for Full Name 📝 */}
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className="feild" placeholder='Please Enter Your Name' name='name' required />
        </div>

        {/* Input for Email Address 📧 */}
        <div className='input-box'>
          <label>Email Address</label>
          <input type="text" className="feild" placeholder='Please Enter Your Email Address' name='email' required />
        </div>

        {/* Input for Message ✍️ */}
        <div className='input-box'>
          <label>Your Message</label>
          <textarea name="message" placeholder='Type Your Message' required></textarea>
        </div>

        {/* Buttons Section (Go Back and Send Message) */}
        <div className="button-container">
          {/* Go Back Button */}
          <button type="button" className="go-back-button" onClick={goBack}>
          &#8592; <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
          <i class="fas fa-home"></i>
          </button>
          
          {/* Submit Button 🚀 */}
          <button type="submit">Send Message</button>
        </div>
      </form>

      {/* Toast Notification 🛎️ */}
      {toastVisible && (
        <div className="toast">
          Message sent successfully!
        </div>
      )}
    </section>
  );
}

export default Contact;
