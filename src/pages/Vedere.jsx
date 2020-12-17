import React, { useState } from "react";
import Back from "../components/Back";
import Help from "../components/Help";
import { Link } from "react-router-dom";

function Vedere() {
  const [code, setCode] = useState("");
  const [corect, setCorect] = useState(false);

  const submit = () => {
    const ras = code
      .trim()
      .toString()
      .toLowerCase()
      .split("")
      .filter((e) => e.trim().length)
      .join("");

    if (ras === "pi=3.1415") {
      window.sessionStorage.setItem("Vedere", true);
      setCorect(true);
    } else {
      alert("Raspunsul e gresit");
      setCorect(false);
    }
  };

  return (
    <>
      {window.sessionStorage.getItem("Bule") && (
        <>
          <div
            className="fullPage l"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              padding: "0 100px",
            }}
          >
            <Back />
            <div className="cerinta" style={{ margin: 50 }}>
              Gaseste codul:
            </div>
            <div className="codul" style={{ margin: "20px 0 50px 0" }}>
              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="150" cy="150" r="150" fill="#EFA073" />
                <path
                  d="M173.422 165.617H187.625V176.234H173.422V200H160.344V176.234H113.727V168.57L159.57 97.625H173.422V165.617ZM128.492 165.617H160.344V115.414L158.797 118.227L128.492 165.617Z"
                  fill="#E7976A"
                />
              </svg>

              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="150" cy="150" r="150" fill="#497723" />
                <path
                  d="M135.383 159.922V200H121.883V97.625H159.641C170.844 97.625 179.609 100.484 185.938 106.203C192.312 111.922 195.5 119.492 195.5 128.914C195.5 138.852 192.383 146.516 186.148 151.906C179.961 157.25 171.078 159.922 159.5 159.922H135.383ZM135.383 148.883H159.641C166.859 148.883 172.391 147.195 176.234 143.82C180.078 140.398 182 135.477 182 129.055C182 122.961 180.078 118.086 176.234 114.43C172.391 110.773 167.117 108.875 160.414 108.734H135.383V148.883Z"
                  fill="#4D722F"
                />
              </svg>

              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="150" cy="150" r="150" fill="#01A66F" />
                <path
                  d="M155.977 200H142.969V123.922H155.977V200ZM141.914 103.742C141.914 101.633 142.547 99.8516 143.812 98.3984C145.125 96.9453 147.047 96.2188 149.578 96.2188C152.109 96.2188 154.031 96.9453 155.344 98.3984C156.656 99.8516 157.312 101.633 157.312 103.742C157.312 105.852 156.656 107.609 155.344 109.016C154.031 110.422 152.109 111.125 149.578 111.125C147.047 111.125 145.125 110.422 143.812 109.016C142.547 107.609 141.914 105.852 141.914 103.742Z"
                  fill="#16A776"
                />
              </svg>

              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="150" cy="150" r="150" fill="#C80F2D" />
                <path
                  d="M137.422 142.484H147.195C153.336 142.391 158.164 140.773 161.68 137.633C165.195 134.492 166.953 130.25 166.953 124.906C166.953 112.906 160.977 106.906 149.023 106.906C143.398 106.906 138.898 108.523 135.523 111.758C132.195 114.945 130.531 119.188 130.531 124.484H117.523C117.523 116.375 120.477 109.648 126.383 104.305C132.336 98.9141 139.883 96.2188 149.023 96.2188C158.68 96.2188 166.25 98.7734 171.734 103.883C177.219 108.992 179.961 116.094 179.961 125.188C179.961 129.641 178.508 133.953 175.602 138.125C172.742 142.297 168.828 145.414 163.859 147.477C169.484 149.258 173.82 152.211 176.867 156.336C179.961 160.461 181.508 165.5 181.508 171.453C181.508 180.641 178.508 187.93 172.508 193.32C166.508 198.711 158.703 201.406 149.094 201.406C139.484 201.406 131.656 198.805 125.609 193.602C119.609 188.398 116.609 181.531 116.609 173H129.688C129.688 178.391 131.445 182.703 134.961 185.938C138.477 189.172 143.188 190.789 149.094 190.789C155.375 190.789 160.18 189.148 163.508 185.867C166.836 182.586 168.5 177.875 168.5 171.734C168.5 165.781 166.672 161.211 163.016 158.023C159.359 154.836 154.086 153.195 147.195 153.102H137.422V142.484Z"
                  fill="#CA1331"
                />
              </svg>

              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="150" cy="150" r="150" fill="#E8857C" />
                <path
                  d="M161.258 200H148.18V113.305L121.953 122.938V111.125L159.219 97.1328H161.258V200Z"
                  fill="#E8887F"
                />
              </svg>

              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="150" cy="150" r="150" fill="#29292E" />
                <path
                  d="M161.258 200H148.18V113.305L121.953 122.938V111.125L159.219 97.1328H161.258V200Z"
                  fill="#2C2C2F"
                />
              </svg>

              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="150" cy="150" r="150" fill="#0D684A" />
                <path
                  d="M124.484 148.672L129.688 97.625H182.141V109.648H140.727L137.633 137.562C142.648 134.609 148.344 133.133 154.719 133.133C164.047 133.133 171.453 136.227 176.938 142.414C182.422 148.555 185.164 156.875 185.164 167.375C185.164 177.922 182.305 186.242 176.586 192.336C170.914 198.383 162.969 201.406 152.75 201.406C143.703 201.406 136.32 198.898 130.602 193.883C124.883 188.867 121.625 181.93 120.828 173.07H133.133C133.93 178.93 136.016 183.359 139.391 186.359C142.766 189.312 147.219 190.789 152.75 190.789C158.797 190.789 163.531 188.727 166.953 184.602C170.422 180.477 172.156 174.781 172.156 167.516C172.156 160.672 170.281 155.188 166.531 151.062C162.828 146.891 157.883 144.805 151.695 144.805C146.023 144.805 141.57 146.047 138.336 148.531L134.891 151.344L124.484 148.672Z"
                  fill="#0D704F"
                />
              </svg>

              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="150" cy="150" r="150" fill="#7A1650" />
                <path
                  d="M179.328 142.766H120.688V131.445H179.328V142.766ZM179.328 171.945H120.688V160.695H179.328V171.945Z"
                  fill="#7C1B54"
                />
              </svg>

              <svg
                width="300"
                height="300"
                viewBox="0 0 300 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="150" cy="150" r="150" fill="#242021" />
                <path
                  d="M141.125 143.18C141.125 140.93 141.781 139.055 143.094 137.555C144.453 136.055 146.469 135.305 149.141 135.305C151.812 135.305 153.828 136.055 155.188 137.555C156.594 139.055 157.297 140.93 157.297 143.18C157.297 145.336 156.594 147.141 155.188 148.594C153.828 150.047 151.812 150.773 149.141 150.773C146.469 150.773 144.453 150.047 143.094 148.594C141.781 147.141 141.125 145.336 141.125 143.18Z"
                  fill="#2D2527"
                />
              </svg>
            </div>
            <div className="rasp">
              <input
                type="text"
                placeholder="Scrie codul"
                onChange={(e) => {
                  setCode(e.target.value);
                }}
              />

              <button type="submit" onClick={submit}>
                Submit
              </button>
            </div>

            <div className="rez">
              {corect ? (
                <h1>
                  <Link
                    to="/Bilet"
                    style={{ color: "white", fontSize: 20, fontFamily: "Lato" }}
                  >
                    Urmatorul nivel
                  </Link>
                </h1>
              ) : null}
            </div>
          </div>
          <Help text="ksajdbkasjbdkasj dkjaskdbkas dkasbd kasbd kabkb ksajdbkasjbdkasj dkjaskdbkas dkasbd kasbd kabkb ksajdbkasjbdkasj dkjaskdbkas dkasbd kasbd kabkb ksajdbkasjbdkasj dkjaskdbkas dkasbd kasbd kabkb ksajdbkasjbdkasj dkjaskdbkas dkasbd kasbd kabkb ksajdbkasjbdkasj dkjaskdbkas dkasbd kasbd kabkb ksajdbkasjbdkasj dkjaskdbkas dkasbd kasbd kabkb ksajdbkasjbdkasj dkjaskdbkas dkasbd kasbd kabkb ksajdbkasjbdkasj dkjaskdbkas dkasbd kasbd kabkb ksajdbkasjbdkasj dkjaskdbkas dkasbd kasbd kabkb ksajdbkasjbdkasj dkjaskdbkas dkasbd kasbd kabkb ksajdbkasjbdkasj dkjaskdbkas dkasbd kasbd kabkb ksajdbkasjbdkasj dkjaskdbkas dkasbd kasbd kabkb ksajdbkasjbdkasj dkjaskdbkas dkasbd kasbd kabkb " />
        </>
      )}
    </>
  );
}

export default Vedere;