import Axios from "axios";
import { useEffect, useState } from "react";
import Organe from "./Organe";

const Systeme = () => {
  const [systemeList, setSystemeList] = useState(null);
  const [systeme, setSysteme] = useState("");
  const [organeList, setOrganeList] = useState(null);
  const [organe, setOrgane] = useState(null);
  const [maladieList, setMaladieList] = useState(null);
  const [maladie, setMaladie] = useState(null);
  const [traitementList, setTraitementList] = useState(null);
  const [traitement, setTraitement] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3001/systeme").then((response) => {
      setSystemeList(response.data);
      console.log("get systeme list", response.data);
    });
  }, []);

  const handleIsSysteme = (e) => {
    setSysteme(e.target.value);
    setOrgane('');
    setOrganeList('');
    setMaladie('');
    setMaladieList('');
    setTraitement('');
    setTraitementList('');
  };

  const handleDescSysteme = (val) => {
    for (const el of val) {
      if (el.name_systeme === systeme) {
        return <p>{el.desc_systeme}</p>;
      }
    }
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
      {systeme ? handleDescSysteme(systemeList) : ""}
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
