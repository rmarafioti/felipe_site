"use client";

import { useState, useEffect } from "react";
import AccessMenu from "./AccessMenu";
import Navbar from "../layout/Navbar";

import localFont from "next/font/local";

import "../globalmenucontrols.css";

const openDyslexic = localFont({
  src: [
    {
      path: "../fonts/OpenDyslexic-Bold-Italic.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/OpenDyslexic-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/OpenDyslexic-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/OpenDyslexic-Bold-Italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
});

export default function AppWrapper({ children }) {
  const [accessibility, setAccessibility] = useState({
    isThemeDark: false,
    isImagesHidden: false,
    isImagesGreyScale: false,
    isRemoveFontStyle: false,
    isDyslexicFont: false,
    isCursorLarge: false,
    fontSizeAdjust: 1,
  });

  useEffect(() => {
    setAccessibility((prev) => ({
      ...prev,
      isThemeDark: window.matchMedia("(prefers-color-scheme: dark)").matches,
    }));
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      accessibility.isThemeDark ? "dark" : "light"
    );
  }, [accessibility.isThemeDark]);

  const adjustFontSize = (increment) => {
    setAccessibility((prev) => ({
      ...prev,
      fontSizeAdjust: Math.max(1, prev.fontSizeAdjust + increment),
    }));
  };

  const toggleSetting = (key) => {
    setAccessibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const resetAccessibility = () => {
    setAccessibility({
      isThemeDark: false,
      isImagesHidden: false,
      isImagesGreyScale: false,
      isRemoveFontStyle: false,
      isDyslexicFont: false,
      isCursorLarge: false,
      fontSizeAdjust: 1,
    });
  };

  return (
    <>
      <Navbar />
      <AccessMenu
        accessibility={accessibility}
        toggleSetting={toggleSetting}
        adjustFontSize={adjustFontSize}
        resetAccessibility={resetAccessibility}
      />
      <article
        className={`
          appContainer
          ${accessibility.isImagesHidden ? "hide-images" : ""}
          ${accessibility.isImagesGreyScale ? "grey-images" : ""}
          ${accessibility.isRemoveFontStyle ? "accessible-font" : ""}
          ${accessibility.isDyslexicFont ? openDyslexic.className : ""}
        `}
        style={{
          fontSize: `${1 * accessibility.fontSizeAdjust}rem`,
        }}
      >
        {children}
      </article>
    </>
  );
}
