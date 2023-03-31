import kidImg from "../assets/kids.png";

const Create = () => {
  return (
    <section className="section about">
      <div className="about-text">
        <h2>Create profiles for kids.</h2>
        <p>
          Send kids on adventures with their favorite characters in a space made
          just for them-free with your membership.
        </p>
      </div>
      <div className="img-box">
        <img src={kidImg} alt="kids" />
      </div>
    </section>
  );
};

export default Create;
