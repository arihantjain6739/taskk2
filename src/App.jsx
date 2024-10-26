import { useState } from 'react'
import QRCode from 'qrcode'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        country: 'India',
        level: '',
        skill: ''
    })
    const [qrCodeUrl, setQrCodeUrl] = useState('')

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const generateQrCode = async () => {
        try {
            const qrCodeData = JSON.stringify(formData)
            const url = await QRCode.toDataURL(qrCodeData)
            setQrCodeUrl(url)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        generateQrCode()
    }

    return (
        <>
            <div className="flex items-center justify-center min-h-screen p-4">
                <div className="container border border-purple-500 p-6 rounded-lg max-w-md w-full min-h-screen">
                    <h1 className='font-bold text-purple-500 text-3xl flex items-center justify-center my-6'>FORM</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>

                        <input type="text" name="username" placeholder='Username' 
                            className='border border-purple-500 rounded-2xl h-11 px-3 text-purple-500'
                            value={formData.username} onChange={handleChange} />

                        <input type="email" name="email" placeholder='Email' 
                            className='border border-purple-500 rounded-2xl h-11 px-3 text-purple-500'
                            value={formData.email} onChange={handleChange} />

                        <input type="password" name="password" placeholder='Password'
                            className='border border-purple-500 px-3 rounded-2xl h-11 text-purple-500'
                            value={formData.password} onChange={handleChange} />

                        <select name="country" className='text-purple-500 border border-purple-500 px-3 h-11 rounded-2xl'
                            value={formData.country} onChange={handleChange}>
                            <option value="India">India</option>
                            <option value="China">China</option>
                            <option value="Brazil">Brazil</option>
                        </select>

                        <h1 className='font-bold text-purple-500'>Level Of Development</h1>
                        <div className='flex flex-wrap gap-4'>
                            {['Basic', 'Medium', 'Advanced'].map((level) => (
                                <div key={level} className='flex items-center border border-purple-500 px-4 py-2 rounded-2xl'>
                                    <input type="radio" name="level" value={level} 
                                        checked={formData.level === level} 
                                        onChange={handleChange} />
                                    <label className='font-bold text-purple-500 px-1'>{level}</label>
                                </div>
                            ))}
                        </div>

                        <h1 className='font-bold text-purple-500'>Programming Skills</h1>
                        <div className='flex flex-wrap gap-4'>
                            {['Java', 'Python', 'JavaScript'].map((skill) => (
                                <div key={skill} className='flex items-center border border-purple-500 px-4 py-2 rounded-2xl'>
                                    <input type="radio" name="skill" value={skill} 
                                        checked={formData.skill === skill} 
                                        onChange={handleChange} />
                                    <label className='font-bold text-purple-500 px-1'>{skill}</label>
                                </div>
                            ))}
                        </div>

                        <button type="submit" className='text-center bg-purple-500 h-11 w-full rounded-2xl font-extrabold'>SEND</button>
                    </form>

                    {qrCodeUrl && (
                        <div className="flex justify-center mt-6 y-4">
                            <img src={qrCodeUrl} alt="QR Code" className="w-48 h-48"/>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default App
