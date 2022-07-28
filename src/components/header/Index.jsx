import React from "react";
import "./index.css"
import logo from "../../assets/logo.png"

/**
 * This function contains all the login a tags for a header component
 */
export default function Header() {
  return (
    <div className="header">
      <img className="header-logo" src={logo} alt="StudiCorn Dev logo" />
    </div>
  )
}