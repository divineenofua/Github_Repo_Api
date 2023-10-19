
import React from 'react';
import {Link, useRouteError} from "react-router-dom"

function ErrorPage() {
  const error = useRouteError();
  console.log(error)
  return (
    <div className="error-page">
      <h1>oops!</h1>
      <p className="error-status">{error.status}</p>
      <p className="error-status-text"><em>{error.statusText}</em></p>
      <p className='home-btn'> <Link   to="/"><b>Home Page</b></Link></p>

    </div>
  )
}

export default ErrorPage