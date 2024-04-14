import App from "./App.jsx"
function Btn({data}) {
    let clr=data.txt;
    setClr=data.setColor;
    return (
        <>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg c"
                style={{ backgroundColor: clr, color:clr}}
                onClick={()=>{setClr(bg)}}
            >
                {bg}
            </button>
        </>
    )
}

export default Btn