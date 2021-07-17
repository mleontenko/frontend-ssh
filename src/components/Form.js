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