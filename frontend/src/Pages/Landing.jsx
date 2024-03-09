import React from 'react'
import mandalabutton from "../assets/img/mandalabutton.png"
import { Link } from 'react-router-dom';


const Landing = () => {
  return (
    <>
    <div className="bg-[#F3EEEA] h-screen flex flex-col justify-center items-center">
      <h2>Encuentra la variedad de té que más te guste</h2>
      <Link to="/home">
        <img src={mandalabutton} className="h-80 m-3" alt="Mandala background" />
      </Link>
      <h2>Relájate y disfruta d eun momento de deleite</h2>
    </div>
    </>
  )
}

export default Landing