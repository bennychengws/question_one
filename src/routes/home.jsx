import React from 'react'
import { Outlet, Link } from "react-router-dom";
import moduleCss from "../home.module.css"

const home = () => {
    return (
      <div className={moduleCss.container}>
        <h1>
            Welcome Back!
        </h1>
        <nav>
          <Link to="/home/trans_example_one">Translation example 1</Link> |{" "}
          <Link to="/home/trans_example_two">Translation example 2</Link>
        </nav>     
        <Outlet />
      </div>
    )
}

export default home
