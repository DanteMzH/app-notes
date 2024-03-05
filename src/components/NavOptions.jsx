import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInput } from '../slice/FirstSlice';

export const NavOptions = () => {

  const dispatch = useDispatch();
  const {value} = useSelector((state) => state.value);

  const handleInput = (e)=>{
      dispatch(setInput(e.target.value));

  }

  const handleSubmit = ()=>{
    
  }

  return (
    <div className='flex flex-row w-full h-full gap-5'>

      <div className='flex flex-col w-3/10'>

        <nav className='flex flex-col bg-color-aside h-3/5 mx-3 my-20 rounded-md p-2 text-lg gap-2 shadow-2xl w-full'>

            <h1 className='bg-color-border rounded-md  w-5/5'>+ New note</h1>
            <h1 className='bg-color-border rounded-md  w-5/5'>View notes</h1>
      


        </nav >
        
      </div>

      <section className='w-7/10 w-full'>
            <main className='flex flex-wrap my-20 gap-2 p-5 w-full h-3/5'>
              <div className='border border-color-border rounded-md w-2/5 h-2/5 p-5 shadow-2xl text-lg'>
                <form onSubmit={handleSubmit}>

                  <input
                  type='text'
                  value={value}
                  onChange={handleInput}
                  >
                  </input>
                  
                </form>  
              </div>
              <div className='border border-color-border rounded-md w-2/5 h-2/5 p-5 shadow-2xl text-lg'>Hola</div>
              <div className='border border-color-border rounded-md w-2/5 h-2/5 p-5 shadow-2xl text-lg'>Hola</div>
              <div className='border border-color-border rounded-md w-2/5 h-2/5 p-5 shadow-2xl text-lg'>Hola</div>
              <div className='border border-color-border rounded-md w-2/5 h-2/5 p-5 shadow-2xl text-lg'>Hola</div>


            </main>
      </section>

    </div>
  )
}
