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
            <img
              src="https://res.cloudinary.com/dgubzvsvn/image/upload/v1680295921/cv/netflix/boxshot-e1fa26cc_uisnir.png"
              alt="imgstranger"
            />
          </div>
          <div className="inner-bar" id="film-title">
            <h4>Stranger Things</h4>
            <h4 id="downloading">Downloading...</h4>
          </div>
          <div className="inner-bar" id="animation"></div>
        </div>
        <div className="img-box">
          <img
            src="https://res.cloudinary.com/dgubzvsvn/image/upload/v1680295922/cv/netflix/mobile-0819-492fdebd_jd1dux.jpg"
            alt="device"
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
