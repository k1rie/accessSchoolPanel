import { useRef, useEffect } from "react";
import alumnoStyles from "../styles/alumno.module.css";



export default function Alumnos(props){

    const signalE1 = useRef()
    const signalE2 = useRef()
    const signalE3 = useRef()

    const dontSignal = useRef()

    useEffect(()=>{
if(props.inSchool === 0){
    signalE1.current.style.display = "none"
    dontSignal.current.style.display = "block"
}else{
    signalE1.current.style.display = "grid"
    dontSignal.current.style.display = "none"
}
    },[])

    return(
        <div className={`${alumnoStyles.container} ${props.darkContainer}`}>
            <div className={`${alumnoStyles.content} ${props.darkContent}`}>
            <p>{`${props.name}:${props.id}`}</p>

            </div>
            <div className={`${alumnoStyles.content} ${props.darkContent}`}>
            <img className={alumnoStyles.alumnoImg} src={props.img}/>
            </div>
            <div className={`${alumnoStyles.content} ${props.darkContent}`}>
                <p>{`${props.semestre}/${props.especialidad}`}</p>
            </div>

            <div className={`${alumnoStyles.content} ${props.darkContent}`}>
                <p>{props.clase}</p>
            </div>
            <div className={`${alumnoStyles.content} ${props.darkContent}`}>
                <p>{props.situacion === "0"? 'Todo bien':props.situacion}</p>
            </div>
            <div className={`${alumnoStyles.content} ${props.darkContent}`}>

<div ref={signalE1} className={alumnoStyles.signalGroup}>
               <div ref={signalE2} className={`${alumnoStyles.signal} ${props.darkSignal}`}> 
               </div>
               <div ref={signalE3} className={`${alumnoStyles.center} ${props.darkCenter}`}></div>
</div>


<div ref={dontSignal} className={`${alumnoStyles.dontSignal} ${props.darkDontSignal}`}>

</div>

            </div>
         </div>
    )
}