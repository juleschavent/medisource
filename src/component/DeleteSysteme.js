import Axios from "axios"

const DeleteSysteme = ({ index, deleteSysteme, setDeleteSysteme }) => {

    const handleDeleteSysteme = () => {
        Axios.delete(`http://localhost:3001/deleteSysteme/${index}`).then((response) => {
            setDeleteSysteme(!deleteSysteme)
        })
    }

    return (
        <button onClick={handleDeleteSysteme}>
            <i className="fas fa-trash-alt"></i>
        </button>
    )
}

export default DeleteSysteme;