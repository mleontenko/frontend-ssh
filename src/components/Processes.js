import Process from './Process'

const Processes = ({ procs }) => {
    return (
        <table className="table table-striped table-sm table-hover">
            <thead>
            <tr>
                <th title = "ID procesa" >PID</th>
                <th title = "Naziv procesa">COMMAND</th>
                <th title = "CPU korištenje">%CPU</th>
            </tr>
            </thead>
            <tbody>
            {procs.map((proc, index)=>(<Process key={index} pid={proc['PID']} process={proc['COMMAND']} cpu={proc['%CPU']} />))}
            </tbody>
        </table>
    )
}

export default Processes