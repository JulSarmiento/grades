import React from "react"
import "./index.css"

export default function Form() {

  return (
    <div className="form-box">

      <h2 className="form-title">Ingrese la nota</h2>

      <form className="form" action="">

        <div>
          <label  htmlFor="student-name">Nombre del estudiante: </label>
          <input type="text" name="student-name" id="student-name" />
        </div>

        <div>
          <label  htmlFor="class">Materia cursada: </label>
          <input type="text" name="class" id="class" />
        </div>

        <div>
          <label  htmlFor="grade">Calificacion final: </label>
          <input type="number" name="grade" id="grade" />
        </div>

        <div>
          <label  htmlFor="teacher-name">Nombre del docente: </label>
          <input type="text" name="teacher-name" id="teacher-name" />
        </div>
        
        <div className="btn-container">
          <button>Ingresar</button>
          <button type="clear">clear</button>
        </div>
      </form>

    </div>
  )
}