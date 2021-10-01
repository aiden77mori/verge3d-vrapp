import React from "react";
// import ChromePicker from "react-color";

import * as v3dAppAPI from "../v3dApp/app";
import "../v3dApp/app.css";

import { saveAs } from "file-saver";

var hide = true;

class V3DApp extends React.Component {
  #app = null;

  constructor(props) {
    super(props);
    this.state = {
      buttonActive: null,
      buttonsIndex: [0, 1],
      displayColorPicker: false,
      xoffset: 50,
      yoffset: 50,
      delta: 10,
    };
  }
  /*************** */

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
  /******************* */

  componentDidMount() {
    v3dAppAPI.createApp().then((app) => {
      this.#app = app;
    });
  }

  componentWillUnmount() {
    if (this.#app !== null) {
      this.#app.dispose();
      this.#app = null;
    }
  }

  saveFile() {
    saveAs("/documents/example.pdf", "example.pdf");
  }

  myfunction() {
    if (hide == true) {
      //document.getElementById('hideElement').style.display="none";
      return (hide = false);
    } else {
      //document.getElementById('hideElement').style.display="inline";
      return (hide = true);
    }
  }

  moveTitleTo_X = () => {
    setInterval(() => {
      var pos_x = v3dAppAPI.getPositionPlayerX();
      var pos_y = v3dAppAPI.getPositionPlayerY();
      if (pos_x > 0 && pos_y > 0) {
        pos_x = 50 + pos_x / 2;
        pos_y = 50 - Math.abs(pos_y / 2);
      }
      if (pos_x < 0 && pos_y > 0) {
        pos_x = 50 - Math.abs(pos_x / 2);
        pos_y = 50 - Math.abs(pos_y / 2);
      }
      if (pos_x < 0 && pos_y < 0) {
        pos_x = 50 - Math.abs(pos_x / 2);
        pos_y = 50 + Math.abs(pos_y / 2);
      }
      if (pos_x > 0 && pos_y < 0) {
        pos_x = 50 + pos_x / 2;
        pos_y = 50 + Math.abs(pos_y / 2);
      }

      //console.log(pos_x + " / " + pos_y + " PX, PY");

      this.setState({ xoffset: pos_x - 10, yoffset: pos_y - 10 });
    }, 1000);
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
    v3dAppAPI.getColor(color);
  };

  render() {
    /****** */
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
    function toggleActive(index) {
      self.setState({ buttonActive: self.state.buttonsIndex[index] });
      // console.log(self)
    }

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

    return (
      <div id={v3dAppAPI.CONTAINER_ID}>
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
        <div>
          {/*
      <button id="colorPick" className="buttons" onClick={this.handleClick}>
        Pick Color
      </button>
      {this.state.displayColorPicker ? (
        <div id="chromePicker" style={popover}>
          <div style={cover} onClick={this.handleClose} />
          <ChromePicker
            color={this.state.color}
            onChange={this.handleChange}
          />
        </div>
      ) : <div id="chromePicker"></div>}
      */}
        </div>

        <div
          id="fullscreen_button"
          className="fullscreen-button fullscreen-open"
          title="Toggle fullscreen mode"
        ></div>

        <div>
          <button
            id="map"
            key={1}
            className={toggleActiveStyle(0)}
            onClick={() => {
              toggleActive(0);
            }}
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
        
        <div class="margin_map">
          <div class="marginInside_gps1">
            <button id="location1">
              <img
                src="./documents/Location2.png"
                alt="my image"
                onClick={(this.myfunction, this.moveTitleTo_X)}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </button>
          </div>

          <div class="marginInside_gps2">
            <button id="location2">
              <img
                src="./documents/Location.png"
                alt="my image"
                onClick={(this.myfunction, this.moveTitleTo_X)}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </button>
          </div>

          <div class="marginInside_gps3">
            <button id="location3">
              <img
                src="./documents/Location.png"
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
              position: "absolute",
              left: `${this.state.xoffset}%`,
              top: `${this.state.yoffset}%`,
              width: "10%",
              height: "10%",
            }}
          >
            <button id="location4">
              <img
                src="./documents/position.png"
                onClick={this.moveTitleTo_X}
                alt="my image3"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default V3DApp;
