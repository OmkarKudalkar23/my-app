import React, { useState } from 'react'

export default function TextForm(prop) {

    const[text,setText]=useState("");
    
    const handleUpCase = ()=>{
        console.log("Upper case was clicked"+text);
        let newtext = text.toUpperCase();
        setText(newtext);
        console.log(text);
        prop.handleAlert("You clicked upper case button","success");
        
    }
    const handleLowCase=()=>{
        console.log("Kower case was clicked");
        let newtext= text.toLowerCase();
        setText(newtext);
        prop.handleAlert("You clicked lower case button","success");

    }
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);

    }
    const handleClear=()=>{
      let newstr="";
      setText(newstr);
      prop.handleAlert("You clicked Clear button","success");


    }
const handleOmu =()=>{
   setText('Omu deeply loves his punupie ');
   prop.handleAlert("You touched Omus heart","success");

}
const handleCopyToClipboard = () => {
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied to clipboard!");
  }).catch((err) => {
    console.error("Failed to copy text: ", err);
  });
};
    
  return (
   
    <div>
    <div className="container" style={{
        color: prop.mode === 'light' ? '#042743' : 'white',
       
      }}>
       <h1> {prop.heading }</h1>
      <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Enter Text</label>
    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"   style={{
            backgroundColor: prop.mode === 'light' ? 'white' : 'grey',
            color: prop.mode === 'light' ? '#042743' : 'white',
          }}></textarea>
    <button type="button" className="btn btn-primary my-3" onClick={handleUpCase}>Conver to Upper case </button>
    <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleLowCase}>Conver to Lower case </button>
    <button type="button" className="btn btn-primary" onClick={handleClear}>Clear text</button>
    <button type="button" className="btn btn-primary mx-3" onClick={handleOmu}>Omus Secret</button>
    <button type="button" className="btn btn-primary mx-3" onClick={handleCopyToClipboard}>Copy to Clipboard</button>


    
    <p> The number of words are {text.split(' ').length} and number of characters are {text.length}</p>
    <h1> Preview</h1>
    <h>{text}</h>
    </div>  

    
  </div>
 

    </div>
  )
}
