import Axios from "axios";
import { useEffect, useState } from "react";
import AddSysteme from "./AddSysteme";
import DeleteSysteme from "./DeleteSysteme";
import Organe from "./Organe";
import UpdateSysteme from "./UpdateSysteme";

const Systeme = () => {
  const [systemeList, setSystemeList] = useState(null);
  const [systeme, setSysteme] = useState("");
  const [organeList, setOrganeList] = useState(null);
  const [organe, setOrgane] = useState(null);
  const [maladieList, setMaladieList] = useState(null);
  const [maladie, setMaladie] = useState(null);
  const [traitementList, setTraitementList] = useState(null);
  const [traitement, setTraitement] = useState(null);

  const [addSysteme, setAddSysteme] = useState(false);
  const [deleteSysteme, setDeleteSysteme] = useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    Axios.get("http://localhost:3001/systeme").then((response) => {
      setSystemeList(response.data);
      console.log("get systeme list", response.data);
    });
  }, [addSysteme, deleteSysteme]);

  const handleAdd = (param, setParam) => {
    let tempStatus = !param;
    setParam(tempStatus);
  };



  const handleIsSysteme = (e) => {
    setSysteme(e.target.value);
    setOrgane('');
    setOrganeList('');
    setMaladie('');
    setMaladieList('');
    setTraitement('');
    setTraitementList('');
  };

  return (
    <div>
      <form>
        <select name="selectSysteme" value={systeme} onChange={handleIsSysteme}>
          <option value="">--Choisir un système--</option>
          {systemeList &&
            systemeList.map((systeme, index) => (
              <option key={index} value={systeme.name_systeme}>
                {systeme.name_systeme}
              </option>
            ))}
        </select>
      </form>
      <button onClick={() => handleAdd(addSysteme, setAddSysteme)}>
        <i className="fas fa-plus-circle"></i>
      </button>
      {addSysteme ? <AddSysteme name={name} setName={setName} description={description} setDescription={setDescription} setAddSysteme={setAddSysteme} systemeList={systemeList} /> : ""}
      {systeme &&
        systemeList.map((el, index) => (
          systeme === el.name_systeme ?
            <div key={index}>
              <p>{el.desc_systeme}</p>
              <DeleteSysteme index={el.id_systeme} deleteSysteme={deleteSysteme} setDeleteSysteme={setDeleteSysteme} />
              <UpdateSysteme index={el.id_systeme} name={name} setName={setName} description={description} setDescription={setDescription}/>
            </div>
            : ''
        ))}
      {systeme ? (
        <Organe
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

export default Systeme;
