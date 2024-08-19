import React,{useState} from 'react'

function Textarea(props) {
  const [text, setText] = useState("")
    const uppclk=()=>{
        // console.log("clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext);
        // {props.showAlert("clicked","uppercase btn");}
    }
    const textclk=(event)=>{
        // console.log("you click the text");
        setText(event.target.value);
    }
    const clrbtn=()=>{
       let newtext=" ";
       setText(newtext);
  }
  const handlecopy=()=>{
    console.log("click copy button");
    var text=document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleextraspc=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(' '))
  }
    
  return (
    <>
    <div>
 <h6>{props.heading}</h6>
  <textarea className={`form-control my-3 mx-2 bg-${props.mode}`}  id="mybox" rows="2" value={text} onChange={textclk} >
  {/* {props.heading}-{text} */}
  </textarea>

  <div>{text.length} letter and {text.split(" ").length} word</div>
 <button className='btn btn-primary mx-1' onClick={uppclk}>change uppercase</button>
 <button className='btn btn-primary mx-1' onClick={clrbtn}>clear text</button>
 <button className='btn btn-primary mx-1' onClick={handlecopy}>copy text</button>
 <button className='btn btn-primary mx-1' onClick={handleextraspc}>remove extsp</button>
 <h3>preview</h3>
 <p>{text}</p>

</div>
</>
  )
}


export default Textarea
