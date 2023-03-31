import tvImg from "../assets/tv.png";

const Enjoy = () => {
  return (
    <section className="section about">
      <div className="about-text">
        <h2>Enjoy on your TV.</h2>
        <p>
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </p>
      </div>
      <div className="img-box">
        <video
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
          autoPlay
          muted
          loop
          playsInline
          className="tv"
        ></video>
        <img src={tvImg} alt="kids" />
      </div>
    </section>
  );
};

export default Enjoy;
