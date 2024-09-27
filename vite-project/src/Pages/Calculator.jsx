import React from 'react'
import Navbar from '../Component/Navbar'
import Creditscore from '../General/Creditscore'
import Monitors from '../General/Monitors'

const Calculator = () => {
  return (
    <div>
          <div className='sm:p-4 md:p-6 lg:p-8'>
                   <Navbar />
                   <Creditscore />
                   <Monitors />
          </div>
    </div>
  )
}

export default Calculator