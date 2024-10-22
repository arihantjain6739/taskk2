import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="flex items-center justify-center min-h-screen
             p-4">
                <div className="container border border-purple-500 p-6 rounded-lg max-w-md w-full max-h-screen">
                    <h1 className='font-bold text-purple-500 text-3xl flex items-center justify-center my-6'>FORM</h1>
                    <form className='flex flex-col space-y-4'>

                        <label htmlFor="username" className="sr-only">Username</label>
                        <input type="text" placeholder='Username' className='border border-purple-500 rounded-2xl h-11 px-3 text-purple-500' />

                        <label htmlFor="email" className="sr-only">Email</label>
                        <input type="email" placeholder='Email' className='border border-purple-500 rounded-2xl h-11 px-3 text-purple-500' />

                        <label htmlFor="password" className="sr-only">Password</label>
                        <input type="password" placeholder='Password' className='border border-purple-500 px-3 rounded-2xl h-11 text-purple-500' />

                        <label htmlFor="country" className="sr-only">Country</label>
                        <select name="country" id="country" className='text-purple-500 border border-purple-500 px-3 h-11 rounded-2xl'>
                            <option value="India" className='text-purple-500'>India</option>
                            <option value="China" className='text-purple-500'>China</option>
                            <option value="Brazil" className='text-purple-500'>Brazil</option>
                        </select>

                        <h1 className='font-bold text-purple-500'>Level Of Development</h1>
                        <div className='flex flex-wrap gap-4'>
                            <div className='flex items-center border border-purple-500 px-4 py-2 rounded-2xl'>
                                <input type="radio" name="level" id="Basic" className='text-purple-500 border' />
                                <label htmlFor="Basic" className='font-bold text-purple-500 px-1'>Basic</label>
                            </div>
                            <div className='flex items-center border border-purple-500 px-4 py-2 rounded-2xl'>
                                <input type="radio" name="level" id="Medium" className='text-purple-500 border' />
                                <label htmlFor="Medium" className='font-bold text-purple-500 px-1'>Medium</label>
                            </div>
                            <div className='flex items-center border border-purple-500 px-4 py-2 rounded-2xl'>
                                <input type="radio" name="level" id="Advanced" className='text-purple-500 border' />
                                <label htmlFor="Advanced" className='font-bold text-purple-500 px-1'>Advanced</label>
                            </div>
                        </div>

                        <h1 className='font-bold text-purple-500'>Programming Skills</h1>
                        <div className='flex flex-wrap gap-4'>
                            <div className='flex items-center border border-purple-500 px-4 py-2 rounded-2xl'>
                                <input type="radio" name="skill" id="Java" className='text-purple-500 border' />
                                <label htmlFor="Java" className='font-bold text-purple-500 px-1'>Java</label>
                            </div>
                            <div className='flex items-center border border-purple-500 px-4 py-2 rounded-2xl'>
                                <input type="radio" name="skill" id="Python" className='text-purple-500 border' />
                                <label htmlFor="Python" className='font-bold text-purple-500 px-1'>Python</label>
                            </div>
                            <div className='flex items-center border border-purple-500 px-4 py-2 rounded-2xl'>
                                <input type="radio" name="skill" id="JavaScript" className='text-purple-500 border' />
                                <label htmlFor="JavaScript" className='font-bold text-purple-500 px-1'>JavaScript</label>
                            </div>
                        </div>

                        <button className='text-center bg-purple-500 h-11 w-full rounded-2xl font-extrabold'>SEND</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default App
