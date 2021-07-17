import Form from './components/Form'
import Processes from './components/Processes'
import { useState } from 'react'

const App = () => {

  const [procs, setProc] = useState([])
 
  return (
    <div className='container'>
      <Form setProc={setProc}/>
      <Processes procs={procs}/>
    </div>
  )
}

export default App;