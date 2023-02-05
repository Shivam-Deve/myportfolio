import React, { useState } from 'react'
import './Toggle.scss'
import useThemeContext from '../../context/ThemeContext'
function Toggle() {
    const [cname, setCname] = useState("toggle light")
    const { toggle } = useThemeContext();
    const handleToggle = () => {
        toggle()
        setCname(prev => {
            console.log("toggling")
            return prev === "toggle light" ? "toggle dark" : "toggle light";
        })
    }
    return (
        <button className={cname} onClick={handleToggle}>
            <span></span>
        </button>
    )
}

export default Toggle