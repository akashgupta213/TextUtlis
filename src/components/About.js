import React, { useState } from "react";

export default function About() {
  // const mystyle = {
  //     color : 'white' ,
  //     backgroundColor : 'black'
  // }

  const [mystyle, setmystyle] = useState({
    color : 'black' , 
    backgroundColor : 'white'
  });
  
  const [btntext, setBtnText] = useState("Enable Dark Mode")

  const toggleButton = () => {
    if (mystyle.color == "black") {
      setmystyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable White Mode")
      document.body.style.background = 'black'
    }else{
        setmystyle({
            color: "black",
            backgroundColor: "white",
        });
        setBtnText("Enable Dark Mode")
        document.body.style.background = 'white'
      
    }
  };

  return (
    <>
      <div className="container my-3" style={mystyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample" style={mystyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={mystyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>This is the style item’s accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classNamees that we use to style each element. These classNamees
                control the overall appearance, as well as the showing and
                hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It’s also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={mystyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>This is the second item’s accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It’s
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                style={mystyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={mystyle}>
                <strong>This is the third item’s accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classNamees that we use to style each element. These
                classNamees control the overall appearance, as well as the
                showing and hiding via CSS transitions. You can modify any of
                this with custom CSS or overriding our default variables. It’s
                also worth noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            onClick={toggleButton}
            type="button"
            className="btn btn-primary my-3"
          >
            {btntext}
          </button>
        </div>
      </div>
    </>
  );
}