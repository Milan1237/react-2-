import React from 'react'

const ErrorElement = ({error}) => {
  return (
    <>
    <h1>Oops an error occured</h1>
    <p>{error.message}</p>
    </>
  )
}

export default ErrorElement