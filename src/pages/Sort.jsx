import React, { useState } from "react";
import Back from "../components/Back";
import Help from "../components/Help";
import ShowLinks from "../components/ShowLinks";
import array from "./data";

function Sort() {
  const [Data, setData] = useState(array[0]);
  const [name, setName] = useState(array[1]);
  const [arr, setArr] = useState(array[2]);
  const [marime, setMarime] = useState(array[3]);
  const [date, setDate] = useState(array[4]);

  const [filterName, setFilterName] = useState("any");
  const [filterArr, setFilterArr] = useState("any");
  const [filterMarime, setFilterMarime] = useState(0);
  const [filterDate, setFilterDate] = useState("any");

  function filtrare(data) {
    return data.filter((e) => {
      return (
        (filterName !== "any" ? e.name === filterName : e.name !== "any") &&
        (filterMarime !== 0 ? e.marime === filterMarime : e.marime !== 0) &&
        (filterDate !== "any" ? e.data === filterDate : e.data !== "any") &&
        (filterArr !== "any" ? e.extensie === filterArr : e.extensie !== "any")
      );
    });
  }

  return (
    <>
      {window.sessionStorage.getItem("Bin") && (
        <div
          className="fullPage l"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            padding: "0 100px",
          }}
        >
          <Back />
          <div className="cerinta" style={{ margin: "20px" }}>
            Acum Robik ne-a ascuns informațiile în unul dintre aceste foldere.
            Ai posibilitatea de a le sorta pe anumite categorii pentru a le
            testa mai repede. Spor la căutat.
          </div>
          <div className="re">
            <div className="filters">
              <div className="name a">
                <h3>Name</h3>
                <select
                  onChange={(e) => {
                    setFilterName(e.target.value);
                  }}
                >
                  <option value="any">any</option>
                  {name.map((e) => {
                    return (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="extensie a">
                <h3>Extensie</h3>
                <select
                  onChange={(e) => {
                    setFilterArr(e.target.value);
                  }}
                >
                  <option value="any">any</option>
                  {arr.map((e) => {
                    return (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="marime a">
                <h3>marime</h3>
                <select
                  onChange={(e) => {
                    setFilterMarime(e.target.value);
                  }}
                >
                  <option value="any">any</option>
                  {marime.map((e) => {
                    return (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="date a">
                <h3>data</h3>
                <select
                  onChange={(e) => {
                    setFilterDate(e.target.value);
                  }}
                >
                  <option value="any">any</option>
                  {date.map((e) => {
                    return (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="links">
              <ShowLinks data={filtrare(Data)} />
            </div>
          </div>
        </div>
      )}
      <Help text="Click pur si simplu pe unul dintre foldere, butoanele de sortare e pentru a verifica doar o anumita grupa de fisiere. Succes în găsirea fișierului" />
    </>
  );
}

export default Sort;
