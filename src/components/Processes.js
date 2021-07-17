import Process from './Process'

const Processes = ({ procs }) => {
    return (
        <table>
            <thead>
            <tr>
                <th>PID</th>
                <th>COMMAND</th>
                <th>%CPU</th>
            </tr>
            </thead>
            <tbody>
            {procs.map((proc, index)=>(<Process key={index} pid={proc['PID']} process={proc['COMMAND']} cpu={proc['%CPU']} />))}
            </tbody>
        </table>
    )
}

export default Processes