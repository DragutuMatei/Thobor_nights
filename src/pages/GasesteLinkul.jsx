import React from "react";
import ImageMapper from "react-image-mapper";
import Back from "../components/Back";
import Help from "../components/Help";

function GasesteLinkul() {
  const src = require("../img/maps.jpg").default;
  const AREAS_MAP = {
    name: "map",
    areas: [
      {
        _id: 0,
        shape: "poly",
        coords: [
          1115,
          1186,
          1151,
          1212,
          1195,
          1218,
          1235,
          1202,
          1274,
          1151,
          1275,
          1111,
          1250,
          1058,
          1205,
          1043,
          1169,
          1040,
          1158,
          1040,
          1151,
          1069,
          1131,
          1078,
          1110,
          1087,
          1099,
          1095,
          1098,
          1113,
          1091,
          1138,
          1099,
          1159,
        ],
        href: "#",
      },
      {
        _id: 1,
        shape: "poly",
        coords: [
          1768,
          811,
          1823,
          817,
          1816,
          808,
          1823,
          785,
          1802,
          797,
          1802,
          775,
          1813,
          769,
          1802,
          762,
          1791,
          772,
          1798,
          777,
          1796,
          787,
          1773,
          774,
          1770,
          789,
          1767,
          798,
        ],
        href: "#",
      },
      {
        _id: 2,
        shape: "poly",
        coords: [701, 438, 685, 407, 646, 396, 629, 440, 628, 465, 684, 476],
        href: "#",
      },
      {
        _id: 3,
        shape: "poly",
        coords: [
          786,
          484,
          807,
          499,
          816,
          472,
          817,
          463,
          800,
          432,
          782,
          421,
          789,
          391,
          764,
          377,
          729,
          393,
          718,
          421,
          755,
          416,
          775,
          440,
          804,
          466,
          798,
          480,
        ],
        href: "#",
      },

      {
        _id: 4,
        shape: "poly",
        coords: [
          408,
          177,
          433,
          118,
          431,
          86,
          451,
          81,
          475,
          83,
          478,
          62,
          498,
          66,
          511,
          48,
          565,
          34,
          567,
          19,
          535,
          10,
          540,
          1,
          371,
          5,
          371,
          19,
          353,
          22,
          341,
          47,
          355,
          56,
          355,
          93,
          369,
          97,
          363,
          134,
        ],
        href: "#",
      },
      {
        _id: 5,
        shape: "poly",
        coords: [
          1819,
          459,
          1816,
          416,
          1832,
          378,
          1883,
          346,
          1895,
          352,
          1889,
          374,
          1868,
          367,
          1870,
          394,
          1873,
          423,
          1823,
          454,
        ],
        href: "#",
      },
      {
        _id: 6,
        shape: "poly",
        coords: [
          143,
          314,
          211,
          323,
          251,
          320,
          267,
          314,
          304,
          297,
          290,
          267,
          266,
          266,
          291,
          255,
          264,
          252,
          249,
          179,
          210,
          196,
          207,
          159,
          167,
          134,
          155,
          141,
          151,
          175,
          144,
          194,
          147,
          224,
          122,
          245,
          136,
          264,
          129,
          288,
        ],
        href: "#",
      },
      {
        _id: 7,
        shape: "poly",
        coords: [
          486,
          1081,
          350,
          1074,
          330,
          1042,
          345,
          517,
          377,
          489,
          518,
          496,
          496,
          454,
          469,
          441,
          101,
          619,
          379,
          1140,
        ],
        href: "#",
      },
      {
        _id: 8,
        shape: "poly",
        coords: [
          500,
          1209,
          512,
          1215,
          552,
          1286,
          602,
          1309,
          703,
          1310,
          748,
          1265,
          769,
          1207,
          791,
          1197,
          812,
          1205,
          847,
          1285,
          905,
          1319,
          975,
          1319,
          1024,
          1292,
          1052,
          1250,
          1069,
          1210,
          1083,
          1210,
          1097,
          1169,
          1071,
          1161,
          1024,
          1138,
          947,
          1128,
          871,
          1130,
          836,
          1150,
          825,
          1165,
          792,
          1172,
          764,
          1165,
          709,
          1130,
          620,
          1126,
          562,
          1139,
          533,
          1158,
          493,
          1168,
        ],
        href: "#",
      },
      {
        _id: 9,
        shape: "poly",
        coords: [
          945,
          297,
          985,
          184,
          973,
          189,
          967,
          153,
          951,
          166,
          937,
          155,
          920,
          192,
          875,
          206,
          875,
          185,
          859,
          191,
          822,
          253,
          857,
          269,
          869,
          233,
          910,
          233,
          882,
          273,
          902,
          285,
        ],
        href: "#",
      },
      {
        _id: 10,
        shape: "circle",
        coords: [1500, 315, 21],
        href: "#",
      },
      {
        _id: 11,
        shape: "circle",
        coords: [1492, 757, 34],
        href: "#",
      },
      {
        _id: 12,
        shape: "circle",
        coords: [1484, 408, 52],
        href: "#",
      },
      {
        _id: 13,
        shape: "poly",
        coords: [1420, 1002, 868, 779, 809, 771, 858, 807, 1411, 1029],
        href: "#",
      },
      {
        _id: 14,
        shape: "circle",
        coords: [1159, 300, 125],
        href: "#",
      },
      {
        _id: 15,
        shape: "poly",
        coords: [
          640,
          316,
          594,
          216,
          592,
          191,
          586,
          171,
          582,
          139,
          601,
          163,
          611,
          182,
          631,
          202,
          672,
          290,
          673,
          308,
        ],
        href: "#",
      },
    ],
  };

  const onMapClick = (area, index) => {
    switch (index) {
      case 0:
        window.sessionStorage.setItem("findLink", "true");
        window.location.pathname = "/Steaguri";
        break;
      case 1:
        window.location.href = "https://www.facebook.com/ThoborCNCH";
        break;
      case 2:
        window.location.href = "https://www.instagram.com/thoborcnch/";
        break;
      case 3:
        window.location.href =
          "https://www.youtube.com/channel/UCoUzT42Ce6f_11ICDef3svA";
        break;
      default:
        window.alert("Linkul gresit!");
        break;
    }
  };

  return (
    <>
      <Back />
      <ImageMapper
        src={src}
        map={AREAS_MAP}
        fillColor="rgba(255, 255, 255, 0.0)"
        strokeColor="rgba(0, 0, 0, 0.0)"
        onClick={onMapClick}
      />
      <Help text="Mișcă mouse-ul de-a lungul imaginii pentru găsirea link-ului corect pentru următorul nivel." />
    </>
  );
}

export default GasesteLinkul;
