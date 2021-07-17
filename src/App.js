import Form from './components/Form'
import Processes from './components/Processes'
import { useState } from 'react'
import Loader from './components/Loader' 

const App = () => {

  const [showLoading, setShowLoading] = useState(false)

  const [procs, setProc] = useState([])
 
  return (
    <div className='container'>
      <Form setProc={setProc} setShowLoading={setShowLoading} />
      { showLoading && <Loader /> }
      <Processes procs={procs}/>
    </div>
  )
}

export default App;