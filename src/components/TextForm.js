import React, {useState} from 'react'


export default function TextForm(props) {
const handleUpClick=()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase","success")
}
const handleLowClick=()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","success")
}
const reverseText = ()=>{
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Reversed","success")
  } 
  const clearText = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert("Cleared","success")
  }
const handleOnChange =(event)=>{
    setText(event.target.value);
}

    const [text, setText]= useState('');

  return (
    <>
            <div className="container" style={{color: props.mode==='dark'? 'white' : '#042743'}}>
                <h1 >{props.heading}  </h1>
            <div className="mb-3">
    
            <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey' : 'white', color: props.mode==='dark'? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-2' onClick={reverseText}>Reverse Text</button>
        <button className='btn btn-primary mx-2' onClick={clearText}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='dark'? 'white' : '#042743'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length>1 ? text.split(" ").length - 1: 0 } words and {text.length} charecters </p>
                <p>{0.08 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something to preview it here"}</p>
           </div>
            </>
  )
}
