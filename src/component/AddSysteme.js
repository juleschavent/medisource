import { useState } from "react";

const AddSysteme = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleName = (e) => {
        setName(e.target.value)
        // console.log(e.target.value)
    } 

    const handleDesc = (e) => {
        setDescription(e.target.value)
        // console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name != '' && description != '') {

        } else {
            alert('Entrez au moins un nom et une description')
        }
    }


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

      <button onClick={handleSubmit} type="submit">Ajouter</button>
    </form>
  );
};

export default AddSysteme;
