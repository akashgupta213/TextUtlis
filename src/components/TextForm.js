import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase button is clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Upper Case Button Is Clicked" , "success") 
  };
  const handleLowClick = () => {
    console.log("uppercase button is clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lower Case Button Is Clicked" , "success") 
  };
  const handleClearClick = () => {
    console.log("uppercase button is clicked" + text);
    let newText = ''
    setText(newText);
     props.showAlert("Clear Button Is Clicked" , "success") 
  };
  const handleRemoveClick = () =>{
    console.log("remove extra space button is clicked")
      let newText = text.replace(/\s+/g, ""); 
    setText(newText);
     props.showAlert("Remove Space Button Is Clicked" , "success") 
  }

  const handleOnChange = (event) => {
    console.log("this is handleOnChange function");
    setText(event.target.value);
    //agr isko nhi likhe tho hoga yeh ki humlog textarea meh kuch nhi likh payengey
  };
  const [text, setText] = useState("");
  // text = "njrvnw" this is the worng way to set the text
  //setText("new text") correct way to set the new text

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <textarea
          value={text}
          className="form-control my-3"
          onChange={handleOnChange}
          id="myBox"
          rows="25"
          >
          {/* {text} this is the way to set the  default value of the state.
           */}
        </textarea>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveClick}>
          Remove Extra Space
        </button>
      </div>
    <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length-1} words and {text.length} characters</p>

            <p>{0.08 * text.split(" ").length} Minutes to read </p> 
            <h2>Preview</h2>
            <p>{text}</p>
    </div>
    </>
  );
}
