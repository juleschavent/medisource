const DeleteModal = ({ setDeleteModal, handleDelete, setDeleteSysteme, deleteSysteme, deleteOrgane, setDeleteOrgane }) => {

  return (
    <div className="backgroundModal">
      <div className="containerModal">
          <div className="body">
            <h2>Voulez-vous vraiment supprimer ce système ?</h2>
          </div>
          <div className="footer">
              <button onClick={() => setDeleteModal(false)}>Annuler</button>
              <button onClick={() => handleDelete(setDeleteOrgane, deleteOrgane)}>Continuer</button>
          </div>
      </div>
    </div>
  );
};

export default DeleteModal;
