import React, { useState } from "react";
import Back from "../components/Back";
import { Link } from "react-router-dom";
import Help from "../components/Help";

function FindTheWords() {
  const [text, setText] = useState("");
  const [corect, setCorect] = useState(false);

  const submit = () => {
    const txt = text
      .trim()
      .toString()
      .toLowerCase()
      .split("")
      .filter((e) => e.trim().length)
      .join("");
    if (txt === "i-aajunscutitullaos") {
      setCorect(true);
    } else {
      alert("Raspunsul e gresit");
      setCorect(false);
    }
  };

  return (
    <>
      {window.sessionStorage.getItem("Coor") && (
        <div
          className="fullPage "
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            padding: "0 100px",
          }}
        >
          <Back />
          <div className="backk"></div>
          <div className="cerinta">
            Cautati cuvintele din textul acesta si fa un proveb
          </div>
          <div
            className="mesaje col"
            style={{
              fontSize: 20,
              letterSpacing: 2,
              fontFamily: "Lato",
              textIndent: 30,
            }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae,
            "la" ! Odio, vitae ullam, blanditiis error facilis ipsum laborum
            corrupti reprehenderit voluptate eligendi quidem. Tempore minus
            laborum error tenetur magnam fugit iusto eaque quos consequatur
            perspiciatis maiores "I-a" aut, harum accusamus aliquid nihil! Quod
            deleniti repellat est nostrum omnis ex voluptatem consectetur fugit
            dicta numquam. Dicta quasi, consequatur, officiis aut accusantium id
            asperiores quisquam voluptates suscipit voluptas dolorum architecto
            consequuntur, soluta sequi laborum! Asperiores id vero quia
            suscipit? Maxime et numquam non "cutitul" ex animi repellat delectus
            repellendus ea molestias vel maiores assumenda nihil tempora id,
            eaque quidem aut. Tenetur, nam labore. Vero corporis pariatur
            explicabo tempora quod dolores rem consectetur eos distinctio amet
            modi ex, facere veritatis atque tenetur. Nisi, voluptates molestias?
            Quisquam, iure magnam quia in veniam commodi fuga et amet esse aut
            blanditiis, placeat nemo porro, accusantium vitae ipsa vel deserunt
            provident iste libero saepe facilis sint itaque! Ex voluptates
            distinctio nulla dignissimos sed exercitationem corrupti vitae culpa
            est, porro sequi amet a deleniti modi aliquid quasi unde "ajuns"
            laborum corporis iure, ipsum, sunt deserunt impedit quidem. Dolore,
            earum iure blanditiis hic fugit repellat, cumque tenetur magnam
            numquam dolor voluptatem ducimus corrupti. Repellat necessitatibus
            veritatis, ex assumenda libero tenetur pariatur odio dolores illum
            tempora ipsa optio nihil obcaecati! Repellat sequi similique
            cupiditate culpa? Qui unde corporis quam, animi "os" non id
            explicabo. Velit quibusdam aperiam corporis praesentium facilis,
            nemo dignissimos numquam, a atque, unde officiis vero non doloremque
            optio consequatur explicabo! Dolore, ut officiis fugiat id, atque
            officia commodi ducimus nisi eligendi dicta quam ipsam aliquid
            expedita, quis explicabo. Neque placeat, optio tempora voluptas hic
            id libero ab harum nobis quia voluptatibus. Voluptat
          </div>
          <div className="rasp">
            <input
              type="text"
              style={{ width: "400px" }}
              placeholder="Scrie provebul"
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                submit();
              }}
            >
              Submit
            </button>
          </div>

          {corect ? (
            <h1 style={{ zIndex: 3 }} onClick={() => {
              window.sessionStorage.setItem("findTheWords", "true");
            }}>
              <Link
                to="/Bin"
                style={{ color: "white", fontSize: 20, fontFamily: "Lato" }}
              >
                Urmatorul nivel
              </Link>
            </h1>
          ) : null}
        </div>
      )}
      <Help text="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem " />
    </>
  );
}

export default FindTheWords;
