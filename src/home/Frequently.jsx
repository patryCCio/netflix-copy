import {React, useRef, useState } from "react";

const Frequently = () => {
  const fakeData = [
    {
      id: 0,
      question: "What is Netflix?",
      answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
      <br></br>
      You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
    },
    {
      id: 1,
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 29 zł to 60 zł a month. No extra costs, no contracts.",
    },
    {
      id: 2,
      question: "Where can I watch?",
      answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
      <br></br>
      You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    },
    {
      id: 3,
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      id: 4,
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      id: 5,
      question: "Is Netflix good for kids?",
      answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
      <br></br>
      Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    },
  ];

  const allAskBox = useRef([]);
  const allAskContent = useRef([]);

  const [inputValue, setInputValue] = useState("");

  const input = useRef(null);
  const inputRef = useRef(null);

  const handleBlur = (event) => {
    if (inputValue === "") {
      input.current.classList.remove("active");
    }
  };

  const handleFocus = (event) => {
    input.current.classList.add("active");
    inputRef.current.focus();
  };

  const handleChangeInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const handleClickAskBox = (index) => {
    allAskBox.current.forEach((el, indexInner) => {
      if (indexInner === index) {
        if (el.classList.contains("active")) {
          el.classList.remove("active");
          allAskContent.current[indexInner].style.maxHeight = "0px";
          allAskContent.current[indexInner].style.padding = "0rem 1.4rem";
        } else {
          el.classList.add("active");
          allAskContent.current[indexInner].style.maxHeight = "1000px";
          allAskContent.current[indexInner].style.padding = "1.313rem 1.4rem";
          allAskContent.current[indexInner].classList.add("active");
        }
      } else {
        el.classList.remove("active");
        allAskContent.current[indexInner].style.maxHeight = "0px";
        allAskContent.current[indexInner].style.padding = "0rem 1.4rem";
      }
    });
  };

  return (
    <section className="section info frequently">
      <div className="about-text">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="ask-box-wrapper">
        {fakeData.map((el, index) => {
          return (
            <>
              <div
                className="ask-box"
                ref={(el2) => (allAskBox.current[index] = el2)}
                key={el.id}
                id={el.id}
                onClick={() => handleClickAskBox(index)}
              >
                <div className="ask-box-text">{el.question}</div>
                <div className="ask-box-add">+</div>
              </div>
              <div
                className="ask-content"
                ref={(el2) => (allAskContent.current[index] = el2)}
                dangerouslySetInnerHTML={{ __html: el.answer }}
                id={el.id + fakeData.length}
                key={el.id + fakeData.length}
              ></div>
            </>
          );
        })}
      </div>
      <div className="about-text">
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="input-box">
        <div className="input-wrapper">
          <p className="email" ref={input} onClick={handleFocus}>
            Email address
          </p>
          <input
            type="email"
            name="inputValue"
            ref={inputRef}
            value={inputValue}
            onChange={handleChangeInputValue}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />
        </div>
        <button>Get started &gt;</button>
      </div>
    </section>
  );
};

export default Frequently;
