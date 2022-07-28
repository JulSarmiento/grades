import React from "react"
import "./index.css"

export default function Result(){
  return(

    <div className="result-box">
      <p className="student-name">Nombre del Alumno</p>

      <div className="number-box">
        <div className="hexagon">
          <p className="grade">3</p>
        </div>

        <div className="result-text-box">
          <p>Materia cursada</p>
          <p className="result-text">Muy deficiente</p>
        </div>
      </div>

      <p className="teacher-name">Docente a cargo</p>
    </div>

  )
  
}