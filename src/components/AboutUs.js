import React,{useState} from 'react'

export default function AboutUs(props) {
  let  myStyle={
    color:props.mode==="dark"?'white':'black',
    backgroundColor:props.mode==='dark'?'black':'white',
   }
  return (
<>
<h1 style={{color:props.mode==="dark"?'white':'black'}}>About Us</h1>
<div class="accordion" id="accordionExample">
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
          Text Utils
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        <strong>This is a tool for manipulating text such as convert to upper case and lower case.</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        Free To Use
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        <strong>TextUtils is free to use character count tool that provides instant character count and word count statistics for a given text.TextUtils reports number of words and characters.</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
         Browser Compatiblity
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        <strong>This tool works in any browser such as Chrome,Internet Explorer, Safari,Opera.It suits to count characters in facebook,blog,books,excel document etc.</strong>
      </div>
    </div>
  </div>
</div>

</>
  );
}
