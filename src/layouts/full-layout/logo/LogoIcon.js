import React from "react";
import { Link } from "react-router-dom";
// import { ReactComponent as LogoDark } from "../../../assets/images/logos/Agromin.png";
// import { ReactComponent as LogoLight } from "../../../assets/images/logos/Agromin.png";
import img1 from "../../../assets/images/logos/Agromin.png";
import { useSelector } from "react-redux";
const LogoIcon = () => {
  const customizer = useSelector((state) => state.CustomizerReducer);
  return (
    <Link underline="none" to="/auth/login">
      {customizer.activeMode === "dark" ?               
              <img
                src={img1}
                alt="bg"
                style={{
                  width: "80%",
                  // maxWidth: "812px",
                  height: "80%"
                }}
              /> :              
              <img
                src={img1}
                alt="bg"
                style={{
                  width: "80%",
                  // maxWidth: "812px",
                  height: "80%"
                }}
              />
            }
    </Link>
  );
};

export default LogoIcon;
