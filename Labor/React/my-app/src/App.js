import * as React from "react"
import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"

export default function App() {
    return (
        <div className="App">
            <h1>Welcome to React Router!</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </div>
    )
}