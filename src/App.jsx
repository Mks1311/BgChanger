import { useState } from "react"
import Btn from "./Btn.jsx"
function App() {

  const [color, setColor] = useState('black');
  return (
    <>

      <div className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex w-auto flex-wrap justify-center bottom-12 inset-x-0 
        gap-3 shadow-lg bg-white  py-2 rounded-3xl "
        >
          <Btn data={txt="Red",setColor} /> 
          <Btn bg="Green" />
          <Btn bg="Blue" />
          <Btn bg="Olive" />
          <Btn bg="Gray" />
          <Btn txt="black" bg="Yellow" />
          <Btn txt="black" bg="Pink" />
          <Btn bg="Purple" />
          <Btn txt="black" bg="Lavender" />
          <Btn txt="black" bg="White" />
          <Btn bg="Black" />
        </div>
      </div>

    </>
  )
}

export default App
