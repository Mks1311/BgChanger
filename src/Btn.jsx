import React from "react"
function Btn({txt="white",bg,setColor}) {
    return (
        <>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg c"
                style={{ backgroundColor: bg, color:txt}}
                onClick={()=>{setColor(bg)}}
            >
                {bg}
            </button>
        </>
    )
}

export default Btn
