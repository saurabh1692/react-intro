import React, {useState} from 'react'




export default function TextForm(props) {

    const handldeUpClick = ()=>{
        console.log(" Clicked On")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }

    const handldeLowClick=()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase","success")
    }

    const handldeClearClick=()=>{
        let newtext = ''
        setText(newtext);
    }

    const handldeCopy =() =>{
        let text = document.getElementById("mytext");
        text.select();
        navigator.clipboard.writeText(text.value);

    }

   const handldeRemoveSpaces = () =>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
   }
    
    const handleOnChange = (event) => {
        console.log("On change")
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    /* setText('new text'); */
  return (
    <div> 
        <div className='container' style={{color:props.mode === 'dark'?'white':'#588abf'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" style={{backgroudColor : props.mode === 'dark'?'grey':'white', 
                  color:props.mode === 'dark'?'white':'#588abf' }}>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mytext" rows="3"></textarea>
            </div>
            <buttom className="btn btn-primary" onClick={handldeUpClick}>Convert to Uppercase</buttom>
            <buttom className="btn btn-primary" onClick={handldeLowClick}>Convert to Lowercase</buttom>
            <buttom className="btn btn-primary" onClick={handldeClearClick}>Clear Text</buttom>
            <buttom className="btn btn-primary" onClick={handldeCopy}>Copy Text</buttom>
            <buttom className="btn btn-primary" onClick={handldeRemoveSpaces}>Remove Extra Spaces</buttom>
            
        </div>
        <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#588abf'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and  {text.length} letters</p>
            <p>{0.008* text.split(" ").length} minutes reabs</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter somethings above textbox to preview it here'}</p>
        </div>
    </div>
  )
}


