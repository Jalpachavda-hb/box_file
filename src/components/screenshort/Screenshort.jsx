// import React, { useState, useRef } from "react";
// import "./ss.css";
// import ss1 from "../../assets/Images/ss/01.png";
// import ss2 from "../../assets/Images/ss/02.png";
// import ss3 from "../../assets/Images/ss/03.png";
// import ss4 from "../../assets/Images/ss/04.png";
// import ss5 from "../../assets/Images/ss/05.png";
// import ss6 from "../../assets/Images/ss/06.png";
// import ss7 from "../../assets/Images/ss/07.png";

// const images = [ss1, ss2, ss3, ss4, ss5, ss6, ss7];

// const ScreenshotsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const touchStartX = useRef(0);

//   const nextImage = () => {
//     if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
//   };

//   const prevImage = () => {
//     if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
//   };

//   const onTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const onTouchEnd = (e) => {
//     const deltaX = touchStartX.current - e.changedTouches[0].clientX;
//     if (deltaX > 50) nextImage();
//     else if (deltaX < -50) prevImage();
//   };

//   return (
//     <section id="screenshorts">
//       <div className="container ">
//         <div className="row align-items-center  ">
//           <div className="hero-content-left  animated-content position-relative z-index text-white">
//             <h4 className="page-tital mt-1 ">Screenshots</h4>
//             <p className="contain-colur">
//               “A quick look at Smart Box File in action”
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="carousel-container">
//         {images.map((img, index) => {
//           let className = "image-card";
//           if (index === currentIndex) className += " main";
//           else if (index === currentIndex + 1) className += " next";
//           else if (index === currentIndex + 2) className += " next2";
//           else if (index === currentIndex - 1) className += " prev";
//           else if (index === currentIndex - 2) className += " prev2";
//           else className += " hidden";

//           return (
//             <div
//               key={index}
//               className={className}
//               onTouchStart={onTouchStart}
//               onTouchEnd={onTouchEnd}
//             >
//               {index === currentIndex ? (
//                 <div className="phone-frame-wrapper">
//                   <img src={img} alt={`Screenshot  ${index + 1}`} />
//                 </div>
//               ) : (
//                 <img src={img} alt={`Screenshot ${index + 1}`} />
//               )}
//             </div>
//           );
//         })}

//         <button className="nav-button prev-button" onClick={prevImage}>
//           &#8592;
//         </button>
//         <button className="nav-button next-button" onClick={nextImage}>
//           &#8594;
//         </button>
//       </div>
//     </section>
//   );
// };

// export default ScreenshotsSection;
// import React, { useState, useRef } from "react";
// import "./ss.css";
// import ss1 from "../../assets/Images/ss/01.png";
// import ss2 from "../../assets/Images/ss/02.png";
// import ss3 from "../../assets/Images/ss/03.png";
// import ss4 from "../../assets/Images/ss/04.png";
// import ss5 from "../../assets/Images/ss/05.png";
// import ss6 from "../../assets/Images/ss/06.png";
// import ss7 from "../../assets/Images/ss/07.png";

// const images = [ss1, ss2, ss3, ss4, ss5, ss6, ss7];

// const ScreenshotsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const touchStartX = useRef(0);

//   const nextImage = () => {
//     if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
//   };

//   const prevImage = () => {
//     if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
//   };

//   const onTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const onTouchEnd = (e) => {
//     const deltaX = touchStartX.current - e.changedTouches[0].clientX;
//     if (deltaX > 50) nextImage();
//     else if (deltaX < -50) prevImage();
//   };

//   return (
//     <section id="screenshorts">
//   <div className="container">
//     <div className="row align-items-center">
//       <div className="hero-content-left animated-content position-relative z-index text-white">
//         <h4 className="page-tital mt-1">Screenshots</h4>
//         <p className="contain-colur">“A quick look at Smart Box File in action”</p>
//       </div>
//     </div>
//   </div>

//   <div className="carousel-container">
//     {/* Background moving cards */}
//     {images.map((img, index) => {
//       let className = "image-card";
//       if (index === currentIndex + 1) className += " next";
//       else if (index === currentIndex + 2) className += " next2";
//       else if (index === currentIndex - 1) className += " prev";
//       else if (index === currentIndex - 2) className += " prev2";
//       else className += " hidden";

//       return (
//         <div key={index} className={className}>
//           <img src={img} alt={`Screenshot ${index + 1}`} />
//         </div>
//       );
//     })}

//     {/* Fixed phone frame with current image */}
//     <div className="phone-frame-wrapper" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
//       <img src={images[currentIndex]} alt={`Screenshot ${currentIndex + 1}`} />
//     </div>

//     {/* Navigation buttons */}
//     <button className="nav-button prev-button" onClick={prevImage}>
//       &#8592;
//     </button>
//     <button className="nav-button next-button" onClick={nextImage}>
//       &#8594;
//     </button>
//   </div>
// </section>

//   );
// };

// export default ScreenshotsSection;
import React, { useState, useRef, useEffect } from "react";
import "./ss.css";
import ss1 from "../../assets/Images/ss/01.png";
import ss2 from "../../assets/Images/ss/02.png";
import ss3 from "../../assets/Images/ss/03.png";
import ss4 from "../../assets/Images/ss/04.png";
import ss5 from "../../assets/Images/ss/05.png";
import ss6 from "../../assets/Images/ss/06.png";
import ss7 from "../../assets/Images/ss/07.png";

const images = [ss1, ss2, ss3, ss4, ss5, ss6, ss7];

const ScreenshotsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const deltaX = touchStartX.current - e.changedTouches[0].clientX;
    if (deltaX > 50) nextImage();
    else if (deltaX < -50) prevImage();
  };

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, 3000); // change 3000 to any interval in ms

  return () => clearInterval(interval); // cleanup on unmount
}, []);

  return (
    <section id="visual-guide">
      <div className="container ">
        <div className="row align-items-center">
          <div className="hero-content-left animated-content position-relative z-index text-white">
            <h4 className="page-tital mt-1">Visual Guide</h4>
            <p className="contain-colur">“A quick look at Smart Box File in action”</p>
          </div>
        </div>
      </div>

      <div className="carousel-container">
        {images.map((_, index) => {
          const total = images.length;

          let offset = index - currentIndex;
          if (offset < -Math.floor(total / 2)) offset += total;
          if (offset > Math.floor(total / 2)) offset -= total;

          let className = "image-card";

          // Hide the main image from background carousel
          if (offset === 0) {
            className += " hidden";
          } else if (offset === 1) className += " next";
          else if (offset === 2) className += " next2";
          else if (offset === -1) className += " prev";
          else if (offset === -2) className += " prev2";
          else className += " hidden";

          return (
            <div key={index} className={className}>
              <img src={images[index]} alt={`Screenshot ${index + 1}`} />
            </div>
          );
        })}

        {/* Fixed phone frame with current image */}
        <div className="phone-frame-wrapper" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <img src={images[currentIndex]} alt={`Screenshot ${currentIndex + 1}`} />
        </div>

        {/* Navigation buttons */}
        <button className="nav-button prev-button" onClick={prevImage}>
          &#8592;
        </button>
        <button className="nav-button next-button" onClick={nextImage}>
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
