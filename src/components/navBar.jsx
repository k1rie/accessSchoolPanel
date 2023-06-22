import { useEffect, useRef, useState } from "react";
import navBarStyles from "../styles/navBar.module.css";
import buttonStyles from "../styles/button.module.css";
import userIcon from "../assets/userIcon.svg";
import usersIcon from "../assets/usersIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import Button from "../components/button.jsx";
import moonIcon from "../assets/moonIcon.svg";
import sunIcon from "../assets/sunIcon.svg";

export default function NavBar(props) {

 
  useEffect(() => {
if(localStorage.getItem("mode")){
  if (localStorage.getItem('mode') === "light") {
    lightModeChanges()
        } else {
    darkModeChanges()    
    }
}

  }, []);

  const [mode, setMode] = useState("light");
  const modesContainer = useRef();
  const modesButton = useRef();
  const searchIconRef = useRef();
  const searchContainerRef = useRef();
  const searchInputRef = useRef();
  const [classModeButton, setClassModeButton] = useState("none");
  const [classDarkMode, setClassDarkMode] = useState("none");
  const [classModeClick, setClassModeClick] = useState("none");

  function darkModeChanges() {
    setMode('light')
    props.mode(mode);
    setClassModeButton(buttonStyles.darkModeButton);
    setClassDarkMode(buttonStyles.darkMode);
    setClassModeClick(buttonStyles.darkModeClick);
    searchIconRef.current.style.filter =
      "invert(97%) sepia(6%) saturate(7%) hue-rotate(294deg) brightness(108%) contrast(92%)";
    searchContainerRef.current.style.backgroundColor = "#313136";
    searchInputRef.current.style.backgroundColor = "#313136";
    searchInputRef.current.style.color = "white";
    modesButton.current.style.backgroundColor = "#313136";
    modesContainer.current.style.transform = "translateX(-50px)";
  }

  function lightModeChanges() {
    setMode('dark')
    props.mode(mode);
    setClassModeButton("none");
    setClassDarkMode("none");
    setClassModeClick("none");
    searchIconRef.current.style.filter = "none";
    searchContainerRef.current.style.backgroundColor = "#F5F5F5";
    searchInputRef.current.style.backgroundColor = "#F5F5F5";
    searchInputRef.current.style.color = "black";
    modesButton.current.style.backgroundColor = "#F5F5F5";
    modesContainer.current.style.transform = "translateX(0px)";
  }

  return (
    <div className={navBarStyles.container}>
      <img className={navBarStyles.icon} src={userIcon} />
      <img className={navBarStyles.icon} src={usersIcon} />
      <div ref={searchContainerRef} className={navBarStyles.searchContainer}>
        <img
          ref={searchIconRef}
          className={navBarStyles.searchIcon}
          src={searchIcon}
        />
        <input
          ref={searchInputRef}
          type="text"
          className={navBarStyles.searchInput}
        />
      </div>
      <div></div>
      <Button
        darkModeButton={classModeButton}
        darkMode={classDarkMode}
        darkModeClick={classModeClick}
        text="Añadir alumno"
      />
      <Button
        darkModeButton={classModeButton}
        darkMode={classDarkMode}
        darkModeClick={classModeClick}
        text="Llamado"
      />
      <Button
        darkModeButton={classModeButton}
        darkMode={classDarkMode}
        darkModeClick={classModeClick}
        text="Generar reporte"
      />
      <button
        ref={modesButton}
        className={navBarStyles.modesButton}
        onClick={(e) => {
          if (localStorage.getItem('mode') === "light") {
            localStorage.setItem("mode",'dark');
            darkModeChanges();
          } else {
            localStorage.setItem("mode",'light');
            lightModeChanges();
          }
        }}
      >
        <div className={navBarStyles.modesContainer} ref={modesContainer}>
          <div className={navBarStyles.lightCotainer}>
            <img className={navBarStyles.moonIcon} src={sunIcon} />
          </div>
          <div className={navBarStyles.darkContainer}>
            <img className={navBarStyles.moonIcon} src={moonIcon} />
          </div>
        </div>
      </button>
    </div>
  );
}
