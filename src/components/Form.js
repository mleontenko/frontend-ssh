import { useState } from 'react'

const Form = () => {
    const [ip, setIp] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(ip);
        console.log(username);
        console.log(password);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>IP adresa</label>
                <input type='text' value={ip} onChange={(e) => setIp(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Korisničko ime</label>
                <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Lozinka</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type='submit' value='Submit' className='btn' />
        </form>
    )
}

export default Form