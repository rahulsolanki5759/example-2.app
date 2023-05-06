import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './style.css';
function App()
{
    // return <h1 align="center">My first examples are loding</h1>
    //        <p>I am a prit i am learning react js</p>

    return <div><h1>About Us</h1>
           <p>Hello i am Brijesh</p>    
          </div>

}
const root=ReactDOM.createRoot(document.getElementById("demo"));
root.render(<App />);

