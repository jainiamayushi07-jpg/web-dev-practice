import React,{useState} from 'react'


export default function TextForms(props) {
     const[text,setText]=useState("I am ayushi");
     console.log(text);
     const changetext=(event)=>{
      setText(event.target.value);
      console.log(text);
     }
      const handleupclick=()=>{
          let newtext=text.toUpperCase();
          setText(newtext);
         props.showAlert('Converted to uppercase','success');
      }
        const handlelowerclick=()=>{
          let newtext=text.toLowerCase();
          setText(newtext);
        }
     return (
   
    <>
    <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
   <textarea className='form-control' cols="12" rows="8" value={text} id="floatingTextarea" onChange={changetext}></textarea>
    <button type="button" onClick={handleupclick} class="btn btn-primary my-4 mx-3">Convert into Uppercase</button>
    <button type="button" onClick={handlelowerclick} class="btn btn-primary my-4">Convert into Lowercase</button>
    <div class="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <p>{text.split(" ").filter(text=>text!=="").length} words and {text.length} characters</p>
      <h1>Text Preview</h1>
      <p>{text===""?"enter  required text":text}</p>
      
    </div>  
    </> 
    
  )
}
