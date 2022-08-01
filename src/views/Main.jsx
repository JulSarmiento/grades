import React from "react"
import { useState } from "react";
import Result from "../components/Result/Index";
import "./main.css"

export default function Main() {

  const [values, setValues] = useState({});

  const handlerOnChange = (e) => {
    setValues({ ...values, [e.target.name] : e.target.value })
  }

  return (
    <div className="wrapper">

      <h1>Notas Escolares</h1>

      <div className="content-box">

        {/* form */}

        <div className="form-box">

          <h2 className="form-title">Ingrese la nota</h2>

          <form className="form" action="">

            <div>
              <label htmlFor="student-name">Nombre del estudiante: </label>
              <input 
                type="text" 
                name="studentName" 
                id="studentName" 
                onChange={handlerOnChange}
              />
            </div>

            <div>
              <label  htmlFor="class-name">Materia cursada: </label>
              <input 
                type="text"
                name="className" 
                id="className" 
                onChange={handlerOnChange}
              />
            </div>

            <div>
              <label  htmlFor="grade">Calificacion final: </label>
              <input 
                type="number" 
                name="grade" 
                id="grade"
                min={0}
                max={10}
                onChange={handlerOnChange} 
              />
            </div>

            <div>
              <label  htmlFor="teacher-name">Nombre del docente: </label>
              <input 
                type="text" 
                name="teacherName" 
                id="teacherName"
                onChange={handlerOnChange} 
              />
            </div>
            
            <div className="btn-container">
              <button type="submit">Ingresar</button>
              <button type="clear">clear</button>
            </div>
          </form>

        </div>
        

        <Result values={values}/>
        {console.log(values)}

      </div> 

    </div> 

  )
}