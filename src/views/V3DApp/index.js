//import ChromePicker from "react-color";
// import { VideoPlayer } from "../../components/VideoPlayer";
// import AllPagesPDFViewer from "../../components/pdf/all-pages";
// import { exec } from "apexcharts";

import React from "react";
import { Carousel } from "react-carousel-minimal";
import * as v3dAppAPI from "../../components/v3dApp/app";
import "../../components/v3dApp/app.css";
import { fileSaver } from "file-saver";
import PDFViewer from "../../components/pdf/PdfViewer";
import Iframe from "react-iframe";
import OpenLink from "../../components/LinkUrl/Link";

import openExel from "../../components/LinkUrl/Exel";

const JsonStands = [
  {
    idStand: 1,
    nombreStand: "stand_2x6_v1_001",
    UrlFacebook: "https://twitter.com",
    UrlTwiter: "https://twitter.com/",
    URlLinkend: "https://www.linkedin.com/",
    UrlWhatsap: "https://www.whatsapp.com/",
    url_video:
      "https://res.cloudinary.com/yurand/video/upload/v1603732167/video_despiece_axtqye.mp4",
    url_pdf: [
      {
        link: "https://s3-ap-southeast-1.amazonaws.com/happay-local/HVP/BILL20198261213473719445688HP.pdf",
        descripcion: "Agromin, documentro pdf 001",
      },
      {
        link: "https://www.who.int/hrh/resources/WISN_SP_Software-manual.pdf",
        descripcion: "Agromin, documentro pdf 002",
      },
    ],
    url_exel: [
      {
        link: "https://testagromin.blob.core.windows.net/media/Ejercicio VAN TIR y Punto de Equilibrio.xlsx",
        descripcion: "archivo excel 1",
      },
      {
        link: "https://testagromin.blob.core.windows.net/media/Ejercicio VAN TIR y Punto de Equilibrio.xlsx",
        descripcion: "archivo excel 2",
      },
    ],

    url_imgs: [
      {
        image: "https://i.ytimg.com/vi/GRatOTD6raQ/maxresdefault.jpg",
        caption: "Agromin",
      },
      {
        image: "https://i.ytimg.com/vi/GRatOTD6raQ/maxresdefault.jpg",
        caption: "Agromin",
      },
      {
        image: "https://i.ytimg.com/vi/GRatOTD6raQ/maxresdefault.jpg",
        caption: "Agromin",
      },
    ],
  },

  {
    idStand: 2,
    nombreStand: "stand_2x6_v1_002",
    UrlFacebook: "https://twitter.com/",
    UrlTwiter: "https://twitter.com/",
    URlLinkend: "https://twitter.com",
    UrlWhatsap: "https://twitter.com",
    url_video:
      "https://r5---sn-a5meknle.googlevideo.com/videoplayback?expire=1632287786&ei=yWdKYbWDPe2L-LAP-96kuAk&ip=190.108.93.85&id=o-ABY8IfsLPkGRB02GSRgSvVjAbGZCHbzTNhiRfdSrLnjf&itag=22&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ns=wOEFn8pd1RTJ4C28CFMJQdMG&cnr=14&ratebypass=yes&dur=2224.889&lmt=1631511747730303&fexp=24001373,24007246&c=WEB&txp=5432434&n=1txT3J-QstakfyD0&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAJ6FFRfiWbNjCqSZunorm_UnOacR__jCITx6s_MWgFhJAiAMKFG8eROxqpXJnh9vEkjX3MWv4Wl3AwSSk5BNhMWdMg%3D%3D&cm2rm=sn-pouxgoxm5-aphl7s,sn-njaes76&req_id=f9ec6f3a0134a3ee&ipbypass=yes&redirect_counter=3&rm=sn-bg06e76&cms_redirect=yes&mh=58&mm=39&mn=sn-a5meknle&ms=ltr&mt=1632265232&mv=m&mvi=5&pl=24&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAIHVNrGJa1ReRckfaqXWc05UVF_LBYdteLBPzeOxwpMjAiEAjOoG0KWTKUUAhLOyz4i1FHGboMGk2aENv5e4JZQI44g%3D",
    url_pdf: "https://pichanchon.files.wordpress.com/2016/09/verbos.pdf",
  },
  {
    idStand: 3,
    nombreStand: "stand_2x6_v1_003",
    UrlFacebook: "https://twitter.com/",
    UrlTwiter: "https://twitter.com/",
    URlLinkend: "https://twitter.com",
    UrlWhatsap: "https://twitter.com",
    url_pdf: "https://core.ac.uk/download/pdf/80562773.pdf",
  },
  {
    idStand: 4,
    nombreStand: "stand_2x6_v1_004",

    UrlFacebook: "https://twitter.com/",
    UrlTwiter: "https://twitter.com/",
    URlLinkend: "https://twitter.com",
    UrlWhatsap: "https://twitter.com",
    url_pdf: "https://core.ac.uk/download/pdf/80562773.pdf",
  },
  {
    idStand: 5,
    nombreStand: "stand_2x6_v1_005",
    UrlFacebook: "https://twitter.com/",
    UrlTwiter: "https://twitter.com/",
    URlLinkend: "https://twitter.com",
    UrlWhatsap: "https://twitter.com",
    url_pdf: "https://core.ac.uk/download/pdf/80562773.pdf",
  },
  {
    idStand: 6,
    nombreStand: "stand_2x6_v1_006",
    UrlFacebook: "https://twitter.com/",
    UrlTwiter: "https://twitter.com/",
    URlLinkend: "https://twitter.com",
    UrlWhatsap: "https://twitter.com",
    url_pdf: "https://core.ac.uk/download/pdf/80562773.pdf",
  },
];

const urlImages = [];

class V3DApp extends React.Component {
  #app = null;

  constructor(props) {
    super(props);

    this.state = {
      buttonActive: null,
      buttonsIndex: [0, 1],
      displayColorPicker: false,
      displayColorPicker2: false,
      xoffset: 73,
      yoffset: 25,
      delta: 10,
      opacity: 1,
      contadorPdf: 0,
      BeginPlaye: 0,
      hideMap: true,
      hasPdf: false,
      hasPdfReceptor: false,
      hasVideo: false,
      hasVideoReceptor: false,
      id_videoPlay: 0,
    };
  }
  /*************/

  handleClick = (id) => {
    console.log(id.target.id);
    if (id.target.id === "colorPick")
      this.setState({ displayColorPicker: !this.state.displayColorPicker });
    else if (id.target.id === "colorPick2")
      this.setState({ displayColorPicker2: !this.state.displayColorPicker2 });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
    this.setState({ displayColorPicker2: false });
  };
  /****************** */

  componentDidMount() {
    v3dAppAPI.createApp().then((app) => {
      this.#app = app;
    });
  }
  componentWillUnmount() {
    if (this.#app !== null) {
      this.#app.dispose();
      this.#app = null;
      console.log("dasdasdas" + JsonStands[0].idStand); ///
      // consle.log("dasdsdas"+JSON.stringify(JsonStands, null, 2));
      //
      v3dAppAPI.getUrlFacebook(JsonStands);
    }
  }

  // componentDidUpdate(prevProps, prevState){
  //   console.log("componentDidUpdate"+prevState.hasPdfReceptor);
  //   if(this.state.hasPdfReceptor!==prevState.hasPdfReceptor){
  //     this.setState({hasPdf:true})

  //   }

  // }

  saveFile() {
    fileSaver("/documents/example.pdf", "example.pdf");
  }

  myfunction() {
    this.setState({ hideMap: !this.state.hideMap });
  }

  plussPdf(t) {
    this.setState({ contadorPdf: t });
    console.log(JsonStands[0].url_pdf[0]);
    console.log(JsonStands[0].url_pdf[0].link);

    // console.log(t + " ------- " + this.state.contadorPdf);
    // if (this.state.contadorPdf >= t - 1) {
    //   this.setState({ contadorPdf: 0 });
    // } else {
    //   this.setState({ contadorPdf: this.state.contadorPdf + 1 });
    // }
  }

  id_videoPlayF(t) {
    this.setState({ id_videoPlay: t });
  }

  moveTitleTo_X = () => {
    if (this.state.BeginPlaye == 0) {
      var t = 0;
      setInterval(() => {
        if (this.state.opacity === 0.8) {
          t = 1;
        } else if (this.state.opacity === 1) {
          t = 0.8;
        }
        var pos_x = v3dAppAPI.getPositionPlayerX();
        var pos_y = v3dAppAPI.getPositionPlayerY();

        var posX_CR = 50;
        if (pos_x > 0 && pos_y > 0) {
          pos_x = posX_CR + pos_x / 2;
          pos_y = posX_CR - Math.abs(pos_y / 2);
        }

        if (pos_x < 0 && pos_y > 0) {
          pos_x = posX_CR - Math.abs(pos_x / 2);
          pos_y = posX_CR - Math.abs(pos_y / 2);
        }
        if (pos_x < 0 && pos_y < 0) {
          pos_x = posX_CR - 5 - Math.abs(pos_x / 2);
          pos_y = posX_CR + Math.abs(pos_y / 2);
        }
        if (pos_x > 0 && pos_y < 0) {
          pos_x = posX_CR + pos_x / 2;
          pos_y = posX_CR + Math.abs(pos_y / 2);
        }

        this.setState({ xoffset: pos_x + 14, yoffset: pos_y + 1, opacity: t });
      }, 300);
      this.setState({ BeginPlaye: 1 });
    }
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
    v3dAppAPI.getColor(color);
  };

  callURLFacebook = () => {};

  navigate() {
    document.getElementById("gfgFrame").src =
      "https://calendly.com/blog/share-scheduling-link/" + "&output=embed";
  }

  render() {
    /****** */
    //console.log("*********");
    //this.moveTitleTo_X();
    const self = this;
    // const popover = {
    //   position: "absolute",
    //   zIndex: "2",
    // };
    // const cover = {
    //   position: "fixed",
    //   top: "0px",
    //   right: "0px",
    //   bottom: "0px",
    //   left: "0px",
    // };
    //
    // function toggleActive(index) {
    //   self.setState({ buttonActive: self.state.buttonsIndex[index] });
    //   // console.log(self)
    // }

    // var temporalPdfPicker = v3dAppAPI.getVarOpenPdf();

    var temporalPdfPicker = v3dAppAPI.getVarOpenPdf();
    var temporalVideoPicker = v3dAppAPI.getVarOpenVideo();
    var temporalHideImage = v3dAppAPI.getVarOpen_Img();
    var temporalShowRRom = v3dAppAPI.getVarShowRoom();
    var temporalHideCalendy = v3dAppAPI.getVarCalendy();
    var temporalHideXLS = v3dAppAPI.getVar_XLS();

    var id_pdf = parseInt(v3dAppAPI.getVarID_pdf());
    var id_img = parseInt(v3dAppAPI.getVarID_Img());
    var id_video = parseInt(v3dAppAPI.getVarID_video());
    var id_Calendy = parseInt(v3dAppAPI.getVarID_Calendy());
    var id_XLS = parseInt(v3dAppAPI.getVarID_XLS());

    function toggleActiveStyle(index) {
      // console.log(self.state)
      if (self.state.buttonActive === self.state.buttonsIndex[index]) {
        // console.log("inactive")
        return "buttons active";
      } else {
        // console.log("active")
        return "buttons";
      }
    }

    const handleHidePdf = (event) => {
      const target = event.target;
      if (target.id !== "HidePdf") {
        return; // child was clicked, ignore onClick
      }
      temporalPdfPicker = false;
      v3dAppAPI.setVarOpenPdf(false);
    };

    const handleVideoClic = (event) => {
      const target = event.target;
      if (target.id !== "buttonVideo") {
        return; // child was clicked, ignore onClick
      }

      // this.setState({hasVideo: 0})
      temporalVideoPicker = false;
      v3dAppAPI.setVarOpenVideo(false);
    };

    const handleShowRROm = (event) => {
      const target = event.target;
      if (target.id !== "ShowRRoom") {
        return; // child was clicked, ignore onClick
      }

      // this.setState({hasVideo: 0})
      temporalShowRRom = false;
      v3dAppAPI.setVarShowRoom(false);
    };

    const handleCalendy = (event) => {
      const target = event.target;
      if (target.id !== "calendy") {
        return; // child was clicked, ignore onClick
      }

      // this.setState({hasVideo: 0})
      temporalHideCalendy = !temporalHideCalendy;
      v3dAppAPI.setVarShowCalendy(!v3dAppAPI.getVarCalendy());
    };

    const deleteTemporal = (event) => {
      // this.setState({hasVideo: 0})
      temporalHideCalendy = !temporalHideCalendy;
      v3dAppAPI.setVarShowCalendy(!v3dAppAPI.getVarCalendy());
    };

    const HideImage = (event) => {
      const target = event.target;
      if (target.id !== "buttonImg") {
        return; // child was clicked, ignore onClick
      }
      temporalHideImage = false;
      v3dAppAPI.setVarOpen_Img(false);
    };

    const HideXLS = (event) => {
      const target = event.target;
      if (target.id !== "buttonXLS") {
        return; // child was clicked, ignore onClick
      }
      temporalHideXLS = false;
      v3dAppAPI.setVarShow_XLS(false);
    };

    const captionStyle = {
      fontSize: "2em",
      fontWeight: "bold",
    };

    const slideNumberStyle = {
      fontSize: "20px",
      fontWeight: "bold",
    };

    const saveFile = () => {
      fileSaver(
        "https://docs.google.com/spreadsheets/d/1kRE-0l9n9WrTPQu2GuvkjKK-PRayBwdK/edit?usp=sharing&ouid=114670576968468997632&rtpof=true&sd=true",
        "example.xlsx"
      );
    };

    function open(url) {
      const win = window.open(url, "_self");
      if (win != null) {
        win.focus();
      }
    }

    return (
      <div id={v3dAppAPI.CONTAINER_ID} onClick={this.moveTitleTo_X()}>
        <div id="preloader_screen">
          <div className="skill">
            <div className="outer">
              <div className="inner">
                <div id="percentage">50%</div>
              </div>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
              className="preloader_circle"
            >
              <defs>
                <linearGradient id="GradientColor">
                  <stop offset="0%" stopColor="#e91e63" />
                  <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
              </defs>
              <circle
                id="circle"
                cx="80"
                cy="80"
                r="70"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <div className="containerColorPicker">
          {/* <div>
            <button id="colorPick" className="buttons">
              <img
                id="colorPick"
                src="/documents/separation.svg"
                onClick={this.handleClick}
              />
            </button>
            {this.state.displayColorPicker ? (
              <div id="chromePicker" style={popover}>
                <div style={cover} onClick={this.handleClose} />
                <ChromePicker
                  color={this.state.color}
                  onChange={this.handleChange}
                />
              </div>
            ) : (
              <div id="chromePicker"></div>
            )}
          </div>

          <div>
            <button id="colorPick2" className="buttons">
              <img
                id="colorPick2"
                src="/documents/separation.svg"
                onClick={this.handleClick}
              />
            </button>
            {this.state.displayColorPicker2 ? (
              <div id="chromePicker2" style={popover}>
                <div style={cover} onClick={this.handleClose} />
                <ChromePicker
                  color={this.state.color}
                  onChange={this.handleChange}
                />
              </div>
            ) : (
              <div id="chromePicker2"></div>
            )}
          </div> */}

          <div>
            <button
              id="map"
              key={1}
              className={toggleActiveStyle(0)}
              // onClick={() => {
              //   this.setState({hasPdf:!this.state.hasPdf});
              //   console.log( this.hasPdf+"--------------")
              // }}
            >
              <svg
                stroke="currentColor"
                fill="#fff"
                strokeWidth="0"
                viewBox="0 0 576 512"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M288 0c-69.59 0-126 56.41-126 126 0 56.26 82.35 158.8 113.9 196.02 6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126 414 56.41 357.59 0 288 0zm0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM20.12 215.95A32.006 32.006 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42L20.12 215.95zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72-9.13 10.77-22.44 16.95-36.51 16.95zm266.06-198.51L416 224v288l139.88-55.95A31.996 31.996 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86z"></path>
              </svg>
            </button>

            <div>
              <img
                className="buttonCalendy"
                src="./documents/calendy.png"
                onClick={(e) => deleteTemporal(e)}
              />
            </div>

            {/*<button
        id="firstPerson"
        key={2}
        className={toggleActiveStyle(1)}
        onClick={() => {
          toggleActive(1);
        }}
      >
        <svg
          stroke="currentColor"
          fill="#fff"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="100%"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M250.882 22.802c-23.366 3.035-44.553 30.444-44.553 65.935 0 19.558 6.771 36.856 16.695 48.815l11.84 14.263-18.217 3.424c-12.9 2.425-22.358 9.24-30.443 20.336-8.085 11.097-14.266 26.558-18.598 44.375-7.843 32.28-9.568 71.693-9.842 106.436h42.868l11.771 157.836c29.894 6.748 61.811 6.51 90.602.025l10.414-157.86h40.816c-.027-35.169-.477-75.126-7.584-107.65-3.918-17.934-9.858-33.372-18.04-44.343-8.185-10.97-18.08-17.745-32.563-19.989l-18.592-2.88 11.736-14.704c9.495-11.897 15.932-28.997 15.932-48.082 0-37.838-23.655-65.844-49.399-65.844z"></path>
        </svg>
      </button>*/}
          </div>
        </div>
        <div
          id="fullscreen_button"
          className="fullscreen-button fullscreen-open"
          title="Toggle fullscreen mode"
        ></div>

        <div id="hideElement" className="margin_map">
          <div className="marginInside_gps1">
            <button id="location1" className="ButtonCss">
              <img
                src="./documents/01-inicio.png"
                alt="my image"
                onClick={(this.myfunction, this.moveTitleTo_X)}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </button>
          </div>

          <div className="marginInside_gps2">
            <button id="location2" className="ButtonCss">
              <img
                src="./documents/001-food-stand.svg"
                alt="posicion 1 del minimapa"
                onClick={(this.myfunction, this.moveTitleTo_X)}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </button>
          </div>

          <div className="marginInside_gps3">
            <button id="location3" className="ButtonCss">
              <img
                src="./documents/001-food-stand.svg"
                alt="my image2"
                onClick={(this.myfunction, this.moveTitleTo_X)}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </button>
          </div>

          <div className="marginInside_gps4">
            <button id="location4" className="ButtonCss">
              <img
                src="./documents/001-food-stand.svg"
                alt="my image2"
                onClick={(this.myfunction, this.moveTitleTo_X)}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </button>
          </div>

          <div className="marginInside_gps5">
            <button id="location5" className="ButtonCss">
              <img
                src="./documents/001-noticias.svg"
                alt="my image2"
                onClick={(this.myfunction, this.moveTitleTo_X)}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </button>
          </div>

          <div className="marginInside_gps6">
            <button id="location6" className="ButtonCss">
              <img
                src="./documents/001-food-stand.svg"
                alt="my image2"
                onClick={(this.myfunction, this.moveTitleTo_X)}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </button>
          </div>

          <div className="marginInside_gps7">
            <button id="location7" className="ButtonCss">
              <img
                src="./documents/003-conferencias.svg"
                alt="my image2"
                onClick={(this.myfunction, this.moveTitleTo_X)}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </button>
          </div>

          <div className="marginInside_gps8">
            <button id="location8" className="ButtonCss">
              <img
                src="./documents/007-b2b.svg"
                alt="my image2"
                onClick={(this.myfunction, this.moveTitleTo_X)}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </button>
          </div>

          <div
            style={{
              borderColor: "red",
              position: "absolute",
              left: `${this.state.xoffset}%`,
              top: `${this.state.yoffset}%`,
              width: "10%",
              height: "10%",
            }}
          >
            <button
              id="location4"
              className="ButtonCssPlayer"
              style={{ opacity: this.state.opacity }}
            >
              <img
                src="./documents/008-alfiler.svg"
                alt="my image3"
                style={{
                  width: "100%",
                  height: "100%",
                  opacity: this.state.opacity,
                }}
              />
            </button>
          </div>
        </div>

        {temporalPdfPicker !== false && (
          <div
            id="HidePdf"
            className="BackGroundWhite"
            onClick={(e) => handleHidePdf(e)}
          >
            <div className="stileIMG">
              {JsonStands[0].url_pdf.length >= 1 && (
                <div className="ButtonPosition_1">
                  <div className="borderButton">
                    <img
                      src="./documents/img_pdf/pdf2.JPG"
                      onClick={() => this.plussPdf(0)}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div>{JsonStands[0].url_pdf[0].descripcion}</div>
                </div>
              )}
              {JsonStands[0].url_pdf.length >= 2 && (
                <div className="ButtonPosition_2">
                  <div className="borderButton">
                    <img
                      src="./documents/img_pdf/pdf1.JPG"
                      onClick={() => this.plussPdf(1)}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div>{JsonStands[0].url_pdf[1].descripcion}</div>
                </div>
              )}
              {JsonStands[0].url_pdf.length >= 3 && (
                <div className="ButtonPosition_3">
                  <div className="borderButton">
                    <img
                      src="./documents/img_pdf/pdf2.JPG"
                      onClick={() => this.plussPdf(2)}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div>{JsonStands[0].url_pdf[2].descripcion}</div>
                </div>
              )}
              {JsonStands[0].url_pdf.length >= 4 && (
                <div className="ButtonPosition_4">
                  <div className="borderButton">
                    <img
                      src="./documents/img_pdf/pdf1.JPG"
                      onClick={() => this.plussPdf(3)}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div>{JsonStands[0].url_pdf[3].descripcion}</div>
                </div>
              )}
            </div>
            <PDFViewer
              pdf={JsonStands[0].url_pdf[this.state.contadorPdf].link}
            />
            <img
              id="HidePdf"
              className="buttonClosePDF"
              src="./documents/close.svg"
              onClick={(e) => handleHidePdf(e)}
            ></img>
          </div>
        )}

        {temporalVideoPicker !== false && (
          <div
            id="buttonVideo"
            className="BackGroundWhite"
            onClick={(e) => handleVideoClic(e)}
          >
            <Iframe
              url={JsonStands[0].url_video}
              display="initial"
              height="100"
              width="100"
              playing={true}
            />
            <img
              id="buttonVideo"
              className="buttonCloseSR"
              src="./documents/close.svg"
              onClick={(e) => handleVideoClic(e)}
            ></img>
          </div>
        )}

        {temporalShowRRom !== false && (
          <div
            id="ShowRRoom"
            className="BackGroundWhite"
            onClick={(e) => handleShowRROm(e)}
          >
            <iframe
              allow="camera; microphone; fullscreen; display-capture; autoplay"
              src="https://meet.jit.si/AutomaticGodsInformNervously"
              width="100%"
            ></iframe>
            <img
              id="ShowRRoom"
              className="buttonCloseSR"
              src="./documents/close.svg"
              onClick={(e) => handleShowRROm(e)}
            ></img>
          </div>
        )}

        {temporalHideImage !== false && (
          <div
            id="buttonImg"
            className="BackGroundWhite"
            onClick={(e) => HideImage(e)}
          >
            <Carousel
              //data={JsonStands[id_img-1].url_imgs}
              data={JsonStands[0].url_imgs}
              time={5000}
              width="850px"
              height="500px"
              captionStyle={captionStyle}
              radius="20px"
              //slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
              }}
            />
            <img
              id="buttonImg"
              className="buttonCloseIMG"
              src="./documents/close.svg"
              onClick={(e) => HideImage(e)}
            ></img>
          </div>
        )}

        {temporalHideCalendy !== false && (
          <div
            id="calendy"
            className="BackGroundWhite"
            onClick={(e) => handleCalendy(e)}
          >
            <OpenLink />
            <img
              className="buttonClose"
              src="./documents/close.svg"
              onClick={(e) => deleteTemporal(e)}
            ></img>
          </div>
        )}

        {temporalHideXLS !== false && (
          <div
            id="buttonXLS"
            className="BackGroundWhite"
            onClick={(e) => HideXLS(e)}
          >
            <div className="BG_xls">
              {JsonStands[0].url_exel.length >= 1 && (
                <div className="xlsx_img1">
                  <img
                    src="./documents/img_pdf/xlsx_icon.svg"
                    onClick={() => open(JsonStands[0].url_exel[0].link)}
                  />
                  <h4>archivo excel 1</h4>
                </div>
              )}
              {JsonStands[0].url_exel.length >= 2 && (
                <div className="xlsx_img2">
                  <img
                    src="./documents/img_pdf/xlsx_icon.svg"
                    onClick={() => open(JsonStands[0].url_exel[1].link)}
                  />
                  <h4>archivo excel 2</h4>
                </div>
              )}
            </div>
            <img
              id="buttonXLS"
              className="buttonClosexls"
              src="./documents/close.svg"
              onClick={(e) => HideXLS(e)}
            ></img>
          </div>
        )}

        {/* <div style={{position:"absolute", top:"0px",left:"0px"}}>
          <openExel />
        </div> */}
      </div>
    );
  }
}

export default V3DApp;
