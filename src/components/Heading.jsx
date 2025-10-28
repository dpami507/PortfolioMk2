import { useState } from 'react'
import './Heading.css'

function Heading({title}) {
  return (
    <>
        <div className='heading'>
            <h1>{title}</h1>
        </div>
    </>
  )
}

export default Heading
