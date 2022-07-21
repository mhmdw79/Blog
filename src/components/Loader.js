import React from 'react'
import { TailSpin } from  'react-loader-spinner'



function Loader() {
  return (
    <div style={{display:"flex", justifyContent:"center" ,paddingTop:"20px",width:"100%",height:"1000px"}}>
               <TailSpin
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />
    </div>
  )
}

export default Loader