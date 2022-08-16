import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase! ", "success")
  }

  const handleLoClick = ()=>{
    // console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase! ", "success")
  }
  
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter Text Here');
  // setText("new text");
  return (
    <>
<div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroudColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'black':'black'}} id="myBox" rows="8"></textarea>
    <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert to lowercase</button>
</div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{(text.length)===0?"0":text.trim().split(" ").length} words and {text.length} characters</p>
      <p>{(text.length)===0?"0":0.008 * text.split(" ").length} Minutes for reading</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
