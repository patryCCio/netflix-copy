import boxShotImg from "../assets/boxshot.png";
import downloadImg from "../assets/mobile-0819.jpg";

const Download = () => {
  return (
    <section className="section about">
      <div className="about-text">
        <h2>Download your shows to watch offline.</h2>
        <p>Save your favorites easily and always have something to watch.</p>
      </div>
      <div className="download-wrapper">
        <div className="bar">
          <div className="inner-bar">
            <img src={boxShotImg} alt="imgstranger" />
          </div>
          <div className="inner-bar" id="film-title">
            <h4>Stranger Things</h4>
            <h4 id="downloading">Downloading...</h4>
          </div>
          <div className="inner-bar" id="animation"></div>
        </div>
        <div className="img-box">
          <img src={downloadImg} alt="device" />
        </div>
      </div>
    </section>
  );
};

export default Download;
