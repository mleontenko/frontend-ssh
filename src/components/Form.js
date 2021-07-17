import { useState } from 'react'
import axios from 'axios';

const Form = ({ setProc }) => {
    const [ip, setIp] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        
        axios.post('http://localhost:5000', {
            ip: ip,
            username: username,
            password: password
            })
            .then(function (response) {
            //response.data.forEach(element => console.log(element['COMMAND']));
            setProc(response.data)
            })
            .catch(function (error) {
            console.log(error);
            });
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='mb-3'>
                <label htmlFor="ipaddress" className="form-label">IP adresa:</label>
                <input type='text' id="ipaddress" className="form-control" value={ip} onChange={(e) => setIp(e.target.value)} />
            </div>
            <div className='mb-3'>
                <label htmlFor="username" className="form-label">Korisničko ime:</label>
                <input type='text' id="username" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='mb-3'>
                <label htmlFor="password" className="form-label">Lozinka:</label>
                <input type='password' id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type='submit' value='Pošalji' className='btn btn-primary' />
        </form>
    )
}

export default Form