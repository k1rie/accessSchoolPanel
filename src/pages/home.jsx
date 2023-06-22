import NavBar from "../components/navBar.jsx";
import Alumno from "../components/alumno.jsx";
import homeStyles from "../styles/home.module.css";
import alumnoStyles from "../styles/alumno.module.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const container = useRef()

  const [darkClasses, setDarkClasses] = useState({
    darkSignal: "",
    darkCenter: "",
    darkDontSignal: "",
    darkContainer: "",
      darkContent: ""
  });
  useEffect(() => {
    if (localStorage.getItem("mode")) {
      if (localStorage.getItem("mode") === "dark") {
        darMode();
      } else {
        lightMode();
      }
    } else {
      localStorage.setItem("mode", "light");
    }
  }, []);

  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    fetch("https://accesschoolservice.onrender.com/getallalumnos")
      .then((Response) => {
        return Response.json();
      })
      .then((Response) => {
        setAlumnos(Response.alumnos);
        console.log(Response);
      });
  }, []);

  function darMode() {
    container.current.style.backgroundColor = "#313136";
    setDarkClasses({
      darkSignal: alumnoStyles.darkSignal,
      darkCenter: alumnoStyles.darkCenter,
      darkDontSignal: alumnoStyles.darkDontSignal,
      darkContainer: alumnoStyles.darkContainer,
      darkContent: alumnoStyles.darkContent
    });
  }

  function lightMode() {
    container.current.style.backgroundColor = "white";
    setDarkClasses({
      darkSignal: "",
      darkCenter: "",
      darkDontSignal: "",
      darkContainer: "",
      darkContent: ""
    });
  }

  return (
    <>
      <NavBar
        mode={(mode) => {
          if (localStorage.getItem("mode") === "dark") {
            darMode();
          } else {
            lightMode();
          }
        }}
      />
      <main ref={container} className={homeStyles.container}>
        {alumnos.map((e) => {
          return (
            <Alumno
            darkContainer = {darkClasses.darkContainer}
            darkContent = {darkClasses.darkContent}
              name={e.name}
              id={e.id}
              img={e.photo}
              semestre={e.semester}
              especialidad={e.specialty}
              clase={e.class}
              situacion={e.situation}
              inSchool={e.inSchool}
              darkSignal={darkClasses.darkSignal}
              darkCenter={darkClasses.darkCenter}
              darkDontSignal={darkClasses.darkDontSignal}
            />
          );
        })}
      </main>
    </>
  );
}

export default App;
