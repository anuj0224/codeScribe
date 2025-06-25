import React from "react";
import LandingPage from "../HomepageScreen/LandingPage";
import CodingPage from "../HomepageScreen/CodingPage";
import ImageCod from "../../assets/JavaScript frameworks-rafiki.svg";
import HtmlCod from "../../assets/Website Creator-amico.svg";
import Pycod from "../../assets/Man reading-pana.svg";
import SpeechCod from "../../assets/Speech to text-bro.svg";
import ImagCod from "../../assets/Writing on the wall-rafiki.svg";
import Feedback from "../HomepageScreen/Feedback";
import Footer from "../HomepageScreen/Footer";
import binaryCod from "../../assets/Coding-bro.svg";

function Homepage() {
  const width2 = window.outerWidth;

  return (
    <>
      <div className="smallScreen">
        <mark>
          The Screen is Visible with width more than 250px <br />
          <br />
          <hr />
          <br />
          Screen Size: {width2}px
        </mark>
      </div>
      <div className="container">
        {/* <Header/>  */}
        <LandingPage />
        <CodingPage
          title="JavaScript Compiler"
          con="Run JavaScript"
          info={
            <>
              All The <mark>Logic</mark> That you need to Learn and Practice{" "}
              <mark> JavaScript </mark> will be Accomplished by this{" "}
              <mark> Js Text Editor </mark> .
            </>
          }
          path="/editor/javaScript"
          image={ImageCod}
        // poss={{'flexDirection':'row'}}
        />
        <CodingPage
          title="Python Compiler"
          con="Run Python"
          path="/editor/python"
          info={
            <>
              Leash out All your <mark> Logic and Understanding</mark> with the
              Easiest Programming Language <mark>Python</mark> in this Super
              Easy Web IDE
            </>
          }
          image={Pycod}
          // poss={{'flexDirection':'row-reverse'}}
          uniId={"uni"}
        />
        <CodingPage
          title="Real-Time Website Editor"
          path="/editor/html"
          con="Try Web Editor"
          info={
            <>
              Bored Writing HTML codes in Editor then again and again refreshing
              Browser for Output?
              <br />
              <mark>Try</mark> our <mark>Real Time Browser</mark> that
              Automatically updates the Page as per your Code/Program.
            </>
          }
          image={HtmlCod}
          // poss={{'flexDirection':'row-reverse'}}
          uniId={"uni"}
        />
        <CodingPage
          title="Binary Converter"
          path="/editor/binary"
          con="Try Binary Tool"
          info={
            <>
              Confused by conversions between <mark>Binary</mark>, <mark>Decimal</mark>, and <mark>Text</mark>?
              <br />
              Use our all-in-one <mark>Binary Converter</mark> to switch between numbers and text in seconds.
              <br />
              Whether it's <mark>Binary to Text</mark> or <mark>Decimal to Binary</mark> — we’ve got you covered!
            </>
          }
          image={binaryCod}
          uniId={"uni"}
        />

        <CodingPage
          title="Image To Code"
          path="/editor/image2text"
          image={ImagCod}
          con="Get Started"
          info={
            <>
              Turn Your <mark>Image into Reality</mark> with this amazing
              Feature of <mark>Image to Code</mark> Tool.
            </>
          }
        // poss={{'flexDirection':'row'}}
        />
        <CodingPage
          title="Voice To Text"
          path="/editor/voice2text"
          image={SpeechCod}
          info={
            <>
              <mark>"Words Speak more than Actions"</mark> let this quote get
              Install into your life by our latest tool{" "}
              <mark>Voice to Text</mark> feature .
            </>
          }
          con="Get Started"
          // poss={{'flexDirection':'row-reverse'}}
          uniId={"uni"}
        />
        <Feedback />
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
