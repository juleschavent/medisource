import { useState } from "react";
import AddSysteme from "./AddSysteme";
import "../style/AddStyle.css"

const Add = () => {
  const [addSysteme, setAddSysteme] = useState(false);
  const [addOrgane, setAddOrgane] = useState(false);

  const handleAdd = (param, setParam) => {
    let tempStatus = !param;
    setParam(tempStatus);
  };

  return (
    <div>
      <button onClick={() => handleAdd(addSysteme, setAddSysteme)}>
        Ajouter un Système
      </button>
      {addSysteme ? <AddSysteme /> : ""}
      <button onClick={() => handleAdd(addOrgane, setAddOrgane)}>
        Ajouter un Organe
      </button>
      {addOrgane ? <p>formulaire ajout organe</p> : ""}
    </div>
  );
};

export default Add;
