import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

return (
    <>
        <div className="flex items-center justify-center h-screen">
            <div className="container border border-purple-500 border-1 h-[76vh] w-[50vh]">
                <h1 className='font-bold text-purple-500 text-3xl flex items-center justify-center my-6'>FORM</h1>
                <form className='flex flex-col mx-10 my-8'>

                    <label htmlFor="username"></label>
                    <input type="text" placeholder='Username' className='border border-purple-500 rounded-2xl h-11 border-1 px-3 text-purple-500' />

                    <label htmlFor="email"></label>
                    <input type="email" placeholder='Email' className='border border-purple-500 rounded-2xl h-11 border-1 px-3 my-4' />

                    <label htmlFor="password"></label>
                    <input type="password" placeholder='Password' className='border border-purple-500 px-3 rounded-2xl h-11' />

                    <label htmlFor="country"></label>
                    <select name="country" id="country" placeholder='Country' className='text-purple-500 border border-1 border-purple-500 my-4 px-3 h-11 rounded-2xl'>
                        <option value="India" className='text-purple-500'>India</option>
                        <option value="China" className='text-purple-500'>China</option>
                        <option value="Brazil" className='text-purple-500'>Brazil</option>
                    </select>
                    <h1 className='font-bold text-purple-500'>Level Of Development</h1>

                    <label htmlFor="level" className='text-purple-500'></label>
                    
                   <div className='flex px-9 mx-1 py-4 gap-4 items-center justify-center'>
                        <div className='flex items-center justify-center border border-1 border-purple-500 px-4 py-2 rounded-2xl'>
                            <input type="radio" name="Basic" id="Basic" className='text-purple-500 border' />
                            <label htmlFor="Basic" className='font-bold text-purple-500 px-1'>Basic</label>
                            
                        </div>

                        <div className='flex items-center justify-center border border-1 border-purple-500 px-4 py-2 rounded-2xl'>
                             <input type="radio" name="Basic" id="Medium" className='text-purple-500 border' />
                            <label htmlFor="Medium" className='font-bold text-purple-500 px-1'>Medium</label>
                            
                        </div>

                        <div className='flex items-center justify-center border border-1 border-purple-500 px-4 py-2 rounded-2xl'>
                            <input type="radio" name="Advanced" id="Advanced" className='text-purple-500 border' />
                            <label htmlFor="Advanced" className='font-bold text-purple-500 px-1'>Advanced</label>
                        </div>

                   </div>


                   <h1 className='font-bold text-purple-500'>Programming Skills</h1>

                    <label htmlFor="level" className='text-purple-500'></label>
                    
                   <div className='flex px-9 mx-1 py-4 gap-4 items-center justify-center'>
                        <div className='flex items-center justify-center border border-1 border-purple-500 px-4 py-2 rounded-2xl'>
                            <input type="radio" name="Java" id="Java" className='text-purple-500 border' />
                            <label htmlFor="Java" className='font-bold text-purple-500 px-1'>Java</label>
                            
                        </div>

                        <div className='flex items-center justify-center border border-1 border-purple-500 px-4 py-2 rounded-2xl'>
                             <input type="radio" name="Python" id="Python" className='text-purple-500 border' />
                            <label htmlFor="Python" className='font-bold text-purple-500 px-1'>Python</label>
                            
                        </div>

                        <div className='flex items-center justify-center border border-1 border-purple-500 px-4 py-2 rounded-2xl'>
                            <input type="radio" name="JavaScript" id="JavaScript" className='text-purple-500 border' />
                            <label htmlFor="JavaScript" className='font-bold text-purple-500 px-1'>JavaScript</label>
                        </div>
                        
                   </div>
                   <button className='text-center justify-center bg-purple-500 h-9 w-80 rounded-2xl'>SEND</button>

                  </form>
                  
            </div>
        </div>
    </>
)
}

export default App
