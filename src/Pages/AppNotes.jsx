import React from 'react'
import { NavOptions } from '../components/NavOptions'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export const AppNotes = () => {
  return (
    <div className='h-screen flex flex-col'>

      <div className=" h-1/10">
        <Header/>
      </div> 

      <div className='flex-grow'>
        <NavOptions/>
      </div> 

      <div className="h-1/10">
      <Footer/>
      </div> 

    </div>
  )
}
