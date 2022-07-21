import React from 'react'
import Footer from './components/Footer'
import Headers from './components/Headers'

function Layout({children}) {
  return (
    <>
    <Headers/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout