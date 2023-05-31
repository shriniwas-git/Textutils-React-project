import React,{useState} from 'react'

export default function About() {
    const [mystyle, setmystyle] = useState({
        color : 'white',
        backgroundColor : 'black'
    })
    const [btntext, setbtntext] = useState('Enable Light Mode')
     const togglestyle=()=>{
        if(mystyle.color=='white'){
            setmystyle({
                color:'black',
                backgroundColor:'white',
                border: '2px solid-white'
            })
            setbtntext('Enable Dark Mode')
        }else{
            setmystyle({
                color : 'white',
                backgroundColor : 'black',
                border: '2px solid-white'
            })
            setbtntext('Enable Light Mode')
        }
    }
    
  return (
    <>
    <div className="container" style={mystyle}>
        <h1 className='my-3'>Thanks for visiting my website</h1>
    <div className="accordion" id="accordionExample" style={mystyle}>
  <div className="accordion-item" style={mystyle}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Hello
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={mystyle}>
      <div className="accordion-body">
        <strong>This is the my first react application.</strong> 
      </div>
    </div>
  </div>
  
  
</div>
<div className="container my-3">
    <button type='button' onClick={togglestyle} className='btn btn-primary'>{btntext}</button>
</div>
<br /><br />
</div>
    </>
  )
}
