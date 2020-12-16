import React from "react";

function ShowLinks({ data }) {

    const test = (d) => {
        if (d.link === "/Dif") {
            window.sessionStorage.setItem("ShowLinks", "true");
            window.location.pathname = d.link;
        }
        else {
            alert("Ai ales gresit")
        }
    }

  return (
    <>
      {data.map((d) => {
        return (
          <>
            <div key={d.id} style={{ margin: "10px" }} onClick={()=>{test(d)}} className="nu">
              <i className="far fa-folder-open"></i>
              <h3>{d.name}</h3>
              <h3>{d.marime} KB</h3>
              <h3>.{d.extensie}</h3>
            </div>
          </>
        );
      })}
    </>
  );
}

export default ShowLinks;
