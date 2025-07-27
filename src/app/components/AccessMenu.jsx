"use client";

import { useState, useEffect } from "react";
import { IoAccessibility } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import Toggle from "./Toggle";

import styles from "./styles/accessmenu.module.css";

export default function AccessMenu({
  accessibility,
  toggleSetting,
  adjustFontSize,
  resetAccessibility,
}) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    if (accessibility.isCursorLarge) {
      document.body.classList.add("large-cursor-arrow");

      // Function to dynamically switch cursors
      const handleMouseMove = (e) => {
        const target = e.target.closest(
          "button, a, input, select, textarea, [role='button']"
        );
        document.body.classList.toggle("large-cursor-pointer", target);
        document.body.classList.toggle("large-cursor-arrow", !target);
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.body.classList.remove(
          "large-cursor-arrow",
          "large-cursor-pointer"
        );
        document.removeEventListener("mousemove", handleMouseMove);
      };
    }

    return () => {
      document.body.classList.remove(
        "large-cursor-arrow",
        "large-cursor-pointer"
      );
    };
  }, [accessibility.isCursorLarge]);

  return (
    <>
      <IoAccessibility
        className={styles.accessIcon}
        role="button"
        onClick={() => setIsMenuVisible(true)}
      />

      {isMenuVisible && (
        <menu className={styles.accessMenu}>
          <div className={styles.headerSection}>
            <p className={styles.menuHeader}>Accessibility Menu</p>
            <button
              className={styles.closeButton}
              onClick={() => setIsMenuVisible(false)}
            >
              Close
            </button>
          </div>
          <section className={styles.controls}>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Theme</p>
              <div className={styles.controlItem}>
                <Toggle
                  onToggle={() => toggleSetting("isThemeDark")}
                  isToggled={accessibility.isThemeDark}
                />
              </div>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Remove Font Style</p>
              <div className={styles.controlItem}>
                <Toggle
                  onToggle={() => toggleSetting("isRemoveFontStyle")}
                  isToggled={accessibility.isRemoveFontStyle}
                />
              </div>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Add Dyslexic Font</p>
              <div className={styles.controlItem}>
                <Toggle
                  onToggle={() => toggleSetting("isDyslexicFont")}
                  isToggled={accessibility.isDyslexicFont}
                />
              </div>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Remove Image Color</p>
              <div className={styles.controlItem}>
                <Toggle
                  onToggle={() => toggleSetting("isImagesGreyScale")}
                  isToggled={accessibility.isImagesGreyScale}
                />
              </div>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Hide Images</p>
              <div className={styles.controlItem}>
                <Toggle
                  onToggle={() => toggleSetting("isImagesHidden")}
                  isToggled={accessibility.isImagesHidden}
                />
              </div>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Cursor Size</p>
              <div className={styles.controlItem}>
                <Toggle
                  onToggle={() => toggleSetting("isCursorLarge")}
                  isToggled={accessibility.isCursorLarge}
                />
              </div>
            </div>
            <div className={styles.controlSection}>
              <p className={styles.controlItem}>Font Size</p>
              <div className={styles.resizingContainer}>
                <FaMinus
                  className={styles.sizeItem}
                  role="button"
                  onClick={() => adjustFontSize(-0.1)}
                />
                <FaPlus
                  className={styles.sizeItem}
                  role="button"
                  onClick={() => {
                    adjustFontSize(0.1);
                  }}
                />
              </div>
            </div>
          </section>
          <button className={styles.resetButton} onClick={resetAccessibility}>
            Reset
          </button>
        </menu>
      )}
    </>
  );
}
