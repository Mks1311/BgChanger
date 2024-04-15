import { useState } from "react"
import Btn from "./Btn.jsx"
function App() {

  const [color, setColor] = useState('black');
  return (
    <>

      <div className="w-full h-screen duration-200 flex flex-wrap justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex w-auto flex-wrap justify-center bottom-12 right-15 left-15 
        gap-3 shadow-lg bg-white  py-2 px-3 rounded-3xl "
        >
          <Btn bg="Red" setColor={setColor} />
          <Btn bg="Green" setColor={setColor} />
          <Btn bg="Blue" setColor={setColor} />
          <Btn bg="Olive" setColor={setColor} />
          <Btn bg="Gray" setColor={setColor} />
          <Btn txt="black" bg="Yellow" setColor={setColor} />
          <Btn txt="black" bg="Pink" setColor={setColor} />
          <Btn bg="Purple" setColor={setColor} />
          <Btn txt="black" bg="Lavender" setColor={setColor} />
          <Btn txt="black" bg="White" setColor={setColor} />
          <Btn bg="Black" setColor={setColor} />
        </div>
      </div>

    </>
  )
}

export default App
