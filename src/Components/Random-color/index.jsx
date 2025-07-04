import { useState, useEffect } from "react"

export default function Randomcolor() {

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState("#000000")

    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor);
    }

    function handleCreateRandomRgbColor() {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r}, ${g}, ${b})`);

    }
useEffect(()=> {
    if (typeOfColor === "rgb" ) handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
}, [typeOfColor]);

function handleHexcolor(){
    setTypeOfColor('hex')
}
    return (
        <div style={{
            height: "100vh",
            width: "100vw",
            background: color
        }}>
            <button onClick={handleHexcolor}>create hex color</button>
            <button onClick={() => setTypeOfColor('rgb')} >create rgb color</button>
            <button onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>generate random color</button>
            <div style= {{
                display: 'flex',
                alignItems:'center',
                justifyContent:'center',
                font: "#fff",
                fontSize: "60px",
                marginTop:"50px"


            }}>
                <h3>{typeOfColor === "hex" ? "Hex Color" : "Rgb Color" }</h3>
                <h1>{color}</h1>

            </div>
       
        </div>

        
        
    )
}