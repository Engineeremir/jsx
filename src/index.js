// 1) import React and React DOM libraries
import React from "react";
import  ReactDOM  from "react-dom/client";
// 2)Get a reference to the div with ID root
const el = document.getElementById('root')
// 3) importTell React to take control of that element
const root = ReactDOM.createRoot(el);
// 4) Create a component
function App() {

    const message = true; //React is not going to show true in screen
    const element = {color:red}
     
    return <h1>{element}</h1> //React will throw error in console because it cant show an object as text
}
// 5) Show the component on the screen
root.render(<App/>)


 