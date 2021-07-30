import Axios from "axios";
import { useState } from "react";

const UpdateSysteme = ({ index, name, description, editSysteme, setEditSysteme }) => {

  const [newName, setNewName] = useState(name);
  const [newDesc, setNewDesc] = useState(description);

  const handleName = (e) => {
    console.log(name);
    setNewName(e.target.value);
    console.log(e.target.value);
  };
  const handleDesc = (e) => {
    setNewDesc(e.target.value);
    // console.log(e.target.value);
  };

  const handleEdit = () => {
    setEditSysteme(!editSysteme);
    // console.log(editSysteme);
  };

  const updateSysteme = (e) => {
    e.preventDefault();
    Axios.put("http://localhost:3001/updateSysteme", {
      index: index,
      newName: newName,
      newDesc: newDesc
    }).then((response) => {
      setEditSysteme(false);
      alert("Système mis à jour");
    });
  };

  return (
    <div>
      <button onClick={handleEdit}>
        <i className="fas fa-edit"></i>
      </button>
      {editSysteme ? (
        <form>
          <input type="text" value={newName} onChange={handleName} />
          <textarea value={newDesc} onChange={handleDesc} />
          <button onClick={updateSysteme}>Envoyer</button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default UpdateSysteme;
