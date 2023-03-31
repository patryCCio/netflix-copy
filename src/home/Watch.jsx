const Watch = () => {
  return (
    <section className="section about">
      <div className="about-text">
        <h2>Watch everywhere.</h2>
        <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV without paying more.
        </p>
      </div>
      <div className="img-box">
        <img
          src="https://res.cloudinary.com/dgubzvsvn/image/upload/v1680295922/cv/netflix/device-pile-81cf6488_lgtbal.png"
          alt="kids"
        />
        <video
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
          autoPlay
          muted
          loop
          playsInline
          className="devices"
        ></video>
      </div>
    </section>
  );
};

export default Watch;
