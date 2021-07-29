import { useState } from "react";

const UpdateSysteme = ({ name, setName, description, setDescription }) => {

    // const [isEdit, setIsEdit] = useState(false);

    const [newName, setNewName] = useState('');
    const [newDesc, setNewDesc] = useState('');

    const handleChange = (e, setNew) => {
        setNew(e.target.value)
    }

    const handleEdit = () => {
        console.log('test');
        return (
            // <form>
            //     <input type="text" value={name} />
            //     <textarea value={description}></textarea>
            // </form>
            <p>test</p>
        )
    }

    // const updatePeopleAge = (id) => {
    //     Axios.put('http://localhost:3001/update', {
    //         age: newAge,
    //         id: id
    //     }).then((response) => {
    //         alert('update on bdd but not on page')
    //         setPeopleList(peopleList.map((val) => {
    //             return val.id == id ? {
    //                 id: val.id,
    //                 name: val.name,
    //                 age: newAge,                // age est égale à newAge
    //                 country: country.val
    //             } : val
    //         }))
    //     })
    // }

    return (
        <div>
            <button onClick={handleEdit}>
                <i className="fas fa-edit"></i>
            </button>
        </div>
    );
}

export default UpdateSysteme;