import React from 'react'
import './Main.css';
import SubContent from '../SubContent/SubContent';
import Encabezado from '../Encabezado/Encabezado';

const Main = () => {
  return (
    <div className="main">
      <SubContent />
      <SubContent />
      <SubContent />
      <Encabezado />
    </div>
  )
}

export default Main;