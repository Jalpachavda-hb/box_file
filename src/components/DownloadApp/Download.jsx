// Download
import React from "react";
import "./download.css";
import downloadbg from "../../assets/Images/downloadbg.png";
import downloadimg from "../../assets/Images/downloadimg.png";
import GooglePlay from "../../assets/Images/Google play 1.png";
import AppStore from "../../assets/Images/iOS app Store 1.png";
const Download = () => {
  return (
    <section
      id="about"
      className="hero-equal-height"

    >
      <div className="container ">
        <div className="hero-content-left mb-5 animated-content position-relative z-index text-white">
          <h4 className="page-tital">Download Our App</h4>
          <p className="contain-colur">
            "Download the App That Makes Life Easier!"
          </p>
        </div>
        <div className="row  ">
          <div className="col-lg-5 col-md-12 col-12 img-fluid animated-down">
            <img src={downloadimg} alt="about-figma" className="download " />
          </div>

          <div className="col-lg-7 col-md-12 col-12"
            style={{
              background: `url(${downloadbg}) no-repeat top center / cover`,
            }}>
            <div className="animated-down paraabout ">
              {/* <p className="mt-4 contain-colur ">
                Digital organization with a touch of tradition.{" "}
              </p> */}

              <p className="contain-download">
              <p className="">
                In a world full of digital clutter, Smart Box File brings back
                the charm of traditional file organization — right on your
                phone. Inspired by classic box files, it offers a fresh,
                visually satisfying way to manage everything from work documents
                to personal records, making file storage feel simple, stylish,
                and enjoyable
              </p>
              <p>
                Customize your digital boxes with a variety of classic themes
                like cardboard, leather, and wood, giving each one a unique look
                and feel. No more boring blue folders — now your storage
                reflects your personality and style. The interface is clean,
                intuitive, and designed with attention to detail, so you can
                focus on what matters most: staying organized in a way that
                feels natural, warm, and satisfying.
              </p>
              <p>
                Ready to transform the way you manage files? Download the Smart
                Box File app today on Google Play or the App Store, and carry
                the power of beautifully organized storage wherever you go. Your
                digital world deserves structure — and a little bit of style
              </p>
            </div>

            <div className="download-app-icon mt-4 d-flex gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.fairytale.smartboxfile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={GooglePlay}
                  alt="Download on Google Play"
                  width="140px"
                />
              </a>

              <a
                href="https://apps.apple.com/app/id1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={AppStore}
                  alt="Download on the App Store"
                  width="140px"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
