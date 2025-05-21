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
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [response, setResponse] = useState('');

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
    if (!formData.name.trim()) newErrors.name = "* Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "* Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "* Phone number must be 10 digits";
    }
    //     if (!formData.phone.trim()) {
    //   newErrors.phone = "* Phone number is required";
    // } else if (!/^\d{10}$/.test(formData.phone)) {
    //   newErrors.phone = "* Phone number must be exactly 10 digits and contain only numbers";
    // }
    if (!formData.email.trim()) {
      newErrors.email = "* Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "* Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "* Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true); // change button text
      // You can send data to the backend here instead

      try {
        const res = await axios.post("/api/contact", formData);

        if (res.data.success) {
          toast.success(res.data.message); // ✅ Toastr-style success
          setFormData({ name: "", phone: "", email: "", message: "" });
          setErrors({});
        } else {
          toast.error(res.data.message || "Submission failed."); // ❌ Toastr-style error
        }
      } catch (error) {
        toast.error("Failed to submit form.");
        console.error(error.response?.data || error.message);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section className="contactcontain fade-in-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="hero-content-left animated-content position-relative z-index text-white">
            <h4 className="page-tital">Contact Us</h4>
            <p className="contain-colur">
              “We’re here to help you stay organized”
            </p>
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
                <label className="cardlabal mb-1">
                  Name: <sup>*</sup>
                </label>
                {errors.name && <p className="error-text">{errors.name}</p>}
              </div>

              {/* <div className="form-item">
                <input
                  type="text"
                  className="mt-2"
                  placeholder="Enter Your Contact Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <label className="cardlabal mb-1">Contct Number: <sup>*</sup></label>
                {errors.phone && <p className="error-text">{errors.phone}</p>}
              </div> */}

              <div className="form-item">
                <input
                  type="text"
                  className="mt-2"
                  placeholder="Enter Your Contact Number"
                  name="phone"
                  value={formData.phone}
                  inputMode="numeric" // mobile-friendly number keyboard
                  pattern="\d*"
                  maxLength={10} // Restrict input to 10 characters
                  onChange={(e) => {
                    const value = e.target.value;
                    // Allow only digits
                    if (/^\d*$/.test(value)) {
                      handleChange(e); // only call if valid
                    }
                  }}
                />
                <label className="cardlabal mb-1">
                  Contact Number: <sup>*</sup>
                </label>
                {errors.phone && <p className="error-text">{errors.phone}</p>}
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
                <label className="cardlabal mb-1">
                  Email: <sup>*</sup>
                </label>
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
                <label className="cardlabal mb-1">
                  Message: <sup>*</sup>
                </label>
                {errors.message && (
                  <p className="error-text">{errors.message}</p>
                )}
              </div>

              <button
                className="submit-btn"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </section>
  );
};

export default Contact;
