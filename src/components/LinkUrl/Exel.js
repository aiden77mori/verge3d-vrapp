import React from "react";
import "../../components/v3dApp/app.css";

const App = () => {
  function open(url) {
    const win = window.open(url, "_blank");
    if (win != null) {
      win.focus();
    }
  }
  return (
    <div className="BG_xls">
      <div className="xlsx_img1">
        <img
          src="./documents/img_pdf/xlsx_icon.svg"
          onClick={() =>
            open(
              "https://testagromin.blob.core.windows.net/media/Ejercicio VAN TIR y Punto de Equilibrio.xlsx"
            )
          }
        ></img>
        <h4>archivo excel 1</h4>
      </div>
      <div className="xlsx_img2">
        <img
          src="./documents/img_pdf/xlsx_icon.svg"
          onClick={() =>
            open(
              "https://testagromin.blob.core.windows.net/media/Ejercicio VAN TIR y Punto de Equilibrio.xlsx"
            )
          }
        ></img>
        <h4>archivo excel 2</h4>
      </div>
    </div>
  );
};

export default App;
