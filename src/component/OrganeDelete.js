import DeleteModal from "./modal/DeleteModal";
import Axios from "axios";
import { useState } from "react";

const OrganeDelete = ({ index, deleteOrgane, setDeleteOrgane }) => {
  const [deleteModal, setDeleteModal] = useState(false);

  const handleDelete = (setToDelete, deleteSysteme) => {
    Axios.delete(`http://localhost:3001/deleteOrgane/${index}`).then(
      (response) => {
        console.log(response)
        if ((response.data.sql)) {
          alert(
            "attention l'organe que vous essayez de supprimer contient des maladies liés, veuillez d'abord supprimer les maladies liés à ce système."
          );
        }
        setToDelete(!deleteSysteme);
      }
    );
  };

  const handleDeleteModal = () => {
    setDeleteModal(true);
  };

  return (
    <div>
      <button onClick={handleDeleteModal}>
        <i className="fas fa-trash-alt"></i>
      </button>
      {deleteModal && (
        <DeleteModal
          deleteOrgane={deleteOrgane}
          setDeleteOrgane={setDeleteOrgane}
          setDeleteModal={setDeleteModal}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default OrganeDelete;
