import { useEffect } from "react";
import Axios from "axios";
import Traitement from "./Traitement";

const Maladie = ({
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
    Axios.get(`http://localhost:3001/maladie/${systeme}/${organe}`, {}).then(
      (response) => {
        setMaladieList(response.data);
        console.log("get maladie list", response.data);
      }
    );
  }, [systeme, organe]);

  const handleIsMaladie = (e) => {
    setMaladie(e.target.value);
    setTraitement('');
    setTraitementList('');
  };

  const handleDescMaladie = (val) => {
    for (const el of val) {
      if (el.name_maladie === maladie) {
        return <p>{el.desc_maladie}</p>;
      }
    }
  };

  return (
    <div>
      <form>
        <select name="selectMaladie" onChange={handleIsMaladie}>
          <option value="">--Choisir une maladie--</option>
          {maladieList &&
            maladieList.map((maladie, index) => (
              <option value={maladie.name_maladie} key={index}>
                {maladie.name_maladie}
              </option>
            ))}
        </select>
      </form>
      {maladie ? handleDescMaladie(maladieList) : ""}
      {maladie ? (
        <Traitement
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

export default Maladie;
