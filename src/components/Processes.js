import Process from './Process'

const Processes = ({ procs }) => {
    return (
        <div>
            {procs.map((proc, index)=>(<Process key={index} process={proc['COMMAND']} />))}
        </div>
    )
}

export default Processes