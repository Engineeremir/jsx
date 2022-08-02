// 1) import React and React DOM libraries
import React from "react";
import  ReactDOM  from "react-dom/client";
// 2)Get a reference to the div with ID root
const el = document.getElementById('root')
// 3) importTell React to take control of that element
const root = ReactDOM.createRoot(el);
// 4) Create a component
function App() {
    return <h1>Hi there</h1>
}
// 5) Show the component on the screen
root.render(<App/>)


 