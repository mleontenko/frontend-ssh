const Process = ({ pid, process, cpu }) => {
    return (
        <tr>
            <td>{pid}</td>
            <td>{process}</td>
            <td>{cpu}</td>
        </tr>
    )
}

export default Process