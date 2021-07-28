import { useEffect } from "react";
import Axios from "axios";
import Maladie from "./Maladie";

const Organe = ({
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
    Axios.get(`http://localhost:3001/organe/${systeme}`, {}).then(
      (response) => {
        setOrganeList(response.data);
        console.log("get organe list", response.data);
      }
    );
  }, [systeme]);

  const handleIsOrgane = (e) => {
    setOrgane(e.target.value);
    setMaladie('');
    setMaladieList('');
    setTraitement('');
    setTraitementList('');
  };

  const handleDescOrgane = (val) => {
    for (const el of val) {
      if (el.name_organe === organe) {
        return <p>{el.desc_organe}</p>;
      }
    }
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
      {organe ? handleDescOrgane(organeList) : ""}
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
