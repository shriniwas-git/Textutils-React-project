import React, { useState } from 'react';

export default function Textform(props) {
    const [text, setText] = useState('Enter text here');
    const HandleupClick=()=>{
        console.log('Upper case clicked.'+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    const HandlelowClick=()=>{
      console.log('Lower case clicked.'+text);
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lower Case","success");
  }
  const Wordsret=(text)=>{
    let ct=0;
      for(let i=0;i<text.length-1;++i){
        
        if(text[i]==' ' && text[i+1]!=' '){
            ct++;
        }
      }
      return ct;
  }
  const HandleclcClick=()=>{
    console.log('Text cleared'+text);
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared","success");
}
  
    const handleOnChange=(event)=>{
        console.log('On change');
        setText(event.target.value)
    }
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'
    }}>
        <h1>{props.head}</h1>
    <div className="mb-3">
    
    <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='light'?'black':'white'
    }} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
    <br />
    <button className="btn btn-primary mx-1" onClick={HandleupClick}>Change to UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={HandlelowClick}>Change to LowerCase</button>
    <button className="btn btn-primary mx-1" onClick={HandleclcClick}>Clear text</button>
    </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h1>Your Summary</h1>
      <p>{Wordsret(text)} words and {text.length} characters.</p>
      <p>Can be read in {0.008*Wordsret(text)} Minutes.</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
