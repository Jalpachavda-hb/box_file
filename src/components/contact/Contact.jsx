// import "./contact.css";
// // import axios from "axios";
// import React, { useState } from "react";
// import bgimgcon from "../../assets/Images/contect-bg.jpg";
// import Swal from "sweetalert2";
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   return (
//     <section className="contactcontain fade-in-section  ">
//       <div className="container ">
//         <div className="row align-items-center  ">
//           <div className="hero-content-left  animated-content position-relative z-index text-white">
//             <h4 className="page-tital  ">Contact Us</h4>
//             <p className="contain-colur">
//               “We’re here to help you stay organized”
//             </p>
//           </div>
//         </div>
//       </div>
//       <section id="contact">
//         <div className="contact-box">
//           <div className="contact-links_1">
//             <img src={bgimgcon} alt="background img" className="contact-img" />
//           </div>
//           <div className="contact-form-wrapper">
//             <form>
//               <div className="form-item">
//                 <input
//                   type="text"
//                   className="mt-2"
//                   placeholder="Enter Your Name"
//                   name="name"
//                   required=""
//                 />
//                 <label className="cardlabal mb-3">Name:</label>
//               </div>

//               <div className="form-item">
//                 <input
//                   type="text"
//                   className="mt-2"
//                   placeholder="Enter Your Email"
//                   name="email"
//                   required=""
//                 />
//                 <label className="cardlabal mb-3">Email:</label>
//               </div>

//               <div className="form-item">
//                 <textarea
//                   className="mt-2"
//                   placeholder="Type your message here.."
//                   name="message"
//                   required=""
//                   defaultValue={""}
//                 />
//                 <label className="cardlabal mb-2">Message:</label>
//               </div>
//               <button className="submit-btn" type="submit">
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// };

// export default Contact;
import "./contact.css";
// import axios from "axios";
import React, { useState } from "react";
import bgimgcon from "../../assets/Images/contect-bg.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // You can send data to the backend here instead

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
           
    }
  };

  return (
    <section className="contactcontain fade-in-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="hero-content-left animated-content position-relative z-index text-white">
            <h4 className="page-tital">Contact Us</h4>
            <p className="contain-colur">“We’re here to help you stay organized”</p>
          </div>
        </div>
      </div>
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links_1">
            <img src={bgimgcon} alt="background img" className="contact-img" />
          </div>
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="form-item">
                <input
                  type="text"
                  className="mt-2"
                  placeholder="Enter Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label className="cardlabal mb-1">Name:</label>
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>

              <div className="form-item">
                <input
                  type="text"
                  className="mt-2"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label className="cardlabal mb-1">Email:</label>
                {errors.email && <p className="error-text">{errors.email}</p>}
              </div>

              <div className="form-item">
                <textarea
                  className="mt-2"
                  placeholder="Type your message here.."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                <label className="cardlabal mb-1">Message:</label>
                {errors.message && <p className="error-text">{errors.message}</p>}
              </div>

              <button className="submit-btn" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
