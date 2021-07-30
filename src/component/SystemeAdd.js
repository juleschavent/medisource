import Axios from "axios";

const AddSysteme = ({
  systemeList,
  setAddSysteme,
  name,
  setName,
  description,
  setDescription,
}) => {
  
  const handleName = (e) => {
    setName(e.target.value);
    // console.log(e.target.value)
  };

  const handleDesc = (e) => {
    setDescription(e.target.value);
    // console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const el of systemeList) {
      if (el.name_systeme === name) {
        alert("Ce système existe déjà");
        return;
      }
    }
    if (name !== "" && description !== "") {
      Axios.post("http://localhost:3001/addSysteme", {
        name: name,
        description: description,
      }).then(() => {
        setAddSysteme(false);
        console.log("success");
      });
    } else {
      alert("Entrez un nom et une description");
    }
  };

  return (
    <form>
      <div>
        <label>Nom du système</label>
        <input onChange={handleName} type="text" name="name" />
      </div>

      <div>
        <label>Description du système</label>
        <textarea onChange={handleDesc} name="description" />
      </div>

      <button onClick={handleSubmit} type="submit">
        Ajouter
      </button>
    </form>
  );
};

export default AddSysteme;
