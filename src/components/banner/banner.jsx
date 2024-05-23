import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
// Import header image from assets
import headerImg from  "./../../assets/images/HeaderImg.jpg"

function Banner() {
  // Initial setup
  const [loopNum, setLoopNum] = useState(0); // Keeps track of the current loop number
  const [isDeleting, setIsDeleting] = useState(false); // Determines if the current operation is deleting text
  const toRotate = ["Web Developer", "Lawyer", "Photographer"]; // Array of strings to be displayed one by one
  const [text, setText] = useState(" "); // The current text being displayed
  const [delta, setDelta] = useState(300 - Math.random() * 100); // The interval time for the typing effect
  const period = 2000; // The period to wait before starting to delete the text

  // useEffect hook to handle the typing effect
  useEffect(() => {
    //Set up an interval to call the tick function based on the delta time
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // Clean up the inteval when the text changes to avoid memory leaks
    return () => {
      clearInterval(ticker);
    };
  }, [text]); // Depend on the text state, so it runs when the text changes

  // The tick function updates the text state to create a typing effect
  const tick = () => {
    let i = loopNum % toRotate.length; // Get the current string index
    let fullText = toRotate[i]; // Get the full text of the current string
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1) // If deliting, remove one character
      : fullText.substring(0, text.length + 1); // If typing, add one character

    setText(updatedText); // Update the text state

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2); // Speed up the deleting effect
    }

    // Check if the text is fully typed out
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true); // Start deleting
      setDelta(period); // Set a delay before starting to delete
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false); // Start typing the next string
      setLoopNum(loopNum + 1); // Increment the loop number
      setDelta(500); // Reset the typing speed
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi, I'm Francisco `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect<ArrowRightCircle size={25}></ArrowRightCircle>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
