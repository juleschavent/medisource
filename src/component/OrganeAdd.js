import Axios from "axios";

const OrganeAdd = ({
  organeList,
  setAddOrgane,
  name,
  setName,
  description,
  setDescription,
  idSysteme,
  setIdSysteme,
  systemeList
}) => {

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleDesc = (e) => {
    setDescription(e.target.value);
    // console.log(e.target.value)
  };

  const handleIsSysteme = (e) => {
    setIdSysteme(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const el of organeList) {
      if (el.name_organe === name) {
        alert("Cet organe existe déjà");
        return;
      }
    }
    if (name !== "" && description !== "" && idSysteme !=="") {
      Axios.post("http://localhost:3001/addOrgane", {
        name: name,
        description: description,
        idSysteme: idSysteme
      }).then(() => {
        setAddOrgane(false);
        console.log("success");
      });
    } else {
      alert("Entrez un nom et une description");
    }
  };
  return (
    <form>

      <div>
        <label>Nom de l'organe</label>
        <input onChange={handleName} type="text" name="name" />
      </div>

      <div>
        <label>Description de l'organe</label>
        <textarea onChange={handleDesc} name="description" />
      </div>

      <select onChange={handleIsSysteme}>
        <option value="">--Choisir système(s) parent(s)--</option>
        {systemeList && systemeList.map((systeme, index) => (
          <option key={index} value={systeme.id_systeme}>{systeme.name_systeme}</option>
        ))}
      </select>

      <button onClick={handleSubmit} type="submit">
        Ajouter
      </button>

    </form>
  );
};

export default OrganeAdd;
