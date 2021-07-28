import { useEffect } from "react";
import Axios from "axios";

const Traitement = ({
  systeme,
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
  useEffect(() => {
    Axios.get(
      `http://localhost:3001/traitement/${systeme}/${organe}/${maladie}`,
      {}
    ).then((response) => {
      setTraitementList(response.data);
      console.log("get traitement list", response.data);
    });
  }, [systeme, organe, maladie]);

  const handleIsTraitement = (e) => {
    setTraitement(e.target.value);
  };

  const handleDescTraitement = (val) => {
    for (const el of val) {
      if (el.name_traitement === traitement) {
        return <p>{el.desc_traitement}</p>;
      }
    }
  };

  return (
    <div>
      <form>
        <select name="selectTraitement" onChange={handleIsTraitement}>
          <option value="">--Choisir un traitement--</option>
          {traitementList &&
            traitementList.map((traitement, index) => (
              <option value={traitement.name_traitement} key={index}>
                {traitement.name_traitement}
              </option>
            ))}
        </select>
      </form>
      {traitement ? handleDescTraitement(traitementList) : ""}
    </div>
  );
};

export default Traitement;
