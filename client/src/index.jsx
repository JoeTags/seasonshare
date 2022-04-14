import ReactDOM from "react-dom/client"
import React from "react"
import App from "../components/App.jsx"


const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(<App />);

//ReactDOM.createRoot(<App />, document.getElementById("root"))