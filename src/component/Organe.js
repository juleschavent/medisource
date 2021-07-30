import { useEffect, useState } from "react";
import Axios from "axios";
import Maladie from "./Maladie";
import OrganeAdd from "./OrganeAdd";
import OrganeDelete from "./OrganeDelete";
import OrganeUpdate from "./OrganeUpdate";

const Organe = ({
  systeme,
  systemeList,
  organe,
  setOrgane,
  organeList,
  setOrganeList,
  maladie,
  setMaladie,
  maladieList,
  setMaladieList,
  traitement,
  setTraitement,
  traitementList,
  setTraitementList,
}) => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [idSysteme, setIdSysteme] = useState(0);

  const [addOrgane, setAddOrgane] = useState(false);
  const [deleteOrgane, setDeleteOrgane] = useState(false);
  const [editOrgane, setEditOrgane] = useState(false);

  useEffect(() => {
    Axios.get(`http://localhost:3001/organe/${systeme}`, {}).then(
      (response) => {
        setOrganeList(response.data);
        console.log("get organe list", response.data);
      }
    );
  }, [organe, deleteOrgane, addOrgane]);

  const handleIsOrgane = (e) => {
    setOrgane(e.target.value);
    setMaladie("");
    setMaladieList("");
    setTraitement("");
    setTraitementList("");
  };

  const handleAdd = (param, setParam) => {
    let tempStatus = !param;
    setParam(tempStatus);
  };

  return (
    <div>
      <form>
        <select name="selectOrgane" onChange={handleIsOrgane}>
          <option value="">--Choisir un organe--</option>
          {organeList &&
            organeList.map((organe, index) => (
              <option value={organe.name_organe} key={index}>
                {organe.name_organe}
              </option>
            ))}
        </select>
      </form>
      <button onClick={() => handleAdd(addOrgane, setAddOrgane)}>
        <i className="fas fa-plus-circle"></i>
      </button>
      {addOrgane ? (
        <OrganeAdd
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          idSysteme={idSysteme}
          setIdSysteme={setIdSysteme}
          setAddOrgane={setAddOrgane}
          organeList={organeList}
          systemeList={systemeList}
        />
      ) : (
        ""
      )}
      {organe &&
        organeList.map((el, index) =>
          organe === el.name_organe ? (
            <div key={index}>
              <p>{el.desc_organe}</p>
              <OrganeDelete
                index={el.id_organe}
                deleteOrgane={deleteOrgane}
                setDeleteOrgane={setDeleteOrgane}
              />
              <OrganeUpdate
                index={el.id_organe}
                name={el.name_organe}
                description={el.desc_organe}
                editOrgane={editOrgane}
                setEditOrgane={setEditOrgane}
              />
            </div>
          ) : (
            ""
          )
        )}
      {/* {organe ? handleDescOrgane(organeList) : ""} */}
      {organe ? (
        <Maladie
          systeme={systeme}
          organe={organe}
          setOrgane={setOrgane}
          organeList={organeList}
          setOrganeList={setOrganeList}
          maladie={maladie}
          setMaladie={setMaladie}
          maladieList={maladieList}
          setMaladieList={setMaladieList}
          traitement={traitement}
          setTraitement={setTraitement}
          traitementList={traitementList}
          setTraitementList={setTraitementList}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Organe;
