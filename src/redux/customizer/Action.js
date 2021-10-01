import {
  THEME_COLOR,
  NAVBAR_BG,
  SIDEBAR_BG,
  DIRECTION,
  DARK_THEME,
  LANGUAGE,
} from "../constants";

export const setTheme = (payload) => {
  localStorage.setItem('THEME_COLOR', payload)
  return {
    type: THEME_COLOR,
    payload,
  };
};
export const setDarkMode = (payload) => {
  localStorage.setItem('THEME', payload)
  return {
    type: DARK_THEME,
    payload,
  };
};
export const setNavbarBg = (payload) => {
  localStorage.setItem('NAVBAR_BG', payload)
  return {
    type: NAVBAR_BG,
    payload,
  };
};

export const setSidebarBg = (payload) => {
  localStorage.setItem('SIDEBAR_BG', payload)
  return {
    type: SIDEBAR_BG,
    payload,
  };
};

export const setDir = (payload) => {
  localStorage.setItem('DIRECTION', payload)
  return {
    type: DIRECTION,
    payload,
  };
};

export const setLang = (payload) => {
  localStorage.setItem('LANGUAGE', payload)
  return {
    type: LANGUAGE,
    payload,
  };
};