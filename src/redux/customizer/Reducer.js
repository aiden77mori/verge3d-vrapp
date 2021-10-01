import {
  THEME_COLOR,
  NAVBAR_BG,
  SIDEBAR_BG,
  DIRECTION,
  DARK_THEME,
  LANGUAGE,
} from "../constants";

const activeDir = localStorage.getItem('DIRECTION'),
activeNavbarBg= localStorage.getItem('NAVBAR_BG'),
activeSidebarBg= localStorage.getItem('SIDEBAR_BG'),
activeMode= localStorage.getItem('THEME'),
activeTheme= localStorage.getItem('THEME_COLOR'),
activeLang= localStorage.getItem('LANGUAGE');

const INIT_STATE = {
  activeDir: activeDir? activeDir:"ltr",
  activeNavbarBg: activeNavbarBg ? activeNavbarBg: "#0b70fb", // This can be any color,
  activeSidebarBg: activeSidebarBg ? activeSidebarBg : "#ffffff", // This can be any color
  activeMode: activeMode ? activeMode : "dark", // This can be light or dark
  activeTheme: activeTheme ? activeTheme : "BLUE_THEME", // BLUE_THEME, GREEN_THEME, RED_THEME, BLACK_THEME, PURPLE_THEME, INDIGO_THEME
  SidebarWidth: 240,
  activeLang: activeLang ? activeLang : "en",
};

const CustomizerReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case NAVBAR_BG:
      return {
        ...state,
        activeNavbarBg: action.payload,
      };
    case DARK_THEME:
      return {
        ...state,
        activeMode: action.payload,
      };
    case SIDEBAR_BG:
      return {
        ...state,
        activeSidebarBg: action.payload,
      };
    case THEME_COLOR:
      return {
        ...state,
        activeTheme: action.payload,
      };
    case DIRECTION:
      return {
        ...state,
        activeDir: action.payload,
      };

    case LANGUAGE:
      return {
        ...state,
        activeLang: action.payload,
      };

    default:
      return state;
  }
};

export default CustomizerReducer;
