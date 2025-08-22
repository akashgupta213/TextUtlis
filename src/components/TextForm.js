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

  const handleCopyClick = ()=>{
    navigator.clipboard.writeText(text)
    props.showAlert("Copy to clipboard" , "success")
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
        <button disabled = {text.length === 0 
        } className="btn btn-primary mx-2 my1" onClick={handleUpClick}>
          Convert to uppercase
        </button>
        <button disabled = {text.length === 0 
        } className="btn btn-primary mx-2 my1" onClick={handleLowClick}>
          Convert to uppercase
        </button>
        <button  disabled = {text.length === 0 
        } className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled = {text.length === 0 
        } className="btn btn-primary mx-2 my-1" onClick={handleRemoveClick}>
          Remove Extra Space
        </button>
        <button disabled = {text.length === 0 
        } className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>
    <div className="container my-3">
            <h1>Your text summary</h1>
            <p>{ text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>

            <p>{0.08 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes to read </p> 
            <h2>Preview</h2>
            <p>{text}</p>
    </div>
    </>
  );
}
