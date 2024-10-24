import React from 'react'
import Navbar from '../Components/Navbar'

const PageLayout = ({children}) => {
    
  return (
    <>
        <Navbar />

        {children}
    </>
  )
}

export default PageLayout