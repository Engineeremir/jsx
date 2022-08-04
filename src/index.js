// 1) import React and React DOM libraries
import React from "react";
import  ReactDOM  from "react-dom/client";
// 2)Get a reference to the div with ID root
const el = document.getElementById('root')
// 3) importTell React to take control of that element
const root = ReactDOM.createRoot(el);
// 4) Create a component
function App() {
    //Props Customizes the element
    const message = "Enter age: "
    return (
        <input 
            type="number" 
            min={5} 
            max={10} 
            list={[1,2,3]}  //Wrap with curly braces
            style={{color:'red',border:'3px solid green'}} //Wrap with curly braces
            alt={message} //Wrap with curly braces
        />
    ); 
}
// 5) Show the component on the screen
root.render(<App/>)
