import React from "react";
import './Style.css'
import StickyNote from "./Components/StickyNote";
import Header from "./Components/Header";

export default function App() {
    return (
        <div>
            <Header />
            <StickyNote />
        </div>
    );
}