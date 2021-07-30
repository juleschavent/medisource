import Axios from "axios";
import { useState } from "react";
import DeleteModal from "./modal/DeleteModal";

const DeleteSysteme = ({ index, deleteSysteme, setDeleteSysteme, systeme }) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDelete = (setToDelete, deleteSysteme) => {
    Axios.delete(`http://localhost:3001/deleteSysteme/${index}`).then(
      (response) => {
        if (response.data.code = "ER_ROW_IS_REFERENCED_2") {
          alert("attention le système que vous essayez de supprimer contient des organes liés, veuillez d'abord supprimer les organes liés à ce système.")
        }
        setDeleteModal(!deleteModal);
      }
    );
  };

  const handleDeleteModal = () => {
    console.log(systeme)
    setDeleteModal(true);
  };

  return (
    <div>
      <button onClick={handleDeleteModal}>
        <i className="fas fa-trash-alt"></i>
      </button>
      {deleteModal && (
        <DeleteModal
          deleteSysteme={deleteSysteme}
          setDeleteSysteme={setDeleteSysteme}
          setDeleteModal={setDeleteModal}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default DeleteSysteme;
