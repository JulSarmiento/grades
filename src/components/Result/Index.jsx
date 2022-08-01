import React from "react";
let classToAdd;

export default function Result({values}) {
 
  const {studentName, className, grade, teacherName} = values

  const resultText = (grade) => {
    let gradeMod = parseInt(grade)

    if(grade >=0  && grade <= 3) {
      classToAdd = 'hexagon-color-red'
      return 'Muy deficiente'
    }
    if( gradeMod <= 5){
      classToAdd = 'hexagon-color-orange '
      return 'Insuficiente'

    } else if( gradeMod <= 6){
      classToAdd = 'hexagon-color-yellow'
      return 'Suficiente'

    } else if( gradeMod <= 7){
      classToAdd = 'hexagon-color-green-yellow'
      return 'Bien'

    } else if( gradeMod <= 9){
      classToAdd = 'hexagon-color-blue-green'
      return 'Notable'

    } else if(gradeMod === 10) {
      classToAdd = 'hexagon-color-green'
      return 'Sobresaliente'

    } 
  }


  return (
    <div className="result-box">
        <p className="student-name">{studentName}</p>

        <div className="number-box">
          
          <div className={`hexagon ${classToAdd}`}>
            <p className="grade">{grade}</p>
          </div>

          <div className="result-text-box">
            <p>{className}</p>
            <p className="result-text">{!grade ?  " " : resultText(grade)}</p>
          </div>
        </div>

        <p className="teacher-name">{!teacherName ? " " :  <strong> Docente {teacherName}</strong>}</p>
    </div>
  )
}