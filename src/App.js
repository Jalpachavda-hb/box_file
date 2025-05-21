import "./App.css";
import Home from "./components/home/Home";
import About from "./components/About/About";
import Feature from "./components/Feature/Feature";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Fotter";
import Navbar from "./components/Navbar/Navbar";
import ScreenshotsSection from "./components/screenshort/Screenshort";
import Download from "./components/DownloadApp/Download";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <section id="home"><Home /></section>
              <section id="about"><About /></section>
              <section id="features"><Feature /></section>
              <section id="VisualGuide"><ScreenshotsSection /></section>
              <section id="download"><Download/></section>
              <section id="contact"><Contact /></section>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
