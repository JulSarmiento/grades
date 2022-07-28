import React from "react"
import Form from "../components/Form/Index"
import Result from "../components/Result/Index"
import "./main.css"

export default function Main() {
 
  return (
    <div className="wrapper">
      <div className="content-box">
        <Form /> 
        <Result /> 
      </div>
    </div>

  )
}